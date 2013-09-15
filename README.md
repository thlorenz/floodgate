# floodgate
[![build status](https://secure.travis-ci.org/thlorenz/floodgate.png)](http://travis-ci.org/thlorenz/floodgate)

Throttles a stream to pass one value per given interval.

```js
var floodgate = require('../');

var gate = floodgate({ interval: 200 });
gate.pipe(process.stdout);

'hello world'.split('').forEach(gate.write.bind(gate));
```

![demo](https://github.com/thlorenz/floodgate/raw/master/assets/floodgate.gif)

## Status

Nix, Nada, Nichevo, Nothing --> go away!
## Installation

    npm install floodgate

## API


## License

MIT
