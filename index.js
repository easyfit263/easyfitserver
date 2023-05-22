const express = require("express");
const app = express();

// const bodyParser = require("body-parser");
const cors = require("cors");
// app.use(bodyParser.json());
app.use(cors());
const corsOptions ={
   origin:'*', 
   'Access-Control-Allow-Credentials':true,
      
   optionSuccessStatus:200,
}

app.use(cors(corsOptions)) 

var bodyParser = require('body-parser');
app.use(bodyParser.json({limit: "50mb"}));
app.use(bodyParser.urlencoded({limit: "50mb", extended: true, parameterLimit:50000}));


app.get("/addtologin", (req, res) => {
  res.send("This is the data endpoint");
  console.log("Received data:");
});

app.post("/addtologin", (req, res) => {
  const n = req.body.data.email;
  const p = req.body.data.password;

  // console.log("DATA RECEIVED "+ n);

  // SQL STARTS

  var mysql = require("mysql");

  var con = mysql.createConnection({
   host: "bsfwn0d48k1k4wkxc8lx-mysql.services.clever-cloud.com",
    user: "u6mrp0q6gavsuo3y",
    password: "BZpgvyXhFUPP21YbYUUR",
    database: "bsfwn0d48k1k4wkxc8lx",
  });

  con.connect(function (err) {
    if (err) throw err;
    console.log("Connected!");
    // var sql = "INSERT INTO details (username, name,age, gender, interests, phoneno, country, maritalstat, work, prefferedage, city, religion, caste, height, description, hobbies) VALUES ('pathan77', ' "+a+" ', '', '', '', '', '', '', '', '', '', '', '', '', '','')";
    var sql =
      "INSERT INTO login (email,password) VALUES ('" +
      n +
      "' ,'" +
      p +
      "'" +
      ")";
    con.query(sql, function (err, result) {
      if (err) throw err;
      // console.log(result[1].name);
    });
    con.end();
  });

  // SQL ENDS

  res.send("USER ADDED");
});


app.get("/Traineraddtologin", (req, res) => {
  res.send("This is the data endpoint");
  console.log("Received data:");
});

app.post("/Traineraddtologin", (req, res) => {
  const n = req.body.data.email;
  const p = req.body.data.password;

  // console.log("DATA RECEIVED "+ n);

  // SQL STARTS

  var mysql = require("mysql");

  var con = mysql.createConnection({
    host: "bsfwn0d48k1k4wkxc8lx-mysql.services.clever-cloud.com",
    user: "u6mrp0q6gavsuo3y",
    password: "BZpgvyXhFUPP21YbYUUR",
    database: "bsfwn0d48k1k4wkxc8lx",
  });

  con.connect(function (err) {
    if (err) throw err;
    console.log("Connected!");
    // var sql = "INSERT INTO details (username, name,age, gender, interests, phoneno, country, maritalstat, work, prefferedage, city, religion, caste, height, description, hobbies) VALUES ('pathan77', ' "+a+" ', '', '', '', '', '', '', '', '', '', '', '', '', '','')";
    var sql =
      "INSERT INTO trainerlogin (email,password) VALUES ('" +
      n +
      "' ,'" +
      p +
      "'" +
      ")";
    con.query(sql, function (err, result) {
      if (err) throw err;
      // console.log(result[1].name);
      // con.end();
    });
    con.end();
  });

  // SQL ENDS

  res.send("USER ADDED");
});

app.get("/trainercheckcredentials", (req, res) => {
  res.send("This is the data endpoint");
  console.log("Received data:");
});

app.post("/trainercheckcredentials", (req, res) => {
  const n = req.body.data1.email;
  const p = req.body.data1.password;

  // console.log("DATA RECEIVED "+ n);

  // SQL STARTS

  var mysql = require("mysql");

  var con = mysql.createConnection({
    host: "bsfwn0d48k1k4wkxc8lx-mysql.services.clever-cloud.com",
    user: "u6mrp0q6gavsuo3y",
    password: "BZpgvyXhFUPP21YbYUUR",
    database: "bsfwn0d48k1k4wkxc8lx",
  });
  const auth = 0;
  con.connect(function (err) {
    if (err) throw err;
    console.log("Connected!");
    // var sql = "INSERT INTO details (username, name,age, gender, interests, phoneno, country, maritalstat, work, prefferedage, city, religion, caste, height, description, hobbies) VALUES ('pathan77', ' "+a+" ', '', '', '', '', '', '', '', '', '', '', '', '', '','')";
    var sql =
      "SELECT * FROM trainerlogin WHERE email= '" + n + "' AND password='" + p + "'";
    con.query(sql, function (err, result) {
      if (err) throw err;
      if (result.length > 0) {
        res.send("1");
        con.end();
      } else {
        res.send("0");
        con.end();
      }
      // console.log(result[1].name);
    });
  });
});


// CHECK CREDENTIALS

app.get("/checkcredentials", (req, res) => {
  res.send("This is the data endpoint");
  console.log("Received data:");
});

app.post("/checkcredentials", (req, res) => {
  const n = req.body.data1.email;
  const p = req.body.data1.password;

  // console.log("DATA RECEIVED "+ n);

  // SQL STARTS

  var mysql = require("mysql");

  var con = mysql.createConnection({
   host: "bsfwn0d48k1k4wkxc8lx-mysql.services.clever-cloud.com",
    user: "u6mrp0q6gavsuo3y",
    password: "BZpgvyXhFUPP21YbYUUR",
    database: "bsfwn0d48k1k4wkxc8lx",
  });
  const auth = 0;
  con.connect(function (err) {
    if (err) throw err;
    console.log("Connected!");
    // var sql = "INSERT INTO details (username, name,age, gender, interests, phoneno, country, maritalstat, work, prefferedage, city, religion, caste, height, description, hobbies) VALUES ('pathan77', ' "+a+" ', '', '', '', '', '', '', '', '', '', '', '', '', '','')";
    var sql =
      "SELECT * FROM login WHERE email= '" + n + "' AND password='" + p + "'";
    con.query(sql, function (err, result) {
      if (err) throw err;
      if (result.length > 0) {
        res.send("1");
        con.end();
      } else {
        res.send("0");
        con.end();
      }
      // console.log(result[1].name);
    });
  });
});



