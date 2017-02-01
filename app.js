"use strict";
const express = require('express');
const app = express();
const config = require('./config/config.json');


app.get('/', function (req, res) {
  res.send('Take yo shit!')
})


var email = require("mailer");

var cron = require('node-schedule');
var rule = new cron.RecurrenceRule();
rule.hour = 23;
rule.minute = 00;

cron.scheduleJob(rule, function(){
  console.log("EXECUTE")
  console.log(Date.now());
  email.send(config,
    function(err, result){
      if(err){ console.log(err); }
  });

})

app.listen(3000, function () {
  console.log('Example app listening on port 3000!')
})