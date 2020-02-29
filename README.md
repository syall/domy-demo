# [domy-demo](https://domy-demo.syall.work/)

## Overview

**domy-demo** is a demo for the programming language [`domy-lang`](https://github.com/syall/domy-lang).

## Technical Notes

The demo is a simple static html page that uses the [`monaco-editor`](https://github.com/Microsoft/monaco-editor).

### domy.js

There is a `runCode` function that encapsulates all of domy (lexer, parser, and interpreter).

However, the `print` function is reassigned to append children nodes in the terminal container instead of printing the output to the console.

## monaco.js

To use `monaco-editor`, there is a definition of the domy language, using syntax highlighting for keywords, operators, symbols, etc.

However, it did take a while to find out where exactly to import monaco from the `node_modules/` (`'/node_modules/monaco-editor/esm/vs/editor/editor.main.js'`);

### UI

The HTML is simple, having only two containers for the source code and terminal as well as a button for running the code.

### Deployment

For the build, [parcel](https://parceljs.org/) was used.

However, I do not know if it was because of how parcel bundles the `node_modules/`, it took at least 50 seconds for each build which is ridiculously long.

Although there was no configuration, the server feature was unusable.