app.get("/addtopremium", (req, res) => {
  res.send("This is the data endpoint");
  console.log("Received data:");
});

app.post("/addtopremium", (req, res) => {
  const n = req.body.data.email;
  const p = req.body.data.trainerid;
  const premium=1;

  // console.log("DATA RECEIVED "+ n);

  // SQL STARTS

  var mysql = require("mysql");

  var con = mysql.createConnection({
   host: "bsfwn0d48k1k4wkxc8lx-mysql.services.clever-cloud.com",
    user: "u6mrp0q6gavsuo3y",
    password: "BZpgvyXhFUPP21YbYUUR",
    database: "bsfwn0d48k1k4wkxc8lx",
  });

  con.connect(function (err) {
    if (err) throw err;
    console.log("Connected!");
    // var sql = "INSERT INTO details (username, name,age, gender, interests, phoneno, country, maritalstat, work, prefferedage, city, religion, caste, height, description, hobbies) VALUES ('pathan77', ' "+a+" ', '', '', '', '', '', '', '', '', '', '', '', '', '','')";
    var sql = "INSERT INTO premium (useremail, trainerid, premium) VALUES ('" +
    n +
  "', '" +
  p +
  "', " +
  premium +
  ")";
    con.query(sql, function (err, result) {
      if (err) throw err;
      // console.log(result[1].name);
    });
    con.end();
  });

  // SQL ENDS

  res.send("prem ADDED");
});

app.get("/userSignupdemail", (req, res) => {
  res.send("This is the data endpoint");
  console.log("Received data:");
});

app.post("/userSignupdemail", (req, res) => {
  const email = req.body.data1.email;
  // console.log("SScard"+ trainerid);

  var mysql = require("mysql");

  var con = mysql.createConnection({
    host: "bsfwn0d48k1k4wkxc8lx-mysql.services.clever-cloud.com",
    user: "u6mrp0q6gavsuo3y",
    password: "BZpgvyXhFUPP21YbYUUR",
    database: "bsfwn0d48k1k4wkxc8lx",
  });
  const auth = 0;
  con.connect(function (err) {
    if (err) throw err;
    // console.log(JSON.stringify(data1));
    console.log("Connected!  trainerdetails");
    const sql =
      "SELECT email FROM login WHERE email = '" + email + "';";
    con.query(sql, (error, results) => {
      if (error) {
        console.error("Error executing the query:", error);
        con.end(); // Close the database connection
        return;
      }

      // Process the results
      if (results.length > 0) {
        res.send("1")
        con.end();
      } else {
        res.send("0");
        con.end();
      }
    });
  });
});

app.get("/TuserSignupdemail", (req, res) => {
  res.send("This is the data endpoint");
  console.log("Received data:");
});

app.post("/TuserSignupdemail", (req, res) => {
  const email = req.body.data1.email;
  // console.log("SScard"+ trainerid);

  var mysql = require("mysql");

  var con = mysql.createConnection({
    host: "bsfwn0d48k1k4wkxc8lx-mysql.services.clever-cloud.com",
    user: "u6mrp0q6gavsuo3y",
    password: "BZpgvyXhFUPP21YbYUUR",
    database: "bsfwn0d48k1k4wkxc8lx",
  });
  const auth = 0;
  con.connect(function (err) {
    if (err) throw err;
    // console.log(JSON.stringify(data1));
    console.log("Connected!  trainerdetails");
    const sql =
      "SELECT email FROM trainerlogin WHERE email = '" + email + "';";
    con.query(sql, (error, results) => {
      if (error) {
        console.error("Error executing the query:", error);
        con.end(); // Close the database connection
        return;
      }

      // Process the results
      if (results.length > 0) {
        res.send("1")
        con.end();
      } else {
        res.send("0");
        con.end();
      }
    });
  });
});


app.get("/trainerdetails", (req, res) => {
  res.send("This is the data endpoint");
  console.log("Received data:");
});

app.post("/trainerdetails", (req, res) => {
  const trainerid = req.body.formdata;
  // console.log("SScard"+ trainerid);

  var mysql = require("mysql");

  var con = mysql.createConnection({
   host: "bsfwn0d48k1k4wkxc8lx-mysql.services.clever-cloud.com",
    user: "u6mrp0q6gavsuo3y",
    password: "BZpgvyXhFUPP21YbYUUR",
    database: "bsfwn0d48k1k4wkxc8lx",
  });
  const auth = 0;
  con.connect(function (err) {
    if (err) throw err;
    // console.log(JSON.stringify(data1));
    console.log("Connected!  trainerdetails");
    const sql =
      "SELECT * FROM trainerdetails WHERE trainerid = '" + trainerid + "';";
    con.query(sql, (error, results) => {
      if (error) {
        console.error("Error executing the query:", error);
        connection.end(); // Close the database connection
        return;
      }

      // Process the results
      if (results.length > 0) {
        res.json(results);
        con.end();
      } else {
        res.send("0");
        con.end();
      }
    });
  });
});

app.get("/trainerdetails1", (req, res) => {
  res.send("This is the data endpoint");
  console.log("Received data:");
});

