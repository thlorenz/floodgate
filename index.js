'use strict';

var util      =  require('util')
  , stream    =  require('stream')
  , Transform =  stream.Transform
  ;

module.exports = Floodgate;

util.inherits(Floodgate, Transform);

/**
 * Creates a transform stream that will delay passing values through according to the given interval.
 *
 * Note:
 *  Passing and interval of 0 is useful in order to keep any streams in your pipe chain from blocking the
 *  event loop.
 *
 * @name Floodgate
 * @function
 * @param opts {Object} typical TransformStream options (like highWaterMark) and one additional:
 *  - interval: the interval at which to time out passing through values
 * @return {TransformStream} stream that can be added to a pipe in order to delay values coming through
 */
function Floodgate (opts) {
  if (!(this instanceof Floodgate)) return new Floodgate(opts);

  opts = opts || {};
  Transform.call(this, opts);
  this._interval = opts.interval || 0;
}

Floodgate.prototype._transform = function (chunk, encoding, cb) {
  var self = this;
  this._timer = setTimeout(passThru, this._interval);
  function passThru() {
    self.push(chunk);
    clearTimeout(self._timer);
    cb();
  }
}
