import * as monaco from './node_modules/monaco-editor/esm/vs/editor/editor.main.js';

monaco.languages.register({ id: 'domy' });

monaco.languages.setMonarchTokensProvider('domy', {
    keywords: [
        'continue', 'do', 'break', 'return',
        'while', 'true', 'false', 'my'
    ],
    operators: [
        '=', '!', '&', '|', '^',
        '?', ':', '==', '!=',
    ],
    symbols: /[=<!?:&|\^]+/,
    tokenizer: {
        root: [
            [/[a-z][a-z_A-Z0-9$]*[\w$]*/, {
                cases: {
                    '@keywords': 'keyword',
                    '@default': 'identifier'
                }
            }],
            { include: '@whitespace' },
            [/[{}()]/, '@brackets'],
            [/@symbols/, {
                cases: {
                    '@operators': 'operator',
                    '@default': ''
                }
            }],
            [/[;,]/, 'delimiter']
        ],
        whitespace: [
            [/[ \t\r\n]+/, 'white'],
            [/#.*$/, 'comment'],
        ],
    },
});

monaco.editor.defineTheme('domyTheme', {
    base: 'vs',
    inherit: true,
    rules: [
        { token: 'operator', foreground: '606060' },
    ]
});

window.editor = monaco.editor.create(document.getElementById('container'), {
    value: [
        '# Welcome to Domy!',
        'my stat = do(arg1, arg2) {',
        '\treturn arg1 & arg2;',
        '}',
        'print(stat);',
        'print(stat(true, true));',
        'stat = false;',
        'my fn = while stat = !stat {',
        '\tstat & print(stat) & continue;',
        '\t!stat & break;',
        '}'
    ].join('\n'),
    theme: 'domyTheme',
    language: 'domy'
});