app.post("/trainerdetails1", (req, res) => {
  const trainerid = req.body.id.username;
  console.log("tID"+ trainerid);

  var mysql = require("mysql");

  var con = mysql.createConnection({
   host: "bsfwn0d48k1k4wkxc8lx-mysql.services.clever-cloud.com",
    user: "u6mrp0q6gavsuo3y",
    password: "BZpgvyXhFUPP21YbYUUR",
    database: "bsfwn0d48k1k4wkxc8lx",
  });
  const auth = 0;
  con.connect(function (err) {
    if (err) throw err;
    // console.log(JSON.stringify(data1));
    console.log("Connected!  trainerdetails");
    const sql =
      "SELECT description,profilepic, pictures,name, video FROM trainerdetails WHERE trainerid = '" +
      trainerid +
      "';";
    con.query(sql, (error, results) => {
      if (error) {
        console.error("Error executing the query:", error);
        connection.end(); // Close the database connection
        return;
      }

      // Process the results
      if (results.length > 0) {
        res.json(results);
        con.end();
      } else {
        res.send("0");
        con.end();
      }
    });
  });
});

app.get("/checktrainercredentials", (req, res) => {
  res.send("This is the data endpoint");
  console.log("Received data:");
});

app.post("/checktrainercredentials", (req, res) => {
  const n = req.body.data1.email;
  const p = req.body.data1.password;

  // console.log("DATA RECEIVED "+ n);

  // SQL STARTS

  var mysql = require("mysql");

  var con = mysql.createConnection({
   host: "bsfwn0d48k1k4wkxc8lx-mysql.services.clever-cloud.com",
    user: "u6mrp0q6gavsuo3y",
    password: "BZpgvyXhFUPP21YbYUUR",
    database: "bsfwn0d48k1k4wkxc8lx",
  });
  const auth = 0;
  con.connect(function (err) {
    if (err) throw err;
    console.log("Connected!");
    // var sql = "INSERT INTO details (username, name,age, gender, interests, phoneno, country, maritalstat, work, prefferedage, city, religion, caste, height, description, hobbies) VALUES ('pathan77', ' "+a+" ', '', '', '', '', '', '', '', '', '', '', '', '', '','')";
    var sql =
      "SELECT * FROM login WHERE email= '" +
      n +
      "' AND password='" +
      p +
      "'";
    con.query(sql, function (err, result) {
      if (err) throw err;
      if (result.length > 0) {
        res.send("1");
        con.end();
      } else {
        res.send("0");
        con.end();
      }
      // console.log(result[1].name);
    });
  });
});

app.get("/adddetails", (req, res) => {
  res.send("This is the data endpoint");
  console.log("Received data:");
});

app.post("/adddetails", (req, res) => {
  const n1 = req.body.data2.name;
  const n2 = req.body.data2.email;
  const n3 = req.body.data2.phone;
  const n4 = req.body.data2.password;
  const n5 = req.body.data2.gender;
  const n6 = req.body.data2.height;
  const n7 = req.body.data2.weight;
  const n8 = req.body.data2.goal;

  // console.log("DATA RECEIVED "+ req.body.data2);

  // SQL STARTS

  var mysql = require("mysql");

  var con = mysql.createConnection({
   host: "bsfwn0d48k1k4wkxc8lx-mysql.services.clever-cloud.com",
    user: "u6mrp0q6gavsuo3y",
    password: "BZpgvyXhFUPP21YbYUUR",
    database: "bsfwn0d48k1k4wkxc8lx",
  });
  const auth = 0;
  con.connect(function (err) {
    if (err) throw err;
    console.log("Connected!");
    var sql =
      "INSERT INTO userdetails (name, email,phone, password, gender, height, weight, goal) VALUES (" +
      "'" +
      n1 +
      "'," +
      "'" +
      n2 +
      "'," +
      "'" +
      n3 +
      "'," +
      "'" +
      n4 +
      "'," +
      "'" +
      n5 +
      "'," +
      "'" +
      n6 +
      "'," +
      "'" +
      n7 +
      "'," +
      "'" +
      n8 +
      "'" +
      ")";

    // var sql = "INSERT INTO userdetails (name, email,phone, password, gender, height, weight, goal) VALUES ("+ "'"+n1+"',"+  "'"+n2+"',"+   "'"+n3+"',"+   "'"+n4+"',"+   "'"+n5+"',"+   "'"+n6+"'," + "'"+n7+"',"  + "'"+n8+"',"  + "'"+n9+"',"  + "'"+n10+"',"  + "'"+n11+"',"  + "'"+n12+"',"  + "'"+n13+"',"  + "'"+n14+"',"  + "'"+n15+"',"  + "'"+n16+"',"+ "'"+n17+"',"+ "'"+n18+"'," + "'"+n19+"'"  +")";

    con.query(sql, function (err, result) {
      if (err) {
        console.log(err);
        res.send(err);
        con.end();
      } else {
        res.send("Data Details Added");
        con.end();
      }

      // console.log(result[1].name);
      // con.end()
    });
  });

  // SQL ENDS
});


app.get("/addtrainerdetails", (req, res) => {
  res.send("This is the data endpoint");
  console.log("Received data:");
});

app.post("/addtrainerdetails", (req, res) => {
  const n1 = req.body.TsignupData.name;
  const n2 = req.body.TsignupData.email;
  const n3 = req.body.TsignupData.phone;
  const n4 = req.body.TsignupData.password;
  const n5 = req.body.TsignupData.gender;
  const n6 = req.body.TsignupData.video;
  const n7 = req.body.TsignupData.profilepic;
  const n8 = req.body.TsignupData.pictures;
  const n9 = req.body.TsignupData.description;

  // console.log("DATA RECEIVED "+ req.body.data2);

  // SQL STARTS

  var mysql = require("mysql");

  var con = mysql.createConnection({
   host: "bsfwn0d48k1k4wkxc8lx-mysql.services.clever-cloud.com",
    user: "u6mrp0q6gavsuo3y",
    password: "BZpgvyXhFUPP21YbYUUR",
    database: "bsfwn0d48k1k4wkxc8lx",
  });
  const auth = 0;
  con.connect(function (err) {
    if (err) throw err;
    console.log("Connected!");
    var sql =
      "INSERT INTO trainerdetails (name, email, trainerid, description, phone, password, gender, video, pictures, profilepic) VALUES (" +
      "'" +
      n1 +
      "'," +
      "'" +
      n2 +
      "'," +
      "'" +
      n2 +
      "'," +
      "'" +
      n9 +
      "'," +
      "'" +
      n3 +
      "'," +
      "'" +
      n4 +
      "'," +
      "'" +n5 + "'," +"'" + n6 +"',"+"'" +n8 + "'," +"'" + n7 +"'" +");";


    con.query(sql, function (err, result) {
      if (err) {
        console.log(err);
        res.send(err);
        con.end();
      } else {
        res.send("Data Details Added");
        con.end();
      }

      // console.log(result[1].name);
      // con.end()
    });
  });

  // SQL ENDS
});


