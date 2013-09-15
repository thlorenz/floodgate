'use strict';

var util      =  require('util')
  , stream    =  require('stream')
  , Transform =  stream.Transform
  ;

module.exports = Floodgate;

util.inherits(Floodgate, Transform);

function Floodgate (opts) {
  if (!(this instanceof Floodgate)) return new Floodgate(opts);

  opts = opts || {};
  Transform.call(this, opts);
  this._interval = opts.interval || 0;
}

Floodgate.prototype._transform = function (chunk, encoding, cb) {
  var self = this;
  setTimeout(passThru, this._interval);
  function passThru() {
    self.push(chunk);
    cb();
  }
}

// Test
if (!module.parent) {
}
