const express = require('express');
const app = express();
const cors = require('cors');

const mysql = require('mysql2');
const{ response } = require('express');
app.use(cors());

JSON.stringify(result)

//http://localhost:8081/poc2?xyz=3

const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'cdac',
    database: 'akshay-1194',
	port:3306
});

 app.get('/read', function (req,res) {

 const {bookid} =req.body
 const statement = 'select * from book where bookid = ?'

 connection.query (statement, [bookid], (error,res) =>{
    if (error) {
        res.send(error)
    }
    else{
        res.send(res)
    }
 })
 });

 app.get('/update', function (req, res){

    const {bookid, price} =req.body
    const statement = 'update book set price= ? where bookid = ?'

    connection.query (statement, [price, bookid], (error, res) =>{
        if (error) {
            res.send(error)
        }
        else{
            res.send(res)
        }
    })
 });

 app.listen(8081, function(){
    console.log("server listening at port 8081...");
 });