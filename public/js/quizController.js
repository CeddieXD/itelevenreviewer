// quizController.js
(function() {
  function createQuizController(data, subjectName, refs) {
    const { slug } = Utils;
    const {
      quizEl, intro, actions, result,
      timerEl, bar, progressPill, modeLabel,
      startBtn, shuffleBtn, resetBtn, resetBtn2, submitBtn,
      reviewWrongBtn, reviewUnansweredBtn, reviewCorrectBtn,
      showAllBtn, exportBtn
    } = refs;

    const keyAnswers = `it211_answers_${slug(subjectName)}`;
    const keyEndAt = `it211_endAt_${slug(subjectName)}`;

    let items = (data.items || []).map(x => ({...x}));
    let answers = JSON.parse(localStorage.getItem(keyAnswers) || '{}');
    let started = false, finished = false, filterMode = "all";
    const DURATION = data.durationSeconds ?? 1200;

    let endAt = Number(localStorage.getItem(keyEndAt)) || 0;
    let tickInt = null;

    function startTimer(){
      if(!endAt){ endAt = Date.now() + DURATION*1000; localStorage.setItem(keyEndAt, String(endAt)); }
      tick(); clearInterval(tickInt); tickInt = setInterval(tick, 1000);
    }
    function formatSec(s){ const m=Math.floor(s/60), r=s%60; return `${String(m).padStart(2,'0')}:${String(r).padStart(2,'0')}` }
    function tick(){
      const remain = Math.max(0, Math.floor((endAt - Date.now())/1000));
      timerEl.textContent = formatSec(remain);
      if(remain<=0){ clearInterval(tickInt); if(!finished) handleSubmit(); }
    }

    function updateProgress(){
      const answered = items.filter(it=>answers[it.id]!=null).length;
      progressPill.textContent = `${answered} / ${items.length} answered`;
      const pct = Math.round(100 * (items.length ? answered / items.length : 0));
      bar.style.width = pct + '%';
    }

    function render(){
      quizEl.innerHTML = '';

      const list = !finished ? items : (()=>{ // filter after finish
        switch(filterMode){
          case 'wrong': return items.filter(it => answers[it.id] != null && answers[it.id] !== it.answer);
          case 'unanswered': return items.filter(it => answers[it.id] == null);
          case 'correct': return items.filter(it => answers[it.id] === it.answer);
          default: return items;
        }
      })();

      list.forEach(it=>{
        const card = document.createElement('article');
        card.className = 'card pad';

        const num = items.findIndex(x=>x.id===it.id) + 1;
        const head = document.createElement('div');
        head.className = 'row';
        head.style.justifyContent = 'space-between';

        let statusHTML = '';
        if (finished) {
          if (answers[it.id] == null) {
            statusHTML = `<span class="pill" title="Unanswered">⏳ Unanswered</span>`;
          } else if (answers[it.id] === it.answer) {
            statusHTML = `<span class="pill" title="Correct">✅ Correct</span>`;
          } else {
            statusHTML = `<span class="pill" title="Wrong">❌ Wrong</span>`;
          }
        }

        head.innerHTML = `<div><div class="pill">Q${num} • <span class="muted">${it.topic}</span></div></div><div>${statusHTML}</div>`;
        card.appendChild(head);

        const qt = document.createElement('p');
        qt.className = 'qtext';
        qt.textContent = it.q;
        card.appendChild(qt);

        it.opts.forEach((opt, oi)=>{
          const id = `q${it.id}_${oi}`;
          const wrap = document.createElement('label');
          wrap.className = 'opt';
          if(finished){
            if(oi===it.answer) wrap.classList.add('correct');
            if(answers[it.id]===oi && oi!==it.answer) wrap.classList.add('wrong');
          }
          wrap.innerHTML = `
            <input type="radio" name="q${it.id}" id="${id}" value="${oi}">
            <div><strong>${String.fromCharCode(97+oi)})</strong> ${opt}</div>
          `;
          const input = wrap.querySelector('input');
          input.checked = answers[it.id]===oi;
          input.disabled = !!finished;
          input.addEventListener('change', ()=>{
            answers[it.id] = oi;
            localStorage.setItem(keyAnswers, JSON.stringify(answers));
            updateProgress();
          });
          card.appendChild(wrap);
        });

        quizEl.appendChild(card);
      });
      updateProgress();
    }

    // action handlers
    function handleStart(){
      if(started) return; started = true;
      startBtn.disabled = true; resetBtn.disabled = false, resetBtn2.disabled = false;
      actions.style.display = 'block';
      shuffleBtn.style.display = "none";
      startTimer();
      render();
      window.scrollTo({top:intro.offsetTop, behavior:'smooth'});
    }

function handleShuffle() {
  if (!items || !Array.isArray(items)) return;

  // Fisher-Yates Shuffle
  for (let i = items.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [items[i], items[j]] = [items[j], items[i]];
  }

  // Instead of rendering, show a torch/indicator
  shuffleBtn.innerHTML = "Questions Shuffled!";
  shuffleBtn.disabled = true;

  // Optional: flash the torch effect
  shuffleBtn.style.transition = "all 0.3s ease";
  shuffleBtn.style.background = "var(--accent)";
  shuffleBtn.style.color = "#fff";
  setTimeout(() => {
    shuffleBtn.style.background = "";
    shuffleBtn.style.color = "";
  }, 800);
}


    // ---- inside handleReset() ----   
function handleReset(){
  if(!confirm('Reset answers and timer?')) return;

  // clear answers and timer
  answers = {};
  localStorage.removeItem(keyAnswers);
  endAt = 0; 
  localStorage.removeItem(keyEndAt);
  started = false; 
  finished = false; 
  filterMode = 'all';

  // reset UI controls
  startBtn.disabled = false; 
  resetBtn.disabled = true;
  resetBtn2.disabled = true;
  if(reviewWrongBtn) reviewWrongBtn.disabled = true;
  if(reviewUnansweredBtn) reviewUnansweredBtn.disabled = true;
  if(reviewCorrectBtn) reviewCorrectBtn.disabled = true;
  if(showAllBtn) showAllBtn.style.display = 'none';
  actions.style.display='none';
  result.textContent = '';
  modeLabel.textContent = 'All Questions';
  timerEl.textContent = formatSec(DURATION);
  bar.style.width = '0%';
  progressPill.textContent = `0 / ${items.length} answered`;

  showRecords(subjectName);

  // stop the timer
  if(tickInt) clearInterval(tickInt);

  window.scrollTo({top:0,behavior:'smooth'});
}


    // ---- inside handleSubmit() ----
function handleSubmit(){
  if (finished) return;  
  finished = true;
  submitBtn.disabled = true; // disable button after submit
  const total = items.length;
  let correct = 0; const blanks=[];
  items.forEach(it=>{
    if(answers[it.id]==null) blanks.push(it.id);
    if(answers[it.id]===it.answer) correct++;
  });
  const wrongCount = total - correct - blanks.length;
  const pct = Math.round(100*correct/(total||1));
  result.innerHTML = `<strong>Score:</strong> ${correct}/${total} (${pct}%)${blanks.length?` • Unanswered: ${blanks.length}`:''}`;

  // save result into history
  const historyKey = `it211_history_${slug(subjectName)}`;
  const history = JSON.parse(localStorage.getItem(historyKey) || "[]");
  history.unshift({
    subject: subjectName,
    score: correct,
    total,
    unanswered: blanks.length,
    wrong: wrongCount,
    percent: pct,
    at: new Date().toISOString()
  });
  localStorage.setItem(historyKey, JSON.stringify(history));

  if(reviewWrongBtn) reviewWrongBtn.disabled = wrongCount === 0;
  if(reviewUnansweredBtn) reviewUnansweredBtn.disabled = blanks.length === 0;
  if(reviewCorrectBtn) reviewCorrectBtn.disabled = correct === 0;

  if (wrongCount === 0 && blanks.length === 0) {
    modeLabel.textContent = 'All Correct 🎉';
  }

  render();
  window.scrollTo({top:actions.offsetTop, behavior:'smooth'});
}


    function setFilter(mode){
      if (!finished && mode !== 'all') return;
      filterMode = mode || 'all';
      render();
      if(showAllBtn) showAllBtn.style.display = (filterMode === 'all') ? 'none' : 'inline-block';
      switch(filterMode){
        case 'wrong': modeLabel.textContent = 'Review: Incorrect Only'; break;
        case 'unanswered': modeLabel.textContent = 'Review: Unanswered Only'; break;
        case 'correct': modeLabel.textContent = 'Review: Correct Only'; break;
        default: modeLabel.textContent = 'All Questions';
      }
      window.scrollTo({top:intro.offsetTop, behavior:'smooth'});
    }

    function exportJSON(){
      const payload = {
        title: data.title,
        subject: subjectName,
        submittedAt: new Date().toISOString(),
        score: items.reduce((acc,it)=>acc+(answers[it.id]===it.answer?1:0),0),
        total: items.length,
        answers,
        items
      };
      const blob = new Blob([JSON.stringify(payload,null,2)], {type:'application/json'});
      const url = URL.createObjectURL(blob);
      const a = document.createElement('a');
      a.href = url; a.download = `${slug(subjectName)}-quiz-results.json`; a.click();
      URL.revokeObjectURL(url);
    }

    // dedicated review handlers so removeEventListener works
    function handleReviewWrong(){ setFilter('wrong'); }
    function handleReviewUnanswered(){ setFilter('unanswered'); }
    function handleReviewCorrect(){ setFilter('correct'); }
    function handleShowAll(){ setFilter('all'); }

    // attach listeners
    startBtn.addEventListener('click', handleStart);
    shuffleBtn.addEventListener('click', handleShuffle);
    resetBtn.addEventListener('click', handleReset);
    resetBtn2.addEventListener('click', handleReset);
    submitBtn.addEventListener('click', handleSubmit);
    if (reviewWrongBtn) reviewWrongBtn.addEventListener('click', handleReviewWrong);
    if (reviewUnansweredBtn) reviewUnansweredBtn.addEventListener('click', handleReviewUnanswered);
    if (reviewCorrectBtn) reviewCorrectBtn.addEventListener('click', handleReviewCorrect);
    if (showAllBtn) showAllBtn.addEventListener('click', handleShowAll);
    if(exportBtn) exportBtn.addEventListener('click', exportJSON);

    // initial render + resume
    // render();
    if(endAt){ started=true; startBtn.disabled=true; resetBtn.disabled=false; resetBtn2.disabled=false; actions.style.display='block'; startTimer(); render(); }
    return {
      cleanup(){
        startBtn.removeEventListener('click', handleStart);
        shuffleBtn.removeEventListener('click', handleShuffle);
        shuffleBtn.style.display = "block";
        resetBtn.removeEventListener('click', handleReset);
        resetBtn.disabled = true;
        resetBtn2.removeEventListener('click', handleReset);
        resetBtn2.disabled = true;
        submitBtn.removeEventListener('click', handleSubmit);
        submitBtn.disabled = false;
        shuffleBtn.textContent = "Shuffle Questions";
        shuffleBtn.disabled = false;
        if (reviewWrongBtn) reviewWrongBtn.removeEventListener('click', handleReviewWrong);
        if (reviewUnansweredBtn) reviewUnansweredBtn.removeEventListener('click', handleReviewUnanswered);
        if (reviewCorrectBtn) reviewCorrectBtn.removeEventListener('click', handleReviewCorrect);
        if (showAllBtn) showAllBtn.removeEventListener('click', handleShowAll);
        if(exportBtn) exportBtn.removeEventListener('click', exportJSON);
        if(tickInt) clearInterval(tickInt);
      },
      isStarted(){ return !!started; },
      isFinished(){ return !!finished; }
    };
  }

  // Show records
function showRecords(subjectName) {
  if (!subjectName) return; // safeguard

  const { slug } = Utils;
  const historyKey = `it211_history_${slug(subjectName)}`;
  const history = JSON.parse(localStorage.getItem(historyKey) || "[]");

  const listEl = document.getElementById("recordsList");
  listEl.innerHTML = "";

if (history.length === 0) {
  listEl.innerHTML = `
    <div class="no-records">
      <p>No records yet for <strong>${subjectName}</strong> 🕯️</p>
      <p>Take the quiz to start tracking your scores and see your progress here!</p>
    </div>
  `;
  document.getElementById("quizPage").style.display = "none";
  document.getElementById("recordsPage").style.display = "block";
  return;
}


  // Create table
  const table = document.createElement("table");
  table.className = "records-table";
  table.innerHTML = `
    <thead>
      <tr>
        <th>Date</th>
        <th>Score</th>
        <th>Percent</th>
        <th>Wrong</th>
        <th>Unanswered</th>
      </tr>
    </thead>
    <tbody></tbody>
  `;

  const tbody = table.querySelector("tbody");

  history.forEach(rec => {
    const d = new Date(rec.at);
    const row = document.createElement("tr");
    row.innerHTML = `
      <td>${d.toLocaleString()}</td>
      <td>${rec.score}/${rec.total}</td>
      <td>${rec.percent}%</td>
      <td>${rec.wrong}</td>
      <td>${rec.unanswered}</td>
    `;
    tbody.appendChild(row);
  });

  listEl.appendChild(table);

  // Show the records page
  document.getElementById("quizPage").style.display = "none";
  document.getElementById("recordsPage").style.display = "block";
}

  window.QuizController = { createQuizController };
})();