app.get("/addrecentmeal", (req, res) => {
  res.send("This is the data endpoint");
  console.log("Received data:");
});

app.post("/addrecentmeals", (req, res) => {
  const n1 = req.body.data.email;
  const n2 = req.body.data.foodname;
  const n3 = req.body.data.calories;

  console.log("DATA RECEIVED " + req.body.data.email);

  // SQL STARTS

  var mysql = require("mysql");

  var con = mysql.createConnection({
   host: "bsfwn0d48k1k4wkxc8lx-mysql.services.clever-cloud.com",
    user: "u6mrp0q6gavsuo3y",
    password: "BZpgvyXhFUPP21YbYUUR",
    database: "bsfwn0d48k1k4wkxc8lx",
  });
  const auth = 0;
  con.connect(function (err) {
    if (err) throw err;
    console.log("Connected!");
    var sql = `INSERT INTO recent (email, foodname, calories)VALUES ('${n1}', '${n2}', ${n3})`;

    con.query(sql, function (err, result) {
      if (err) {
        console.log(err);
        res.send(err);
        con.end();
      } else {
        res.send("Calories Details Added");
        console.log("Recent meal Added");
        con.end();
      }

      // con.end()
    });
  });

  // SQL ENDS
});



app.get("/addData", (req, res) => {
  res.send("This is the data endpoint");
  console.log("Received data:");
});

app.post("/addData", (req, res) => {
  const requestData = req.body;
  const dailyData = requestData.data2;
  const weeklyData = requestData.data1;
  const monthlyData = requestData.data3;

  var mysql = require("mysql");

  var con = mysql.createConnection({
    host: "bsfwn0d48k1k4wkxc8lx-mysql.services.clever-cloud.com",
    user: "u6mrp0q6gavsuo3y",
    password: "BZpgvyXhFUPP21YbYUUR",
    database: "bsfwn0d48k1k4wkxc8lx",
  });

  con.connect(function (err) {
    if (err) throw err;
    console.log("Connected!");

    // Insert or update daily data
    var dailySql = `INSERT INTO daily_totalcals (email, totalcalories, totalproteins, totalcarbs, totalfats) 
    VALUES ('${dailyData.email}', '${dailyData.totalcals}', '${dailyData.totalprots}', '${dailyData.totalcarbs}', '${dailyData.totalfats}')
    ON DUPLICATE KEY UPDATE
    totalcalories = VALUES(totalcalories),
    totalproteins = VALUES(totalproteins),
    totalcarbs = VALUES(totalcarbs),
    totalfats = VALUES(totalfats);`;

    // Insert or update weekly data
    var weeklySql =
      `INSERT INTO weekly_calories (email, week_start_date, total_calories, achieved_calories) 
      VALUES ('${weeklyData.email}', '${weeklyData.date}', ${weeklyData.targweeklycal}, ${weeklyData.achCals})
      ON DUPLICATE KEY UPDATE
      total_calories =  VALUES(total_calories);`;

    // Insert or update monthly data
    var monthlySql =
      `INSERT INTO monthly_calories (email, month_start_date, total_calories, achieved_calories) 
      VALUES ('${monthlyData.email}', '${monthlyData.date}', ${monthlyData.targetmonthlycal}, ${monthlyData.achCals})
      ON DUPLICATE KEY UPDATE
      total_calories = VALUES(total_calories);`;

    con.query(dailySql, function (err, result) {
      if (err) throw err;
      console.log("Daily Calories Added/Updated");
      con.end();
    });

    con.query(weeklySql, function (err, result) {
      if (err) throw err;
      console.log("Weekly Calories Added/Updated");
      con.end();
    });

    con.query(monthlySql, function (err, result) {
      if (err) throw err;
      console.log("Monthly Calories Added/Updated");
      con.end();
    });

    res.send("Calories Details Added/Updated");
    con.end();
  });
});

app.get("/addData2", (req, res) => {
  res.send("This is the data endpoint");
  console.log("Received data:");
});

