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
    db.query("INSERT INTO answers (username, area, Level) VALUES (?, ?, ?)", [username, answerOne, answerTwo], (err) => {
        if (err){
            res.status(418).send('Could not submit answers')
        } else {
            res.send({username: username ,answerOne: answerOne, answerTwo: answerTwo})
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
    db.query("SELECT username, RANK() OVER ( ORDER BY points DESC) as USER_RANK FROM users;", (err, result) => {
        if (err){
            res.status(418).send('An error occured')
        }
        if (result){
            console.log(result)
            res.send(result)
        }
    }) 
})


app.listen(8080, () => {
    console.log('server listening on port 8080')
})