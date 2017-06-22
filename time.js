const express = require('express');
const router = express.Router();
const path = require('path');
const moment = require('moment');

router.get('/',function (req, res, next){
  res.sendFile(path.join(__dirname, '/index.html')); 
})

router.get('/:date', function (req, res, next){
  var formats = [
    'X',
    'MMMM D, YYYY',
    'MMMM D YYYY',
    'MMM D, YYYY',
    'MMM D YYYY',
    'D MMMM YYYY',
    'D MMM YYYY',
  ];

  var date = moment(req.params.date, formats, true);

  var dateObj;

  if (date.isValid()) {
    dateObj = {
      unix: Number(date.format('X')),
      natural: date.format('MMMM D, YYYY')
    };
  } else {
    dateObj = {
      unix: null,
      natural: null
    };
  }
  res.json(dateObj);
});

module.exports = router;