parcelRequire=function(e,r,t,n){var i,o="function"==typeof parcelRequire&&parcelRequire,u="function"==typeof require&&require;function f(t,n){if(!r[t]){if(!e[t]){var i="function"==typeof parcelRequire&&parcelRequire;if(!n&&i)return i(t,!0);if(o)return o(t,!0);if(u&&"string"==typeof t)return u(t);var c=new Error("Cannot find module '"+t+"'");throw c.code="MODULE_NOT_FOUND",c}p.resolve=function(r){return e[t][1][r]||r},p.cache={};var l=r[t]=new f.Module(t);e[t][0].call(l.exports,p,l,l.exports,this)}return r[t].exports;function p(e){return f(p.resolve(e))}}f.isParcelRequire=!0,f.Module=function(e){this.id=e,this.bundle=f,this.exports={}},f.modules=e,f.cache=r,f.parent=o,f.register=function(r,t){e[r]=[function(e,r){r.exports=t},{}]};for(var c=0;c<t.length;c++)try{f(t[c])}catch(e){i||(i=e)}if(t.length){var l=f(t[t.length-1]);"object"==typeof exports&&"undefined"!=typeof module?module.exports=l:"function"==typeof define&&define.amd?define(function(){return l}):n&&(this[n]=l)}if(parcelRequire=f,i)throw i;return f}({"n8Aw":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.language=exports.conf=void 0;var e={comments:{lineComment:"*"},brackets:[["[","]"],["(",")"]]};exports.conf=e;var t=["abstract","add","add-corresponding","adjacent","alias","aliases","all","append","appending","ascending","as","assert","assign","assigned","assigning","association","authority-check","back","begin","binary","block","bound","break-point","by","byte","class","call","cast","changing","check","class-data","class-method","class-methods","clear","close","cnt","collect","commit","cond","character","corresponding","communication","component","compute","concatenate","condense","constants","conv","count","controls","convert","create","currency","data","descending","default","define","deferred","delete","describe","detail","display","divide","divide-corresponding","display-mode","duplicates","deleting","editor-call","end","endexec","endfunction","ending","endmodule","end-of-definition","end-of-page","end-of-selection","end-test-injection","end-test-seam","exit-command","endclass","endmethod","endform","endinterface","endprovide","endselect","endtry","endwhile","enum","event","events","exec","exit","export","exporting","extract","exception","exceptions","field-symbols","field-groups","field","first","fetch","fields","format","frame","free","from","function","find","for","found","function-pool","generate","get","handle","hide","hashed","include","import","importing","index","infotypes","initial","initialization","id","is","in","interface","interfaces","init","input","insert","instance","into","key","left-justified","leave","like","line","line-count","line-size","load","local","log-point","length","left","leading","lower","matchcode","method","mesh","message","message-id","methods","modify","module","move","move-corresponding","multiply","multiply-corresponding","match","new","new-line","new-page","new-section","next","no","no-gap","no-gaps","no-sign","no-zero","non-unique","number","occurrence","object","obligatory","of","output","overlay","optional","others","occurrences","occurs","offset","options","pack","parameters","perform","places","position","print-control","private","program","protected","provide","public","put","radiobutton","raising","ranges","receive","receiving","redefinition","reduce","reference","refresh","regex","reject","results","requested","ref","replace","report","reserve","restore","result","return","returning","right-justified","rollback","read","read-only","rp-provide-from-last","run","scan","screen","scroll","search","select","select-options","selection-screen","stamp","source","subkey","separated","set","shift","single","skip","sort","sorted","split","standard","stamp","starting","start-of-selection","sum","subtract-corresponding","statics","step","stop","structure","submatches","submit","subtract","summary","supplied","suppress","section","syntax-check","syntax-trace","system-call","switch","tables","table","task","testing","test-seam","test-injection","then","time","times","title","titlebar","to","top-of-page","trailing","transfer","transformation","translate","transporting","types","type","type-pool","type-pools","unassign","unique","uline","unpack","update","upper","using","value","when","while","window","write","where","with","work","at","case","catch","continue","do","elseif","else","endat","endcase","enddo","endif","endloop","endon","if","loop","on","raise","try","abs","sign","ceil","floor","trunc","frac","acos","asin","atan","cos","sin","tan","cosh","sinh","tanh","exp","log","log10","sqrt","strlen","xstrlen","charlen","lines","numofchar","dbmaxlen","round","rescale","nmax","nmin","cmax","cmin","boolc","boolx","xsdbool","contains","contains_any_of","contains_any_not_of","matches","line_exists","ipow","char_off","count","count_any_of","count_any_not_of","distance","condense","concat_lines_of","escape","find","find_end","find_any_of","find_any_not_of","insert","match","repeat","replace","reverse","segment","shift_left","shift_right","substring","substring_after","substring_from","substring_before","substring_to","to_upper","to_lower","to_mixed","from_mixed","translate","bit-set","line_index","definition","implementation","public","inheriting","final"],n={defaultToken:"invalid",ignoreCase:!0,tokenPostfix:".abap",keywords:t,typeKeywords:["abap_bool","string","xstring","any","clike","csequence","numeric","xsequence","c","n","i","p","f","d","t","x"],operators:["+","-","/","*","=","<",">","<=",">=","<>","><","=<","=>","EQ","NE","GE","LE","CS","CN","CA","CO","CP","NS","NA","NP"],symbols:/[=><!~?&+\-*\/\^%]+/,tokenizer:{root:[[/[a-z_$][\w$]*/,{cases:{"@typeKeywords":"keyword","@keywords":"keyword","@default":"identifier"}}],{include:"@whitespace"},[/[:,.]/,"delimiter"],[/[{}()\[\]]/,"@brackets"],[/@symbols/,{cases:{"@operators":"operator","@default":""}}],[/'/,{token:"string",bracket:"@open",next:"@stringquote"}],[/\|/,{token:"string",bracket:"@open",next:"@stringtemplate"}],[/\d+/,"number"]],stringtemplate:[[/[^\\\|]+/,"string"],[/\\\|/,"string"],[/\|/,{token:"string",bracket:"@close",next:"@pop"}]],stringquote:[[/[^\\']+/,"string"],[/'/,{token:"string",bracket:"@close",next:"@pop"}]],whitespace:[[/[ \t\r\n]+/,""],[/^\*.*$/,"comment"],[/\".*$/,"comment"]]}};exports.language=n;
},{}]},{},["n8Aw"], null)
//# sourceMappingURL=https://syall.github.io/domy-demo/abap.78954cb7.js.map