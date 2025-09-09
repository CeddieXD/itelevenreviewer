// app.js
(function() {
  const { $$, loadScript, slug } = Utils;
  const refs = DomRefs;
  const subjectFiles = Subjects;
  const { createQuizController } = QuizController;
  const recordsPage = document.getElementById('recordsPage');

  let currentController = null;

  async function openQuiz(subject, meta = {}) {
    const cfg = subjectFiles[subject];
    if (!cfg) return alert(`No quiz for ${subject}`);

    try { await loadScript(cfg.file); }
    catch { return alert(`Failed to load ${cfg.file}`); }

    const quizObj = window[cfg.global];
    if (!quizObj) return alert(`Quiz file did not expose ${cfg.global}`);

    refs.dashboard.style.display = 'none';
    refs.dashHeader.style.display = 'none';
    refs.quizPage.style.display = 'flex';
    refs.quizHeader.style.display = 'block';
    window.scrollTo({ top: 0, behavior: 'instant' });

    refs.quizTitle.textContent = 'Quiz – ' + subject;
    refs.subQuizTitle.textContent =
      `${meta.itemsCount || quizObj.items.length} items • ~${meta.timeMinutes || Math.round((quizObj.durationSeconds || 1200)/60)} minutes`;
    refs.anotherInfo.textContent = quizObj.description ?? `Covers: ${subject}.`;

    if (currentController) currentController.cleanup();
    currentController = createQuizController(quizObj, subject, refs);
  }

  // Back to dashboard
window.backToDashboard = function backToDashboard() {
  if (
    currentController &&
    typeof currentController.isStarted === 'function' &&
    typeof currentController.isFinished === 'function'
  ) {
    if (currentController.isStarted() && !currentController.isFinished()) {
      const ok = confirm('Quiz in progress — leaving will stop the timer. Do you want to leave?');
      if (!ok) return;
    }
  }

  // Cleanup controller & timer
  if (currentController && typeof currentController.cleanup === 'function') {
    currentController.cleanup();
  }
  currentController = null;

  // Reset quiz section
  if (typeof window.tickInt !== 'undefined' && tickInt) {
    clearInterval(tickInt);
    tickInt = null;
  }
  refs.quizEl.innerHTML = '';
  result.textContent = 'The result will appear here.';
  refs.timerEl.textContent = '20:00';
  bar.style.width = '0%';
  progressPill.textContent = `0 / 0 answered`;
  modeLabel.textContent = 'All Questions';
  actions.style.display = 'none';

  // Hide all pages except dashboard
  dashboard.style.display = 'flex';
  dashHeader.style.display = 'block';
  quizPage.style.display = 'none';
  quizHeader.style.display = 'none';
  recordsPage.style.display = 'none';

  // Reset records page content
  const recordsList = document.getElementById('recordsList');
  if (recordsList) recordsList.innerHTML = '<p>No records yet.</p>';

  window.scrollTo({ top: 0, behavior: 'smooth' });
};

// function clearRecords(){
//   if(confirm("Clear all saved quiz records?")){
//     // Remove all quiz histories (they usually start with "it211_history_")
//     for (let key in localStorage) {
//       if (key.startsWith("it211_history_")) {
//         localStorage.removeItem(key);
//       }
//     }

//     // Update the records list in the UI
//     const listEl = document.getElementById("recordsList");
//     if (listEl){
//       listEl.innerHTML = "<p>No records yet.</p>";
//     }
//   }
// }


  $$('.subject-card').forEach(card => {
    card.addEventListener('click', () => {
      openQuiz(card.dataset.subject, {
        itemsCount: card.dataset.items || '',
        timeMinutes: card.dataset.time || ''
      });
    });
  });

  window.openQuiz = openQuiz;
})();
