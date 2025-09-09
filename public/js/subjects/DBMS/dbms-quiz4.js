window.dbmsQuiz4 = {
  title: "MySQL Naming Conventions & Data Types Quiz",
  durationSeconds: 1200, // 20 minutes
  description: "Covers: Naming Conventions, String Data Types, Numeric Data Types, Date and Time Data Types",
  items: [
    // --- Naming Conventions ---
    {"id":1,"q":"What is the maximum length of MySQL aliases?","opts":["64","128","255","32"],"answer":2,"topic":"Naming Conventions"},
    {"id":2,"q":"What is the maximum length of most MySQL identifiers (tables, databases, columns)?","opts":["32","64","128","255"],"answer":1,"topic":"Naming Conventions"},
    {"id":3,"q":"Which of the following is NOT allowed in a database name?","opts":["Underscore (_)","Hyphen (-)","Forward slash (/)","Numbers"],"answer":2,"topic":"Naming Conventions"},
    {"id":4,"q":"Which characters are NOT allowed in a table name?","opts":["Period (.) and forward slash (/)","Hyphen (-) and numbers","Underscore (_) and spaces","Uppercase letters"],"answer":0,"topic":"Naming Conventions"},
    {"id":5,"q":"What is the maximum table name length allowed because of SAS?","opts":["32","64","128","255"],"answer":0,"topic":"Naming Conventions"},
    {"id":6,"q":"If a table name is longer than 32 characters, the recommendation is:","opts":["Truncate manually","Rename it","Create a table view","Use uppercase only"],"answer":2,"topic":"Naming Conventions"},
    {"id":7,"q":"Column names and alias names allow:","opts":["Only letters","Only numbers","All characters","Only underscores"],"answer":2,"topic":"Naming Conventions"},
    {"id":8,"q":"Embedded spaces in identifiers are:","opts":["Not allowed","Allowed only in database names","Allowed if enclosed in quotes","Allowed if uppercase"],"answer":2,"topic":"Naming Conventions"},
    {"id":9,"q":"Are embedded quotation marks allowed in identifiers?","opts":["Yes","No","Only on Windows","Only on UNIX"],"answer":1,"topic":"Naming Conventions"},
    {"id":10,"q":"On UNIX servers, database object names are:","opts":["Case-sensitive","Case-insensitive","Always lowercase","Always uppercase"],"answer":0,"topic":"Naming Conventions"},
    {"id":11,"q":"On Windows servers, database object names are:","opts":["Case-sensitive","Case-insensitive","Case-random","Restricted"],"answer":1,"topic":"Naming Conventions"},
    {"id":12,"q":"Can a reserved word be used as an identifier?","opts":["Yes, without restriction","No, never","Yes, if enclosed in quotes or backticks","Only if lowercase"],"answer":2,"topic":"Naming Conventions"},
    {"id":13,"q":"Database names must be:","opts":["Unique per user","Unique per table","Unique across the whole server","Unique per operating system"],"answer":0,"topic":"Naming Conventions"},
    {"id":14,"q":"Column names must be unique within:","opts":["Database","Server","Table","User"],"answer":2,"topic":"Naming Conventions"},
    {"id":15,"q":"MySQL does not recognize the notion of schema, so tables are:","opts":["Hidden unless shared","Visible to all users with privileges","Accessible only by creator","Organized by schema"],"answer":1,"topic":"Naming Conventions"},

    // --- String Data Types ---
    {"id":16,"q":"Which string type stores FIXED length characters?","opts":["VARCHAR","CHAR","TEXT","BLOB"],"answer":1,"topic":"String Data Types"},
    {"id":17,"q":"Which string type stores VARIABLE length characters?","opts":["CHAR","VARCHAR","ENUM","SET"],"answer":1,"topic":"String Data Types"},
    {"id":18,"q":"What is the max length for CHAR?","opts":["1","255","65535","16777215"],"answer":1,"topic":"String Data Types"},
    {"id":19,"q":"What is the max length for VARCHAR?","opts":["255","65535","16777215","4294967295"],"answer":1,"topic":"String Data Types"},
    {"id":20,"q":"Which type is equal to CHAR but stores binary data?","opts":["VARCHAR","BLOB","BINARY","VARBINARY"],"answer":2,"topic":"String Data Types"},
    {"id":21,"q":"Which type is equal to VARCHAR but stores binary data?","opts":["VARBINARY","BLOB","BINARY","TEXT"],"answer":0,"topic":"String Data Types"},
    {"id":22,"q":"Which type stores up to 255 bytes of binary data?","opts":["TINYTEXT","TINYBLOB","TEXT","BLOB"],"answer":1,"topic":"String Data Types"},
    {"id":23,"q":"Which type stores up to 65,535 characters?","opts":["TEXT","TINYTEXT","MEDIUMTEXT","LONGTEXT"],"answer":0,"topic":"String Data Types"},
    {"id":24,"q":"Which type stores up to 16,777,215 characters?","opts":["TEXT","MEDIUMTEXT","LONGTEXT","TINYTEXT"],"answer":1,"topic":"String Data Types"},
    {"id":25,"q":"Which type stores up to 4,294,967,295 characters?","opts":["MEDIUMTEXT","TEXT","LONGTEXT","TINYTEXT"],"answer":2,"topic":"String Data Types"},
    {"id":26,"q":"ENUM can hold up to how many values?","opts":["255","64","65535","Unlimited"],"answer":2,"topic":"String Data Types"},
    {"id":27,"q":"SET can hold up to how many values?","opts":["255","64","65535","Unlimited"],"answer":1,"topic":"String Data Types"},

    // --- Numeric Data Types ---
    {"id":28,"q":"BIT type can hold between how many bits?","opts":["1–8","1–16","1–32","1–64"],"answer":3,"topic":"Numeric Data Types"},
    {"id":29,"q":"Signed TINYINT range is:","opts":["0 to 255","-128 to 127","-32768 to 32767","-2147483648 to 2147483647"],"answer":1,"topic":"Numeric Data Types"},
    {"id":30,"q":"SMALLINT signed range is:","opts":["-128 to 127","-32768 to 32767","-8388608 to 8388607","-2147483648 to 2147483647"],"answer":1,"topic":"Numeric Data Types"},
    {"id":31,"q":"MEDIUMINT signed range is:","opts":["-8388608 to 8388607","-32768 to 32767","0 to 65535","0 to 16777215"],"answer":0,"topic":"Numeric Data Types"},
    {"id":32,"q":"INT signed range is:","opts":["-32768 to 32767","-2147483648 to 2147483647","-8388608 to 8388607","0 to 65535"],"answer":1,"topic":"Numeric Data Types"},
    {"id":33,"q":"BIGINT signed range is about:","opts":["-8 million to 8 million","-2 billion to 2 billion","-9 quintillion to 9 quintillion","-18 quintillion to 18 quintillion"],"answer":2,"topic":"Numeric Data Types"},
    {"id":34,"q":"Which type is equal to INT?","opts":["INTEGER","BIGINT","SMALLINT","MEDIUMINT"],"answer":0,"topic":"Numeric Data Types"},
    {"id":35,"q":"Which type is equivalent to BOOL?","opts":["TINYINT","BIT","INT","BOOLEAN"],"answer":3,"topic":"Numeric Data Types"},
    {"id":36,"q":"Which option disallows negative values?","opts":["ZEROFILL","UNSIGNED","STRICT","POSITIVE"],"answer":1,"topic":"Numeric Data Types"},
    {"id":37,"q":"Which option pads with leading zeros and implies UNSIGNED?","opts":["ZEROFILL","STRICT","POSITIVE","SIGNED"],"answer":0,"topic":"Numeric Data Types"},
    {"id":38,"q":"Which type is deprecated in MySQL 8.0.17?","opts":["DECIMAL","FLOAT(size,d)","DOUBLE","BIT"],"answer":1,"topic":"Numeric Data Types"},
    {"id":39,"q":"DECIMAL can store up to how many total digits?","opts":["30","65","128","255"],"answer":1,"topic":"Numeric Data Types"},
    {"id":40,"q":"What is the max number of decimal places (d) allowed in DECIMAL?","opts":["10","20","30","65"],"answer":2,"topic":"Numeric Data Types"},

    // --- Date & Time Data Types ---
    {"id":41,"q":"DATE type format is:","opts":["YYYY-MM-DD","DD/MM/YYYY","MM-DD-YYYY","YY-MM-DD"],"answer":0,"topic":"Date & Time Data Types"},
    {"id":42,"q":"DATETIME range is:","opts":["1970 to 2038","1000 to 9999","1901 to 2155","0000 to 9999"],"answer":1,"topic":"Date & Time Data Types"},
    {"id":43,"q":"TIMESTAMP range is:","opts":["1901 to 2155","1000 to 9999","1970 to 2038","0000 to 9999"],"answer":2,"topic":"Date & Time Data Types"},
    {"id":44,"q":"Which data type auto-initializes with CURRENT_TIMESTAMP?","opts":["DATE","TIME","DATETIME","TIMESTAMP"],"answer":3,"topic":"Date & Time Data Types"},
    {"id":45,"q":"TIME type range is:","opts":["-838:59:59 to 838:59:59","0 to 23:59:59","-24:00:00 to 24:00:00","0 to 12:59:59"],"answer":0,"topic":"Date & Time Data Types"},
    {"id":46,"q":"YEAR type allows values between:","opts":["1000 to 9999","1901 to 2155 and 0000","1970 to 2038","1800 to 2200"],"answer":1,"topic":"Date & Time Data Types"},
    {"id":47,"q":"Does MySQL 8.0 support two-digit year format?","opts":["Yes","No","Yes, but deprecated","Only on Windows"],"answer":1,"topic":"Date & Time Data Types"}
  ]
};