app.post("/addData2", (req, res) => {
  const { data1, data2, data3 } = req.body;


  var mysql = require("mysql");

  var con = mysql.createConnection({
    host: "bsfwn0d48k1k4wkxc8lx-mysql.services.clever-cloud.com",
    user: "u6mrp0q6gavsuo3y",
    password: "BZpgvyXhFUPP21YbYUUR",
    database: "bsfwn0d48k1k4wkxc8lx",
  });

  con.connect(function (err) {
    if (err) throw err;
    console.log("Connected!");

       // Add daily calories
       const { email: email1, date: date1, achcals, achprots, achcarbs, achfats } = data1;
       const dailySql = `INSERT INTO daily_calories (email, date, achievedcal, achievedprots, achievedcarbs, achievedfats)
                         VALUES ('${email1}', '${date1}', ${achcals}, ${achprots}, ${achcarbs}, ${achfats})
                         ON DUPLICATE KEY UPDATE
                         achievedcal = VALUES(achievedcal),
                         achievedprots = VALUES(achievedprots),
                         achievedcarbs = VALUES(achievedcarbs),
                         achievedfats = VALUES(achievedfats);`;
   
       con.query(dailySql, (err, result) => {
         if (err) {
           console.error("Error adding daily calories: ", err);
           res.status(500).send("Internal server error");
           con.end();
           return;
         }
         console.log("Daily calories added");
   
         // Add weekly calories
         const { email: email2, date: date2, totWcals, achWcals } = data2;
        //  const weeklySql = `INSERT INTO weekly_calories (email, week_start_date, total_calories, achieved_calories)
        //                     VALUES ('${email2}', '${date2}', ${totWcals}, ${achWcals})
        //                     ON DUPLICATE KEY UPDATE
        //                     total_calories = VALUES(total_calories),
        //                     achieved_calories = VALUES(achieved_calories);`;

                            const weeklySql =
                            `INSERT INTO weekly_calories (email, week_start_date, total_calories, achieved_calories) 
                            VALUES ('${email2}', '${date2}', ${totWcals}, ${achWcals})
                            ON DUPLICATE KEY UPDATE
                            total_calories =  VALUES(total_calories),
                            achieved_calories = achieved_calories + ${achWcals};
                            `;
   
         con.query(weeklySql, (err, result) => {
           if (err) {
             console.error("Error adding weekly calories: ", err);
             res.status(500).send("Internal server error");
             con.end();
             return;
           }
           console.log("Weekly calories added");
   
           // Add monthly calories
           const { email: email3, date: date3, totMcals, achMcals } = data3;
           const monthlySql = `INSERT INTO monthly_calories (email, month_start_date, total_calories, achieved_calories)
                               VALUES ('${email3}', '${date3}', ${totMcals}, ${achMcals})
                               ON DUPLICATE KEY UPDATE
                               total_calories = VALUES(total_calories),
                               achieved_calories = achieved_calories + ${achMcals}`;
   
           con.query(monthlySql, (err, result) => {
             if (err) {
               console.error("Error adding monthly calories: ", err);
               res.status(500).send("Internal server error");
               con.end();
               return;
             }
             console.log("Monthly calories added");
   
             res.send("Calories details added");
             con.end();
            });
          });
        });
      });
    });



app.get("/totalCalories", (req, res) => {
  res.send("This is the data endpoint");
  console.log("Received data:");
});

app.post("/totalCalories", (req, res) => {
  const n = req.body.email;

  var mysql = require("mysql");

  var con = mysql.createConnection({
   host: "bsfwn0d48k1k4wkxc8lx-mysql.services.clever-cloud.com",
    user: "u6mrp0q6gavsuo3y",
    password: "BZpgvyXhFUPP21YbYUUR",
    database: "bsfwn0d48k1k4wkxc8lx",
  });

  const auth = 0;
  con.connect(function (err) {
    if (err) throw err;
    console.log("Connected!");

    // var sql = "SELECT * FROM dailycalories WHERE email ='" + n + "';";
    var sql =
      "SELECT * FROM daily_totalcals WHERE email = '" + n + "';";

    con.query(sql, function (err, result) {
      if (err) throw err;
      if (result.length > 0) {
        console.log("server:" + result);
        res.json(result);
        con.end();
      } else {
        res.send("0");
        con.end();
      }
      // console.log(result[1].name);
    });
  });
});

app.get("/weeklyCalories", (req, res) => {
  res.send("This is the data endpoint");
  console.log("Received data:");
});

app.post("/weeklyCalories", (req, res) => {
  const n = req.body.email;

  var mysql = require("mysql");

  var con = mysql.createConnection({
   host: "bsfwn0d48k1k4wkxc8lx-mysql.services.clever-cloud.com",
    user: "u6mrp0q6gavsuo3y",
    password: "BZpgvyXhFUPP21YbYUUR",
    database: "bsfwn0d48k1k4wkxc8lx",
  });
  const auth = 0;
  con.connect(function (err) {
    if (err) throw err;
    console.log("Connected!");

    // var sql = "SELECT * FROM dailycalories WHERE email ='" + n + "';";
    var sql =
  "SELECT SUM(achieved_calories) AS total_achieved_calories, total_calories " +
  "FROM weekly_calories " +
  "WHERE email = '" +
  n +
  "' " +
  "AND week_start_date >= DATE_SUB(CURDATE(), INTERVAL 7 DAY) " +
  "GROUP BY total_calories " +
  "ORDER BY week_start_date DESC " +
  "LIMIT 1;";

  

    con.query(sql, function (err, result) {
      if (err) throw err;
      if (result.length > 0) {
        console.log("server:" + result);
        res.json(result);
        con.end();
      } else {
        res.send("0");
        con.end();
      }
      // console.log(result[1].name);
    });
  });
});

app.get("/dailyCalories", (req, res) => {
  res.send("This is the data endpoint");
  console.log("Received data:");
});

app.post("/dailyCalories", (req, res) => {
  const n = req.body.email;
  var date1 = req.body.formattedDate;

   
   const date = new Date(); // Get the current date

const year = date.getFullYear(); // Get the current year
const month = String(date.getMonth() + 1).padStart(2, '0'); // Get the current month (January is 0)
const day = String(date.getDate()).padStart(2, '0'); // Get the current day

const formattedDate = `${year}-${month}-${day}`; // Format the date as YYYY-MM-DD
date1=formattedDate;
   
   
   
   
   
   
  var mysql = require("mysql");

  var con = mysql.createConnection({
   host: "bsfwn0d48k1k4wkxc8lx-mysql.services.clever-cloud.com",
    user: "u6mrp0q6gavsuo3y",
    password: "BZpgvyXhFUPP21YbYUUR",
    database: "bsfwn0d48k1k4wkxc8lx",
  });
  const auth = 0;
  con.connect(function (err) {
    if (err) throw err;
    console.log("Connected!");

    // var sql = "SELECT * FROM dailycalories WHERE email ='" + n + "';";
    var sql =
      "SELECT email, date, achievedcal, achievedprots, achievedcarbs, achievedfats FROM daily_calories WHERE email = '" +
      n +
      "' AND date = '" +
      date1 +
      "';";

    con.query(sql, function (err, result) {
      if (err) throw err;
      if (result.length > 0) {
        console.log("server:" + result);
        res.json(result);
        con.end();
      } else {
        res.send("0");
        con.end();
      }
      // console.log(result[1].name);
    });
  });
});

