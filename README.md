# floodgate [![build status](https://secure.travis-ci.org/thlorenz/floodgate.png)](http://travis-ci.org/thlorenz/floodgate)

Throttles a stream to pass one value per given interval.

```js
var floodgate = require('floodgate');

var gate = floodgate({ interval: 200 });
gate.pipe(process.stdout);

'hello world'.split('').forEach(gate.write.bind(gate));
```

![demo](https://github.com/thlorenz/floodgate/raw/master/assets/floodgate.gif)

## Installation

    npm install floodgate

## API

### *floodgate(opts)*

```
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
 ```

## License

MIT
