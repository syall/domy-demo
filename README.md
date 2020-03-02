# [domy-demo](https://domy-demo.syall.work/)

## Overview

**domy-demo** is a demo for the programming language [`domy-lang`](https://github.com/syall/domy-lang).

## Technical Notes

The demo is a simple static HTML page that uses the [`monaco-editor`](https://github.com/Microsoft/monaco-editor).

### domy.js

There is a `runCode` function that encapsulates all of domy (lexer, parser, and interpreter).

However, the `print` function is reassigned to append children nodes in the terminal container instead of printing the output to the console.

## monaco.js

There is a definition of the domy language (syntax highlighting for keywords, operators, symbols, etc.) registered in the `monaco` object. 

It took a while to find out where exactly to import `monaco` from (`'/node_modules/monaco-editor/esm/vs/editor/editor.main.js'`);

### UI

The HTML is simple, having only two containers (source code and terminal) and a button to run the code.

### Deployment

For the build, [parcel](https://parceljs.org/) was used.

However, parcel's bundling process took at least 50 seconds for each build which is ridiculously long, presumably for `node_modules/`.

Although there was no configuration, the server feature was essentially unusable.