app.get("/monthlyCalories", (req, res) => {
  res.send("This is the data endpoint");
  console.log("Received data:");
});

app.post("/monthlyCalories", (req, res) => {
  const n = req.body.email;

  var mysql = require("mysql");

  var con = mysql.createConnection({
   host: "bsfwn0d48k1k4wkxc8lx-mysql.services.clever-cloud.com",
    user: "u6mrp0q6gavsuo3y",
    password: "BZpgvyXhFUPP21YbYUUR",
    database: "bsfwn0d48k1k4wkxc8lx",
  });
  const auth = 0;
  con.connect(function (err) {
    if (err) throw err;
    console.log("Connected!");

    // var sql = "SELECT * FROM dailycalories WHERE email ='" + n + "';";
    var sql =
    "SELECT SUM(achieved_calories) AS total_achieved_calories, total_calories " +
    "FROM monthly_calories " +
    "WHERE email = '" +
    n +
    "' " +
    "AND month_start_date >= DATE_SUB(CURDATE(), INTERVAL 30 DAY) " +
    "GROUP BY total_calories " +
    "ORDER BY month_start_date DESC " +
    "LIMIT 1;";
  

    con.query(sql, function (err, result) {
      if (err) throw err;
      if (result.length > 0) {
        console.log("server:" + result);
        res.json(result);
        con.end();
      } else {
        res.send("0");
        con.end();
      }
      // console.log(result[1].name);
    });
  });
});





app.get("/loadchats", (req, res) => {
  res.send("This is the data endpoint");
  console.log("Received data:");
});

app.post("/loadchats", (req, res) => {
  const u = req.body.userdata.uid;
  // console.log("SScard"+ u);

  var mysql = require("mysql");

  var con = mysql.createConnection({
   host: "bsfwn0d48k1k4wkxc8lx-mysql.services.clever-cloud.com",
    user: "u6mrp0q6gavsuo3y",
    password: "BZpgvyXhFUPP21YbYUUR",
    database: "bsfwn0d48k1k4wkxc8lx",
  });
  const auth = 0;
  con.connect(function (err) {
    if (err) throw err;
    console.log("Connected! Load Messages");
    // var sql = "INSERT INTO details (username, name,age, gender, interests, phoneno, country, maritalstat, work, prefferedage, city, religion, caste, height, description, hobbies) VALUES ('pathan77', ' "+a+" ', '', '', '', '', '', '', '', '', '', '', '', '', '','')";
    var sql =
      "SELECT sender,receiver,message,time FROM messages WHERE sender='" +
      u +
      "'OR receiver='" +
      u +
      "';";
    con.query(sql, function (err, result) {
      if (err) throw err;
      // console.log(JSON.stringify(result));
      if (result.length > 0) {
        res.json(result);

        con.end();
      } else {
        res.send("0");
        con.end();
      }
      // console.log(result[1].name);
    });
  });
});

app.get("/newmessage", (req, res) => {
  res.send("This is the data endpoint");
  console.log("Received data:");
});

app.post("/newmessage", (req, res) => {
  const time = req.body.newmessage.timet;
  const sender = req.body.newmessage.sendert;
  const receiver = req.body.newmessage.receivert;
  const msg = req.body.newmessage.messaget;
  const data1 = {
    sender: sender,
    receiver: receiver,
    message: msg,
    time: time,
  };
  // console.log("SScard"+ u);

  var mysql = require("mysql");

  var con = mysql.createConnection({
   host: "bsfwn0d48k1k4wkxc8lx-mysql.services.clever-cloud.com",
    user: "u6mrp0q6gavsuo3y",
    password: "BZpgvyXhFUPP21YbYUUR",
    database: "bsfwn0d48k1k4wkxc8lx",
  });
  const auth = 0;
  con.connect(function (err) {
    if (err) throw err;
    // console.log(JSON.stringify(data1));
    console.log("Connected! New Message");
    const sql = "INSERT INTO messages SET ?";

    con.query(sql, data1, (error, results, fields) => {
      if (error) {
        console.error("Error inserting data into the Messages: ", error);
        con.end();
        return;
      }
      // console.log('Message inserted successfully.');
      res.send("1");

      con.end();
    });
  });
});

app.get("/dashName", (req, res) => {
  res.send("This is the data endpoint");
  console.log("Received data:");
});

app.post("/dashName", (req, res) => {
  const n = req.body.email;

  var mysql = require("mysql");

  var con = mysql.createConnection({
   host: "bsfwn0d48k1k4wkxc8lx-mysql.services.clever-cloud.com",
    user: "u6mrp0q6gavsuo3y",
    password: "BZpgvyXhFUPP21YbYUUR",
    database: "bsfwn0d48k1k4wkxc8lx",
  });
  const auth = 0;
  con.connect(function (err) {
    if (err) throw err;
    console.log("Connected!");

    var sql = "SELECT name FROM userdetails WHERE email ='" + n + "';";
    con.query(sql, function (err, result) {
      if (err) throw err;
      if (result.length > 0) {
        console.log("server:" + result);
        res.json(result);
        con.end();
      } else {
        res.send("0");
        con.end();
      }
      // console.log(result[1].name);
    });
  });
});


app.get("/TdashName", (req, res) => {
  res.send("This is the data endpoint");
  console.log("Received data:");
});

