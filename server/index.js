const express = require('express');
const app = express();
const cors = require('cors');
const mysql = require('mysql');
const { error } = require('console');
const bodyParser = require('body-parser');

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

app.post('/signup', (req, res) => {
    const username = req.body.username;
    const password = req.body.password;
    db.query("INSERT INTO users (username, password) VALUES (?, ?)", [username, password], (err, results) => {
        if (err){
            console.log(err)
        } else {
            res.send({username: username})
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

app.listen(8080, () => {
    console.log('server listening on port 8080')
})