const express = require('express')
const fs=require('fs')
const app=express()
const cors = require('cors')
app.use(cors())

const conn = require('./db/conn.js')
const Data = require("./db/models/sample.js")

app.get('/getdata', (req, res) => {
    fs.readFile("./sample_data.json", "utf8", (err, data) => {
      if (err) {
        console.log("File read failed:", err);
        return;
      }
      temp1 = JSON.parse(data);
      Data.insertMany(temp1, (err, result) => {
        if (err) throw err;
        console.log(`${result.length} documents were inserted into MongoDB!`);
        
       res.send(temp1)
      });
    });
  })



app.listen(3800)