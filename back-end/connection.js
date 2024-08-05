const mysql=require('mysql');
const express = require('express');
const db=mysql.createConnection({
    host:'localhost',
    user:'root',
    password:'dimi123',
    database:'2sens_test_db'
})

db.connect((err)=>
{
    if(err) console.log("erreur lors de la connection a la base de donne")
        console.log("connection bien etablie")
})

module.exports=db;