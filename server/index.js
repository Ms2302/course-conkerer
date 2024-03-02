const express = require('express');
const app = express();
const cors = require('cors');
const mysql = require('mysql');
const { error } = require('console');
const bodyParser = require('body-parser');
const bcrypt = require('bcrypt');

app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());
app.use(cors());

const db = mysql.createPool({
    connectionLimit : 10,
    host            : 'localhost',
    user            : 'root',
    password        : 'ChiliJones3392',
    database        : 'coursecurator',
});

const saltRounds = 10;

app.post('/signup', (req, res) => {
    const username = req.body.username;
    const password = req.body.password;
    bcrypt.hash(password, saltRounds, (err, hashedPassword) => {
        if (err){
            res.status(418).send('Could not hash password...')
        } else{
            db.query("INSERT INTO users (username, password) VALUES (?, ?)", [username, hashedPassword], (err, results) => {
                if (err){
                    res.status(418).send('Could not register user')
                } else {
                    res.send({username: username})
                }
            })
        }
    })
    
})

app.post('/signin', (req, res) => {
    const username = req.body.username;
    const password = req.body.password;
    db.query("SELECT * FROM users WHERE username = ?", [username], (err, result) =>{
        if (err) {
            res.status(418).send(err.message)
        } else if (result.length < 1){
            res.status(418).send("username doesn not match")
        } else{
            bcrypt.compare(password, result[0].password, (err, match) => {
                if (match) {
                    res.send({username})
                }
                if (!match){
                    res.status(418).send("password did not match")
                }
            })
        }
    })
})

app.post('/questionnaire', (req, res) => {
    const username = req.body.user;
    const answerOne = req.body.answerOne;
    const answerTwo = req.body.answerTwo;
    console.log(username,answerOne,answerTwo)
    db.query("INSERT INTO answers (username, area, Level) VALUES (?, ?, ?) ON DUPLICATE KEY UPDATE area = ?, Level = ?", [username, answerOne, answerTwo, answerOne, answerTwo], (err) => {
        if (err){
            res.status(418).send('Could not submit answers')
        } else {
            res.send({username: username ,answerOne: answerOne, answerTwo: answerTwo})
        }
    })
})

app.post('/rate', (req, res) => {
    const courseID = parseInt(req.body.id);
    const rating = parseFloat(req.body.rating);
    console.log(courseID,rating)
    db.query("UPDATE courses SET rating = (rating + ?)/2 WHERE id = ?;", [rating, courseID], (err) => {
        if (err){
            res.status(418).send('Could not submit answers')
        } else {
            res.send("updates")
        }
    })
})

app.post('/addPoints', (req, res) => {
    const username = req.body.user;
    const points = parseInt(req.body.points);
    db.query("UPDATE users SET points = (points + ?) WHERE username = ?;", [points, username], (err) => {
        if (err){
            res.status(418).send('Could not submit answers')
        } else {
            res.send("updates")
        }
    })
})

app.get('/checkActivityCount', (req, res) => {
    const username = req.query.user;
    db.query("SELECT activitiesToday FROM users WHERE username = ?;", [username], (err,result) => {
        if (err){
            res.status(418).send('An error occured')
        }
        else{
            console.log(result)
            res.send(result)
        }
    }) 
})

app.post('/changeActivityCount', (req, res) => {
    const username = req.body.user;
    db.query("UPDATE users SET activitiesToday = (activitiesToday - 1)  WHERE username = ?;", [username], (err) => {
        if (err){
            res.status(418).send('An error occured')
        }
        else{
            console.log("count - 1 ")
            res.send("changed")
        }
    }) 
})

app.post('/updateTimestamp',(req,res)=>{
    const sqlTime = req.body.sqlTime;
    console.log(sqlTime)
    db.query("update lastrecordeddate SET timestamp = ? where id = 1", [sqlTime], (err) => {
        if (err){
            res.status(418).send('An error occured')
        }
        else{
            res.send("changed")
        }
    })
})

app.post('/updateTasks',(req,res)=>{
    console.log("changing")
    db.query("update users SET activitiesToday = 5", (err) => {
        if (err){
            res.status(418).send('An error occured')
        }
        else{
            res.send("changed")
        }
    })
})

app.get('/getTargetTime', (req, res) => {
    db.query("SELECT timestamp FROM lastrecordeddate WHERE id = 1", (err, result) => {
        if (err){
            console.log("aww")
            res.status(418).send('An error occured')
        }
        if (result){
            console.log("yay")
            console.log(result)
            res.send(result)
        }
    }) 
})

app.get('/Questions', (req, res) => {
    const username = req.query.user
    console.log("username" , username)
    db.query("SELECT area, Level FROM answers WHERE username = ?", [username], (err, result) => {
        if (err){
            res.status(418).send('An error occured')
        }
        if (result){
            res.send(result)
        }
    }) 
})

app.get('/tasksLeft', (req, res) => {
    const username = req.query.user
    db.query("SELECT activitiesToday FROM users WHERE username = ?", [username], (err, result) => {
        if (err){
            
            res.status(418).send('An error occured')
        }
        if (result){
            console.log("AHHHHhh")
            res.send(result)
        }
    }) 
})

app.get('/profile', (req, res) => {
    const username = req.query.user
    console.log("username" , username)
    db.query("SELECT points FROM users WHERE username = ?", [username], (err, result) => {
        if (err){
            res.status(418).send('An error occured')
        }
        if (result){
            res.send(result)
        }
    }) 
})

app.get('/LeaderBoard', (req, res) => {
    console.log('result')
    db.query("SELECT username, points, RANK() OVER ( ORDER BY points DESC) as USER_RANK FROM users;", (err, result) => {
        if (err){
            res.status(418).send('An error occured')
        }
        if (result){
            console.log(result)
            res.send(result)
        }
    }) 
})

app.get('/data', (req, res)=>{
    const fs = require('fs')
    fs.unlink("E:/Course Curator/portfolio-app-react/client/src/data/temp.json", (err, result) =>{
        if (err){
            res.status(418).send('An error occured')
        }
        if (result){
            console.log("removed file")
            res.send(result)
        }
    })
    
    
    db.query("SELECT JSON_PRETTY(JSON_ARRAYAGG(JSON_OBJECT('id', id, 'title', title, 'stars', stars, 'time', time, 'URL', URL, 'Level', Level, 'category', category, 'img', img, 'rating', rating))) from courses INTO OUTFILE 'E:/Course Curator/portfolio-app-react/client/src/data/temp.json' FIELDS Terminated BY '\n' ESCAPED BY '';", (err, result)=>{
        if (err){
            res.status(418).send('An error occured');
        }
        if (result){
            
            fs.copyFile("E:/Course Curator/portfolio-app-react/client/src/data/temp.json","E:/Course Curator/portfolio-app-react/client/src/data/test.json",(err)=>{
                if (err){
                    console.log("Error Found: ", err);
                }
                if (result){
                    console.log("copied")
                    res.send(result)

                }
            })
        }
        })
    })


app.listen(8080, () => {
    console.log('server listening on port 8080')
})