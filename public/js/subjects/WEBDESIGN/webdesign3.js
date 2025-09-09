window.webQuiz3 = {
  title: "IT221 – Lesson 3: HTML Embedded Elements",
  durationSeconds: 1200,
  description: "Covers: External Resources, File Paths, Images, Video, Audio, Lists, Links",
  items: [
    // --- External Resources & File Paths ---
    {"id":1,"q":"Which attribute is used in the img tag to specify the image source?","opts":["src","href","alt","path"],"answer":0,"topic":"Image"},
    {"id":2,"q":"Which path type starts from the root folder or includes the full URL?","opts":["Relative Path","Absolute Path","Short Path","Parent Path"],"answer":1,"topic":"File Paths"},
    {"id":3,"q":"Which file path is an example of a relative path?","opts":["https://example.com/video.mp4","C:/files/video.mp4","./media/video.mp4","G:/Documents/video.mp4"],"answer":2,"topic":"File Paths"},
    {"id":4,"q":"Which file format is NOT a video format?","opts":[".mp4",".avi",".wav",".wmv"],"answer":2,"topic":"Media Formats"},
    {"id":5,"q":"Where should external resources like images or videos be stored relative to the HTML file?","opts":["Same folder or subfolder","Only on desktop","Random drive location","Anywhere without folder structure"],"answer":0,"topic":"File Organization"},

    // --- Images ---
    {"id":6,"q":"Which attribute in img provides alternative text when the image cannot be displayed?","opts":["src","alt","title","name"],"answer":1,"topic":"Image"},
    {"id":7,"q":"Which attributes set the size of an image in HTML?","opts":["length & width","size & scale","width & height","style & measure"],"answer":2,"topic":"Image"},
    {"id":8,"q":"Which tag is used to display an image in HTML?","opts":["picture","img","image","src"],"answer":1,"topic":"Image"},

    // --- Video ---
    {"id":9,"q":"Which HTML element is used to embed a video?","opts":["media","movie","video","vid"],"answer":2,"topic":"Video"},
    {"id":10,"q":"Which attribute adds play, pause, and volume controls to video?","opts":["controls","autoplay","display","show"],"answer":0,"topic":"Video"},
    {"id":11,"q":"Which tag is used inside video to specify alternative video files?","opts":["file","src","source","path"],"answer":2,"topic":"Video"},
    {"id":12,"q":"What happens if a browser does not support the video tag?","opts":["The video auto-downloads","The page crashes","Fallback text is shown","Nothing happens"],"answer":2,"topic":"Video"},

    // --- Audio ---
    {"id":13,"q":"Which HTML element is used to embed an audio file?","opts":["music","sound","audio","mp3"],"answer":2,"topic":"Audio"},
    {"id":14,"q":"Which attribute adds play, pause, and volume controls to audio?","opts":["control","controls","autoplay","settings"],"answer":1,"topic":"Audio"},
    {"id":15,"q":"Which tag is used inside audio to specify alternative audio files?","opts":["track","source","file","alt"],"answer":1,"topic":"Audio"},
    {"id":16,"q":"Which file format is commonly used for audio files?","opts":[".mp3",".mp4",".avi",".wmv"],"answer":0,"topic":"Audio"},

    // --- Lists ---
    {"id":17,"q":"Which tag defines an unordered list?","opts":["ul","ol","li","list"],"answer":0,"topic":"List"},
    {"id":18,"q":"Which tag defines an ordered list?","opts":["ul","ol","li","list"],"answer":1,"topic":"List"},
    {"id":19,"q":"Which tag defines a list item?","opts":["li","item","dt","entry"],"answer":0,"topic":"List"},
    {"id":20,"q":"What is the default bullet style of ul?","opts":["circle","disc","square","none"],"answer":1,"topic":"List"},
    {"id":21,"q":"Which type attribute for ol displays items as uppercase Roman numerals?","opts":["type='i'","type='I'","type='A'","type='1'"],"answer":1,"topic":"List"},
    {"id":22,"q":"Which type attribute for ol displays items as lowercase letters?","opts":["type='a'","type='A'","type='i'","type='I'"],"answer":0,"topic":"List"},
    {"id":23,"q":"Which tag defines a description list?","opts":["dl","dt","dd","list"],"answer":0,"topic":"List"},
    {"id":24,"q":"Which tag defines the term (name) in a description list?","opts":["dl","dt","dd","li"],"answer":1,"topic":"List"},
    {"id":25,"q":"Which tag defines the description in a description list?","opts":["dl","dt","dd","li"],"answer":2,"topic":"List"},

    // --- Links ---
    {"id":26,"q":"Which HTML element is used to create a hyperlink?","opts":["link","href","a","url"],"answer":2,"topic":"Link"},
    {"id":27,"q":"Which attribute specifies the URL of the page the link goes to?","opts":["src","alt","href","target"],"answer":2,"topic":"Link"},
    {"id":28,"q":"Which target attribute value opens a link in a new window or tab?","opts":["_self","_blank","_parent","_top"],"answer":1,"topic":"Link"},
    {"id":29,"q":"What is the default color of an unvisited hyperlink in most browsers?","opts":["Blue","Purple","Red","Green"],"answer":0,"topic":"Link"},
    {"id":30,"q":"What is the default color of a visited hyperlink in most browsers?","opts":["Blue","Purple","Red","Gray"],"answer":1,"topic":"Link"},
    {"id":31,"q":"What is the default color of an active hyperlink in most browsers?","opts":["Blue","Purple","Red","Green"],"answer":2,"topic":"Link"},
    {"id":32,"q":"Which attribute defines where to open the linked document?","opts":["target","href","src","alt"],"answer":0,"topic":"Link"},
    {"id":33,"q":"Which example shows a relative URL in an anchor tag?","opts":["a href='about.html' About","a href='https://example.com' Example","a href='C:/files/home.html' Home","a href='G:/docs/file.html' Docs"],"answer":0,"topic":"Link"},
    {"id":34,"q":"Which example shows an absolute URL in an anchor tag?","opts":["a href='about.html' About","a href='https://example.com' Example","a href='./files/page.html' Page","a href='../folder/contact.html' Contact"],"answer":1,"topic":"Link"},
    {"id":35,"q":"Which tag is used to make an email link?","opts":["mail","email","a href='mailto:...'","link email"],"answer":2,"topic":"Link"},

    // --- Mixed & Application ---
    {"id":36,"q":"Which combination correctly embeds an image that links to another page?","opts":["img href='page.html' src='pic.jpg'","a href='page.html' img src='pic.jpg' /a","image src='pic.jpg' link='page.html'","link img src='pic.jpg' /link"],"answer":1,"topic":"Image+Link"},
    {"id":37,"q":"Which multimedia element requires both source and controls attribute for best practice?","opts":["img","video","a","dl"],"answer":1,"topic":"Video"},
    {"id":38,"q":"Which tag is used to define a clickable hyperlink to an external resource?","opts":["url","link","a","src"],"answer":2,"topic":"Link"},
    {"id":39,"q":"Which attribute combination is required in img for accessibility and fallback?","opts":["src & alt","href & title","path & style","src & target"],"answer":0,"topic":"Image"},
    {"id":40,"q":"Which path example shows an absolute web URL?","opts":["./images/pic.jpg","../folder/index.html","https://www.example.com/file.html","media/file.mp4"],"answer":2,"topic":"File Paths"}
  ]
};
