window.webQuiz = {
  title: "IT221 – Lesson 1: Internet Essentials",
  durationSeconds: 1200,
  description: "Covers: History of Internet, Internet Basics, Components, Services, How the Web Works, Web Design vs. Programming, HTML Tools",
  items: [
    // --- History of Internet ---
    {"id":1,"q":"In what year was ARPA (now DARPA) established?","opts":["1958","1962","1969","1983"],"answer":0,"topic":"History"},
    {"id":2,"q":"Who suggested the connection of computer networks to withstand nuclear attacks?","opts":["Vint Cerf","J.C.R. Licklider","Tim Berners-Lee","Bill Gates"],"answer":1,"topic":"History"},
    {"id":3,"q":"What year marked the development of IMPs, an early form of routers?","opts":["1962","1965","1969","1981"],"answer":2,"topic":"History"},
    {"id":4,"q":"Which protocol suite became standard for ARPAnet in 1983?","opts":["HTTP","FTP","TCP/IP","SMTP"],"answer":2,"topic":"History"},
    {"id":5,"q":"Who is regarded as the father of the World Wide Web?","opts":["J.C.R. Licklider","Vint Cerf","Tim Berners-Lee","Marc Andreessen"],"answer":2,"topic":"History"},
    {"id":6,"q":"What was the name of the first website created in 1990?","opts":["www.firstsite.com","info.cern.ch","nasa.gov","netscape.com"],"answer":1,"topic":"History"},
    {"id":7,"q":"What was the first widely used web browser released in 1993?","opts":["Netscape","Mosaic","Internet Explorer","Opera"],"answer":1,"topic":"History"},
    {"id":8,"q":"In what year did Facebook launch?","opts":["2000","2004","2010","2022"],"answer":1,"topic":"History"},
    {"id":9,"q":"How many people were online worldwide in 2010?","opts":["300 million","1.96 billion","5 billion","500 million"],"answer":1,"topic":"History"},
    {"id":10,"q":"What technology trend is highlighted as 'Present' in the module?","opts":["Artificial Intelligence","Blockchain","Internet of Things","Quantum Computing"],"answer":2,"topic":"History"},

    // --- Internet Basics ---
    {"id":11,"q":"What does the term 'Internet' stand for?","opts":["International Network","Interconnected Networks","Internal Network","Interactive Net"],"answer":1,"topic":"Basics"},
    {"id":12,"q":"Which protocol is primarily used for communication over the internet?","opts":["FTP","SMTP","TCP/IP","WAP"],"answer":2,"topic":"Basics"},
    {"id":13,"q":"Which key feature of the internet ensures no single entity has full control?","opts":["Centralization","Encryption","Decentralization","Virtualization"],"answer":2,"topic":"Basics"},
    {"id":14,"q":"Which of the following is NOT a common reason people use the internet?","opts":["Entertainment","Shopping","Cooking","Online Learning"],"answer":2,"topic":"Basics"},
    {"id":15,"q":"Which factor is NOT important in choosing an ISP?","opts":["Availability","Speed","Cost","Color of the logo"],"answer":3,"topic":"Basics"},

    // --- Components of Internet ---
    {"id":16,"q":"Which device or program stores and delivers web pages?","opts":["Web Browser","Web Server","FTP Client","ISP"],"answer":1,"topic":"Components"},
    {"id":17,"q":"Which program retrieves and displays content from the web?","opts":["Web Server","Web Browser","Router","DNS"],"answer":1,"topic":"Components"},
    {"id":18,"q":"Which of the following best describes a web client?","opts":["Requests services from a web server","Stores website data","Delivers web pages","Runs on background as daemon"],"answer":0,"topic":"Components"},
    {"id":19,"q":"Which machine is generally more powerful and supports multi-user logins?","opts":["Client Computer","Web Server","ISP Router","Dial-up Modem"],"answer":1,"topic":"Components"},
    {"id":20,"q":"Which of these stores cookies from different websites?","opts":["Web Server","ISP","Web Browser","DNS"],"answer":2,"topic":"Components"},

    // --- Types of Internet Service ---
    {"id":21,"q":"Which type of internet access uses a modem and phone line?","opts":["DSL","Dial-up","Cable","Satellite"],"answer":1,"topic":"Service"},
    {"id":22,"q":"Which type of service is considered high-speed and faster than dial-up?","opts":["ISDN","DSL","Broadband","Cellular"],"answer":2,"topic":"Service"},
    {"id":23,"q":"Which internet service uses a telephone line network for data transmission?","opts":["Cable","Satellite","DSL","Dial-up"],"answer":2,"topic":"Service"},
    {"id":24,"q":"Which internet service provides very fast access using a cable modem?","opts":["DSL","Cable","Satellite","ISDN"],"answer":1,"topic":"Service"},
    {"id":25,"q":"Which service transmits data through Earth’s orbit?","opts":["Cable","Satellite","DSL","Cellular"],"answer":1,"topic":"Service"},
    {"id":26,"q":"Which service is a circuit-switched telephone system for voice and data?","opts":["DSL","ISDN","Cellular","Dial-up"],"answer":1,"topic":"Service"},
    {"id":27,"q":"Which internet service provides wireless access through mobile networks?","opts":["ISDN","Cellular","Dial-up","Broadband"],"answer":1,"topic":"Service"},

    // --- How the Web Works ---
    {"id":28,"q":"What is the correct order of web browsing?","opts":["Server → Browser → ISP","Browser → ISP → Server","ISP → Server → Browser","Browser → DNS → Router"],"answer":1,"topic":"Web"},
    {"id":29,"q":"What does URL stand for?","opts":["Uniform Routing Link","Uniform Resource Locator","Universal Remote Locator","User Reference Line"],"answer":1,"topic":"Web"},
    {"id":30,"q":"What protocol is used to transfer web pages?","opts":["FTP","HTTP","TCP","DNS"],"answer":1,"topic":"Web"},
    {"id":31,"q":"Which part of URL syntax refers to a file on your local computer?","opts":["http://","ftp://","file://","news://"],"answer":2,"topic":"Web"},
    {"id":32,"q":"What type of connection is HTTP considered?","opts":["Persistent","Stateless","Encrypted","Streaming"],"answer":1,"topic":"Web"},
    {"id":33,"q":"Which protocol allows logging into another computer remotely?","opts":["FTP","Telnet","SMTP","WAP"],"answer":1,"topic":"Web"},

    // --- Web Design & Programming ---
    {"id":34,"q":"Which term refers to the visual and usability aspects of a website?","opts":["Web Design","Web Programming","Web Server","Web Hosting"],"answer":0,"topic":"Web Design"},
    {"id":35,"q":"Which term refers to writing code for website functionality?","opts":["Web Design","Web Programming","Web Browsing","Web Hosting"],"answer":1,"topic":"Web Design"},
    {"id":36,"q":"Which of the following is NOT a client-side programming language?","opts":["JavaScript","VBScript","PHP","Angular"],"answer":2,"topic":"Programming"},
    {"id":37,"q":"Which language is an example of server-side programming?","opts":["JavaScript","PHP","VBScript","Angular"],"answer":1,"topic":"Programming"},
    {"id":38,"q":"Which organization was founded by Tim Berners-Lee in 1994?","opts":["ICANN","IETF","W3C","DARPA"],"answer":2,"topic":"Web Standards"},

    // --- HTML Tools ---
    {"id":39,"q":"Which editor is an open-source HTML editor developed for Windows?","opts":["Sublime Text","Notepad++","Atom","VS Code"],"answer":1,"topic":"HTML Tools"},
    {"id":40,"q":"Which editor is a free, open-source HTML editor developed by Microsoft?","opts":["Dreamweaver","Sublime Text","VS Code","Bluefish"],"answer":2,"topic":"HTML Tools"}
  ]
};
