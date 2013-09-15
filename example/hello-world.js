'use strict';
var floodgate = require('../');

var gate = floodgate({ interval: 200 });
gate.pipe(process.stdout);

'hello world'.split('').forEach(gate.write.bind(gate));
