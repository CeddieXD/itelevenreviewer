window.dbmsQuiz3 = {
  title: "IT211 – SQL DQL (Data Query Language)",
  durationSeconds: 1200,
  description: "Covers: SELECT, SELECT DISTINCT, WHERE Clause, Comparison Operators, Arithmetic Operators",
  items: [
    // --- DQL Overview & SELECT Basics ---
    {"id":1,"q":"Which SQL command is mainly used in Data Query Language (DQL)?","opts":["INSERT","SELECT","CREATE","UPDATE"],"answer":1,"topic":"DQL Overview"},
    {"id":2,"q":"Which statement best describes Data Query Language (DQL)?","opts":["Defines schema","Retrieves data from database","Deletes tables","Controls user access"],"answer":1,"topic":"DQL Overview"},
    {"id":3,"q":"Which of the following is NOT part of DQL?","opts":["SELECT","DISTINCT","WHERE","INSERT"],"answer":3,"topic":"DQL Overview"},
    {"id":4,"q":"Which symbol is used in SELECT to retrieve all columns?","opts":["*","#","%","ALL"],"answer":0,"topic":"SELECT"},
    {"id":5,"q":"Which SQL statement retrieves all rows and columns from tblStudent?","opts":["SELECT ALL FROM tblStudent;","SELECT * FROM tblStudent;","GET * tblStudent;","SHOW ALL tblStudent;"],"answer":1,"topic":"SELECT"},
    {"id":6,"q":"What keyword is used to rename a column output in SELECT?","opts":["ALIAS","AS","RENAME","CHANGE"],"answer":1,"topic":"SELECT"},

    // --- SELECT DISTINCT ---
    {"id":7,"q":"Which keyword removes duplicate values in the result set?","opts":["UNIQUE","DISTINCT","ONLY","DIFFERENT"],"answer":1,"topic":"SELECT DISTINCT"},
    {"id":8,"q":"Which query retrieves unique section values from tblStudent?","opts":["SELECT DISTINCT section FROM tblStudent;","SELECT section UNIQUE FROM tblStudent;","SELECT section ONLY FROM tblStudent;","SELECT ALL section FROM tblStudent;"],"answer":0,"topic":"SELECT DISTINCT"},
    {"id":9,"q":"What is the output of SELECT DISTINCT section FROM tblStudent;","opts":["All rows","All sections including duplicates","Only different section values","No rows"],"answer":2,"topic":"SELECT DISTINCT"},
    {"id":10,"q":"Which query counts how many unique sections exist in tblStudent?","opts":["SELECT COUNT(section) FROM tblStudent;","SELECT DISTINCT COUNT(section) FROM tblStudent;","SELECT COUNT(DISTINCT section) FROM tblStudent;","COUNT UNIQUE section FROM tblStudent;"],"answer":2,"topic":"SELECT DISTINCT"},
    {"id":11,"q":"Why would you use SELECT DISTINCT?","opts":["To delete rows","To filter rows","To avoid duplicate results","To sort rows"],"answer":2,"topic":"SELECT DISTINCT"},

    // --- WHERE Clause ---
    {"id":12,"q":"Which clause is used to filter rows in SQL?","opts":["ORDER BY","WHERE","HAVING","GROUP BY"],"answer":1,"topic":"WHERE Clause"},
    {"id":13,"q":"Which of the following correctly retrieves all items where itemName is 'palmolive'?","opts":["SELECT * FROM tblItems WHERE itemName = 'palmolive';","SELECT * FROM tblItems WHERE itemName = palmolive;","SELECT * FROM tblItems itemName IS palmolive;","SELECT * FROM tblItems HAVING itemName = 'palmolive';"],"answer":0,"topic":"WHERE Clause"},
    {"id":14,"q":"In WHERE clause, text values must be enclosed in:","opts":["Double quotes","Single quotes","Backticks","No quotes"],"answer":1,"topic":"WHERE Clause"},
    {"id":15,"q":"In WHERE clause, numeric values must be enclosed in quotes.","opts":["True","False"],"answer":1,"topic":"WHERE Clause"},
    {"id":16,"q":"Which query retrieves all students with age 19?","opts":["SELECT * FROM tblStudent WHERE age = 19;","SELECT * FROM tblStudent WHERE age == 19;","SELECT * FROM tblStudent HAVING age=19;","SELECT * FROM tblStudent age=19;"],"answer":0,"topic":"WHERE Clause"},
    {"id":17,"q":"Which clause should always be used with DELETE or UPDATE to avoid changing all rows?","opts":["ORDER BY","WHERE","GROUP BY","HAVING"],"answer":1,"topic":"WHERE Clause"},

    // --- Comparison Operators ---
    {"id":18,"q":"Which operator checks if two values are equal?","opts":["==","=","!=","<>"],"answer":1,"topic":"Comparison Operators"},
    {"id":19,"q":"Which operator means 'not equal to'?","opts":["<>","!=","Both <> and !=","=/"],"answer":2,"topic":"Comparison Operators"},
    {"id":20,"q":"Which operator returns rows greater than a value?","opts":["=","<",">","<>"],"answer":2,"topic":"Comparison Operators"},
    {"id":21,"q":"Which operator returns rows greater than or equal to a value?","opts":[">",">=","<=","<>"],"answer":1,"topic":"Comparison Operators"},
    {"id":22,"q":"Which operator returns rows less than a value?","opts":["<","<=","!=","="],"answer":0,"topic":"Comparison Operators"},
    {"id":23,"q":"Which operator returns rows less than or equal to a value?","opts":["<","<=","!=","="],"answer":1,"topic":"Comparison Operators"},
    {"id":24,"q":"What does this query return? SELECT * FROM tblSales WHERE price <= 5000;","opts":["All sales","Sales with price above 5000","Sales with price 5000 and below","No sales"],"answer":2,"topic":"Comparison Operators"},

    // --- Arithmetic Operators ---
    {"id":25,"q":"Which arithmetic operator is used for addition?","opts":["+","-","*","/"],"answer":0,"topic":"Arithmetic Operators"},
    {"id":26,"q":"Which arithmetic operator is used for subtraction?","opts":["+","-","*","/"],"answer":1,"topic":"Arithmetic Operators"},
    {"id":27,"q":"Which arithmetic operator is used for multiplication?","opts":["+","-","*","/"],"answer":2,"topic":"Arithmetic Operators"},
    {"id":28,"q":"Which arithmetic operator is used for division?","opts":["+","-","*","/"],"answer":3,"topic":"Arithmetic Operators"},
    {"id":29,"q":"Which operator gives the remainder after division?","opts":["/","*","%","-"],"answer":2,"topic":"Arithmetic Operators"},
    {"id":30,"q":"Which query calculates the total cost of items sold?","opts":["SELECT itemName, price + quantity FROM tblSales;","SELECT itemName, price * quantity AS 'Total Cost' FROM tblSales;","SELECT itemName, price / quantity FROM tblSales;","SELECT itemName, price % quantity FROM tblSales;"],"answer":1,"topic":"Arithmetic Operators"},
    {"id":31,"q":"Which operator would you use to add 5 bonus points to all grades?","opts":["+","-","*","/"],"answer":0,"topic":"Arithmetic Operators"},

    // --- Applied / Mixed Queries ---
    {"id":32,"q":"Which query displays all students with grade greater than 85?","opts":["SELECT * FROM tblStudent WHERE grade > 85;","SELECT * FROM tblStudent WHERE grade >= 85;","SELECT * FROM tblStudent HAVING grade > 85;","SELECT grade > 85 FROM tblStudent;"],"answer":0,"topic":"WHERE & Comparison"},
    {"id":33,"q":"Which query displays only fullName and grade of students in BSIT-1A?","opts":["SELECT fullName, grade FROM tblStudent WHERE section='BSIT-1A';","SELECT fullName, grade WHERE section='BSIT-1A' FROM tblStudent;","SHOW fullName, grade FROM tblStudent WHERE section='BSIT-1A';","GET fullName, grade FROM tblStudent WHEN section='BSIT-1A';"],"answer":0,"topic":"WHERE & SELECT"},
    {"id":34,"q":"Which operator should be used to find all students not aged 18?","opts":["=","!=","<",">"],"answer":1,"topic":"Comparison Operators"},
    {"id":35,"q":"If Anna Cruz has grade 85, what will her grade be after adding 5 bonus points using SELECT grade+5?","opts":["90","100","95","80"],"answer":0,"topic":"Arithmetic Operators"},
    {"id":36,"q":"What does SELECT DISTINCT age FROM tblStudent; return?","opts":["All ages including duplicates","Only unique ages","All student records","All names"],"answer":1,"topic":"SELECT DISTINCT"},
    {"id":37,"q":"Which query shows only the unique sections and counts how many there are?","opts":["SELECT section, COUNT(section) FROM tblStudent;","SELECT DISTINCT section, COUNT(section) FROM tblStudent;","SELECT COUNT(DISTINCT section) FROM tblStudent;","COUNT UNIQUE section FROM tblStudent;"],"answer":2,"topic":"SELECT DISTINCT"},
    {"id":38,"q":"Which arithmetic operator would you use to compute average = total/number?","opts":["+","-","*","/"],"answer":3,"topic":"Arithmetic Operators"},
    {"id":39,"q":"What keyword is used to give a temporary name to a computed column in SELECT?","opts":["AS","ALIAS","TEMP","RENAME"],"answer":0,"topic":"SELECT"},
    {"id":40,"q":"Which statement retrieves all rows from tblStudent where grade is not equal to 75?","opts":["SELECT * FROM tblStudent WHERE grade != 75;","SELECT * FROM tblStudent WHERE grade =! 75;","SELECT * FROM tblStudent grade<>75;","SELECT * FROM tblStudent grade NOT=75;"],"answer":0,"topic":"Comparison Operators"}
  ]
};
