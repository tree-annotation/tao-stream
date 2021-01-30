# TAO Stream module

This module provides a TAO `Stream` creator function which wraps a TAO parse tree into a stream which can be analyzed one element at a time.

## Usage

To use the module, import it into your code, for example like this:

```js
import {parse} from "https://raw.githubusercontent.com/tree-annotation/tao/v1.0-beta/parser.js"
import {Stream} from "https://raw.githubusercontent.com/tree-annotation/tao-stream/v1.0-beta/stream.js"

// ...

console.log(Stream(parse("hello, world!")).next()) // prints `hello, world!`
```

# Stream patterns module

This module provides utility functions to work with TAO streams.

## Usage

```js
import {either} from "https://raw.githubusercontent.com/tree-annotation/tao-stream/v1.0-beta/modules.js"

// ...

either(stream, a, b, c) // returns the value of the first pattern that matches the `stream`: `a`, `b`, or `c` or `undefined` if none matches
```