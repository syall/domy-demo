import DomyLexer from './node_modules/domy-lang/bin/lexer.js';
import DomyParser from './node_modules/domy-lang/bin/parser.js';
import DomyInterpreter from './node_modules/domy-lang/bin/interpreter.js';
import { tokenTypes } from './node_modules/domy-lang/bin/utils.js';

window.runCode = runCode;
export function runCode() {

    // Code
    const text = editor.getValue();

    // Lexer
    const lexer = new DomyLexer();
    lexer.tokenize(text);

    // Parser
    const parser = new DomyParser();
    parser.parse(lexer.record.pop(), text);

    // Output
    const replace = document.createElement('code');
    replace.id = 'terminal';
    document.getElementById('terminal').replaceWith(replace);

    // Interpreter
    const runner = new DomyInterpreter();
    runner.global.reassign('print', {
        type: tokenTypes.std,
        args: ['toPrint'],
        value: arg => {
            const out = JSON.stringify(
                arg.type === tokenTypes.func
                    ? arg
                    : arg.value,
                [
                    'name', 'text', 'type', 'args',
                    'value', 'cond', 'left', 'right'
                ],
                2
            );
            const node = document.createElement('div');
            node.innerHTML = out;
            replace.appendChild(node);
            return { value: true };
        }
    });
    runner.run(parser.record.pop());

}