app.post("/TdashName", (req, res) => {
  const n = req.body.email;
  console.log('tname: '+n);

  var mysql = require("mysql");

  var con = mysql.createConnection({
   host: "bsfwn0d48k1k4wkxc8lx-mysql.services.clever-cloud.com",
    user: "u6mrp0q6gavsuo3y",
    password: "BZpgvyXhFUPP21YbYUUR",
    database: "bsfwn0d48k1k4wkxc8lx",
  });
  const auth = 0;
  con.connect(function (err) {
    if (err) throw err;
    console.log("Connected!");

    var sql = "SELECT name FROM trainerdetails WHERE trainerid ='" + n + "';";
    con.query(sql, function (err, result) {
      if (err) throw err;
      if (result.length > 0) {
        console.log("server:" + result);
        console.log('TNAME');
        res.json(result);
        con.end();
      } else {
        res.send("0");
        console.log('noTNAME');
        con.end();
      }
      // console.log(result[1].name);
    });
  });
});

app.get("/card", (req, res) => {
  res.send("This is the data endpoint");
  console.log("Received data:");
});

app.post("/card", (req, res) => {
  // SQL STARTS

  var mysql = require("mysql");

  var con = mysql.createConnection({
   host: "bsfwn0d48k1k4wkxc8lx-mysql.services.clever-cloud.com",
    user: "u6mrp0q6gavsuo3y",
    password: "BZpgvyXhFUPP21YbYUUR",
    database: "bsfwn0d48k1k4wkxc8lx",
  });
  const auth = 0;
  con.connect(function (err) {
    if (err) throw err;
    console.log("Connected!");
    // var sql = "INSERT INTO details (username, name,age, gender, interests, phoneno, country, maritalstat, work, prefferedage, city, religion, caste, height, description, hobbies) VALUES ('pathan77', ' "+a+" ', '', '', '', '', '', '', '', '', '', '', '', '', '','')";
    var sql = "SELECT * FROM courses;";
    con.query(sql, function (err, result) {
      if (err) throw err;
      if (result.length > 0) {
        console.log("server:" + result);
        res.json(result);
        con.end();
      } else {
        res.send("0");
        con.end();
      }
      // console.log(result[1].name);
    });
  });
});

// SQL ENDS

app.get("/displaycourse", (req, res) => {
  res.send("This is the data endpoint");
  console.log("Received data:");
});

app.post("/displaycourse", (req, res) => {
  const u = req.body.formdata;

  // SQL STARTS

  var mysql = require("mysql");

  var con = mysql.createConnection({
   host: "bsfwn0d48k1k4wkxc8lx-mysql.services.clever-cloud.com",
    user: "u6mrp0q6gavsuo3y",
    password: "BZpgvyXhFUPP21YbYUUR",
    database: "bsfwn0d48k1k4wkxc8lx",
  });
  const auth = 0;
  con.connect(function (err) {
    if (err) throw err;
    console.log("Connected!");
    // var sql = "INSERT INTO details (username, name,age, gender, interests, phoneno, country, maritalstat, work, prefferedage, city, religion, caste, height, description, hobbies) VALUES ('pathan77', ' "+a+" ', '', '', '', '', '', '', '', '', '', '', '', '', '','')";
    var sql = "SELECT * FROM courses WHERE coursetitle='" + u + "';";
    con.query(sql, function (err, result) {
      if (err) throw err;
      if (result.length > 0) {
        console.log("server:" + result);
        res.json(result);
        con.end();
      } else {
        res.send("0");
        con.end();
      }
      // console.log(result[1].name);
    });
  });
});

app.get("/recentmeals", (req, res) => {
  res.send("This is the data endpoint");
  console.log("Received data:");
});

app.post("/recentmeals", (req, res) => {
  const n = req.body.email;

  // SQL STARTS

  var mysql = require("mysql");

  var con = mysql.createConnection({
   host: "bsfwn0d48k1k4wkxc8lx-mysql.services.clever-cloud.com",
    user: "u6mrp0q6gavsuo3y",
    password: "BZpgvyXhFUPP21YbYUUR",
    database: "bsfwn0d48k1k4wkxc8lx",
  });
  const auth = 0;
  con.connect(function (err) {
    if (err) throw err;
    console.log("Connected!");
    // var sql = "INSERT INTO details (username, name,age, gender, interests, phoneno, country, maritalstat, work, prefferedage, city, religion, caste, height, description, hobbies) VALUES ('pathan77', ' "+a+" ', '', '', '', '', '', '', '', '', '', '', '', '', '','')";
    var sql = "SELECT * FROM recent WHERE email='" + n + "';";
    con.query(sql, function (err, result) {
      if (err) throw err;
      if (result.length > 0) {
        console.log("server:" + result);
        res.json(result);
        con.end();
      } else {
        res.send("0");
        con.end();
      }
      // console.log(result[1].name);
    });
  });
});

app.get("/addcourse", (req, res) => {
  res.send("This is the data endpoint");
  console.log("Received data:");
});
app.get('/addcourse', (req, res) => {

  res.send('This is the data endpoint');
  console.log('Received data:');
});

