'use strict';
/*jshint asi: true */

var test = require('tap').test
var floodgate = require('../')

test('\nemits values at given interval', function (t) {
  t.plan(13);

  var interval = 50;
  var data = [];
  var gate = floodgate({ interval: interval });
  gate.on('data', [].push.bind(data))

  // immediately write the entire string
  'hello world'.split('').forEach(gate.write.bind(gate));

  t.deepEqual(data, [], 'no data is passed right away')

  function check(expected, timeout) {
    setTimeout(function () {
      t.deepEqual(data.join(''), expected, 'has "' + data.join('') + '" after ' + timeout + 'ms');
    }, timeout);
  }

  check('h'           ,  interval + 25);
  check('he'          ,  interval * 2 + 25);
  check('hel'         ,  interval * 3 + 25);
  check('hell'        ,  interval * 4 + 25);
  check('hello'       ,  interval * 5 + 25);
  check('hello '      ,  interval * 6 + 25);
  check('hello w'     ,  interval * 7 + 25);
  check('hello wo'    ,  interval * 8 + 25);
  check('hello wor'   ,  interval * 9 + 25);
  check('hello worl'  ,  interval * 10 + 25);
  check('hello world' ,  interval * 11 + 25);
  check('hello world' ,  interval * 12 + 25);
})
