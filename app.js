"use strict";
var express = require('express')
var app = express()

app.get('/', function (req, res) {
  res.send('Take yo shit!')
})

// var j = schedule.scheduleJob('*/0.5 * * *', function(){
//   console.log('The answer to life, the universe, and everything!');
// });
var cron = require('node-schedule');
var rule = new cron.RecurrenceRule();
rule.hour = 19;
rule.minute = 2;
/*cron.scheduleJob('/2 * * * * *', function(){
    console.log('Hello');
});*/
cron.scheduleJob(rule, function(){
  console.log("EXECUTE ME")
  console.log(Date.now());
})

app.listen(3000, function () {
  console.log('Example app listening on port 3000!')
})