app.post('/addcourse', (req, res) => {
  
  const n=req.body.form.coursetitle
  const n1=req.body.form.coursetype
  const n2=req.body.form.courseduration
  const n3=req.body.form.coursefee
  const n4=req.body.form.coursedesc
  const n5=req.body.form.pics
  const n0=req.body.form.instructor
  const n6=req.body.form.vids
  const n7=req.body.form.weights
  
  const n8=req.body.form.trainerpic
  const n9=req.body.form.trainername

  console.log(n9);

  const data = {
    trainerid: n0,
    coursetitle: n,
    trainerpic: n8,
    type: n1,
    trainername:n9,
    pics: n5,
    duration: n2,
    description: n4,
    fee: n3,
    weights: n7

  };
  // console.log("DATA RECEIVED "+ n);

  // SQL STARTS


var mysql = require('mysql');

var con = mysql.createConnection({
  host: "bsfwn0d48k1k4wkxc8lx-mysql.services.clever-cloud.com",
  user: "u6mrp0q6gavsuo3y",
  password: "BZpgvyXhFUPP21YbYUUR",
  database: "bsfwn0d48k1k4wkxc8lx", 
});
const auth=0;
con.connect(function(err) {
  if (err) throw err;
  console.log("Connected! addcourse");
  // var sql = "INSERT INTO details (username, name,age, gender, interests, phoneno, country, maritalstat, work, prefferedage, city, religion, caste, height, description, hobbies) VALUES ('pathan77', ' "+a+" ', '', '', '', '', '', '', '', '', '', '', '', '', '','')";
 
  // var sql=  "INSERT INTO `courses` (`trainerid`, `coursetitle`,'type', `videos`, `pics`, `duration`, `description`, `fee`) VALUES ('"+n0+"',"+"'"+n+"',"+"'"+n1+"',"+"'"+n6+"',"+"'"+n5+"',"+"'"+n2+"',"+"'"+n4+"','"+n3+  "')"
  const sql = 'INSERT INTO courses SET ?';

  con.query(sql, data, (error, results, fields) => {
    if (error) {
      console.error('Error inserting data into the database: ', error);
      con.end()
     return;
    }
    console.log('Data inserted successfully.');
    res.send('1')
     
    con.end()
  });
  
  
});


})


app.get('/loadcourses', (req, res) => {

res.send('This is the data endpoint');
console.log('Received data:');
});

app.post('/loadcourses', (req, res) => {

const u=req.body.id.name
// console.log("SScard"+ u);


var mysql = require('mysql');

var con = mysql.createConnection({
host: "bsfwn0d48k1k4wkxc8lx-mysql.services.clever-cloud.com",
    user: "u6mrp0q6gavsuo3y",
    password: "BZpgvyXhFUPP21YbYUUR",
    database: "bsfwn0d48k1k4wkxc8lx",});
const auth=0;
con.connect(function(err) {
if (err) throw err;
console.log("Connected! Load Coruses");
// var sql = "INSERT INTO details (username, name,age, gender, interests, phoneno, country, maritalstat, work, prefferedage, city, religion, caste, height, description, hobbies) VALUES ('pathan77', ' "+a+" ', '', '', '', '', '', '', '', '', '', '', '', '', '','')";
var sql="SELECT * FROM courses WHERE trainerid='"+u+"';";
con.query(sql, function (err, result) {
  if (err) throw err;
  if(result.length>0)
  {
    console.log('server cards data:'+result);
    res.json(result);
    
    con.end()
    
  }
  else
  {
    res.send('0');
    console.log("no coruses");
    con.end()
 
  }
  // console.log(result[1].name);
});

});

})

app.get("/delcourse", (req, res) => {
  res.send("This is the data endpoint");
  console.log("Received data:");
});

app.post("/delcourse", (req, res) => {
  const c = req.body.remove.name;
  const t = req.body.remove.tid;

  // console.log("SScard"+ t+"  "+c);

  var mysql = require("mysql");

  var con = mysql.createConnection({
   host: "bsfwn0d48k1k4wkxc8lx-mysql.services.clever-cloud.com",
    user: "u6mrp0q6gavsuo3y",
    password: "BZpgvyXhFUPP21YbYUUR",
    database: "bsfwn0d48k1k4wkxc8lx",
  });
  const auth = 0;
  con.connect(function (err) {
    if (err) throw err;
    console.log("Connected! DEL Coruses");
    // var sql = "INSERT INTO details (username, name,age, gender, interests, phoneno, country, maritalstat, work, prefferedage, city, religion, caste, height, description, hobbies) VALUES ('pathan77', ' "+a+" ', '', '', '', '', '', '', '', '', '', '', '', '', '','')";
    var sql =
      "DELETE FROM courses WHERE trainerid='" +
      t +
      "' AND coursetitle='" +
      c +
      "';";
    con.query(sql, function (err, result) {
      if (err) {
        res.send("0");

        con.end();
      } else {
        res.send("1");
        con.end();
      }
      // console.log(result[1].name);
    });
  });
});











app.get("/updatedata", (req, res) => {
  res.send("This is the data endpoint");
  console.log("Received data:");
});

app.post("/updatedata", (req, res) => {
  const trainerId = req.body.update.username;
  const description = req.body.update.d;
  const profilePicUrl = req.body.update.pp;

  // SQL STARTS
  var mysql = require("mysql");

  var con = mysql.createConnection({
    host: "bsfwn0d48k1k4wkxc8lx-mysql.services.clever-cloud.com",
    user: "u6mrp0q6gavsuo3y",
    password: "BZpgvyXhFUPP21YbYUUR",
    database: "bsfwn0d48k1k4wkxc8lx",
  });

  con.connect(function (err) {
    if (err) throw err;
    console.log("Connected! Update data");

    if (trainerId && (description || profilePicUrl)) {
      var updateSql = "UPDATE trainersdetails SET";
      var params = [];

      if (description) {
        updateSql += " description = ?";
        params.push(description);
      }

      if (profilePicUrl) {
        if (description) updateSql += ",";
        updateSql += " profilepic = ?";
        params.push(profilePicUrl);
      }

      updateSql += " WHERE trainerid = ?";
      params.push(trainerId);

      con.query(updateSql, params, function (err, result) {
        if (err) {
con.end()
res.send('0')
        }
        console.log("Trainer details updated successfully");
      });

      // Update profilepic in courses table
      if (profilePicUrl) {
        var updateCoursesSql = "UPDATE courses SET trainerpic = ? WHERE trainerid = ?";
        con.query(updateCoursesSql, [profilePicUrl, trainerId], function (err, result) {
          if (err) {
            con.end()
            res.send('0')
                    }
          console.log("Profile picture updated in courses table");
          res.send('1');
        });
      }
    }

    con.end();
  });
});






app.listen(3000, () => {
  console.log("Server started on port 3000");
});
