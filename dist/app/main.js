/* js-yaml 3.3.1 https://github.com/nodeca/js-yaml */
/* jshint ignore:start */
!function(e){if("object"==typeof exports&&"undefined"!=typeof module)module.exports=e();else if("function"==typeof define&&define.amd)define([],e);else{var t;t="undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:this,t.jsyaml=e()}}(function(){return function e(t,n,i){function r(a,s){if(!n[a]){if(!t[a]){var u="function"==typeof require&&require;if(!s&&u)return u(a,!0);if(o)return o(a,!0);var c=new Error("Cannot find module '"+a+"'");throw c.code="MODULE_NOT_FOUND",c}var l=n[a]={exports:{}};t[a][0].call(l.exports,function(e){var n=t[a][1][e];return r(n?n:e)},l,l.exports,e,t,n,i)}return n[a].exports}for(var o="function"==typeof require&&require,a=0;a<i.length;a++)r(i[a]);return r}({1:[function(e,t,n){"use strict";function i(e){return function(){throw new Error("Function "+e+" is deprecated and cannot be used.")}}var r=e("./js-yaml/loader"),o=e("./js-yaml/dumper");t.exports.Type=e("./js-yaml/type"),t.exports.Schema=e("./js-yaml/schema"),t.exports.FAILSAFE_SCHEMA=e("./js-yaml/schema/failsafe"),t.exports.JSON_SCHEMA=e("./js-yaml/schema/json"),t.exports.CORE_SCHEMA=e("./js-yaml/schema/core"),t.exports.DEFAULT_SAFE_SCHEMA=e("./js-yaml/schema/default_safe"),t.exports.DEFAULT_FULL_SCHEMA=e("./js-yaml/schema/default_full"),t.exports.load=r.load,t.exports.loadAll=r.loadAll,t.exports.safeLoad=r.safeLoad,t.exports.safeLoadAll=r.safeLoadAll,t.exports.dump=o.dump,t.exports.safeDump=o.safeDump,t.exports.YAMLException=e("./js-yaml/exception"),t.exports.MINIMAL_SCHEMA=e("./js-yaml/schema/failsafe"),t.exports.SAFE_SCHEMA=e("./js-yaml/schema/default_safe"),t.exports.DEFAULT_SCHEMA=e("./js-yaml/schema/default_full"),t.exports.scan=i("scan"),t.exports.parse=i("parse"),t.exports.compose=i("compose"),t.exports.addConstructor=i("addConstructor")},{"./js-yaml/dumper":3,"./js-yaml/exception":4,"./js-yaml/loader":5,"./js-yaml/schema":7,"./js-yaml/schema/core":8,"./js-yaml/schema/default_full":9,"./js-yaml/schema/default_safe":10,"./js-yaml/schema/failsafe":11,"./js-yaml/schema/json":12,"./js-yaml/type":13}],2:[function(e,t,n){"use strict";function i(e){return"undefined"==typeof e||null===e}function r(e){return"object"==typeof e&&null!==e}function o(e){return Array.isArray(e)?e:i(e)?[]:[e]}function a(e,t){var n,i,r,o;if(t)for(o=Object.keys(t),n=0,i=o.length;i>n;n+=1)r=o[n],e[r]=t[r];return e}function s(e,t){var n,i="";for(n=0;t>n;n+=1)i+=e;return i}function u(e){return 0===e&&Number.NEGATIVE_INFINITY===1/e}t.exports.isNothing=i,t.exports.isObject=r,t.exports.toArray=o,t.exports.repeat=s,t.exports.isNegativeZero=u,t.exports.extend=a},{}],3:[function(e,t,n){"use strict";function i(e,t){var n,i,r,o,a,s,u;if(null===t)return{};for(n={},i=Object.keys(t),r=0,o=i.length;o>r;r+=1)a=i[r],s=String(t[a]),"!!"===a.slice(0,2)&&(a="tag:yaml.org,2002:"+a.slice(2)),u=e.compiledTypeMap[a],u&&F.call(u.styleAliases,s)&&(s=u.styleAliases[s]),n[a]=s;return n}function r(e){var t,n,i;if(t=e.toString(16).toUpperCase(),255>=e)n="x",i=2;else if(65535>=e)n="u",i=4;else{if(!(4294967295>=e))throw new I("code point within a string may not be greater than 0xFFFFFFFF");n="U",i=8}return"\\"+n+j.repeat("0",i-t.length)+t}function o(e){this.schema=e.schema||S,this.indent=Math.max(1,e.indent||2),this.skipInvalid=e.skipInvalid||!1,this.flowLevel=j.isNothing(e.flowLevel)?-1:e.flowLevel,this.styleMap=i(this.schema,e.styles||null),this.sortKeys=e.sortKeys||!1,this.implicitTypes=this.schema.compiledImplicit,this.explicitTypes=this.schema.compiledExplicit,this.tag=null,this.result="",this.duplicates=[],this.usedDuplicates=null}function a(e,t){for(var n,i=j.repeat(" ",t),r=0,o=-1,a="",s=e.length;s>r;)o=e.indexOf("\n",r),-1===o?(n=e.slice(r),r=s):(n=e.slice(r,o+1),r=o+1),n.length&&"\n"!==n&&(a+=i),a+=n;return a}function s(e,t){return"\n"+j.repeat(" ",e.indent*t)}function u(e,t){var n,i,r;for(n=0,i=e.implicitTypes.length;i>n;n+=1)if(r=e.implicitTypes[n],r.resolve(t))return!0;return!1}function c(e){this.source=e,this.result="",this.checkpoint=0}function l(e,t,n){var i,r,o,s,l,f,m,g,y,x,v,A,b,w,C,k,j,I,S,O,E;if(0===t.length)return void(e.dump="''");if(-1!==te.indexOf(t))return void(e.dump="'"+t+"'");for(i=!0,r=t.length?t.charCodeAt(0):0,o=M===r||M===t.charCodeAt(t.length-1),(K===r||G===r||V===r||J===r)&&(i=!1),o?(i=!1,s=!1,l=!1):(s=!0,l=!0),f=!0,m=new c(t),g=!1,y=0,x=0,v=e.indent*n,A=80,40>v?A-=v:A=40,w=0;w<t.length;w++){if(b=t.charCodeAt(w),i){if(h(b))continue;i=!1}f&&b===P&&(f=!1),C=ee[b],k=d(b),(C||k)&&(b!==T&&b!==D&&b!==P?(s=!1,l=!1):b===T&&(g=!0,f=!1,w>0&&(j=t.charCodeAt(w-1),j===M&&(l=!1,s=!1)),s&&(I=w-y,y=w,I>x&&(x=I))),b!==D&&(f=!1),m.takeUpTo(w),m.escapeChar())}if(i&&u(e,t)&&(i=!1),S="",(s||l)&&(O=0,t.charCodeAt(t.length-1)===T&&(O+=1,t.charCodeAt(t.length-2)===T&&(O+=1)),0===O?S="-":2===O&&(S="+")),l&&A>x&&(s=!1),g||(l=!1),i)e.dump=t;else if(f)e.dump="'"+t+"'";else if(s)E=p(t,A),e.dump=">"+S+"\n"+a(E,v);else if(l)S||(t=t.replace(/\n$/,"")),e.dump="|"+S+"\n"+a(t,v);else{if(!m)throw new Error("Failed to dump scalar value");m.finish(),e.dump='"'+m.result+'"'}}function p(e,t){var n,i="",r=0,o=e.length,a=/\n+$/.exec(e);for(a&&(o=a.index+1);o>r;)n=e.indexOf("\n",r),n>o||-1===n?(i&&(i+="\n\n"),i+=f(e.slice(r,o),t),r=o):(i&&(i+="\n\n"),i+=f(e.slice(r,n),t),r=n+1);return a&&"\n"!==a[0]&&(i+=a[0]),i}function f(e,t){if(""===e)return e;for(var n,i,r,o=/[^\s] [^\s]/g,a="",s=0,u=0,c=o.exec(e);c;)n=c.index,n-u>t&&(i=s!==u?s:n,a&&(a+="\n"),r=e.slice(u,i),a+=r,u=i+1),s=n+1,c=o.exec(e);return a&&(a+="\n"),a+=u!==s&&e.length-u>t?e.slice(u,s)+"\n"+e.slice(s+1):e.slice(u)}function h(e){return N!==e&&T!==e&&_!==e&&B!==e&&W!==e&&Z!==e&&z!==e&&X!==e&&U!==e&&q!==e&&$!==e&&L!==e&&Q!==e&&H!==e&&P!==e&&D!==e&&Y!==e&&R!==e&&!ee[e]&&!d(e)}function d(e){return!(e>=32&&126>=e||133===e||e>=160&&55295>=e||e>=57344&&65533>=e||e>=65536&&1114111>=e)}function m(e,t,n){var i,r,o="",a=e.tag;for(i=0,r=n.length;r>i;i+=1)A(e,t,n[i],!1,!1)&&(0!==i&&(o+=", "),o+=e.dump);e.tag=a,e.dump="["+o+"]"}function g(e,t,n,i){var r,o,a="",u=e.tag;for(r=0,o=n.length;o>r;r+=1)A(e,t+1,n[r],!0,!0)&&(i&&0===r||(a+=s(e,t)),a+="- "+e.dump);e.tag=u,e.dump=a||"[]"}function y(e,t,n){var i,r,o,a,s,u="",c=e.tag,l=Object.keys(n);for(i=0,r=l.length;r>i;i+=1)s="",0!==i&&(s+=", "),o=l[i],a=n[o],A(e,t,o,!1,!1)&&(e.dump.length>1024&&(s+="? "),s+=e.dump+": ",A(e,t,a,!1,!1)&&(s+=e.dump,u+=s));e.tag=c,e.dump="{"+u+"}"}function x(e,t,n,i){var r,o,a,u,c,l,p="",f=e.tag,h=Object.keys(n);if(e.sortKeys===!0)h.sort();else if("function"==typeof e.sortKeys)h.sort(e.sortKeys);else if(e.sortKeys)throw new I("sortKeys must be a boolean or a function");for(r=0,o=h.length;o>r;r+=1)l="",i&&0===r||(l+=s(e,t)),a=h[r],u=n[a],A(e,t+1,a,!0,!0)&&(c=null!==e.tag&&"?"!==e.tag||e.dump&&e.dump.length>1024,c&&(l+=e.dump&&T===e.dump.charCodeAt(0)?"?":"? "),l+=e.dump,c&&(l+=s(e,t)),A(e,t+1,u,!0,c)&&(l+=e.dump&&T===e.dump.charCodeAt(0)?":":": ",l+=e.dump,p+=l));e.tag=f,e.dump=p||"{}"}function v(e,t,n){var i,r,o,a,s,u;for(r=n?e.explicitTypes:e.implicitTypes,o=0,a=r.length;a>o;o+=1)if(s=r[o],(s.instanceOf||s.predicate)&&(!s.instanceOf||"object"==typeof t&&t instanceof s.instanceOf)&&(!s.predicate||s.predicate(t))){if(e.tag=n?s.tag:"?",s.represent){if(u=e.styleMap[s.tag]||s.defaultStyle,"[object Function]"===E.call(s.represent))i=s.represent(t,u);else{if(!F.call(s.represent,u))throw new I("!<"+s.tag+'> tag resolver accepts not "'+u+'" style');i=s.represent[u](t,u)}e.dump=i}return!0}return!1}function A(e,t,n,i,r){e.tag=null,e.dump=n,v(e,n,!1)||v(e,n,!0);var o=E.call(e.dump);i&&(i=0>e.flowLevel||e.flowLevel>t),(null!==e.tag&&"?"!==e.tag||2!==e.indent&&t>0)&&(r=!1);var a,s,u="[object Object]"===o||"[object Array]"===o;if(u&&(a=e.duplicates.indexOf(n),s=-1!==a),s&&e.usedDuplicates[a])e.dump="*ref_"+a;else{if(u&&s&&!e.usedDuplicates[a]&&(e.usedDuplicates[a]=!0),"[object Object]"===o)i&&0!==Object.keys(e.dump).length?(x(e,t,e.dump,r),s&&(e.dump="&ref_"+a+(0===t?"\n":"")+e.dump)):(y(e,t,e.dump),s&&(e.dump="&ref_"+a+" "+e.dump));else if("[object Array]"===o)i&&0!==e.dump.length?(g(e,t,e.dump,r),s&&(e.dump="&ref_"+a+(0===t?"\n":"")+e.dump)):(m(e,t,e.dump),s&&(e.dump="&ref_"+a+" "+e.dump));else{if("[object String]"!==o){if(e.skipInvalid)return!1;throw new I("unacceptable kind of an object to dump "+o)}"?"!==e.tag&&l(e,e.dump,t)}null!==e.tag&&"?"!==e.tag&&(e.dump="!<"+e.tag+"> "+e.dump)}return!0}function b(e,t){var n,i,r=[],o=[];for(w(e,r,o),n=0,i=o.length;i>n;n+=1)t.duplicates.push(r[o[n]]);t.usedDuplicates=new Array(i)}function w(e,t,n){var i,r,o;E.call(e);if(null!==e&&"object"==typeof e)if(r=t.indexOf(e),-1!==r)-1===n.indexOf(r)&&n.push(r);else if(t.push(e),Array.isArray(e))for(r=0,o=e.length;o>r;r+=1)w(e[r],t,n);else for(i=Object.keys(e),r=0,o=i.length;o>r;r+=1)w(e[i[r]],t,n)}function C(e,t){t=t||{};var n=new o(t);return b(e,n),A(n,0,e,!0,!0)?n.dump+"\n":""}function k(e,t){return C(e,j.extend({schema:O},t))}var j=e("./common"),I=e("./exception"),S=e("./schema/default_full"),O=e("./schema/default_safe"),E=Object.prototype.toString,F=Object.prototype.hasOwnProperty,N=9,T=10,_=13,M=32,L=33,D=34,U=35,Y=37,q=38,P=39,$=42,B=44,K=45,R=58,H=62,G=63,V=64,W=91,Z=93,J=96,z=123,Q=124,X=125,ee={};ee[0]="\\0",ee[7]="\\a",ee[8]="\\b",ee[9]="\\t",ee[10]="\\n",ee[11]="\\v",ee[12]="\\f",ee[13]="\\r",ee[27]="\\e",ee[34]='\\"',ee[92]="\\\\",ee[133]="\\N",ee[160]="\\_",ee[8232]="\\L",ee[8233]="\\P";var te=["y","Y","yes","Yes","YES","on","On","ON","n","N","no","No","NO","off","Off","OFF"];c.prototype.takeUpTo=function(e){var t;if(e<this.checkpoint)throw t=new Error("position should be > checkpoint"),t.position=e,t.checkpoint=this.checkpoint,t;return this.result+=this.source.slice(this.checkpoint,e),this.checkpoint=e,this},c.prototype.escapeChar=function(){var e,t;return e=this.source.charCodeAt(this.checkpoint),t=ee[e]||r(e),this.result+=t,this.checkpoint+=1,this},c.prototype.finish=function(){this.source.length>this.checkpoint&&this.takeUpTo(this.source.length)},t.exports.dump=C,t.exports.safeDump=k},{"./common":2,"./exception":4,"./schema/default_full":9,"./schema/default_safe":10}],4:[function(e,t,n){"use strict";function i(e,t){this.name="YAMLException",this.reason=e,this.mark=t,this.message=this.toString(!1)}i.prototype.toString=function(e){var t;return t="JS-YAML: "+(this.reason||"(unknown reason)"),!e&&this.mark&&(t+=" "+this.mark.toString()),t},t.exports=i},{}],5:[function(e,t,n){"use strict";function i(e){return 10===e||13===e}function r(e){return 9===e||32===e}function o(e){return 9===e||32===e||10===e||13===e}function a(e){return 44===e||91===e||93===e||123===e||125===e}function s(e){var t;return e>=48&&57>=e?e-48:(t=32|e,t>=97&&102>=t?t-97+10:-1)}function u(e){return 120===e?2:117===e?4:85===e?8:0}function c(e){return e>=48&&57>=e?e-48:-1}function l(e){return 48===e?"\x00":97===e?"":98===e?"\b":116===e?"	":9===e?"	":110===e?"\n":118===e?"":102===e?"\f":114===e?"\r":101===e?"":32===e?" ":34===e?'"':47===e?"/":92===e?"\\":78===e?"":95===e?" ":76===e?"\u2028":80===e?"\u2029":""}function p(e){return 65535>=e?String.fromCharCode(e):String.fromCharCode((e-65536>>10)+55296,(e-65536&1023)+56320)}function f(e,t){this.input=e,this.filename=t.filename||null,this.schema=t.schema||R,this.onWarning=t.onWarning||null,this.legacy=t.legacy||!1,this.implicitTypes=this.schema.compiledImplicit,this.typeMap=this.schema.compiledTypeMap,this.length=e.length,this.position=0,this.line=0,this.lineStart=0,this.lineIndent=0,this.documents=[]}function h(e,t){return new $(t,new B(e.filename,e.input,e.position,e.line,e.position-e.lineStart))}function d(e,t){throw h(e,t)}function m(e,t){var n=h(e,t);if(!e.onWarning)throw n;e.onWarning.call(null,n)}function g(e,t,n,i){var r,o,a,s;if(n>t){if(s=e.input.slice(t,n),i)for(r=0,o=s.length;o>r;r+=1)a=s.charCodeAt(r),9===a||a>=32&&1114111>=a||d(e,"expected valid JSON character");e.result+=s}}function y(e,t,n){var i,r,o,a;for(P.isObject(n)||d(e,"cannot merge mappings; the provided source object is unacceptable"),i=Object.keys(n),o=0,a=i.length;a>o;o+=1)r=i[o],H.call(t,r)||(t[r]=n[r])}function x(e,t,n,i,r){var o,a;if(i=String(i),null===t&&(t={}),"tag:yaml.org,2002:merge"===n)if(Array.isArray(r))for(o=0,a=r.length;a>o;o+=1)y(e,t,r[o]);else y(e,t,r);else t[i]=r;return t}function v(e){var t;t=e.input.charCodeAt(e.position),10===t?e.position++:13===t?(e.position++,10===e.input.charCodeAt(e.position)&&e.position++):d(e,"a line break is expected"),e.line+=1,e.lineStart=e.position}function A(e,t,n){for(var o=0,a=e.input.charCodeAt(e.position);0!==a;){for(;r(a);)a=e.input.charCodeAt(++e.position);if(t&&35===a)do a=e.input.charCodeAt(++e.position);while(10!==a&&13!==a&&0!==a);if(!i(a))break;for(v(e),a=e.input.charCodeAt(e.position),o++,e.lineIndent=0;32===a;)e.lineIndent++,a=e.input.charCodeAt(++e.position)}return-1!==n&&0!==o&&e.lineIndent<n&&m(e,"deficient indentation"),o}function b(e){var t,n=e.position;return t=e.input.charCodeAt(n),45!==t&&46!==t||e.input.charCodeAt(n+1)!==t||e.input.charCodeAt(n+2)!==t||(n+=3,t=e.input.charCodeAt(n),0!==t&&!o(t))?!1:!0}function w(e,t){1===t?e.result+=" ":t>1&&(e.result+=P.repeat("\n",t-1))}function C(e,t,n){var s,u,c,l,p,f,h,d,m,y=e.kind,x=e.result;if(m=e.input.charCodeAt(e.position),o(m)||a(m)||35===m||38===m||42===m||33===m||124===m||62===m||39===m||34===m||37===m||64===m||96===m)return!1;if((63===m||45===m)&&(u=e.input.charCodeAt(e.position+1),o(u)||n&&a(u)))return!1;for(e.kind="scalar",e.result="",c=l=e.position,p=!1;0!==m;){if(58===m){if(u=e.input.charCodeAt(e.position+1),o(u)||n&&a(u))break}else if(35===m){if(s=e.input.charCodeAt(e.position-1),o(s))break}else{if(e.position===e.lineStart&&b(e)||n&&a(m))break;if(i(m)){if(f=e.line,h=e.lineStart,d=e.lineIndent,A(e,!1,-1),e.lineIndent>=t){p=!0,m=e.input.charCodeAt(e.position);continue}e.position=l,e.line=f,e.lineStart=h,e.lineIndent=d;break}}p&&(g(e,c,l,!1),w(e,e.line-f),c=l=e.position,p=!1),r(m)||(l=e.position+1),m=e.input.charCodeAt(++e.position)}return g(e,c,l,!1),e.result?!0:(e.kind=y,e.result=x,!1)}function k(e,t){var n,r,o;if(n=e.input.charCodeAt(e.position),39!==n)return!1;for(e.kind="scalar",e.result="",e.position++,r=o=e.position;0!==(n=e.input.charCodeAt(e.position));)if(39===n){if(g(e,r,e.position,!0),n=e.input.charCodeAt(++e.position),39!==n)return!0;r=o=e.position,e.position++}else i(n)?(g(e,r,o,!0),w(e,A(e,!1,t)),r=o=e.position):e.position===e.lineStart&&b(e)?d(e,"unexpected end of the document within a single quoted scalar"):(e.position++,o=e.position);d(e,"unexpected end of the stream within a single quoted scalar")}function j(e,t){var n,r,o,a,c,l;if(l=e.input.charCodeAt(e.position),34!==l)return!1;for(e.kind="scalar",e.result="",e.position++,n=r=e.position;0!==(l=e.input.charCodeAt(e.position));){if(34===l)return g(e,n,e.position,!0),e.position++,!0;if(92===l){if(g(e,n,e.position,!0),l=e.input.charCodeAt(++e.position),i(l))A(e,!1,t);else if(256>l&&re[l])e.result+=oe[l],e.position++;else if((c=u(l))>0){for(o=c,a=0;o>0;o--)l=e.input.charCodeAt(++e.position),(c=s(l))>=0?a=(a<<4)+c:d(e,"expected hexadecimal character");e.result+=p(a),e.position++}else d(e,"unknown escape sequence");n=r=e.position}else i(l)?(g(e,n,r,!0),w(e,A(e,!1,t)),n=r=e.position):e.position===e.lineStart&&b(e)?d(e,"unexpected end of the document within a double quoted scalar"):(e.position++,r=e.position)}d(e,"unexpected end of the stream within a double quoted scalar")}function I(e,t){var n,i,r,a,s,u,c,l,p,f,h,m=!0,g=e.tag,y=e.anchor;if(h=e.input.charCodeAt(e.position),91===h)a=93,c=!1,i=[];else{if(123!==h)return!1;a=125,c=!0,i={}}for(null!==e.anchor&&(e.anchorMap[e.anchor]=i),h=e.input.charCodeAt(++e.position);0!==h;){if(A(e,!0,t),h=e.input.charCodeAt(e.position),h===a)return e.position++,e.tag=g,e.anchor=y,e.kind=c?"mapping":"sequence",e.result=i,!0;m||d(e,"missed comma between flow collection entries"),p=l=f=null,s=u=!1,63===h&&(r=e.input.charCodeAt(e.position+1),o(r)&&(s=u=!0,e.position++,A(e,!0,t))),n=e.line,_(e,t,G,!1,!0),p=e.tag,l=e.result,A(e,!0,t),h=e.input.charCodeAt(e.position),!u&&e.line!==n||58!==h||(s=!0,h=e.input.charCodeAt(++e.position),A(e,!0,t),_(e,t,G,!1,!0),f=e.result),c?x(e,i,p,l,f):i.push(s?x(e,null,p,l,f):l),A(e,!0,t),h=e.input.charCodeAt(e.position),44===h?(m=!0,h=e.input.charCodeAt(++e.position)):m=!1}d(e,"unexpected end of the stream within a flow collection")}function S(e,t){var n,o,a,s,u=J,l=!1,p=t,f=0,h=!1;if(s=e.input.charCodeAt(e.position),124===s)o=!1;else{if(62!==s)return!1;o=!0}for(e.kind="scalar",e.result="";0!==s;)if(s=e.input.charCodeAt(++e.position),43===s||45===s)J===u?u=43===s?Q:z:d(e,"repeat of a chomping mode identifier");else{if(!((a=c(s))>=0))break;0===a?d(e,"bad explicit indentation width of a block scalar; it cannot be less than one"):l?d(e,"repeat of an indentation width identifier"):(p=t+a-1,l=!0)}if(r(s)){do s=e.input.charCodeAt(++e.position);while(r(s));if(35===s)do s=e.input.charCodeAt(++e.position);while(!i(s)&&0!==s)}for(;0!==s;){for(v(e),e.lineIndent=0,s=e.input.charCodeAt(e.position);(!l||e.lineIndent<p)&&32===s;)e.lineIndent++,s=e.input.charCodeAt(++e.position);if(!l&&e.lineIndent>p&&(p=e.lineIndent),i(s))f++;else{if(e.lineIndent<p){u===Q?e.result+=P.repeat("\n",f):u===J&&l&&(e.result+="\n");break}for(o?r(s)?(h=!0,e.result+=P.repeat("\n",f+1)):h?(h=!1,e.result+=P.repeat("\n",f+1)):0===f?l&&(e.result+=" "):e.result+=P.repeat("\n",f):l&&(e.result+=P.repeat("\n",f+1)),l=!0,f=0,n=e.position;!i(s)&&0!==s;)s=e.input.charCodeAt(++e.position);g(e,n,e.position,!1)}}return!0}function O(e,t){var n,i,r,a=e.tag,s=e.anchor,u=[],c=!1;for(null!==e.anchor&&(e.anchorMap[e.anchor]=u),r=e.input.charCodeAt(e.position);0!==r&&45===r&&(i=e.input.charCodeAt(e.position+1),o(i));)if(c=!0,e.position++,A(e,!0,-1)&&e.lineIndent<=t)u.push(null),r=e.input.charCodeAt(e.position);else if(n=e.line,_(e,t,W,!1,!0),u.push(e.result),A(e,!0,-1),r=e.input.charCodeAt(e.position),(e.line===n||e.lineIndent>t)&&0!==r)d(e,"bad indentation of a sequence entry");else if(e.lineIndent<t)break;return c?(e.tag=a,e.anchor=s,e.kind="sequence",e.result=u,!0):!1}function E(e,t,n){var i,a,s,u,c=e.tag,l=e.anchor,p={},f=null,h=null,m=null,g=!1,y=!1;for(null!==e.anchor&&(e.anchorMap[e.anchor]=p),u=e.input.charCodeAt(e.position);0!==u;){if(i=e.input.charCodeAt(e.position+1),s=e.line,63!==u&&58!==u||!o(i)){if(!_(e,n,V,!1,!0))break;if(e.line===s){for(u=e.input.charCodeAt(e.position);r(u);)u=e.input.charCodeAt(++e.position);if(58===u)u=e.input.charCodeAt(++e.position),o(u)||d(e,"a whitespace character is expected after the key-value separator within a block mapping"),g&&(x(e,p,f,h,null),f=h=m=null),y=!0,g=!1,a=!1,f=e.tag,h=e.result;else{if(!y)return e.tag=c,e.anchor=l,!0;d(e,"can not read an implicit mapping pair; a colon is missed")}}else{if(!y)return e.tag=c,e.anchor=l,!0;d(e,"can not read a block mapping entry; a multiline key may not be an implicit key")}}else 63===u?(g&&(x(e,p,f,h,null),f=h=m=null),y=!0,g=!0,a=!0):g?(g=!1,a=!0):d(e,"incomplete explicit mapping pair; a key node is missed"),e.position+=1,u=i;if((e.line===s||e.lineIndent>t)&&(_(e,t,Z,!0,a)&&(g?h=e.result:m=e.result),g||(x(e,p,f,h,m),f=h=m=null),A(e,!0,-1),u=e.input.charCodeAt(e.position)),e.lineIndent>t&&0!==u)d(e,"bad indentation of a mapping entry");else if(e.lineIndent<t)break}return g&&x(e,p,f,h,null),y&&(e.tag=c,e.anchor=l,e.kind="mapping",e.result=p),y}function F(e){var t,n,i,r,a=!1,s=!1;if(r=e.input.charCodeAt(e.position),33!==r)return!1;if(null!==e.tag&&d(e,"duplication of a tag property"),r=e.input.charCodeAt(++e.position),60===r?(a=!0,r=e.input.charCodeAt(++e.position)):33===r?(s=!0,n="!!",r=e.input.charCodeAt(++e.position)):n="!",t=e.position,a){do r=e.input.charCodeAt(++e.position);while(0!==r&&62!==r);e.position<e.length?(i=e.input.slice(t,e.position),r=e.input.charCodeAt(++e.position)):d(e,"unexpected end of the stream within a verbatim tag")}else{for(;0!==r&&!o(r);)33===r&&(s?d(e,"tag suffix cannot contain exclamation marks"):(n=e.input.slice(t-1,e.position+1),ne.test(n)||d(e,"named tag handle cannot contain such characters"),s=!0,t=e.position+1)),r=e.input.charCodeAt(++e.position);i=e.input.slice(t,e.position),te.test(i)&&d(e,"tag suffix cannot contain flow indicator characters")}return i&&!ie.test(i)&&d(e,"tag name cannot contain such characters: "+i),a?e.tag=i:H.call(e.tagMap,n)?e.tag=e.tagMap[n]+i:"!"===n?e.tag="!"+i:"!!"===n?e.tag="tag:yaml.org,2002:"+i:d(e,'undeclared tag handle "'+n+'"'),!0}function N(e){var t,n;if(n=e.input.charCodeAt(e.position),38!==n)return!1;for(null!==e.anchor&&d(e,"duplication of an anchor property"),n=e.input.charCodeAt(++e.position),t=e.position;0!==n&&!o(n)&&!a(n);)n=e.input.charCodeAt(++e.position);return e.position===t&&d(e,"name of an anchor node must contain at least one character"),e.anchor=e.input.slice(t,e.position),!0}function T(e){var t,n,i;e.length,e.input;if(i=e.input.charCodeAt(e.position),42!==i)return!1;for(i=e.input.charCodeAt(++e.position),t=e.position;0!==i&&!o(i)&&!a(i);)i=e.input.charCodeAt(++e.position);return e.position===t&&d(e,"name of an alias node must contain at least one character"),n=e.input.slice(t,e.position),e.anchorMap.hasOwnProperty(n)||d(e,'unidentified alias "'+n+'"'),e.result=e.anchorMap[n],A(e,!0,-1),!0}function _(e,t,n,i,r){var o,a,s,u,c,l,p,f,h=1,g=!1,y=!1;if(e.tag=null,e.anchor=null,e.kind=null,e.result=null,o=a=s=Z===n||W===n,i&&A(e,!0,-1)&&(g=!0,e.lineIndent>t?h=1:e.lineIndent===t?h=0:e.lineIndent<t&&(h=-1)),1===h)for(;F(e)||N(e);)A(e,!0,-1)?(g=!0,s=o,e.lineIndent>t?h=1:e.lineIndent===t?h=0:e.lineIndent<t&&(h=-1)):s=!1;if(s&&(s=g||r),(1===h||Z===n)&&(p=G===n||V===n?t:t+1,f=e.position-e.lineStart,1===h?s&&(O(e,f)||E(e,f,p))||I(e,p)?y=!0:(a&&S(e,p)||k(e,p)||j(e,p)?y=!0:T(e)?(y=!0,(null!==e.tag||null!==e.anchor)&&d(e,"alias node should not have any properties")):C(e,p,G===n)&&(y=!0,null===e.tag&&(e.tag="?")),null!==e.anchor&&(e.anchorMap[e.anchor]=e.result)):0===h&&(y=s&&O(e,f))),null!==e.tag&&"!"!==e.tag)if("?"===e.tag){for(u=0,c=e.implicitTypes.length;c>u;u+=1)if(l=e.implicitTypes[u],l.resolve(e.result)){e.result=l.construct(e.result),e.tag=l.tag,null!==e.anchor&&(e.anchorMap[e.anchor]=e.result);break}}else H.call(e.typeMap,e.tag)?(l=e.typeMap[e.tag],null!==e.result&&l.kind!==e.kind&&d(e,"unacceptable node kind for !<"+e.tag+'> tag; it should be "'+l.kind+'", not "'+e.kind+'"'),l.resolve(e.result)?(e.result=l.construct(e.result),null!==e.anchor&&(e.anchorMap[e.anchor]=e.result)):d(e,"cannot resolve a node with !<"+e.tag+"> explicit tag")):m(e,"unknown tag !<"+e.tag+">");return null!==e.tag||null!==e.anchor||y}function M(e){var t,n,a,s,u=e.position,c=!1;for(e.version=null,e.checkLineBreaks=e.legacy,e.tagMap={},e.anchorMap={};0!==(s=e.input.charCodeAt(e.position))&&(A(e,!0,-1),s=e.input.charCodeAt(e.position),!(e.lineIndent>0||37!==s));){for(c=!0,s=e.input.charCodeAt(++e.position),t=e.position;0!==s&&!o(s);)s=e.input.charCodeAt(++e.position);for(n=e.input.slice(t,e.position),a=[],n.length<1&&d(e,"directive name must not be less than one character in length");0!==s;){for(;r(s);)s=e.input.charCodeAt(++e.position);if(35===s){do s=e.input.charCodeAt(++e.position);while(0!==s&&!i(s));break}if(i(s))break;for(t=e.position;0!==s&&!o(s);)s=e.input.charCodeAt(++e.position);a.push(e.input.slice(t,e.position))}0!==s&&v(e),H.call(se,n)?se[n](e,n,a):m(e,'unknown document directive "'+n+'"')}return A(e,!0,-1),0===e.lineIndent&&45===e.input.charCodeAt(e.position)&&45===e.input.charCodeAt(e.position+1)&&45===e.input.charCodeAt(e.position+2)?(e.position+=3,A(e,!0,-1)):c&&d(e,"directives end mark is expected"),_(e,e.lineIndent-1,Z,!1,!0),A(e,!0,-1),e.checkLineBreaks&&ee.test(e.input.slice(u,e.position))&&m(e,"non-ASCII line breaks are interpreted as content"),e.documents.push(e.result),e.position===e.lineStart&&b(e)?void(46===e.input.charCodeAt(e.position)&&(e.position+=3,A(e,!0,-1))):void(e.position<e.length-1&&d(e,"end of the stream or a document separator is expected"))}function L(e,t){e=String(e),t=t||{},0!==e.length&&(10!==e.charCodeAt(e.length-1)&&13!==e.charCodeAt(e.length-1)&&(e+="\n"),65279===e.charCodeAt(0)&&(e=e.slice(1)));var n=new f(e,t);for(X.test(n.input)&&d(n,"the stream contains non-printable characters"),n.input+="\x00";32===n.input.charCodeAt(n.position);)n.lineIndent+=1,n.position+=1;for(;n.position<n.length-1;)M(n);return n.documents}function D(e,t,n){var i,r,o=L(e,n);for(i=0,r=o.length;r>i;i+=1)t(o[i])}function U(e,t){var n=L(e,t);if(0===n.length)return void 0;if(1===n.length)return n[0];throw new $("expected a single document in the stream, but found more")}function Y(e,t,n){D(e,t,P.extend({schema:K},n))}function q(e,t){return U(e,P.extend({schema:K},t))}for(var P=e("./common"),$=e("./exception"),B=e("./mark"),K=e("./schema/default_safe"),R=e("./schema/default_full"),H=Object.prototype.hasOwnProperty,G=1,V=2,W=3,Z=4,J=1,z=2,Q=3,X=/[\x00-\x08\x0B\x0C\x0E-\x1F\x7F-\x84\x86-\x9F\uFFFE\uFFFF]|[\uD800-\uDBFF](?![\uDC00-\uDFFF])|(?:[^\uD800-\uDBFF]|^)[\uDC00-\uDFFF]/,ee=/[\x85\u2028\u2029]/,te=/[,\[\]\{\}]/,ne=/^(?:!|!!|![a-z\-]+!)$/i,ie=/^(?:!|[^,\[\]\{\}])(?:%[0-9a-f]{2}|[0-9a-z\-#;\/\?:@&=\+\$,_\.!~\*'\(\)\[\]])*$/i,re=new Array(256),oe=new Array(256),ae=0;256>ae;ae++)re[ae]=l(ae)?1:0,oe[ae]=l(ae);var se={YAML:function(e,t,n){var i,r,o;null!==e.version&&d(e,"duplication of %YAML directive"),1!==n.length&&d(e,"YAML directive accepts exactly one argument"),i=/^([0-9]+)\.([0-9]+)$/.exec(n[0]),null===i&&d(e,"ill-formed argument of the YAML directive"),r=parseInt(i[1],10),o=parseInt(i[2],10),1!==r&&d(e,"unacceptable YAML version of the document"),e.version=n[0],e.checkLineBreaks=2>o,1!==o&&2!==o&&m(e,"unsupported YAML version of the document")},TAG:function(e,t,n){var i,r;2!==n.length&&d(e,"TAG directive accepts exactly two arguments"),i=n[0],r=n[1],ne.test(i)||d(e,"ill-formed tag handle (first argument) of the TAG directive"),H.call(e.tagMap,i)&&d(e,'there is a previously declared suffix for "'+i+'" tag handle'),ie.test(r)||d(e,"ill-formed tag prefix (second argument) of the TAG directive"),e.tagMap[i]=r}};t.exports.loadAll=D,t.exports.load=U,t.exports.safeLoadAll=Y,t.exports.safeLoad=q},{"./common":2,"./exception":4,"./mark":6,"./schema/default_full":9,"./schema/default_safe":10}],6:[function(e,t,n){"use strict";function i(e,t,n,i,r){this.name=e,this.buffer=t,this.position=n,this.line=i,this.column=r}var r=e("./common");i.prototype.getSnippet=function(e,t){var n,i,o,a,s;if(!this.buffer)return null;for(e=e||4,t=t||75,n="",i=this.position;i>0&&-1==="\x00\r\n\u2028\u2029".indexOf(this.buffer.charAt(i-1));)if(i-=1,this.position-i>t/2-1){n=" ... ",i+=5;break}for(o="",a=this.position;a<this.buffer.length&&-1==="\x00\r\n\u2028\u2029".indexOf(this.buffer.charAt(a));)if(a+=1,a-this.position>t/2-1){o=" ... ",a-=5;break}return s=this.buffer.slice(i,a),r.repeat(" ",e)+n+s+o+"\n"+r.repeat(" ",e+this.position-i+n.length)+"^"},i.prototype.toString=function(e){var t,n="";return this.name&&(n+='in "'+this.name+'" '),n+="at line "+(this.line+1)+", column "+(this.column+1),e||(t=this.getSnippet(),t&&(n+=":\n"+t)),n},t.exports=i},{"./common":2}],7:[function(e,t,n){"use strict";function i(e,t,n){var r=[];return e.include.forEach(function(e){n=i(e,t,n)}),e[t].forEach(function(e){n.forEach(function(t,n){t.tag===e.tag&&r.push(n)}),n.push(e)}),n.filter(function(e,t){return-1===r.indexOf(t)})}function r(){function e(e){i[e.tag]=e}var t,n,i={};for(t=0,n=arguments.length;n>t;t+=1)arguments[t].forEach(e);return i}function o(e){this.include=e.include||[],this.implicit=e.implicit||[],this.explicit=e.explicit||[],this.implicit.forEach(function(e){if(e.loadKind&&"scalar"!==e.loadKind)throw new s("There is a non-scalar type in the implicit list of a schema. Implicit resolving of such types is not supported.")}),this.compiledImplicit=i(this,"implicit",[]),this.compiledExplicit=i(this,"explicit",[]),this.compiledTypeMap=r(this.compiledImplicit,this.compiledExplicit)}var a=e("./common"),s=e("./exception"),u=e("./type");o.DEFAULT=null,o.create=function(){var e,t;switch(arguments.length){case 1:e=o.DEFAULT,t=arguments[0];break;case 2:e=arguments[0],t=arguments[1];break;default:throw new s("Wrong number of arguments for Schema.create function")}if(e=a.toArray(e),t=a.toArray(t),!e.every(function(e){return e instanceof o}))throw new s("Specified list of super schemas (or a single Schema object) contains a non-Schema object.");if(!t.every(function(e){return e instanceof u}))throw new s("Specified list of YAML types (or a single Type object) contains a non-Type object.");return new o({include:e,explicit:t})},t.exports=o},{"./common":2,"./exception":4,"./type":13}],8:[function(e,t,n){"use strict";var i=e("../schema");t.exports=new i({include:[e("./json")]})},{"../schema":7,"./json":12}],9:[function(e,t,n){"use strict";var i=e("../schema");t.exports=i.DEFAULT=new i({include:[e("./default_safe")],explicit:[e("../type/js/undefined"),e("../type/js/regexp"),e("../type/js/function")]})},{"../schema":7,"../type/js/function":18,"../type/js/regexp":19,"../type/js/undefined":20,"./default_safe":10}],10:[function(e,t,n){"use strict";var i=e("../schema");t.exports=new i({include:[e("./core")],implicit:[e("../type/timestamp"),e("../type/merge")],explicit:[e("../type/binary"),e("../type/omap"),e("../type/pairs"),e("../type/set")]})},{"../schema":7,"../type/binary":14,"../type/merge":22,"../type/omap":24,"../type/pairs":25,"../type/set":27,"../type/timestamp":29,"./core":8}],11:[function(e,t,n){"use strict";var i=e("../schema");t.exports=new i({explicit:[e("../type/str"),e("../type/seq"),e("../type/map")]})},{"../schema":7,"../type/map":21,"../type/seq":26,"../type/str":28}],12:[function(e,t,n){"use strict";var i=e("../schema");t.exports=new i({include:[e("./failsafe")],implicit:[e("../type/null"),e("../type/bool"),e("../type/int"),e("../type/float")]})},{"../schema":7,"../type/bool":15,"../type/float":16,"../type/int":17,"../type/null":23,"./failsafe":11}],13:[function(e,t,n){"use strict";function i(e){var t={};return null!==e&&Object.keys(e).forEach(function(n){e[n].forEach(function(e){t[String(e)]=n})}),t}function r(e,t){if(t=t||{},Object.keys(t).forEach(function(t){if(-1===a.indexOf(t))throw new o('Unknown option "'+t+'" is met in definition of "'+e+'" YAML type.')}),this.tag=e,this.kind=t.kind||null,this.resolve=t.resolve||function(){return!0},this.construct=t.construct||function(e){return e},this.instanceOf=t.instanceOf||null,this.predicate=t.predicate||null,this.represent=t.represent||null,this.defaultStyle=t.defaultStyle||null,this.styleAliases=i(t.styleAliases||null),-1===s.indexOf(this.kind))throw new o('Unknown kind "'+this.kind+'" is specified for "'+e+'" YAML type.')}var o=e("./exception"),a=["kind","resolve","construct","instanceOf","predicate","represent","defaultStyle","styleAliases"],s=["scalar","sequence","mapping"];t.exports=r},{"./exception":4}],14:[function(e,t,n){"use strict";function i(e){if(null===e)return!1;var t,n,i=0,r=e.length,o=c;for(n=0;r>n;n++)if(t=o.indexOf(e.charAt(n)),!(t>64)){if(0>t)return!1;i+=6}return i%8===0}function r(e){var t,n,i=e.replace(/[\r\n=]/g,""),r=i.length,o=c,a=0,u=[];for(t=0;r>t;t++)t%4===0&&t&&(u.push(a>>16&255),u.push(a>>8&255),u.push(255&a)),a=a<<6|o.indexOf(i.charAt(t));return n=r%4*6,0===n?(u.push(a>>16&255),u.push(a>>8&255),u.push(255&a)):18===n?(u.push(a>>10&255),u.push(a>>2&255)):12===n&&u.push(a>>4&255),s?new s(u):u}function o(e){var t,n,i="",r=0,o=e.length,a=c;for(t=0;o>t;t++)t%3===0&&t&&(i+=a[r>>18&63],i+=a[r>>12&63],i+=a[r>>6&63],i+=a[63&r]),r=(r<<8)+e[t];return n=o%3,0===n?(i+=a[r>>18&63],i+=a[r>>12&63],i+=a[r>>6&63],i+=a[63&r]):2===n?(i+=a[r>>10&63],i+=a[r>>4&63],i+=a[r<<2&63],i+=a[64]):1===n&&(i+=a[r>>2&63],i+=a[r<<4&63],i+=a[64],i+=a[64]),i}function a(e){return s&&s.isBuffer(e)}var s=e("buffer").Buffer,u=e("../type"),c="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=\n\r";t.exports=new u("tag:yaml.org,2002:binary",{kind:"scalar",resolve:i,construct:r,predicate:a,represent:o})},{"../type":13,buffer:30}],15:[function(e,t,n){"use strict";function i(e){if(null===e)return!1;var t=e.length;return 4===t&&("true"===e||"True"===e||"TRUE"===e)||5===t&&("false"===e||"False"===e||"FALSE"===e);
}function r(e){return"true"===e||"True"===e||"TRUE"===e}function o(e){return"[object Boolean]"===Object.prototype.toString.call(e)}var a=e("../type");t.exports=new a("tag:yaml.org,2002:bool",{kind:"scalar",resolve:i,construct:r,predicate:o,represent:{lowercase:function(e){return e?"true":"false"},uppercase:function(e){return e?"TRUE":"FALSE"},camelcase:function(e){return e?"True":"False"}},defaultStyle:"lowercase"})},{"../type":13}],16:[function(e,t,n){"use strict";function i(e){if(null===e)return!1;return c.test(e)?!0:!1}function r(e){var t,n,i,r;return t=e.replace(/_/g,"").toLowerCase(),n="-"===t[0]?-1:1,r=[],0<="+-".indexOf(t[0])&&(t=t.slice(1)),".inf"===t?1===n?Number.POSITIVE_INFINITY:Number.NEGATIVE_INFINITY:".nan"===t?NaN:0<=t.indexOf(":")?(t.split(":").forEach(function(e){r.unshift(parseFloat(e,10))}),t=0,i=1,r.forEach(function(e){t+=e*i,i*=60}),n*t):n*parseFloat(t,10)}function o(e,t){if(isNaN(e))switch(t){case"lowercase":return".nan";case"uppercase":return".NAN";case"camelcase":return".NaN"}else if(Number.POSITIVE_INFINITY===e)switch(t){case"lowercase":return".inf";case"uppercase":return".INF";case"camelcase":return".Inf"}else if(Number.NEGATIVE_INFINITY===e)switch(t){case"lowercase":return"-.inf";case"uppercase":return"-.INF";case"camelcase":return"-.Inf"}else if(s.isNegativeZero(e))return"-0.0";return e.toString(10)}function a(e){return"[object Number]"===Object.prototype.toString.call(e)&&(0!==e%1||s.isNegativeZero(e))}var s=e("../common"),u=e("../type"),c=new RegExp("^(?:[-+]?(?:[0-9][0-9_]*)\\.[0-9_]*(?:[eE][-+][0-9]+)?|\\.[0-9_]+(?:[eE][-+][0-9]+)?|[-+]?[0-9][0-9_]*(?::[0-5]?[0-9])+\\.[0-9_]*|[-+]?\\.(?:inf|Inf|INF)|\\.(?:nan|NaN|NAN))$");t.exports=new u("tag:yaml.org,2002:float",{kind:"scalar",resolve:i,construct:r,predicate:a,represent:o,defaultStyle:"lowercase"})},{"../common":2,"../type":13}],17:[function(e,t,n){"use strict";function i(e){return e>=48&&57>=e||e>=65&&70>=e||e>=97&&102>=e}function r(e){return e>=48&&55>=e}function o(e){return e>=48&&57>=e}function a(e){if(null===e)return!1;var t,n=e.length,a=0,s=!1;if(!n)return!1;if(t=e[a],("-"===t||"+"===t)&&(t=e[++a]),"0"===t){if(a+1===n)return!0;if(t=e[++a],"b"===t){for(a++;n>a;a++)if(t=e[a],"_"!==t){if("0"!==t&&"1"!==t)return!1;s=!0}return s}if("x"===t){for(a++;n>a;a++)if(t=e[a],"_"!==t){if(!i(e.charCodeAt(a)))return!1;s=!0}return s}for(;n>a;a++)if(t=e[a],"_"!==t){if(!r(e.charCodeAt(a)))return!1;s=!0}return s}for(;n>a;a++)if(t=e[a],"_"!==t){if(":"===t)break;if(!o(e.charCodeAt(a)))return!1;s=!0}return s?":"!==t?!0:/^(:[0-5]?[0-9])+$/.test(e.slice(a)):!1}function s(e){var t,n,i=e,r=1,o=[];return-1!==i.indexOf("_")&&(i=i.replace(/_/g,"")),t=i[0],("-"===t||"+"===t)&&("-"===t&&(r=-1),i=i.slice(1),t=i[0]),"0"===i?0:"0"===t?"b"===i[1]?r*parseInt(i.slice(2),2):"x"===i[1]?r*parseInt(i,16):r*parseInt(i,8):-1!==i.indexOf(":")?(i.split(":").forEach(function(e){o.unshift(parseInt(e,10))}),i=0,n=1,o.forEach(function(e){i+=e*n,n*=60}),r*i):r*parseInt(i,10)}function u(e){return"[object Number]"===Object.prototype.toString.call(e)&&0===e%1&&!c.isNegativeZero(e)}var c=e("../common"),l=e("../type");t.exports=new l("tag:yaml.org,2002:int",{kind:"scalar",resolve:a,construct:s,predicate:u,represent:{binary:function(e){return"0b"+e.toString(2)},octal:function(e){return"0"+e.toString(8)},decimal:function(e){return e.toString(10)},hexadecimal:function(e){return"0x"+e.toString(16).toUpperCase()}},defaultStyle:"decimal",styleAliases:{binary:[2,"bin"],octal:[8,"oct"],decimal:[10,"dec"],hexadecimal:[16,"hex"]}})},{"../common":2,"../type":13}],18:[function(e,t,n){"use strict";function i(e){if(null===e)return!1;try{var t="("+e+")",n=s.parse(t,{range:!0});return"Program"!==n.type||1!==n.body.length||"ExpressionStatement"!==n.body[0].type||"FunctionExpression"!==n.body[0].expression.type?!1:!0}catch(i){return!1}}function r(e){var t,n="("+e+")",i=s.parse(n,{range:!0}),r=[];if("Program"!==i.type||1!==i.body.length||"ExpressionStatement"!==i.body[0].type||"FunctionExpression"!==i.body[0].expression.type)throw new Error("Failed to resolve function");return i.body[0].expression.params.forEach(function(e){r.push(e.name)}),t=i.body[0].expression.body.range,new Function(r,n.slice(t[0]+1,t[1]-1))}function o(e){return e.toString()}function a(e){return"[object Function]"===Object.prototype.toString.call(e)}var s;try{s=e("esprima")}catch(u){"undefined"!=typeof window&&(s=window.esprima)}var c=e("../../type");t.exports=new c("tag:yaml.org,2002:js/function",{kind:"scalar",resolve:i,construct:r,predicate:a,represent:o})},{"../../type":13,esprima:"esprima"}],19:[function(e,t,n){"use strict";function i(e){if(null===e)return!1;if(0===e.length)return!1;var t=e,n=/\/([gim]*)$/.exec(e),i="";if("/"===t[0]){if(n&&(i=n[1]),i.length>3)return!1;if("/"!==t[t.length-i.length-1])return!1;t=t.slice(1,t.length-i.length-1)}try{new RegExp(t,i);return!0}catch(r){return!1}}function r(e){var t=e,n=/\/([gim]*)$/.exec(e),i="";return"/"===t[0]&&(n&&(i=n[1]),t=t.slice(1,t.length-i.length-1)),new RegExp(t,i)}function o(e){var t="/"+e.source+"/";return e.global&&(t+="g"),e.multiline&&(t+="m"),e.ignoreCase&&(t+="i"),t}function a(e){return"[object RegExp]"===Object.prototype.toString.call(e)}var s=e("../../type");t.exports=new s("tag:yaml.org,2002:js/regexp",{kind:"scalar",resolve:i,construct:r,predicate:a,represent:o})},{"../../type":13}],20:[function(e,t,n){"use strict";function i(){return!0}function r(){return void 0}function o(){return""}function a(e){return"undefined"==typeof e}var s=e("../../type");t.exports=new s("tag:yaml.org,2002:js/undefined",{kind:"scalar",resolve:i,construct:r,predicate:a,represent:o})},{"../../type":13}],21:[function(e,t,n){"use strict";var i=e("../type");t.exports=new i("tag:yaml.org,2002:map",{kind:"mapping",construct:function(e){return null!==e?e:{}}})},{"../type":13}],22:[function(e,t,n){"use strict";function i(e){return"<<"===e||null===e}var r=e("../type");t.exports=new r("tag:yaml.org,2002:merge",{kind:"scalar",resolve:i})},{"../type":13}],23:[function(e,t,n){"use strict";function i(e){if(null===e)return!0;var t=e.length;return 1===t&&"~"===e||4===t&&("null"===e||"Null"===e||"NULL"===e)}function r(){return null}function o(e){return null===e}var a=e("../type");t.exports=new a("tag:yaml.org,2002:null",{kind:"scalar",resolve:i,construct:r,predicate:o,represent:{canonical:function(){return"~"},lowercase:function(){return"null"},uppercase:function(){return"NULL"},camelcase:function(){return"Null"}},defaultStyle:"lowercase"})},{"../type":13}],24:[function(e,t,n){"use strict";function i(e){if(null===e)return!0;var t,n,i,r,o,u=[],c=e;for(t=0,n=c.length;n>t;t+=1){if(i=c[t],o=!1,"[object Object]"!==s.call(i))return!1;for(r in i)if(a.call(i,r)){if(o)return!1;o=!0}if(!o)return!1;if(-1!==u.indexOf(r))return!1;u.push(r)}return!0}function r(e){return null!==e?e:[]}var o=e("../type"),a=Object.prototype.hasOwnProperty,s=Object.prototype.toString;t.exports=new o("tag:yaml.org,2002:omap",{kind:"sequence",resolve:i,construct:r})},{"../type":13}],25:[function(e,t,n){"use strict";function i(e){if(null===e)return!0;var t,n,i,r,o,s=e;for(o=new Array(s.length),t=0,n=s.length;n>t;t+=1){if(i=s[t],"[object Object]"!==a.call(i))return!1;if(r=Object.keys(i),1!==r.length)return!1;o[t]=[r[0],i[r[0]]]}return!0}function r(e){if(null===e)return[];var t,n,i,r,o,a=e;for(o=new Array(a.length),t=0,n=a.length;n>t;t+=1)i=a[t],r=Object.keys(i),o[t]=[r[0],i[r[0]]];return o}var o=e("../type"),a=Object.prototype.toString;t.exports=new o("tag:yaml.org,2002:pairs",{kind:"sequence",resolve:i,construct:r})},{"../type":13}],26:[function(e,t,n){"use strict";var i=e("../type");t.exports=new i("tag:yaml.org,2002:seq",{kind:"sequence",construct:function(e){return null!==e?e:[]}})},{"../type":13}],27:[function(e,t,n){"use strict";function i(e){if(null===e)return!0;var t,n=e;for(t in n)if(a.call(n,t)&&null!==n[t])return!1;return!0}function r(e){return null!==e?e:{}}var o=e("../type"),a=Object.prototype.hasOwnProperty;t.exports=new o("tag:yaml.org,2002:set",{kind:"mapping",resolve:i,construct:r})},{"../type":13}],28:[function(e,t,n){"use strict";var i=e("../type");t.exports=new i("tag:yaml.org,2002:str",{kind:"scalar",construct:function(e){return null!==e?e:""}})},{"../type":13}],29:[function(e,t,n){"use strict";function i(e){if(null===e)return!1;var t;return t=s.exec(e),null===t?!1:!0}function r(e){var t,n,i,r,o,a,u,c,l,p,f=0,h=null;if(t=s.exec(e),null===t)throw new Error("Date resolve error");if(n=+t[1],i=+t[2]-1,r=+t[3],!t[4])return new Date(Date.UTC(n,i,r));if(o=+t[4],a=+t[5],u=+t[6],t[7]){for(f=t[7].slice(0,3);f.length<3;)f+="0";f=+f}return t[9]&&(c=+t[10],l=+(t[11]||0),h=6e4*(60*c+l),"-"===t[9]&&(h=-h)),p=new Date(Date.UTC(n,i,r,o,a,u,f)),h&&p.setTime(p.getTime()-h),p}function o(e){return e.toISOString()}var a=e("../type"),s=new RegExp("^([0-9][0-9][0-9][0-9])-([0-9][0-9]?)-([0-9][0-9]?)(?:(?:[Tt]|[ \\t]+)([0-9][0-9]?):([0-9][0-9]):([0-9][0-9])(?:\\.([0-9]*))?(?:[ \\t]*(Z|([-+])([0-9][0-9]?)(?::([0-9][0-9]))?))?)?$");t.exports=new a("tag:yaml.org,2002:timestamp",{kind:"scalar",resolve:i,construct:r,instanceOf:Date,represent:o})},{"../type":13}],30:[function(e,t,n){},{}],"/":[function(e,t,n){"use strict";var i=e("./lib/js-yaml.js");t.exports=i},{"./lib/js-yaml.js":1}]},{},[])("/")});
/* jshint ignore:end */

(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
'use strict';

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj['default'] = obj; return newObj; } }

var _landingLandingModule = require('./landing/landing.module');

var LandingModule = _interopRequireWildcard(_landingLandingModule);

var _sessionSessionModule = require('./session/session.module');

var SessionModule = _interopRequireWildcard(_sessionSessionModule);

var _favmoduleFavmoduleModule = require('./favmodule/favmodule.module');

var FavModule = _interopRequireWildcard(_favmoduleFavmoduleModule);

var _commonsCommonModuleJs = require('./commons/common.module.js');

var CommonModule = _interopRequireWildcard(_commonsCommonModuleJs);

var _registryRegistryModule = require('./registry/registry.module');

var RegistryModule = _interopRequireWildcard(_registryRegistryModule);

var _mystacksMystacksModule = require('./mystacks/mystacks.module');

var MyStacksModule = _interopRequireWildcard(_mystacksMystacksModule);

var _favoritesFavoritesModule = require('./favorites/favorites.module');

var FavoritesModule = _interopRequireWildcard(_favoritesFavoritesModule);

var _createCreateModule = require('./create/create.module');

var CreateModule = _interopRequireWildcard(_createCreateModule);

var _detailDetailModule = require('./detail/detail.module');

var DetailModule = _interopRequireWildcard(_detailDetailModule);

angular.module('stackfiles', ['ui.router', 'infinite-scroll', 'localytics.directives', 'zeroclipboard']).factory('landingFactory', LandingModule.svc).controller('landingController', LandingModule.ctrl).factory('sessionFactory', SessionModule.svc).controller('sessionController', SessionModule.ctrl).factory('favFactory', FavModule.svc).controller('favController', FavModule.ctrl).factory('commonFactory', CommonModule.svc).controller('commonController', CommonModule.ctrl).factory('registryLoader', RegistryModule.loader).factory('registryFactory', RegistryModule.svc).controller('registryController', RegistryModule.ctrl).factory('mystacksFactory', MyStacksModule.svc).controller('mystacksController', MyStacksModule.ctrl).factory('favoritesFactory', FavoritesModule.svc).controller('favoritesController', FavoritesModule.ctrl).factory('createFactory', CreateModule.svc).controller('createController', CreateModule.ctrl).factory('detailFactory', DetailModule.svc).controller('detailController', DetailModule.ctrl).config(["$stateProvider", "$urlRouterProvider", function ($stateProvider, $urlRouterProvider) {

  $urlRouterProvider.when('', '/');
  $urlRouterProvider.otherwise("/404");

  $stateProvider.state('landing', {
    url: '/',
    views: {
      full: {
        templateUrl: 'partials/landingpage.html',
        controller: 'landingController'
      }
    }
  }).state('registry', {
    url: '/registry',
    cache: false,
    views: {
      top: {
        templateUrl: 'partials/top-bar.html'
      },
      side: {
        templateUrl: 'partials/side-menu.html'
      },
      content: {
        templateUrl: 'partials/registry.html',
        controller: 'registryController as r'
      }
    }
  }).state('detail', {
    url: '/registry/:id',
    cache: false,
    views: {
      top: {
        templateUrl: 'partials/top-bar.html'
      },
      side: {
        templateUrl: 'partials/side-menu.html'
      },
      content: {
        templateUrl: 'partials/registry.detail.html',
        controller: 'detailController as d'
      }
    }
  }).state('mystacks', {
    url: '/mystacks',
    cache: false,
    views: {
      top: {
        templateUrl: 'partials/top-bar.html'
      },
      side: {
        templateUrl: 'partials/side-menu.html'
      },
      content: {
        templateUrl: 'partials/mystacks.html',
        controller: 'mystacksController as m'
      }
    }
  }).state('favorites', {
    url: '/favorites',
    cache: false,
    views: {
      top: {
        templateUrl: 'partials/top-bar.html'
      },
      side: {
        templateUrl: 'partials/side-menu.html'
      },
      content: {
        templateUrl: 'partials/favorites.html',
        controller: 'favoritesController as fc'
      }
    }
  }).state('create', {
    url: '/create',
    views: {
      top: {
        templateUrl: 'partials/top-bar.html'
      },
      side: {
        templateUrl: 'partials/side-menu.html'
      },
      content: {
        templateUrl: 'partials/create.html'
      }
    }
  }).state('404', {
    url: '/404',
    views: {
      full: {
        templateUrl: 'partials/404.html'
      }
    }
  });

  function authenticate($q, $rootScope, $state, $timeout) {
    if ($rootScope.logged) {
      // Resolve the promise successfully
      return $q.when();
    } else {
      $state.go('registry');
      // Reject the authentication promise to prevent the state from loading
      return $q.reject();
    }
  }
}]).directive('ngEnter', function () {
  return function (scope, element, attrs) {
    element.bind("keydown keypress", function (event) {
      if (event.which === 13) {
        scope.$apply(function () {
          scope.$eval(attrs.ngEnter);
        });
        event.preventDefault();
      }
    });
  };
}).directive('modal', function () {
  return {
    template: '<div class="modal fade">' + '<div class="modal-dialog">' + '<div class="modal-content">' + '<div class="modal-header">' + '<button type="button" class="close" data-dismiss="modal" aria-hidden="true">&times;</button>' + '<h4 class="modal-title">{{ title }}</h4>' + '</div>' + '<div class="modal-body" ng-transclude></div>' + '</div>' + '</div>' + '</div>',
    restrict: 'E',
    transclude: true,
    replace: true,
    scope: true,
    link: function postLink(scope, element, attrs) {
      scope.title = attrs.title;
      scope.$watch(attrs.visible, function (value) {
        if (value === true) $(element).modal('show');else $(element).modal('hide');
      });

      $(element).on('shown.bs.modal', function () {
        scope.$apply(function () {
          scope.$parent[attrs.visible] = true;
        });
      });

      $(element).on('hidden.bs.modal', function () {
        scope.$apply(function () {
          scope.$parent[attrs.visible] = false;
        });
      });
    }
  };
}).directive('autofocus', ['$timeout', function ($timeout) {
  return {
    restrict: 'A',
    link: function link($scope, $element) {
      $timeout(function () {
        $element[0].focus();
      });
    }
  };
}]).directive('fav', function () {
  return {
    template: '<svg ng-click="toggle()" ng-class="{\'btn-off\':!isSelected, \'btn-on\':isSelected,}" class="star"  width="24px" height="24px" viewBox="0 0 48 48" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" xmlns:sketch="http://www.bohemiancoding.com/sketch/ns">' + '<g id="Stackfiles.io" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd" sketch:type="MSPage">' + '<g id="-star" sketch:type="MSArtboardGroup" fill="#f1f1f1">' + '<g id="star" sketch:type="MSLayerGroup" transform="translate(4.000000, 4.000000)">' + '<path d="M40,14.48 L25.62,13.24 L20,0 L14.38,13.26 L0,14.48 L10.92,23.94 L7.64,38 L20,30.54 L32.36,38 L29.1,23.94 L40,14.48 L40,14.48 Z M20,26.8 L12.48,31.34 L14.48,22.78 L7.84,17.02 L16.6,16.26 L20,8.2 L23.42,16.28 L32.18,17.04 L25.54,22.8 L27.54,31.36 L20,26.8 L20,26.8 Z" id="Shape" sketch:type="MSShapeGroup"></path>' + '</g>' + '</g>' + '</g>' + '</svg>',
    restrict: 'E',
    scope: {
      fid: '@',
      isSelected: '=',
      onSelect: '&'
    },
    link: function link(scope, element, attributes) {
      scope.isSelected = false;
      scope.toggle = function () {
        scope.isSelected = !scope.isSelected;
        scope.onSelect()(scope.fid, scope.isSelected);
      };
    }
  };
});

},{"./commons/common.module.js":3,"./create/create.module":6,"./detail/detail.module":9,"./favmodule/favmodule.module":12,"./favorites/favorites.module":15,"./landing/landing.module":18,"./mystacks/mystacks.module":21,"./registry/registry.module":25,"./session/session.module":28}],2:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

var CommonController = (function () {
  function CommonController($scope, commonFactory) {
    _classCallCheck(this, CommonController);

    this.$scope = $scope;
    this.commonFactory = commonFactory;
  }

  _createClass(CommonController, [{
    key: 'toggleModal',
    value: function toggleModal() {
      this.$scope.copyText = { status: 'notClicked' };
      this.$scope.showModal = !this.$scope.showModal;
    }
  }, {
    key: 'generateEmbed',
    value: function generateEmbed(id) {
      this.$scope.embedScript = '<script src="' + window.location.protocol + '//' + window.location.hostname + '/embed/file/' + id + '.js"></script>';
    }
  }, {
    key: 'deploy',
    value: function deploy(id) {
      window.location.href = '/api/v1/deploy/' + id;
    }
  }, {
    key: 'searchFile',
    value: function searchFile() {
      var _this = this;

      var term = this.data.search;
      this.commonFactory.searchFile(term).then(function (results) {
        _this.results = results;
      });
    }
  }]);

  return CommonController;
})();

CommonController.$inject = ['$scope', 'commonFactory'];

exports.CommonController = CommonController;

},{}],3:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});

var _commonCtrl = require('./common.ctrl');

var _commonSvc = require('./common.svc');

var ctrl = _commonCtrl.CommonController;
var svc = _commonSvc.CommonService.factory;

exports.ctrl = ctrl;
exports.svc = svc;

},{"./common.ctrl":2,"./common.svc":4}],4:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

var CommonService = (function () {
  function CommonService($http) {
    _classCallCheck(this, CommonService);

    this.$http = $http;
  }

  _createClass(CommonService, [{
    key: 'searchFile',
    value: function searchFile(term) {
      return this.$http.get('/api/v1/search', {
        method: 'GET',
        params: {
          term: term
        }
      }).then(function (r) {
        return r.data;
      });
    }
  }], [{
    key: 'factory',
    value: function factory($http) {
      return new CommonService($http);
    }
  }]);

  return CommonService;
})();

CommonService.factory.$inject = ['$http'];

exports.CommonService = CommonService;

},{}],5:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var CreateController = (function () {
  function CreateController($scope, $rootScope, $state, $window, createFactory) {
    _classCallCheck(this, CreateController);

    this.createFactory = createFactory;
    this.$scope = $scope;
    this.$rootScope = $rootScope;
    this.$state = $state;
    this.$window = $window;
    this.init();
  }

  _createClass(CreateController, [{
    key: "init",
    value: function init() {
      if (this.$rootScope.logged) {
        this.$scope.user = this.$rootScope.user;
        this.$scope.locked = false;
        this.$scope.stackfile = "Unable to fetch tutum.yml from Github repository. Please select a repository that contains a tutum.yml or a docker-compose.yml file";
      }
    }
  }, {
    key: "getOrgs",
    value: function getOrgs() {
      var _this = this;

      var orgs = [];
      var repos = [];
      var branches = [];
      this.data.path = "/";
      this.$scope.stackfile = "Window will automatically refresh after filling form.";

      this.createFactory.getUserOrgs().then(function (data) {
        angular.forEach(data, function (value, key) {
          orgs.push(value.login);
        });
        orgs.push(_this.$scope.user);
        _this.$scope.orgs = orgs;
      });
    }
  }, {
    key: "getRepos",
    value: function getRepos() {
      var _this2 = this;

      var repos = [];
      var branches = [];
      this.data.path = "/";
      this.$scope.stackfile = "Window will automatically refresh after filling form.";

      this.createFactory.getUserRepos(this.data.orgname).then(function (data) {
        _this2.$scope.repos = [];
        angular.forEach(data, function (value, key) {
          repos.push(value.name);
        });
        _this2.$scope.repos = repos;
      });
    }
  }, {
    key: "getBranches",
    value: function getBranches() {
      var _this3 = this;

      var branches = [];
      this.data.path = "/";
      this.$scope.stackfile = "Window will automatically refresh after filling form.";

      this.createFactory.getRepobranches(this.data.orgname, this.data.reponame).then(function (data) {
        angular.forEach(data, function (value, key) {
          branches.push(value);
        });
        _this3.$scope.branches = branches;
      });
    }
  }, {
    key: "getComposeFile",
    value: function getComposeFile(orgname, name, branch, path) {
      var _this4 = this;

      if (orgname === undefined) {
        return;
      }
      this.$scope.stackfile = "";
      this.createFactory.getUserRepoInfo(orgname, name, branch, path).then(function (data) {
        if (data === "File not found") {
          _this4.$scope.stackfile = "Unable to fetch tutum.yml from Github repository. Please select a repository that contains a tutum.yml or a docker-compose.yml file";
          _this4.$scope.locked = true;
        } else {
          _this4.$scope.locked = false;
          _this4.$scope.stackfile = data;
        }
      });
    }
  }, {
    key: "createNew",
    value: function createNew() {
      var _this5 = this;

      var title = this.data.title;
      var stackfile = jsyaml.load(this.$scope.stackfile);
      var branch = this.data.branch;
      var path = this.data.path;
      var projectName = this.data.reponame;
      var organizationName = this.data.orgname;
      var description = this.data.description;

      var form = {
        title: title.replace(/[^a-zA-Z0-9]/g, ' '),
        stackfile: stackfile,
        branch: branch,
        path: path,
        name: projectName,
        orgname: organizationName,
        description: description
      };

      this.createFactory.saveFile(form).then(function () {
        _this5.$state.go('mystacks', {}, { reload: true, inherit: false, notify: true });
      });
    }
  }]);

  return CreateController;
})();

CreateController.$inject = ['$scope', '$rootScope', '$state', '$window', 'createFactory'];

exports.CreateController = CreateController;

},{}],6:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});

var _createCtrl = require('./create.ctrl');

var _createSvc = require('./create.svc');

var ctrl = _createCtrl.CreateController;
var svc = _createSvc.CreateService.factory;

exports.ctrl = ctrl;
exports.svc = svc;

},{"./create.ctrl":5,"./create.svc":7}],7:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

var CreateService = (function () {
  function CreateService($http) {
    _classCallCheck(this, CreateService);

    this.$http = $http;
  }

  _createClass(CreateService, [{
    key: 'getUserRepos',
    value: function getUserRepos(name) {
      return this.$http.get('/api/v1/user/repos', {
        method: 'GET',
        params: {
          name: name
        }
      }).then(function (r) {
        return r.data;
      });
    }
  }, {
    key: 'getUserOrgs',
    value: function getUserOrgs() {
      return this.$http.get('/api/v1/user/orgs', {
        method: 'GET'
      }).then(function (r) {
        return r.data;
      });
    }
  }, {
    key: 'getRepobranches',
    value: function getRepobranches(orgname, repo) {
      return this.$http.get('/api/v1/user/repos/branches', {
        method: 'GET',
        params: {
          orgname: orgname,
          repo: repo
        }
      }).then(function (r) {
        return r.data;
      });
    }
  }, {
    key: 'getUserRepoInfo',
    value: function getUserRepoInfo(orgname, repo, branch, path) {
      return this.$http.post('/api/v1/user/repos/new', {
        method: 'POST',
        params: {
          orgname: orgname,
          repo: repo,
          branch: branch,
          path: path
        }
      }).then(function (r) {
        return r.data;
      });
    }
  }, {
    key: 'saveFile',
    value: function saveFile(form) {
      return this.$http.post('/api/v1/create', {
        method: 'POST',
        params: {
          form: form
        }
      });
    }
  }], [{
    key: 'factory',
    value: function factory($http) {
      return new CreateService($http);
    }
  }]);

  return CreateService;
})();

CreateService.factory.$inject = ['$http'];

exports.CreateService = CreateService;

},{}],8:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

var DetailController = (function () {
  function DetailController($scope, $rootScope, $state, $window, $stateParams, detailFactory) {
    _classCallCheck(this, DetailController);

    this.$scope = $scope;
    this.$rootScope = $rootScope;
    this.$state = $state;
    this.$window = $window;
    this.$stateParams = $stateParams;
    this.detailFactory = detailFactory;
    this.init();
  }

  _createClass(DetailController, [{
    key: 'init',
    value: function init() {
      var _this = this;

      if (this.$rootScope.logged) {
        this.$scope.user = this.$rootScope.user;
        this.$scope.logged = this.$rootScope.logged;
      }

      this.detailFactory.getFileWithId(this.$stateParams.id).then(function (r) {
        _this.data = r.data;
        if (r.status < 300) {
          _this.detailFactory.getYAMLFile(r.data._id, r.data.projectName, r.data.path).then(function (yamlData) {
            _this.composeFile = yamlData;
            _this.$scope.loaded = true;
          });
        }
      }, function () {
        _this.$state.go('404');
      });
    }
  }, {
    key: 'deleteStackfile',
    value: function deleteStackfile(id) {
      var _this2 = this;

      this.detailFactory.deleteStackfile(id).then(function () {
        _this2.$state.go('mystacks', {}, { reload: true, inherit: false, notify: true });
      });
    }
  }]);

  return DetailController;
})();

DetailController.$inject = ['$scope', '$rootScope', '$state', '$window', '$stateParams', 'detailFactory'];

exports.DetailController = DetailController;

},{}],9:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});

var _detailCtrl = require('./detail.ctrl');

var _detailSvc = require('./detail.svc');

var ctrl = _detailCtrl.DetailController;
var svc = _detailSvc.DetailService.factory;

exports.ctrl = ctrl;
exports.svc = svc;

},{"./detail.ctrl":8,"./detail.svc":10}],10:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

var DetailService = (function () {
  function DetailService($http) {
    _classCallCheck(this, DetailService);

    this.$http = $http;
  }

  _createClass(DetailService, [{
    key: 'getFileWithId',
    value: function getFileWithId(id) {
      return this.$http.get('/api/v1/files/' + id, {
        method: 'GET',
        params: {
          id: id
        }
      }).then(function (r) {
        return r;
      });
    }
  }, {
    key: 'getYAMLFile',
    value: function getYAMLFile(id, repo, path) {
      return this.$http.post('/api/v1/user/repos/file', {
        method: 'POST',
        params: {
          id: id,
          repo: repo,
          path: path
        }
      }).then(function (r) {
        return r.data;
      });
    }
  }, {
    key: 'deleteStackfile',
    value: function deleteStackfile(id) {
      return this.$http['delete']('/api/v1/files/' + id, {
        method: 'DELETE',
        params: {
          id: id
        }
      }).then(function (r) {
        return r.data;
      });
    }
  }], [{
    key: 'factory',
    value: function factory($http) {
      return new DetailService($http);
    }
  }]);

  return DetailService;
})();

DetailService.factory.$inject = ['$http'];

exports.DetailService = DetailService;

},{}],11:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

var FavController = (function () {
  function FavController($scope, $rootScope, favFactory) {
    _classCallCheck(this, FavController);

    this.favFactory = favFactory;
    this.$scope = $scope;
    this.$rootScope = $rootScope;
    this.init();
    this.$scope.favoriteList = [];
  }

  _createClass(FavController, [{
    key: 'init',
    value: function init() {
      var _this = this;

      if (this.$rootScope.logged) {
        this.$scope.user = this.$rootScope.user;
        this.$scope.logged = this.$rootScope.logged;
        this.favFactory.checkFav().then(function (favorites) {
          _this.$scope.favoriteList = favorites.data;
        });
      }
    }
  }, {
    key: 'increment',
    value: function increment(file) {
      if (this.$rootScope.logged) {
        file.stars = file.stars + 1;
      }
    }
  }, {
    key: 'toggleStatus',
    value: function toggleStatus(file) {
      var _this2 = this;

      this.favFactory.favFile(file._id).then(function () {
        if (_this2.$rootScope.logged) {
          _this2.$scope.favoriteList.push(file._id);
        }
      });
    }
  }, {
    key: 'unToggleStatus',
    value: function unToggleStatus(file) {
      var _this3 = this;

      this.favFactory.unFavFile(file._id).then(function () {
        if (_this3.$scope.logged) {
          var index = _this3.$scope.favoriteList.indexOf(file._id);
          _this3.$scope.favoriteList.splice(index, 1);
        }
      });
    }
  }, {
    key: 'isSelected',
    value: function isSelected(file) {
      return this.$scope.favoriteList.indexOf(file._id) > -1;
    }
  }]);

  return FavController;
})();

FavController.$inject = ['$scope', '$rootScope', 'favFactory'];

exports.FavController = FavController;

},{}],12:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});

var _favmoduleCtrl = require('./favmodule.ctrl');

var _favmoduleSvc = require('./favmodule.svc');

var ctrl = _favmoduleCtrl.FavController;
var svc = _favmoduleSvc.FavService.factory;

exports.ctrl = ctrl;
exports.svc = svc;

},{"./favmodule.ctrl":11,"./favmodule.svc":13}],13:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

var FavService = (function () {
  function FavService($http) {
    _classCallCheck(this, FavService);

    this.$http = $http;
  }

  _createClass(FavService, [{
    key: 'checkFav',
    value: function checkFav() {
      return this.$http.get('/api/v1/user/fav', {
        method: 'GET'
      });
    }
  }, {
    key: 'favFile',
    value: function favFile(id) {
      return this.$http.get('/api/v1/files/fav/' + id, {
        method: 'GET'
      }).then(function (r) {
        return r.data;
      });
    }
  }, {
    key: 'unFavFile',
    value: function unFavFile(id) {
      return this.$http.get('/api/v1/files/unfav/' + id, {
        method: 'GET'
      }).then(function (r) {
        return r.data;
      });
    }
  }], [{
    key: 'factory',
    value: function factory($http) {
      return new FavService($http);
    }
  }]);

  return FavService;
})();

FavService.factory.$inject = ['$http'];

exports.FavService = FavService;

},{}],14:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

var FavoriteController = (function () {
  function FavoriteController($scope, $rootScope, favoritesFactory) {
    _classCallCheck(this, FavoriteController);

    this.favoritesFactory = favoritesFactory;
    this.$scope = $scope;
    this.$rootScope = $rootScope;
    this.init();
  }

  _createClass(FavoriteController, [{
    key: 'init',
    value: function init() {
      var _this = this;

      this.favoritesFactory.getUserFavorites().then(function (data) {
        _this.files = data;
        _this.$scope.loaded = true;
      });
    }
  }, {
    key: 'removeRow',
    value: function removeRow(file) {
      var index = -1;
      for (var i = 0; i < this.files.length; i++) {
        if (this.files[i]._id === file._id) {
          index = i;
          break;
        }
      }
      this.files.splice(index, 1);
    }
  }]);

  return FavoriteController;
})();

FavoriteController.$inject = ['$scope', '$rootScope', 'favoritesFactory'];

exports.FavoriteController = FavoriteController;

},{}],15:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});

var _favoritesCtrl = require('./favorites.ctrl');

var _favoritesSvc = require('./favorites.svc');

var ctrl = _favoritesCtrl.FavoriteController;
var svc = _favoritesSvc.FavoriteService.factory;

exports.ctrl = ctrl;
exports.svc = svc;

},{"./favorites.ctrl":14,"./favorites.svc":16}],16:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

var FavoriteService = (function () {
  function FavoriteService($http) {
    _classCallCheck(this, FavoriteService);

    this.$http = $http;
  }

  _createClass(FavoriteService, [{
    key: 'getUserFavorites',
    value: function getUserFavorites() {
      return this.$http.get('/api/v1/user/favorites', {
        method: 'GET'
      }).then(function (r) {
        return r.data;
      });
    }
  }], [{
    key: 'factory',
    value: function factory($http) {
      return new FavoriteService($http);
    }
  }]);

  return FavoriteService;
})();

FavoriteService.factory.$inject = ['$http'];

exports.FavoriteService = FavoriteService;

},{}],17:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var MainController = (function () {
  function MainController($state, $window, landingFactory) {
    _classCallCheck(this, MainController);

    this.landingFactory = landingFactory;
    this.$state = $state;
    this.$window = $window;
  }

  _createClass(MainController, [{
    key: "signin",
    value: function signin(page) {
      this.landingFactory.signin(page);
    }
  }, {
    key: "search",
    value: function search() {
      if (this.data.search !== "") {
        this.$window.localStorage.search = this.data.search;
        console.log(this.$window.localStorage.search);
        this.$state.go("registry");
      }
    }
  }]);

  return MainController;
})();

MainController.$inject = ['$state', '$window', 'landingFactory'];

exports.MainController = MainController;

},{}],18:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});

var _landingCtrl = require('./landing.ctrl');

var _landingSvc = require('./landing.svc');

var ctrl = _landingCtrl.MainController;
var svc = _landingSvc.MainService.factory;

exports.ctrl = ctrl;
exports.svc = svc;

},{"./landing.ctrl":17,"./landing.svc":19}],19:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

var MainService = (function () {
  function MainService($window) {
    _classCallCheck(this, MainService);

    this.$window = $window;
  }

  _createClass(MainService, [{
    key: 'signin',
    value: function signin(page) {
      this.$window.location.href = '/auth/github?redirect=' + page;
    }
  }], [{
    key: 'factory',
    value: function factory($window) {
      return new MainService($window);
    }
  }]);

  return MainService;
})();

MainService.factory.$inject = ['$window'];

exports.MainService = MainService;

},{}],20:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

var MyStackController = (function () {
  function MyStackController($scope, mystacksFactory) {
    _classCallCheck(this, MyStackController);

    this.mystacksFactory = mystacksFactory;
    this.$scope = $scope;
    this.init();
  }

  _createClass(MyStackController, [{
    key: 'init',
    value: function init() {
      var _this = this;

      this.mystacksFactory.getUserFiles().then(function (data) {
        _this.files = data;
        _this.$scope.loaded = true;
      });
    }
  }]);

  return MyStackController;
})();

MyStackController.$inject = ['$scope', 'mystacksFactory'];

exports.MyStackController = MyStackController;

},{}],21:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});

var _mystacksCtrl = require('./mystacks.ctrl');

var _mystacksSvc = require('./mystacks.svc');

var ctrl = _mystacksCtrl.MyStackController;
var svc = _mystacksSvc.MyStackService.factory;

exports.ctrl = ctrl;
exports.svc = svc;

},{"./mystacks.ctrl":20,"./mystacks.svc":22}],22:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

var MyStackService = (function () {
  function MyStackService($http) {
    _classCallCheck(this, MyStackService);

    this.$http = $http;
  }

  _createClass(MyStackService, [{
    key: 'getUserFiles',
    value: function getUserFiles() {
      return this.$http.get('/api/v1/user/files', {
        method: 'GET'
      }).then(function (r) {
        return r.data;
      });
    }
  }], [{
    key: 'factory',
    value: function factory($http) {
      return new MyStackService($http);
    }
  }]);

  return MyStackService;
})();

MyStackService.factory.$inject = ['$http'];

exports.MyStackService = MyStackService;

},{}],23:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

var Loader = (function () {
  function Loader(registryFactory) {
    _classCallCheck(this, Loader);

    this.registryFactory = registryFactory;
    this.items = [];
    this.busy = false;
    this.after = 1;
  }

  _createClass(Loader, [{
    key: 'nextPage',
    value: function nextPage() {
      if (this.busy) return;
      this.busy = true;
      var self = this;

      return this.registryFactory.getFiles(this.after).then(function (files) {
        var list = files;
        if (list.length === 0) {
          self.busy = true;
          return;
        } else {
          for (var i = 0; i < list.length; i++) {
            self.items.push(list[i]);
          }
          self.after = self.after + 1;
          self.busy = false;
        }
      }, function () {
        self.items = [];
      });
    }
  }], [{
    key: 'factory',
    value: function factory(registryFactory) {
      return new Loader(registryFactory);
    }
  }]);

  return Loader;
})();

Loader.$inject = ['registryFactory'];

exports.Loader = Loader;

},{}],24:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

var RegistryController = (function () {
  function RegistryController($scope, $rootScope, $state, $window, registryFactory, registryLoader) {
    _classCallCheck(this, RegistryController);

    this.registryFactory = registryFactory;
    this.registryLoader = registryLoader;
    this.$scope = $scope;
    this.$rootScope = $rootScope;
    this.$state = $state;
    this.$window = $window;
    this.init();
  }

  _createClass(RegistryController, [{
    key: 'init',
    value: function init() {
      this.$scope.files = this.registryLoader;
      this.$scope.loaded = true;
    }
  }, {
    key: 'checkSearch',
    value: function checkSearch() {
      var _this = this;

      if (this.$window.localStorage.search !== undefined) {
        this.$scope.data = { search: this.$window.localStorage.search };
        this.registryFactory.searchFile(this.$window.localStorage.search).then(function (results) {
          _this.results = results;
        });
        this.$window.localStorage.clear();
      }
    }
  }]);

  return RegistryController;
})();

RegistryController.$inject = ['$scope', '$rootScope', '$state', '$window', 'registryFactory', 'registryLoader'];

exports.RegistryController = RegistryController;

},{}],25:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});

var _registryCtrl = require('./registry.ctrl');

var _registrySvc = require('./registry.svc');

var _registryLoader = require('./registry-loader');

var ctrl = _registryCtrl.RegistryController;
var svc = _registrySvc.RegistryService.factory;
var loader = _registryLoader.Loader.factory;

exports.ctrl = ctrl;
exports.svc = svc;
exports.loader = loader;

},{"./registry-loader":23,"./registry.ctrl":24,"./registry.svc":26}],26:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

var RegistryService = (function () {
  function RegistryService($http) {
    _classCallCheck(this, RegistryService);

    this.$http = $http;
  }

  _createClass(RegistryService, [{
    key: 'getFiles',
    value: function getFiles(page) {
      return this.$http.get('/api/v1/files/', {
        method: 'GET',
        params: {
          page: page,
          limit: 5
        }
      }).then(function (r) {
        return r.data;
      });
    }
  }], [{
    key: 'factory',
    value: function factory($http) {
      return new RegistryService($http);
    }
  }]);

  return RegistryService;
})();

RegistryService.factory.$inject = ['$http'];

exports.RegistryService = RegistryService;

},{}],27:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var SessionController = (function () {
  function SessionController($scope, $rootScope, $state, $location, $window, sessionFactory) {
    _classCallCheck(this, SessionController);

    this.sessionFactory = sessionFactory;
    this.init();
    this.$scope = $scope;
    this.$rootScope = $rootScope;
    this.$state = $state;
    this.$location = $location;
    this.$window = $window;
  }

  _createClass(SessionController, [{
    key: "init",
    value: function init() {
      var _this = this;

      this.sessionFactory.getUser().then(function (data, status, headers, config) {
        _this.$rootScope.logged = true;
        _this.$rootScope.user = data.username;
        _this.$scope.logged = true;
        _this.$scope.user = data.username;
        _this.$scope.photo = data._json.avatar_url;
      });
    }
  }, {
    key: "signin",
    value: function signin(page) {
      this.sessionFactory.signin(page);
    }
  }, {
    key: "logout",
    value: function logout() {
      var _this2 = this;

      this.sessionFactory.logout().then(function (data, status, headers, config) {
        _this2.$state.transitionTo(_this2.$state.current, {}, {
          reload: true,
          inherit: false,
          notify: true
        });
        _this2.$window.location.reload();
      });
    }
  }, {
    key: "getClass",
    value: function getClass(path) {
      if (this.$location.path().substr(0, path.length) == path) {
        return "selected";
      } else {
        return "";
      }
    }
  }]);

  return SessionController;
})();

SessionController.$inject = ['$scope', '$rootScope', '$state', '$location', '$window', 'sessionFactory'];

exports.SessionController = SessionController;

},{}],28:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});

var _sessionCtrl = require('./session.ctrl');

var _sessionSvc = require('./session.svc');

var ctrl = _sessionCtrl.SessionController;
var svc = _sessionSvc.SessionService.factory;

exports.ctrl = ctrl;
exports.svc = svc;

},{"./session.ctrl":27,"./session.svc":29}],29:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

var SessionService = (function () {
  function SessionService($http, $window) {
    _classCallCheck(this, SessionService);

    this.$http = $http;
    this.$window = $window;
  }

  _createClass(SessionService, [{
    key: 'signin',
    value: function signin(page) {
      this.$window.location.href = '/auth/github?redirect=' + page;
    }
  }, {
    key: 'getUser',
    value: function getUser() {
      return this.$http.get('/api/v1/user', {
        method: 'GET'
      }).then(function (r) {
        return r.data;
      });
    }
  }, {
    key: 'logout',
    value: function logout() {
      return this.$http.get('/auth/logout', {
        method: 'GET'
      }).then(function (r) {
        return r.data;
      });
    }
  }], [{
    key: 'factory',
    value: function factory($http, $window) {
      return new SessionService($http, $window);
    }
  }]);

  return SessionService;
})();

SessionService.factory.$inject = ['$http', '$window'];

exports.SessionService = SessionService;

},{}]},{},[1])
//# sourceMappingURL=data:application/json;charset:utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyaWZ5L25vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCIvVXNlcnMvbWF4aW1laGVja2VsL0RvY3VtZW50cy9Qcm9qZWN0cy9Db21wb3NlUmVnaXN0cnkvc3JjL2FwcC9hcHAuanMiLCIvVXNlcnMvbWF4aW1laGVja2VsL0RvY3VtZW50cy9Qcm9qZWN0cy9Db21wb3NlUmVnaXN0cnkvc3JjL2FwcC9jb21tb25zL2NvbW1vbi5jdHJsLmpzIiwiL1VzZXJzL21heGltZWhlY2tlbC9Eb2N1bWVudHMvUHJvamVjdHMvQ29tcG9zZVJlZ2lzdHJ5L3NyYy9hcHAvY29tbW9ucy9jb21tb24ubW9kdWxlLmpzIiwiL1VzZXJzL21heGltZWhlY2tlbC9Eb2N1bWVudHMvUHJvamVjdHMvQ29tcG9zZVJlZ2lzdHJ5L3NyYy9hcHAvY29tbW9ucy9jb21tb24uc3ZjLmpzIiwiL1VzZXJzL21heGltZWhlY2tlbC9Eb2N1bWVudHMvUHJvamVjdHMvQ29tcG9zZVJlZ2lzdHJ5L3NyYy9hcHAvY3JlYXRlL2NyZWF0ZS5jdHJsLmpzIiwiL1VzZXJzL21heGltZWhlY2tlbC9Eb2N1bWVudHMvUHJvamVjdHMvQ29tcG9zZVJlZ2lzdHJ5L3NyYy9hcHAvY3JlYXRlL2NyZWF0ZS5tb2R1bGUuanMiLCIvVXNlcnMvbWF4aW1laGVja2VsL0RvY3VtZW50cy9Qcm9qZWN0cy9Db21wb3NlUmVnaXN0cnkvc3JjL2FwcC9jcmVhdGUvY3JlYXRlLnN2Yy5qcyIsIi9Vc2Vycy9tYXhpbWVoZWNrZWwvRG9jdW1lbnRzL1Byb2plY3RzL0NvbXBvc2VSZWdpc3RyeS9zcmMvYXBwL2RldGFpbC9kZXRhaWwuY3RybC5qcyIsIi9Vc2Vycy9tYXhpbWVoZWNrZWwvRG9jdW1lbnRzL1Byb2plY3RzL0NvbXBvc2VSZWdpc3RyeS9zcmMvYXBwL2RldGFpbC9kZXRhaWwubW9kdWxlLmpzIiwiL1VzZXJzL21heGltZWhlY2tlbC9Eb2N1bWVudHMvUHJvamVjdHMvQ29tcG9zZVJlZ2lzdHJ5L3NyYy9hcHAvZGV0YWlsL2RldGFpbC5zdmMuanMiLCIvVXNlcnMvbWF4aW1laGVja2VsL0RvY3VtZW50cy9Qcm9qZWN0cy9Db21wb3NlUmVnaXN0cnkvc3JjL2FwcC9mYXZtb2R1bGUvZmF2bW9kdWxlLmN0cmwuanMiLCIvVXNlcnMvbWF4aW1laGVja2VsL0RvY3VtZW50cy9Qcm9qZWN0cy9Db21wb3NlUmVnaXN0cnkvc3JjL2FwcC9mYXZtb2R1bGUvZmF2bW9kdWxlLm1vZHVsZS5qcyIsIi9Vc2Vycy9tYXhpbWVoZWNrZWwvRG9jdW1lbnRzL1Byb2plY3RzL0NvbXBvc2VSZWdpc3RyeS9zcmMvYXBwL2Zhdm1vZHVsZS9mYXZtb2R1bGUuc3ZjLmpzIiwiL1VzZXJzL21heGltZWhlY2tlbC9Eb2N1bWVudHMvUHJvamVjdHMvQ29tcG9zZVJlZ2lzdHJ5L3NyYy9hcHAvZmF2b3JpdGVzL2Zhdm9yaXRlcy5jdHJsLmpzIiwiL1VzZXJzL21heGltZWhlY2tlbC9Eb2N1bWVudHMvUHJvamVjdHMvQ29tcG9zZVJlZ2lzdHJ5L3NyYy9hcHAvZmF2b3JpdGVzL2Zhdm9yaXRlcy5tb2R1bGUuanMiLCIvVXNlcnMvbWF4aW1laGVja2VsL0RvY3VtZW50cy9Qcm9qZWN0cy9Db21wb3NlUmVnaXN0cnkvc3JjL2FwcC9mYXZvcml0ZXMvZmF2b3JpdGVzLnN2Yy5qcyIsIi9Vc2Vycy9tYXhpbWVoZWNrZWwvRG9jdW1lbnRzL1Byb2plY3RzL0NvbXBvc2VSZWdpc3RyeS9zcmMvYXBwL2xhbmRpbmcvbGFuZGluZy5jdHJsLmpzIiwiL1VzZXJzL21heGltZWhlY2tlbC9Eb2N1bWVudHMvUHJvamVjdHMvQ29tcG9zZVJlZ2lzdHJ5L3NyYy9hcHAvbGFuZGluZy9sYW5kaW5nLm1vZHVsZS5qcyIsIi9Vc2Vycy9tYXhpbWVoZWNrZWwvRG9jdW1lbnRzL1Byb2plY3RzL0NvbXBvc2VSZWdpc3RyeS9zcmMvYXBwL2xhbmRpbmcvbGFuZGluZy5zdmMuanMiLCIvVXNlcnMvbWF4aW1laGVja2VsL0RvY3VtZW50cy9Qcm9qZWN0cy9Db21wb3NlUmVnaXN0cnkvc3JjL2FwcC9teXN0YWNrcy9teXN0YWNrcy5jdHJsLmpzIiwiL1VzZXJzL21heGltZWhlY2tlbC9Eb2N1bWVudHMvUHJvamVjdHMvQ29tcG9zZVJlZ2lzdHJ5L3NyYy9hcHAvbXlzdGFja3MvbXlzdGFja3MubW9kdWxlLmpzIiwiL1VzZXJzL21heGltZWhlY2tlbC9Eb2N1bWVudHMvUHJvamVjdHMvQ29tcG9zZVJlZ2lzdHJ5L3NyYy9hcHAvbXlzdGFja3MvbXlzdGFja3Muc3ZjLmpzIiwiL1VzZXJzL21heGltZWhlY2tlbC9Eb2N1bWVudHMvUHJvamVjdHMvQ29tcG9zZVJlZ2lzdHJ5L3NyYy9hcHAvcmVnaXN0cnkvcmVnaXN0cnktbG9hZGVyLmpzIiwiL1VzZXJzL21heGltZWhlY2tlbC9Eb2N1bWVudHMvUHJvamVjdHMvQ29tcG9zZVJlZ2lzdHJ5L3NyYy9hcHAvcmVnaXN0cnkvcmVnaXN0cnkuY3RybC5qcyIsIi9Vc2Vycy9tYXhpbWVoZWNrZWwvRG9jdW1lbnRzL1Byb2plY3RzL0NvbXBvc2VSZWdpc3RyeS9zcmMvYXBwL3JlZ2lzdHJ5L3JlZ2lzdHJ5Lm1vZHVsZS5qcyIsIi9Vc2Vycy9tYXhpbWVoZWNrZWwvRG9jdW1lbnRzL1Byb2plY3RzL0NvbXBvc2VSZWdpc3RyeS9zcmMvYXBwL3JlZ2lzdHJ5L3JlZ2lzdHJ5LnN2Yy5qcyIsIi9Vc2Vycy9tYXhpbWVoZWNrZWwvRG9jdW1lbnRzL1Byb2plY3RzL0NvbXBvc2VSZWdpc3RyeS9zcmMvYXBwL3Nlc3Npb24vc2Vzc2lvbi5jdHJsLmpzIiwiL1VzZXJzL21heGltZWhlY2tlbC9Eb2N1bWVudHMvUHJvamVjdHMvQ29tcG9zZVJlZ2lzdHJ5L3NyYy9hcHAvc2Vzc2lvbi9zZXNzaW9uLm1vZHVsZS5qcyIsIi9Vc2Vycy9tYXhpbWVoZWNrZWwvRG9jdW1lbnRzL1Byb2plY3RzL0NvbXBvc2VSZWdpc3RyeS9zcmMvYXBwL3Nlc3Npb24vc2Vzc2lvbi5zdmMuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7O29DQ0ErQiwwQkFBMEI7O0lBQTdDLGFBQWE7O29DQUNNLDBCQUEwQjs7SUFBN0MsYUFBYTs7d0NBQ0UsOEJBQThCOztJQUE3QyxTQUFTOztxQ0FDUyw0QkFBNEI7O0lBQTlDLFlBQVk7O3NDQUNRLDRCQUE0Qjs7SUFBaEQsY0FBYzs7c0NBQ00sNEJBQTRCOztJQUFoRCxjQUFjOzt3Q0FDTyw4QkFBOEI7O0lBQW5ELGVBQWU7O2tDQUNHLHdCQUF3Qjs7SUFBMUMsWUFBWTs7a0NBQ00sd0JBQXdCOztJQUExQyxZQUFZOztBQUV4QixPQUFPLENBQUMsTUFBTSxDQUFDLFlBQVksRUFBRSxDQUFDLFdBQVcsRUFBQyxpQkFBaUIsRUFBQyx1QkFBdUIsRUFBQyxlQUFlLENBQUMsQ0FBQyxDQUVwRyxPQUFPLENBQUMsZ0JBQWdCLEVBQUUsYUFBYSxDQUFDLEdBQUcsQ0FBQyxDQUM1QyxVQUFVLENBQUMsbUJBQW1CLEVBQUUsYUFBYSxDQUFDLElBQUksQ0FBQyxDQUVuRCxPQUFPLENBQUMsZ0JBQWdCLEVBQUUsYUFBYSxDQUFDLEdBQUcsQ0FBQyxDQUM1QyxVQUFVLENBQUMsbUJBQW1CLEVBQUUsYUFBYSxDQUFDLElBQUksQ0FBQyxDQUVuRCxPQUFPLENBQUMsWUFBWSxFQUFFLFNBQVMsQ0FBQyxHQUFHLENBQUMsQ0FDcEMsVUFBVSxDQUFDLGVBQWUsRUFBRSxTQUFTLENBQUMsSUFBSSxDQUFDLENBRTNDLE9BQU8sQ0FBQyxlQUFlLEVBQUUsWUFBWSxDQUFDLEdBQUcsQ0FBQyxDQUMxQyxVQUFVLENBQUMsa0JBQWtCLEVBQUUsWUFBWSxDQUFDLElBQUksQ0FBQyxDQUVqRCxPQUFPLENBQUMsZ0JBQWdCLEVBQUUsY0FBYyxDQUFDLE1BQU0sQ0FBQyxDQUNoRCxPQUFPLENBQUMsaUJBQWlCLEVBQUUsY0FBYyxDQUFDLEdBQUcsQ0FBQyxDQUM5QyxVQUFVLENBQUMsb0JBQW9CLEVBQUUsY0FBYyxDQUFDLElBQUksQ0FBQyxDQUVyRCxPQUFPLENBQUMsaUJBQWlCLEVBQUUsY0FBYyxDQUFDLEdBQUcsQ0FBQyxDQUM5QyxVQUFVLENBQUMsb0JBQW9CLEVBQUUsY0FBYyxDQUFDLElBQUksQ0FBQyxDQUVyRCxPQUFPLENBQUMsa0JBQWtCLEVBQUUsZUFBZSxDQUFDLEdBQUcsQ0FBQyxDQUNoRCxVQUFVLENBQUMscUJBQXFCLEVBQUUsZUFBZSxDQUFDLElBQUksQ0FBQyxDQUV2RCxPQUFPLENBQUMsZUFBZSxFQUFFLFlBQVksQ0FBQyxHQUFHLENBQUMsQ0FDMUMsVUFBVSxDQUFDLGtCQUFrQixFQUFFLFlBQVksQ0FBQyxJQUFJLENBQUMsQ0FFakQsT0FBTyxDQUFDLGVBQWUsRUFBRSxZQUFZLENBQUMsR0FBRyxDQUFDLENBQzFDLFVBQVUsQ0FBQyxrQkFBa0IsRUFBRSxZQUFZLENBQUMsSUFBSSxDQUFDLENBRWpELE1BQU0sQ0FBQyxDQUFDLGdCQUFnQixFQUFFLG9CQUFvQixFQUFFLFVBQUMsY0FBYyxFQUFFLGtCQUFrQixFQUFLOztBQUVyRixvQkFBa0IsQ0FBQyxJQUFJLENBQUMsRUFBRSxFQUFFLEdBQUcsQ0FBQyxDQUFDO0FBQ2pDLG9CQUFrQixDQUFDLFNBQVMsQ0FBQyxNQUFNLENBQUMsQ0FBQzs7QUFFckMsZ0JBQWMsQ0FDWixLQUFLLENBQUMsU0FBUyxFQUFFO0FBQ2IsT0FBRyxFQUFFLEdBQUc7QUFDUixTQUFLLEVBQUU7QUFDTCxVQUFJLEVBQUU7QUFDSixtQkFBVyxFQUFFLDJCQUEyQjtBQUN4QyxrQkFBVSxFQUFFLG1CQUFtQjtPQUNoQztLQUNGO0dBQ0osQ0FBQyxDQUNGLEtBQUssQ0FBQyxVQUFVLEVBQUU7QUFDaEIsT0FBRyxFQUFFLFdBQVc7QUFDaEIsU0FBSyxFQUFFLEtBQUs7QUFDWixTQUFLLEVBQUU7QUFDTCxTQUFHLEVBQUU7QUFDSCxtQkFBVyxFQUFFLHVCQUF1QjtPQUNyQztBQUNELFVBQUksRUFBRTtBQUNKLG1CQUFXLEVBQUUseUJBQXlCO09BQ3ZDO0FBQ0QsYUFBTyxFQUFFO0FBQ1AsbUJBQVcsRUFBRSx3QkFBd0I7QUFDckMsa0JBQVUsRUFBRSx5QkFBeUI7T0FDdEM7S0FDRjtHQUNGLENBQUMsQ0FDRixLQUFLLENBQUMsUUFBUSxFQUFFO0FBQ2QsT0FBRyxFQUFDLGVBQWU7QUFDbkIsU0FBSyxFQUFFLEtBQUs7QUFDWixTQUFLLEVBQUU7QUFDTCxTQUFHLEVBQUU7QUFDSCxtQkFBVyxFQUFFLHVCQUF1QjtPQUNyQztBQUNELFVBQUksRUFBRTtBQUNKLG1CQUFXLEVBQUUseUJBQXlCO09BQ3ZDO0FBQ0QsYUFBTyxFQUFFO0FBQ1AsbUJBQVcsRUFBRSwrQkFBK0I7QUFDNUMsa0JBQVUsRUFBRSx1QkFBdUI7T0FDcEM7S0FDRjtHQUNGLENBQUMsQ0FDRixLQUFLLENBQUMsVUFBVSxFQUFFO0FBQ2hCLE9BQUcsRUFBQyxXQUFXO0FBQ2YsU0FBSyxFQUFFLEtBQUs7QUFDWixTQUFLLEVBQUU7QUFDTCxTQUFHLEVBQUU7QUFDSCxtQkFBVyxFQUFFLHVCQUF1QjtPQUNyQztBQUNELFVBQUksRUFBRTtBQUNKLG1CQUFXLEVBQUUseUJBQXlCO09BQ3ZDO0FBQ0QsYUFBTyxFQUFFO0FBQ1AsbUJBQVcsRUFBRSx3QkFBd0I7QUFDckMsa0JBQVUsRUFBRSx5QkFBeUI7T0FDdEM7S0FDRjtHQUNGLENBQUMsQ0FDRixLQUFLLENBQUMsV0FBVyxFQUFFO0FBQ2pCLE9BQUcsRUFBQyxZQUFZO0FBQ2hCLFNBQUssRUFBRSxLQUFLO0FBQ1osU0FBSyxFQUFFO0FBQ0wsU0FBRyxFQUFFO0FBQ0gsbUJBQVcsRUFBRSx1QkFBdUI7T0FDckM7QUFDRCxVQUFJLEVBQUU7QUFDSixtQkFBVyxFQUFFLHlCQUF5QjtPQUN2QztBQUNELGFBQU8sRUFBRTtBQUNQLG1CQUFXLEVBQUUseUJBQXlCO0FBQ3RDLGtCQUFVLEVBQUUsMkJBQTJCO09BQ3hDO0tBQ0Y7R0FDRixDQUFDLENBQ0YsS0FBSyxDQUFDLFFBQVEsRUFBRTtBQUNkLE9BQUcsRUFBQyxTQUFTO0FBQ2IsU0FBSyxFQUFFO0FBQ0wsU0FBRyxFQUFFO0FBQ0gsbUJBQVcsRUFBRSx1QkFBdUI7T0FDckM7QUFDRCxVQUFJLEVBQUU7QUFDSixtQkFBVyxFQUFFLHlCQUF5QjtPQUN2QztBQUNELGFBQU8sRUFBRTtBQUNQLG1CQUFXLEVBQUUsc0JBQXNCO09BQ3BDO0tBQ0Y7R0FDRixDQUFDLENBQ0YsS0FBSyxDQUFDLEtBQUssRUFBRTtBQUNYLE9BQUcsRUFBQyxNQUFNO0FBQ1YsU0FBSyxFQUFFO0FBQ0wsVUFBSSxFQUFFO0FBQ0osbUJBQVcsRUFBRSxtQkFBbUI7T0FDakM7S0FDRjtHQUNGLENBQUMsQ0FBQzs7QUFFSCxXQUFTLFlBQVksQ0FBQyxFQUFFLEVBQUUsVUFBVSxFQUFFLE1BQU0sRUFBRSxRQUFRLEVBQUU7QUFDeEQsUUFBSSxVQUFVLENBQUMsTUFBTSxFQUFFOztBQUVyQixhQUFPLEVBQUUsQ0FBQyxJQUFJLEVBQUUsQ0FBQztLQUNsQixNQUFNO0FBQ0wsWUFBTSxDQUFDLEVBQUUsQ0FBQyxVQUFVLENBQUMsQ0FBQzs7QUFFdEIsYUFBTyxFQUFFLENBQUMsTUFBTSxFQUFFLENBQUM7S0FDcEI7R0FDRjtDQUNKLENBQUMsQ0FBQyxDQUVGLFNBQVMsQ0FBQyxTQUFTLEVBQUUsWUFBWTtBQUM5QixTQUFPLFVBQVUsS0FBSyxFQUFFLE9BQU8sRUFBRSxLQUFLLEVBQUU7QUFDcEMsV0FBTyxDQUFDLElBQUksQ0FBQyxrQkFBa0IsRUFBRSxVQUFVLEtBQUssRUFBRTtBQUM5QyxVQUFHLEtBQUssQ0FBQyxLQUFLLEtBQUssRUFBRSxFQUFFO0FBQ25CLGFBQUssQ0FBQyxNQUFNLENBQUMsWUFBVztBQUNwQixlQUFLLENBQUMsS0FBSyxDQUFDLEtBQUssQ0FBQyxPQUFPLENBQUMsQ0FBQztTQUM5QixDQUFDLENBQUM7QUFDSCxhQUFLLENBQUMsY0FBYyxFQUFFLENBQUM7T0FDMUI7S0FDSixDQUFDLENBQUM7R0FDTixDQUFDO0NBQ0wsQ0FBQyxDQUVELFNBQVMsQ0FBQyxPQUFPLEVBQUUsWUFBWTtBQUM1QixTQUFPO0FBQ0gsWUFBUSxFQUFFLDBCQUEwQixHQUNwQyw0QkFBNEIsR0FDNUIsNkJBQTZCLEdBQzdCLDRCQUE0QixHQUM1Qiw4RkFBOEYsR0FDOUYsMENBQTBDLEdBQzFDLFFBQVEsR0FDUiw4Q0FBOEMsR0FDOUMsUUFBUSxHQUNSLFFBQVEsR0FDUixRQUFRO0FBQ1IsWUFBUSxFQUFFLEdBQUc7QUFDYixjQUFVLEVBQUUsSUFBSTtBQUNoQixXQUFPLEVBQUMsSUFBSTtBQUNaLFNBQUssRUFBQyxJQUFJO0FBQ04sUUFBSSxFQUFFLFNBQVMsUUFBUSxDQUFDLEtBQUssRUFBRSxPQUFPLEVBQUUsS0FBSyxFQUFFO0FBQy9DLFdBQUssQ0FBQyxLQUFLLEdBQUcsS0FBSyxDQUFDLEtBQUssQ0FBQztBQUMxQixXQUFLLENBQUMsTUFBTSxDQUFDLEtBQUssQ0FBQyxPQUFPLEVBQUUsVUFBUyxLQUFLLEVBQUM7QUFDdkMsWUFBRyxLQUFLLEtBQUssSUFBSSxFQUNiLENBQUMsQ0FBQyxPQUFPLENBQUMsQ0FBQyxLQUFLLENBQUMsTUFBTSxDQUFDLENBQUMsS0FFekIsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxDQUFDLEtBQUssQ0FBQyxNQUFNLENBQUMsQ0FBQztPQUM1QixDQUFDLENBQUM7O0FBRUgsT0FBQyxDQUFDLE9BQU8sQ0FBQyxDQUFDLEVBQUUsQ0FBQyxnQkFBZ0IsRUFBRSxZQUFVO0FBQ3RDLGFBQUssQ0FBQyxNQUFNLENBQUMsWUFBVTtBQUNuQixlQUFLLENBQUMsT0FBTyxDQUFDLEtBQUssQ0FBQyxPQUFPLENBQUMsR0FBRyxJQUFJLENBQUM7U0FDdkMsQ0FBQyxDQUFDO09BQ04sQ0FBQyxDQUFDOztBQUVILE9BQUMsQ0FBQyxPQUFPLENBQUMsQ0FBQyxFQUFFLENBQUMsaUJBQWlCLEVBQUUsWUFBVTtBQUN2QyxhQUFLLENBQUMsTUFBTSxDQUFDLFlBQVU7QUFDbkIsZUFBSyxDQUFDLE9BQU8sQ0FBQyxLQUFLLENBQUMsT0FBTyxDQUFDLEdBQUcsS0FBSyxDQUFDO1NBQzVDLENBQUMsQ0FBQztPQUNOLENBQUMsQ0FBQztLQUNOO0dBQ0osQ0FBQztDQUNMLENBQUMsQ0FFRCxTQUFTLENBQUMsV0FBVyxFQUFFLENBQUMsVUFBVSxFQUFFLFVBQVMsUUFBUSxFQUFFO0FBQ3BELFNBQU87QUFDSCxZQUFRLEVBQUUsR0FBRztBQUNULFFBQUksRUFBRyxjQUFTLE1BQU0sRUFBRSxRQUFRLEVBQUU7QUFDOUIsY0FBUSxDQUFDLFlBQVc7QUFDaEIsZ0JBQVEsQ0FBQyxDQUFDLENBQUMsQ0FBQyxLQUFLLEVBQUUsQ0FBQztPQUMzQixDQUFDLENBQUM7S0FDTjtHQUNKLENBQUM7Q0FDTCxDQUFDLENBQUMsQ0FFRixTQUFTLENBQUMsS0FBSyxFQUFFLFlBQVU7QUFDeEIsU0FBTztBQUNILFlBQVEsRUFBRSx3U0FBd1MsR0FDOVMsNEdBQTRHLEdBQ3hHLDZEQUE2RCxHQUN6RCxvRkFBb0YsR0FDaEYsa1VBQWtVLEdBQ3RVLE1BQU0sR0FDVixNQUFNLEdBQ1YsTUFBTSxHQUNWLFFBQVE7QUFDUixZQUFRLEVBQUUsR0FBRztBQUNiLFNBQUssRUFBRTtBQUNILFNBQUcsRUFBRSxHQUFHO0FBQ1IsZ0JBQVUsRUFBRSxHQUFHO0FBQ2YsY0FBUSxFQUFFLEdBQUc7S0FDaEI7QUFDRCxRQUFJLEVBQUUsY0FBUyxLQUFLLEVBQUUsT0FBTyxFQUFFLFVBQVUsRUFBQztBQUN0QyxXQUFLLENBQUMsVUFBVSxHQUFHLEtBQUssQ0FBQztBQUN6QixXQUFLLENBQUMsTUFBTSxHQUFHLFlBQVk7QUFDdkIsYUFBSyxDQUFDLFVBQVUsR0FBRyxDQUFDLEtBQUssQ0FBQyxVQUFVLENBQUM7QUFDckMsYUFBSyxDQUFDLFFBQVEsRUFBRSxDQUFDLEtBQUssQ0FBQyxHQUFHLEVBQUMsS0FBSyxDQUFDLFVBQVUsQ0FBQyxDQUFDO09BQ2hELENBQUM7S0FFTDtHQUNKLENBQUM7Q0FDTCxDQUFDLENBQUM7Ozs7Ozs7Ozs7Ozs7SUNyUEcsZ0JBQWdCO0FBQ1QsV0FEUCxnQkFBZ0IsQ0FDUixNQUFNLEVBQUUsYUFBYSxFQUFDOzBCQUQ5QixnQkFBZ0I7O0FBRWxCLFFBQUksQ0FBQyxNQUFNLEdBQUcsTUFBTSxDQUFDO0FBQ3JCLFFBQUksQ0FBQyxhQUFhLEdBQUcsYUFBYSxDQUFDO0dBQ3BDOztlQUpHLGdCQUFnQjs7V0FNVCx1QkFBRTtBQUNYLFVBQUksQ0FBQyxNQUFNLENBQUMsUUFBUSxHQUFHLEVBQUMsTUFBTSxFQUFFLFlBQVksRUFBQyxDQUFDO0FBQzlDLFVBQUksQ0FBQyxNQUFNLENBQUMsU0FBUyxHQUFHLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxTQUFTLENBQUM7S0FDaEQ7OztXQUVZLHVCQUFDLEVBQUUsRUFBQztBQUNmLFVBQUksQ0FBQyxNQUFNLENBQUMsV0FBVyxHQUFHLGVBQWUsR0FBQyxNQUFNLENBQUMsUUFBUSxDQUFDLFFBQVEsR0FBQyxJQUFJLEdBQUMsTUFBTSxDQUFDLFFBQVEsQ0FBQyxRQUFRLEdBQUMsY0FBYyxHQUFDLEVBQUUsR0FBQyxnQkFBZ0IsQ0FBQztLQUNySTs7O1dBRUssZ0JBQUMsRUFBRSxFQUFDO0FBQ1IsWUFBTSxDQUFDLFFBQVEsQ0FBQyxJQUFJLEdBQUksaUJBQWlCLEdBQUMsRUFBRSxBQUFDLENBQUM7S0FDL0M7OztXQUVTLHNCQUFFOzs7QUFDVixVQUFJLElBQUksR0FBRyxJQUFJLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQztBQUM1QixVQUFJLENBQUMsYUFBYSxDQUFDLFVBQVUsQ0FBQyxJQUFJLENBQUMsQ0FBQyxJQUFJLENBQUMsVUFBQSxPQUFPLEVBQUk7QUFDbEQsY0FBSyxPQUFPLEdBQUcsT0FBTyxDQUFDO09BQ3hCLENBQUMsQ0FBQztLQUNKOzs7U0F4QkcsZ0JBQWdCOzs7QUEyQnRCLGdCQUFnQixDQUFDLE9BQU8sR0FBRyxDQUFDLFFBQVEsRUFBRSxlQUFlLENBQUMsQ0FBQzs7UUFFOUMsZ0JBQWdCLEdBQWhCLGdCQUFnQjs7Ozs7Ozs7OzBCQzdCUSxlQUFlOzt5QkFDbEIsY0FBYzs7QUFFNUMsSUFBSSxJQUFJLCtCQUFtQixDQUFDO0FBQzVCLElBQUksR0FBRyxHQUFHLHlCQUFjLE9BQU8sQ0FBQzs7UUFFdkIsSUFBSSxHQUFKLElBQUk7UUFDSixHQUFHLEdBQUgsR0FBRzs7Ozs7Ozs7Ozs7OztJQ1BOLGFBQWE7QUFDTixXQURQLGFBQWEsQ0FDTCxLQUFLLEVBQUM7MEJBRGQsYUFBYTs7QUFFZixRQUFJLENBQUMsS0FBSyxHQUFHLEtBQUssQ0FBQztHQUNwQjs7ZUFIRyxhQUFhOztXQUtQLG9CQUFDLElBQUksRUFBQztBQUNkLGFBQU8sSUFBSSxDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUMsZ0JBQWdCLEVBQUU7QUFDdEMsY0FBTSxFQUFFLEtBQUs7QUFDYixjQUFNLEVBQUU7QUFDTixjQUFJLEVBQUUsSUFBSTtTQUNYO09BQ0YsQ0FBQyxDQUFDLElBQUksQ0FBQyxVQUFBLENBQUM7ZUFBSSxDQUFDLENBQUMsSUFBSTtPQUFBLENBQUMsQ0FBQztLQUN0Qjs7O1dBRWEsaUJBQUMsS0FBSyxFQUFDO0FBQ25CLGFBQU8sSUFBSSxhQUFhLENBQUMsS0FBSyxDQUFDLENBQUM7S0FDakM7OztTQWhCRyxhQUFhOzs7QUFtQm5CLGFBQWEsQ0FBQyxPQUFPLENBQUMsT0FBTyxHQUFHLENBQUMsT0FBTyxDQUFDLENBQUM7O1FBRWpDLGFBQWEsR0FBYixhQUFhOzs7Ozs7Ozs7Ozs7O0lDckJoQixnQkFBZ0I7QUFDVCxXQURQLGdCQUFnQixDQUNSLE1BQU0sRUFBRSxVQUFVLEVBQUUsTUFBTSxFQUFFLE9BQU8sRUFBRSxhQUFhLEVBQUM7MEJBRDNELGdCQUFnQjs7QUFFbEIsUUFBSSxDQUFDLGFBQWEsR0FBRyxhQUFhLENBQUM7QUFDbkMsUUFBSSxDQUFDLE1BQU0sR0FBRyxNQUFNLENBQUM7QUFDckIsUUFBSSxDQUFDLFVBQVUsR0FBRyxVQUFVLENBQUM7QUFDN0IsUUFBSSxDQUFDLE1BQU0sR0FBRyxNQUFNLENBQUM7QUFDckIsUUFBSSxDQUFDLE9BQU8sR0FBRyxPQUFPLENBQUM7QUFDdkIsUUFBSSxDQUFDLElBQUksRUFBRSxDQUFDO0dBQ2I7O2VBUkcsZ0JBQWdCOztXQVVoQixnQkFBRTtBQUNKLFVBQUcsSUFBSSxDQUFDLFVBQVUsQ0FBQyxNQUFNLEVBQUM7QUFDeEIsWUFBSSxDQUFDLE1BQU0sQ0FBQyxJQUFJLEdBQUcsSUFBSSxDQUFDLFVBQVUsQ0FBQyxJQUFJLENBQUM7QUFDeEMsWUFBSSxDQUFDLE1BQU0sQ0FBQyxNQUFNLEdBQUcsS0FBSyxDQUFDO0FBQzNCLFlBQUksQ0FBQyxNQUFNLENBQUMsU0FBUyxHQUFHLHFJQUFxSSxDQUFDO09BQy9KO0tBQ0Y7OztXQUVNLG1CQUFFOzs7QUFDUCxVQUFJLElBQUksR0FBRyxFQUFFLENBQUM7QUFDZCxVQUFJLEtBQUssR0FBRyxFQUFFLENBQUM7QUFDZixVQUFJLFFBQVEsR0FBRyxFQUFFLENBQUM7QUFDbEIsVUFBSSxDQUFDLElBQUksQ0FBQyxJQUFJLEdBQUcsR0FBRyxDQUFDO0FBQ3JCLFVBQUksQ0FBQyxNQUFNLENBQUMsU0FBUyxHQUFHLHVEQUF1RCxDQUFDOztBQUVoRixVQUFJLENBQUMsYUFBYSxDQUFDLFdBQVcsRUFBRSxDQUFDLElBQUksQ0FBQyxVQUFBLElBQUksRUFBSTtBQUM1QyxlQUFPLENBQUMsT0FBTyxDQUFDLElBQUksRUFBRSxVQUFDLEtBQUssRUFBRSxHQUFHLEVBQUs7QUFDcEMsY0FBSSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsS0FBSyxDQUFDLENBQUM7U0FDeEIsQ0FBQyxDQUFDO0FBQ0gsWUFBSSxDQUFDLElBQUksQ0FBQyxNQUFLLE1BQU0sQ0FBQyxJQUFJLENBQUMsQ0FBQztBQUM1QixjQUFLLE1BQU0sQ0FBQyxJQUFJLEdBQUcsSUFBSSxDQUFDO09BQ3pCLENBQUMsQ0FBQztLQUNKOzs7V0FFTyxvQkFBRTs7O0FBQ1IsVUFBSSxLQUFLLEdBQUcsRUFBRSxDQUFDO0FBQ2YsVUFBSSxRQUFRLEdBQUcsRUFBRSxDQUFDO0FBQ2xCLFVBQUksQ0FBQyxJQUFJLENBQUMsSUFBSSxHQUFHLEdBQUcsQ0FBQztBQUNyQixVQUFJLENBQUMsTUFBTSxDQUFDLFNBQVMsR0FBRyx1REFBdUQsQ0FBQzs7QUFFaEYsVUFBSSxDQUFDLGFBQWEsQ0FBQyxZQUFZLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsQ0FBQyxJQUFJLENBQUMsVUFBQSxJQUFJLEVBQUk7QUFDOUQsZUFBSyxNQUFNLENBQUMsS0FBSyxHQUFHLEVBQUUsQ0FBQztBQUN2QixlQUFPLENBQUMsT0FBTyxDQUFDLElBQUksRUFBRSxVQUFDLEtBQUssRUFBRSxHQUFHLEVBQUs7QUFDbEMsZUFBSyxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLENBQUM7U0FDMUIsQ0FBQyxDQUFDO0FBQ0gsZUFBSyxNQUFNLENBQUMsS0FBSyxHQUFHLEtBQUssQ0FBQztPQUMzQixDQUFDLENBQUM7S0FDSjs7O1dBRVUsdUJBQUU7OztBQUNYLFVBQUksUUFBUSxHQUFHLEVBQUUsQ0FBQztBQUNsQixVQUFJLENBQUMsSUFBSSxDQUFDLElBQUksR0FBRyxHQUFHLENBQUM7QUFDckIsVUFBSSxDQUFDLE1BQU0sQ0FBQyxTQUFTLEdBQUcsdURBQXVELENBQUM7O0FBRWhGLFVBQUksQ0FBQyxhQUFhLENBQUMsZUFBZSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsT0FBTyxFQUFFLElBQUksQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLENBQUMsSUFBSSxDQUFDLFVBQUEsSUFBSSxFQUFJO0FBQ3JGLGVBQU8sQ0FBQyxPQUFPLENBQUMsSUFBSSxFQUFFLFVBQUMsS0FBSyxFQUFFLEdBQUcsRUFBSztBQUNwQyxrQkFBUSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQztTQUN0QixDQUFDLENBQUM7QUFDSCxlQUFLLE1BQU0sQ0FBQyxRQUFRLEdBQUcsUUFBUSxDQUFDO09BQ2pDLENBQUMsQ0FBQztLQUNKOzs7V0FFYSx3QkFBQyxPQUFPLEVBQUUsSUFBSSxFQUFFLE1BQU0sRUFBRSxJQUFJLEVBQUM7OztBQUN6QyxVQUFHLE9BQU8sS0FBSyxTQUFTLEVBQUM7QUFDdkIsZUFBTztPQUNSO0FBQ0QsVUFBSSxDQUFDLE1BQU0sQ0FBQyxTQUFTLEdBQUcsRUFBRSxDQUFDO0FBQzNCLFVBQUksQ0FBQyxhQUFhLENBQUMsZUFBZSxDQUFDLE9BQU8sRUFBRSxJQUFJLEVBQUUsTUFBTSxFQUFFLElBQUksQ0FBQyxDQUFDLElBQUksQ0FBQyxVQUFBLElBQUksRUFBSTtBQUMzRSxZQUFHLElBQUksS0FBSyxnQkFBZ0IsRUFBQztBQUMzQixpQkFBSyxNQUFNLENBQUMsU0FBUyxHQUFHLHFJQUFxSSxDQUFDO0FBQzlKLGlCQUFLLE1BQU0sQ0FBQyxNQUFNLEdBQUcsSUFBSSxDQUFDO1NBQzNCLE1BQU07QUFDTCxpQkFBSyxNQUFNLENBQUMsTUFBTSxHQUFHLEtBQUssQ0FBQztBQUMzQixpQkFBSyxNQUFNLENBQUMsU0FBUyxHQUFHLElBQUksQ0FBQztTQUM5QjtPQUNGLENBQUMsQ0FBQztLQUNKOzs7V0FFUSxxQkFBRTs7O0FBQ1QsVUFBSSxLQUFLLEdBQUcsSUFBSSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUM7QUFDNUIsVUFBSSxTQUFTLEdBQUcsTUFBTSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLFNBQVMsQ0FBQyxDQUFDO0FBQ25ELFVBQUksTUFBTSxHQUFHLElBQUksQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDO0FBQzlCLFVBQUksSUFBSSxHQUFHLElBQUksQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDO0FBQzFCLFVBQUksV0FBVyxHQUFHLElBQUksQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDO0FBQ3JDLFVBQUksZ0JBQWdCLEdBQUcsSUFBSSxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUM7QUFDekMsVUFBSSxXQUFXLEdBQUcsSUFBSSxDQUFDLElBQUksQ0FBQyxXQUFXLENBQUM7O0FBRXhDLFVBQUksSUFBSSxHQUFHO0FBQ1AsYUFBSyxFQUFFLEtBQUssQ0FBQyxPQUFPLENBQUMsZUFBZSxFQUFDLEdBQUcsQ0FBQztBQUN6QyxpQkFBUyxFQUFFLFNBQVM7QUFDcEIsY0FBTSxFQUFFLE1BQU07QUFDZCxZQUFJLEVBQUUsSUFBSTtBQUNWLFlBQUksRUFBRSxXQUFXO0FBQ2pCLGVBQU8sRUFBRSxnQkFBZ0I7QUFDekIsbUJBQVcsRUFBRSxXQUFXO09BQzNCLENBQUM7O0FBRUYsVUFBSSxDQUFDLGFBQWEsQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLENBQUMsSUFBSSxDQUFDLFlBQU07QUFDM0MsZUFBSyxNQUFNLENBQUMsRUFBRSxDQUFDLFVBQVUsRUFBRSxFQUFFLEVBQUUsRUFBRSxNQUFNLEVBQUUsSUFBSSxFQUFFLE9BQU8sRUFBRSxLQUFLLEVBQUUsTUFBTSxFQUFFLElBQUksRUFBRSxDQUFDLENBQUM7T0FDaEYsQ0FBQyxDQUFDO0tBQ0o7OztTQXBHRyxnQkFBZ0I7OztBQXVHdEIsZ0JBQWdCLENBQUMsT0FBTyxHQUFHLENBQUMsUUFBUSxFQUFFLFlBQVksRUFBRSxRQUFRLEVBQUUsU0FBUyxFQUFFLGVBQWUsQ0FBQyxDQUFDOztRQUVqRixnQkFBZ0IsR0FBaEIsZ0JBQWdCOzs7Ozs7Ozs7MEJDekdRLGVBQWU7O3lCQUNsQixjQUFjOztBQUU1QyxJQUFJLElBQUksK0JBQW1CLENBQUM7QUFDNUIsSUFBSSxHQUFHLEdBQUcseUJBQWMsT0FBTyxDQUFDOztRQUV2QixJQUFJLEdBQUosSUFBSTtRQUNKLEdBQUcsR0FBSCxHQUFHOzs7Ozs7Ozs7Ozs7O0lDUE4sYUFBYTtBQUNOLFdBRFAsYUFBYSxDQUNMLEtBQUssRUFBQzswQkFEZCxhQUFhOztBQUVmLFFBQUksQ0FBQyxLQUFLLEdBQUcsS0FBSyxDQUFDO0dBQ3BCOztlQUhHLGFBQWE7O1dBS0wsc0JBQUMsSUFBSSxFQUFDO0FBQ2hCLGFBQU8sSUFBSSxDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUMsb0JBQW9CLEVBQUU7QUFDMUMsY0FBTSxFQUFFLEtBQUs7QUFDYixjQUFNLEVBQUU7QUFDTixjQUFJLEVBQUUsSUFBSTtTQUNYO09BQ0YsQ0FBQyxDQUFDLElBQUksQ0FBQyxVQUFBLENBQUM7ZUFBSSxDQUFDLENBQUMsSUFBSTtPQUFBLENBQUMsQ0FBQztLQUN0Qjs7O1dBRVUsdUJBQUU7QUFDWCxhQUFPLElBQUksQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDLG1CQUFtQixFQUFFO0FBQ3pDLGNBQU0sRUFBRSxLQUFLO09BQ2QsQ0FBQyxDQUFDLElBQUksQ0FBQyxVQUFBLENBQUM7ZUFBSSxDQUFDLENBQUMsSUFBSTtPQUFBLENBQUMsQ0FBQztLQUN0Qjs7O1dBRWMseUJBQUMsT0FBTyxFQUFFLElBQUksRUFBQztBQUM1QixhQUFPLElBQUksQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDLDZCQUE2QixFQUFFO0FBQ25ELGNBQU0sRUFBRSxLQUFLO0FBQ2IsY0FBTSxFQUFFO0FBQ04saUJBQU8sRUFBRSxPQUFPO0FBQ2hCLGNBQUksRUFBRSxJQUFJO1NBQ1g7T0FDRixDQUFDLENBQUMsSUFBSSxDQUFDLFVBQUEsQ0FBQztlQUFJLENBQUMsQ0FBQyxJQUFJO09BQUEsQ0FBQyxDQUFDO0tBQ3RCOzs7V0FFYyx5QkFBQyxPQUFPLEVBQUUsSUFBSSxFQUFFLE1BQU0sRUFBRSxJQUFJLEVBQUM7QUFDMUMsYUFBTyxJQUFJLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyx3QkFBd0IsRUFBRTtBQUMvQyxjQUFNLEVBQUUsTUFBTTtBQUNkLGNBQU0sRUFBRTtBQUNKLGlCQUFPLEVBQUUsT0FBTztBQUNoQixjQUFJLEVBQUUsSUFBSTtBQUNWLGdCQUFNLEVBQUUsTUFBTTtBQUNkLGNBQUksRUFBRSxJQUFJO1NBQ2I7T0FDRixDQUFDLENBQUMsSUFBSSxDQUFDLFVBQUEsQ0FBQztlQUFJLENBQUMsQ0FBQyxJQUFJO09BQUEsQ0FBQyxDQUFDO0tBQ3RCOzs7V0FFTyxrQkFBQyxJQUFJLEVBQUM7QUFDWixhQUFPLElBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLGdCQUFnQixFQUFFO0FBQ3ZDLGNBQU0sRUFBRSxNQUFNO0FBQ2QsY0FBTSxFQUFFO0FBQ0osY0FBSSxFQUFHLElBQUk7U0FDZjtPQUNGLENBQUMsQ0FBQztLQUNIOzs7V0FFYSxpQkFBQyxLQUFLLEVBQUM7QUFDbkIsYUFBTyxJQUFJLGFBQWEsQ0FBQyxLQUFLLENBQUMsQ0FBQztLQUNqQzs7O1NBckRHLGFBQWE7OztBQXdEbkIsYUFBYSxDQUFDLE9BQU8sQ0FBQyxPQUFPLEdBQUcsQ0FBQyxPQUFPLENBQUMsQ0FBQzs7UUFFakMsYUFBYSxHQUFiLGFBQWE7Ozs7Ozs7Ozs7Ozs7SUMxRGhCLGdCQUFnQjtBQUNWLFdBRE4sZ0JBQWdCLENBQ1QsTUFBTSxFQUFFLFVBQVUsRUFBRSxNQUFNLEVBQUUsT0FBTyxFQUFFLFlBQVksRUFBRSxhQUFhLEVBQUM7MEJBRHhFLGdCQUFnQjs7QUFFbkIsUUFBSSxDQUFDLE1BQU0sR0FBRyxNQUFNLENBQUM7QUFDckIsUUFBSSxDQUFDLFVBQVUsR0FBRyxVQUFVLENBQUM7QUFDN0IsUUFBSSxDQUFDLE1BQU0sR0FBRyxNQUFNLENBQUM7QUFDckIsUUFBSSxDQUFDLE9BQU8sR0FBRyxPQUFPLENBQUM7QUFDdkIsUUFBSSxDQUFDLFlBQVksR0FBRyxZQUFZLENBQUM7QUFDakMsUUFBSSxDQUFDLGFBQWEsR0FBRyxhQUFhLENBQUM7QUFDbkMsUUFBSSxDQUFDLElBQUksRUFBRSxDQUFDO0dBQ2I7O2VBVEksZ0JBQWdCOztXQVdqQixnQkFBRTs7O0FBQ0osVUFBRyxJQUFJLENBQUMsVUFBVSxDQUFDLE1BQU0sRUFBQztBQUN4QixZQUFJLENBQUMsTUFBTSxDQUFDLElBQUksR0FBRyxJQUFJLENBQUMsVUFBVSxDQUFDLElBQUksQ0FBQztBQUN4QyxZQUFJLENBQUMsTUFBTSxDQUFDLE1BQU0sR0FBRyxJQUFJLENBQUMsVUFBVSxDQUFDLE1BQU0sQ0FBQztPQUM3Qzs7QUFFRCxVQUFJLENBQUMsYUFBYSxDQUFDLGFBQWEsQ0FBQyxJQUFJLENBQUMsWUFBWSxDQUFDLEVBQUUsQ0FBQyxDQUFDLElBQUksQ0FBQyxVQUFBLENBQUMsRUFBSTtBQUMvRCxjQUFLLElBQUksR0FBRyxDQUFDLENBQUMsSUFBSSxDQUFDO0FBQ25CLFlBQUcsQ0FBQyxDQUFDLE1BQU0sR0FBRyxHQUFHLEVBQUM7QUFDaEIsZ0JBQUssYUFBYSxDQUFDLFdBQVcsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLEdBQUcsRUFBRSxDQUFDLENBQUMsSUFBSSxDQUFDLFdBQVcsRUFBRSxDQUFDLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDLElBQUksQ0FBQyxVQUFBLFFBQVEsRUFBSTtBQUMzRixrQkFBSyxXQUFXLEdBQUcsUUFBUSxDQUFDO0FBQzVCLGtCQUFLLE1BQU0sQ0FBQyxNQUFNLEdBQUcsSUFBSSxDQUFDO1dBQzNCLENBQUMsQ0FBQztTQUNKO09BQ0YsRUFBRSxZQUFNO0FBQ1AsY0FBSyxNQUFNLENBQUMsRUFBRSxDQUFDLEtBQUssQ0FBQyxDQUFDO09BQ3ZCLENBQUMsQ0FBQztLQUNKOzs7V0FFYyx5QkFBQyxFQUFFLEVBQUM7OztBQUNqQixVQUFJLENBQUMsYUFBYSxDQUFDLGVBQWUsQ0FBQyxFQUFFLENBQUMsQ0FBQyxJQUFJLENBQUMsWUFBTTtBQUNoRCxlQUFLLE1BQU0sQ0FBQyxFQUFFLENBQUMsVUFBVSxFQUFFLEVBQUUsRUFBRSxFQUFFLE1BQU0sRUFBRSxJQUFJLEVBQUUsT0FBTyxFQUFFLEtBQUssRUFBRSxNQUFNLEVBQUUsSUFBSSxFQUFFLENBQUMsQ0FBQztPQUNoRixDQUFDLENBQUM7S0FDSjs7O1NBbENJLGdCQUFnQjs7O0FBcUN0QixnQkFBZ0IsQ0FBQyxPQUFPLEdBQUcsQ0FBQyxRQUFRLEVBQUUsWUFBWSxFQUFFLFFBQVEsRUFBRSxTQUFTLEVBQUUsY0FBYyxFQUFFLGVBQWUsQ0FBQyxDQUFDOztRQUVqRyxnQkFBZ0IsR0FBaEIsZ0JBQWdCOzs7Ozs7Ozs7MEJDdkNRLGVBQWU7O3lCQUNsQixjQUFjOztBQUU1QyxJQUFJLElBQUksK0JBQW1CLENBQUM7QUFDNUIsSUFBSSxHQUFHLEdBQUcseUJBQWMsT0FBTyxDQUFDOztRQUV2QixJQUFJLEdBQUosSUFBSTtRQUNKLEdBQUcsR0FBSCxHQUFHOzs7Ozs7Ozs7Ozs7O0lDUE4sYUFBYTtBQUNOLFdBRFAsYUFBYSxDQUNMLEtBQUssRUFBQzswQkFEZCxhQUFhOztBQUVmLFFBQUksQ0FBQyxLQUFLLEdBQUcsS0FBSyxDQUFDO0dBQ3BCOztlQUhHLGFBQWE7O1dBS0osdUJBQUMsRUFBRSxFQUFDO0FBQ2YsYUFBTyxJQUFJLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQyxnQkFBZ0IsR0FBRyxFQUFFLEVBQUU7QUFDM0MsY0FBTSxFQUFFLEtBQUs7QUFDYixjQUFNLEVBQUU7QUFDTixZQUFFLEVBQUUsRUFBRTtTQUNQO09BQ0YsQ0FBQyxDQUFDLElBQUksQ0FBQyxVQUFBLENBQUM7ZUFBSSxDQUFDO09BQUEsQ0FBQyxDQUFDO0tBQ2pCOzs7V0FFVSxxQkFBQyxFQUFFLEVBQUUsSUFBSSxFQUFFLElBQUksRUFBQztBQUN6QixhQUFPLElBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLHlCQUF5QixFQUFFO0FBQ2hELGNBQU0sRUFBRSxNQUFNO0FBQ2QsY0FBTSxFQUFFO0FBQ04sWUFBRSxFQUFFLEVBQUU7QUFDTixjQUFJLEVBQUUsSUFBSTtBQUNWLGNBQUksRUFBRSxJQUFJO1NBQ1g7T0FDRixDQUFDLENBQUMsSUFBSSxDQUFDLFVBQUEsQ0FBQztlQUFJLENBQUMsQ0FBQyxJQUFJO09BQUEsQ0FBQyxDQUFDO0tBQ3RCOzs7V0FFYyx5QkFBQyxFQUFFLEVBQUM7QUFDakIsYUFBTyxJQUFJLENBQUMsS0FBSyxVQUFPLENBQUMsZ0JBQWdCLEdBQUcsRUFBRSxFQUFFO0FBQzlDLGNBQU0sRUFBRSxRQUFRO0FBQ2hCLGNBQU0sRUFBRTtBQUNOLFlBQUUsRUFBRSxFQUFFO1NBQ1A7T0FDRixDQUFDLENBQUMsSUFBSSxDQUFDLFVBQUEsQ0FBQztlQUFJLENBQUMsQ0FBQyxJQUFJO09BQUEsQ0FBQyxDQUFDO0tBQ3RCOzs7V0FFYSxpQkFBQyxLQUFLLEVBQUM7QUFDbkIsYUFBTyxJQUFJLGFBQWEsQ0FBQyxLQUFLLENBQUMsQ0FBQztLQUNqQzs7O1NBcENHLGFBQWE7OztBQXVDbkIsYUFBYSxDQUFDLE9BQU8sQ0FBQyxPQUFPLEdBQUcsQ0FBQyxPQUFPLENBQUMsQ0FBQzs7UUFFakMsYUFBYSxHQUFiLGFBQWE7Ozs7Ozs7Ozs7Ozs7SUN6Q2hCLGFBQWE7QUFDTixXQURQLGFBQWEsQ0FDTCxNQUFNLEVBQUUsVUFBVSxFQUFFLFVBQVUsRUFBQzswQkFEdkMsYUFBYTs7QUFFZixRQUFJLENBQUMsVUFBVSxHQUFHLFVBQVUsQ0FBQztBQUM3QixRQUFJLENBQUMsTUFBTSxHQUFHLE1BQU0sQ0FBQztBQUNyQixRQUFJLENBQUMsVUFBVSxHQUFHLFVBQVUsQ0FBQztBQUM3QixRQUFJLENBQUMsSUFBSSxFQUFFLENBQUM7QUFDWixRQUFJLENBQUMsTUFBTSxDQUFDLFlBQVksR0FBRyxFQUFFLENBQUM7R0FFL0I7O2VBUkcsYUFBYTs7V0FVYixnQkFBRTs7O0FBQ0osVUFBRyxJQUFJLENBQUMsVUFBVSxDQUFDLE1BQU0sRUFBQztBQUN4QixZQUFJLENBQUMsTUFBTSxDQUFDLElBQUksR0FBRyxJQUFJLENBQUMsVUFBVSxDQUFDLElBQUksQ0FBQztBQUN4QyxZQUFJLENBQUMsTUFBTSxDQUFDLE1BQU0sR0FBRyxJQUFJLENBQUMsVUFBVSxDQUFDLE1BQU0sQ0FBQztBQUM1QyxZQUFJLENBQUMsVUFBVSxDQUFDLFFBQVEsRUFBRSxDQUFDLElBQUksQ0FBQyxVQUFBLFNBQVMsRUFBSTtBQUMzQyxnQkFBSyxNQUFNLENBQUMsWUFBWSxHQUFHLFNBQVMsQ0FBQyxJQUFJLENBQUM7U0FDM0MsQ0FBQyxDQUFDO09BQ0o7S0FDRjs7O1dBRVEsbUJBQUMsSUFBSSxFQUFDO0FBQ2IsVUFBRyxJQUFJLENBQUMsVUFBVSxDQUFDLE1BQU0sRUFBQztBQUN4QixZQUFJLENBQUMsS0FBSyxHQUFHLElBQUksQ0FBQyxLQUFLLEdBQUcsQ0FBQyxDQUFDO09BQzdCO0tBQ0Y7OztXQUVXLHNCQUFDLElBQUksRUFBQzs7O0FBQ2hCLFVBQUksQ0FBQyxVQUFVLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQyxJQUFJLENBQUMsWUFBTTtBQUMzQyxZQUFHLE9BQUssVUFBVSxDQUFDLE1BQU0sRUFBQztBQUN4QixpQkFBSyxNQUFNLENBQUMsWUFBWSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUM7U0FDekM7T0FDRixDQUFDLENBQUM7S0FDSjs7O1dBRWEsd0JBQUMsSUFBSSxFQUFDOzs7QUFDbEIsVUFBSSxDQUFDLFVBQVUsQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDLElBQUksQ0FBQyxZQUFNO0FBQzdDLFlBQUcsT0FBSyxNQUFNLENBQUMsTUFBTSxFQUFDO0FBQ3BCLGNBQUksS0FBSyxHQUFHLE9BQUssTUFBTSxDQUFDLFlBQVksQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDO0FBQ3ZELGlCQUFLLE1BQU0sQ0FBQyxZQUFZLENBQUMsTUFBTSxDQUFDLEtBQUssRUFBRSxDQUFDLENBQUMsQ0FBQztTQUMzQztPQUNGLENBQUMsQ0FBQztLQUNKOzs7V0FFUyxvQkFBQyxJQUFJLEVBQUM7QUFDZCxhQUFPLElBQUksQ0FBQyxNQUFNLENBQUMsWUFBWSxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUM7S0FDeEQ7OztTQTdDRyxhQUFhOzs7QUFnRG5CLGFBQWEsQ0FBQyxPQUFPLEdBQUcsQ0FBQyxRQUFRLEVBQUUsWUFBWSxFQUFFLFlBQVksQ0FBQyxDQUFDOztRQUV0RCxhQUFhLEdBQWIsYUFBYTs7Ozs7Ozs7OzZCQ2xEUSxrQkFBa0I7OzRCQUNyQixpQkFBaUI7O0FBRTVDLElBQUksSUFBSSwrQkFBZ0IsQ0FBQztBQUN6QixJQUFJLEdBQUcsR0FBRyx5QkFBVyxPQUFPLENBQUM7O1FBRXBCLElBQUksR0FBSixJQUFJO1FBQ0osR0FBRyxHQUFILEdBQUc7Ozs7Ozs7Ozs7Ozs7SUNQTixVQUFVO0FBQ0gsV0FEUCxVQUFVLENBQ0YsS0FBSyxFQUFDOzBCQURkLFVBQVU7O0FBRVosUUFBSSxDQUFDLEtBQUssR0FBRyxLQUFLLENBQUM7R0FDcEI7O2VBSEcsVUFBVTs7V0FLTixvQkFBRTtBQUNSLGFBQU8sSUFBSSxDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUMsa0JBQWtCLEVBQUU7QUFDeEMsY0FBTSxFQUFFLEtBQUs7T0FDZCxDQUFDLENBQUM7S0FDSjs7O1dBRU0saUJBQUMsRUFBRSxFQUFDO0FBQ1QsYUFBTyxJQUFJLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQyxvQkFBb0IsR0FBRyxFQUFFLEVBQUU7QUFDL0MsY0FBTSxFQUFFLEtBQUs7T0FDZCxDQUFDLENBQUMsSUFBSSxDQUFDLFVBQUEsQ0FBQztlQUFJLENBQUMsQ0FBQyxJQUFJO09BQUEsQ0FBQyxDQUFDO0tBQ3RCOzs7V0FFUSxtQkFBQyxFQUFFLEVBQUM7QUFDWCxhQUFPLElBQUksQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDLHNCQUFzQixHQUFHLEVBQUUsRUFBRTtBQUNqRCxjQUFNLEVBQUUsS0FBSztPQUNkLENBQUMsQ0FBQyxJQUFJLENBQUMsVUFBQSxDQUFDO2VBQUksQ0FBQyxDQUFDLElBQUk7T0FBQSxDQUFDLENBQUM7S0FDdEI7OztXQUVhLGlCQUFDLEtBQUssRUFBQztBQUNuQixhQUFPLElBQUksVUFBVSxDQUFDLEtBQUssQ0FBQyxDQUFDO0tBQzlCOzs7U0F6QkcsVUFBVTs7O0FBNEJoQixVQUFVLENBQUMsT0FBTyxDQUFDLE9BQU8sR0FBRyxDQUFDLE9BQU8sQ0FBQyxDQUFDOztRQUU5QixVQUFVLEdBQVYsVUFBVTs7Ozs7Ozs7Ozs7OztJQzlCYixrQkFBa0I7QUFDWCxXQURQLGtCQUFrQixDQUNWLE1BQU0sRUFBRSxVQUFVLEVBQUUsZ0JBQWdCLEVBQUM7MEJBRDdDLGtCQUFrQjs7QUFFcEIsUUFBSSxDQUFDLGdCQUFnQixHQUFHLGdCQUFnQixDQUFDO0FBQ3pDLFFBQUksQ0FBQyxNQUFNLEdBQUcsTUFBTSxDQUFDO0FBQ3JCLFFBQUksQ0FBQyxVQUFVLEdBQUcsVUFBVSxDQUFDO0FBQzdCLFFBQUksQ0FBQyxJQUFJLEVBQUUsQ0FBQztHQUNiOztlQU5HLGtCQUFrQjs7V0FRbEIsZ0JBQUU7OztBQUNKLFVBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxnQkFBZ0IsRUFBRSxDQUFDLElBQUksQ0FBQyxVQUFBLElBQUksRUFBSTtBQUNwRCxjQUFLLEtBQUssR0FBRyxJQUFJLENBQUM7QUFDbEIsY0FBSyxNQUFNLENBQUMsTUFBTSxHQUFHLElBQUksQ0FBQztPQUMzQixDQUFDLENBQUM7S0FDSjs7O1dBRVEsbUJBQUMsSUFBSSxFQUFDO0FBQ2IsVUFBSSxLQUFLLEdBQUcsQ0FBQyxDQUFDLENBQUM7QUFDakIsV0FBSyxJQUFJLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsTUFBTSxFQUFFLENBQUMsRUFBRSxFQUFHO0FBQzVDLFlBQUksSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFHLEtBQUssSUFBSSxDQUFDLEdBQUcsRUFBRztBQUNwQyxlQUFLLEdBQUcsQ0FBQyxDQUFDO0FBQ1YsZ0JBQU07U0FDTjtPQUNEO0FBQ0QsVUFBSSxDQUFDLEtBQUssQ0FBQyxNQUFNLENBQUUsS0FBSyxFQUFFLENBQUMsQ0FBRSxDQUFDO0tBQzdCOzs7U0F4Qkcsa0JBQWtCOzs7QUEyQnhCLGtCQUFrQixDQUFDLE9BQU8sR0FBRyxDQUFDLFFBQVEsRUFBRSxZQUFZLEVBQUUsa0JBQWtCLENBQUMsQ0FBQzs7UUFFakUsa0JBQWtCLEdBQWxCLGtCQUFrQjs7Ozs7Ozs7OzZCQzdCUSxrQkFBa0I7OzRCQUNyQixpQkFBaUI7O0FBRWpELElBQUksSUFBSSxvQ0FBcUIsQ0FBQztBQUM5QixJQUFJLEdBQUcsR0FBRyw4QkFBZ0IsT0FBTyxDQUFDOztRQUV6QixJQUFJLEdBQUosSUFBSTtRQUNKLEdBQUcsR0FBSCxHQUFHOzs7Ozs7Ozs7Ozs7O0lDUE4sZUFBZTtBQUNSLFdBRFAsZUFBZSxDQUNQLEtBQUssRUFBQzswQkFEZCxlQUFlOztBQUVqQixRQUFJLENBQUMsS0FBSyxHQUFHLEtBQUssQ0FBQztHQUNwQjs7ZUFIRyxlQUFlOztXQUtILDRCQUFFO0FBQ2hCLGFBQU8sSUFBSSxDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUMsd0JBQXdCLEVBQUM7QUFDM0MsY0FBTSxFQUFFLEtBQUs7T0FDaEIsQ0FBQyxDQUFDLElBQUksQ0FBQyxVQUFBLENBQUM7ZUFBSSxDQUFDLENBQUMsSUFBSTtPQUFBLENBQUMsQ0FBQztLQUN0Qjs7O1dBRWEsaUJBQUMsS0FBSyxFQUFDO0FBQ25CLGFBQU8sSUFBSSxlQUFlLENBQUMsS0FBSyxDQUFDLENBQUM7S0FDbkM7OztTQWJHLGVBQWU7OztBQWdCckIsZUFBZSxDQUFDLE9BQU8sQ0FBQyxPQUFPLEdBQUcsQ0FBQyxPQUFPLENBQUMsQ0FBQzs7UUFFbkMsZUFBZSxHQUFmLGVBQWU7Ozs7Ozs7Ozs7Ozs7SUNsQmxCLGNBQWM7QUFDUCxXQURQLGNBQWMsQ0FDTixNQUFNLEVBQUUsT0FBTyxFQUFFLGNBQWMsRUFBRTswQkFEekMsY0FBYzs7QUFFaEIsUUFBSSxDQUFDLGNBQWMsR0FBRyxjQUFjLENBQUM7QUFDckMsUUFBSSxDQUFDLE1BQU0sR0FBRyxNQUFNLENBQUM7QUFDckIsUUFBSSxDQUFDLE9BQU8sR0FBRyxPQUFPLENBQUM7R0FDeEI7O2VBTEcsY0FBYzs7V0FNWixnQkFBQyxJQUFJLEVBQUM7QUFDVixVQUFJLENBQUMsY0FBYyxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsQ0FBQztLQUNsQzs7O1dBRUssa0JBQUU7QUFDTixVQUFHLElBQUksQ0FBQyxJQUFJLENBQUMsTUFBTSxLQUFLLEVBQUUsRUFBQztBQUN6QixZQUFJLENBQUMsT0FBTyxDQUFDLFlBQVksQ0FBQyxNQUFNLEdBQUcsSUFBSSxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUM7QUFDcEQsZUFBTyxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLFlBQVksQ0FBQyxNQUFNLENBQUMsQ0FBQztBQUM5QyxZQUFJLENBQUMsTUFBTSxDQUFDLEVBQUUsQ0FBQyxVQUFVLENBQUMsQ0FBQztPQUM1QjtLQUNGOzs7U0FoQkcsY0FBYzs7O0FBbUJwQixjQUFjLENBQUMsT0FBTyxHQUFHLENBQUMsUUFBUSxFQUFFLFNBQVMsRUFBRSxnQkFBZ0IsQ0FBQyxDQUFDOztRQUV4RCxjQUFjLEdBQWQsY0FBYzs7Ozs7Ozs7OzJCQ3JCUSxnQkFBZ0I7OzBCQUNuQixlQUFlOztBQUUzQyxJQUFJLElBQUksOEJBQWlCLENBQUM7QUFDMUIsSUFBSSxHQUFHLEdBQUcsd0JBQVksT0FBTyxDQUFDOztRQUVyQixJQUFJLEdBQUosSUFBSTtRQUNKLEdBQUcsR0FBSCxHQUFHOzs7Ozs7Ozs7Ozs7O0lDUE4sV0FBVztBQUNKLFdBRFAsV0FBVyxDQUNILE9BQU8sRUFBQzswQkFEaEIsV0FBVzs7QUFFYixRQUFJLENBQUMsT0FBTyxHQUFHLE9BQU8sQ0FBQztHQUN4Qjs7ZUFIRyxXQUFXOztXQUtULGdCQUFDLElBQUksRUFBQztBQUNWLFVBQUksQ0FBQyxPQUFPLENBQUMsUUFBUSxDQUFDLElBQUksR0FBSSx3QkFBd0IsR0FBRyxJQUFJLEFBQUMsQ0FBQztLQUNoRTs7O1dBRWEsaUJBQUMsT0FBTyxFQUFDO0FBQ3JCLGFBQU8sSUFBSSxXQUFXLENBQUMsT0FBTyxDQUFDLENBQUM7S0FDakM7OztTQVhHLFdBQVc7OztBQWNqQixXQUFXLENBQUMsT0FBTyxDQUFDLE9BQU8sR0FBRyxDQUFDLFNBQVMsQ0FBQyxDQUFDOztRQUVqQyxXQUFXLEdBQVgsV0FBVzs7Ozs7Ozs7Ozs7OztJQ2hCZCxpQkFBaUI7QUFDVixXQURQLGlCQUFpQixDQUNULE1BQU0sRUFBRSxlQUFlLEVBQUM7MEJBRGhDLGlCQUFpQjs7QUFFbkIsUUFBSSxDQUFDLGVBQWUsR0FBRyxlQUFlLENBQUM7QUFDdkMsUUFBSSxDQUFDLE1BQU0sR0FBRyxNQUFNLENBQUM7QUFDckIsUUFBSSxDQUFDLElBQUksRUFBRSxDQUFDO0dBQ2I7O2VBTEcsaUJBQWlCOztXQU9qQixnQkFBRTs7O0FBQ0osVUFBSSxDQUFDLGVBQWUsQ0FBQyxZQUFZLEVBQUUsQ0FBQyxJQUFJLENBQUMsVUFBQSxJQUFJLEVBQUk7QUFDL0MsY0FBSyxLQUFLLEdBQUcsSUFBSSxDQUFDO0FBQ2xCLGNBQUssTUFBTSxDQUFDLE1BQU0sR0FBRyxJQUFJLENBQUM7T0FDM0IsQ0FBQyxDQUFDO0tBQ0o7OztTQVpHLGlCQUFpQjs7O0FBZXZCLGlCQUFpQixDQUFDLE9BQU8sR0FBRyxDQUFDLFFBQVEsRUFBRSxpQkFBaUIsQ0FBQyxDQUFDOztRQUVqRCxpQkFBaUIsR0FBakIsaUJBQWlCOzs7Ozs7Ozs7NEJDakJRLGlCQUFpQjs7MkJBQ3BCLGdCQUFnQjs7QUFFL0MsSUFBSSxJQUFJLGtDQUFvQixDQUFDO0FBQzdCLElBQUksR0FBRyxHQUFHLDRCQUFlLE9BQU8sQ0FBQzs7UUFFeEIsSUFBSSxHQUFKLElBQUk7UUFDSixHQUFHLEdBQUgsR0FBRzs7Ozs7Ozs7Ozs7OztJQ1BOLGNBQWM7QUFDUCxXQURQLGNBQWMsQ0FDTixLQUFLLEVBQUM7MEJBRGQsY0FBYzs7QUFFaEIsUUFBSSxDQUFDLEtBQUssR0FBRyxLQUFLLENBQUM7R0FDcEI7O2VBSEcsY0FBYzs7V0FLTix3QkFBRTtBQUNaLGFBQU8sSUFBSSxDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUMsb0JBQW9CLEVBQUU7QUFDMUMsY0FBTSxFQUFFLEtBQUs7T0FDZCxDQUFDLENBQUMsSUFBSSxDQUFDLFVBQUEsQ0FBQztlQUFJLENBQUMsQ0FBQyxJQUFJO09BQUEsQ0FBQyxDQUFDO0tBQ3RCOzs7V0FFYSxpQkFBQyxLQUFLLEVBQUM7QUFDbkIsYUFBTyxJQUFJLGNBQWMsQ0FBQyxLQUFLLENBQUMsQ0FBQztLQUNsQzs7O1NBYkcsY0FBYzs7O0FBZ0JwQixjQUFjLENBQUMsT0FBTyxDQUFDLE9BQU8sR0FBRyxDQUFDLE9BQU8sQ0FBQyxDQUFDOztRQUVsQyxjQUFjLEdBQWQsY0FBYzs7Ozs7Ozs7Ozs7OztJQ2xCakIsTUFBTTtBQUNDLFdBRFAsTUFBTSxDQUNFLGVBQWUsRUFBRTswQkFEekIsTUFBTTs7QUFFUixRQUFJLENBQUMsZUFBZSxHQUFHLGVBQWUsQ0FBQztBQUN2QyxRQUFJLENBQUMsS0FBSyxHQUFHLEVBQUUsQ0FBQztBQUNoQixRQUFJLENBQUMsSUFBSSxHQUFHLEtBQUssQ0FBQztBQUNsQixRQUFJLENBQUMsS0FBSyxHQUFHLENBQUMsQ0FBQztHQUNoQjs7ZUFORyxNQUFNOztXQVFGLG9CQUFHO0FBQ1QsVUFBSSxJQUFJLENBQUMsSUFBSSxFQUFFLE9BQU87QUFDdEIsVUFBSSxDQUFDLElBQUksR0FBRyxJQUFJLENBQUM7QUFDakIsVUFBSSxJQUFJLEdBQUcsSUFBSSxDQUFDOztBQUVoQixhQUFPLElBQUksQ0FBQyxlQUFlLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQyxJQUFJLENBQUMsVUFBQSxLQUFLLEVBQUk7QUFDN0QsWUFBSSxJQUFJLEdBQUcsS0FBSyxDQUFDO0FBQ2pCLFlBQUcsSUFBSSxDQUFDLE1BQU0sS0FBSyxDQUFDLEVBQUM7QUFDbkIsY0FBSSxDQUFDLElBQUksR0FBRyxJQUFJLENBQUM7QUFDakIsaUJBQU87U0FDUixNQUFNO0FBQ0wsZUFBSSxJQUFJLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxHQUFHLElBQUksQ0FBQyxNQUFNLEVBQUUsQ0FBQyxFQUFFLEVBQUM7QUFDaEMsZ0JBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO1dBQzVCO0FBQ0QsY0FBSSxDQUFDLEtBQUssR0FBRyxJQUFJLENBQUMsS0FBSyxHQUFHLENBQUMsQ0FBQztBQUM1QixjQUFJLENBQUMsSUFBSSxHQUFHLEtBQUssQ0FBQztTQUNuQjtPQUNGLEVBQUUsWUFBTTtBQUNQLFlBQUksQ0FBQyxLQUFLLEdBQUcsRUFBRSxDQUFDO09BQ2pCLENBQUMsQ0FBQztLQUNKOzs7V0FFYSxpQkFBQyxlQUFlLEVBQUM7QUFDN0IsYUFBTyxJQUFJLE1BQU0sQ0FBQyxlQUFlLENBQUMsQ0FBQztLQUNwQzs7O1NBaENHLE1BQU07OztBQW1DWixNQUFNLENBQUMsT0FBTyxHQUFHLENBQUMsaUJBQWlCLENBQUMsQ0FBQzs7UUFFNUIsTUFBTSxHQUFOLE1BQU07Ozs7Ozs7Ozs7Ozs7SUNyQ1Qsa0JBQWtCO0FBQ1gsV0FEUCxrQkFBa0IsQ0FDVixNQUFNLEVBQUUsVUFBVSxFQUFFLE1BQU0sRUFBRSxPQUFPLEVBQUUsZUFBZSxFQUFFLGNBQWMsRUFBQzswQkFEN0Usa0JBQWtCOztBQUVwQixRQUFJLENBQUMsZUFBZSxHQUFHLGVBQWUsQ0FBQztBQUN2QyxRQUFJLENBQUMsY0FBYyxHQUFHLGNBQWMsQ0FBQztBQUNyQyxRQUFJLENBQUMsTUFBTSxHQUFHLE1BQU0sQ0FBQztBQUNyQixRQUFJLENBQUMsVUFBVSxHQUFHLFVBQVUsQ0FBQztBQUM3QixRQUFJLENBQUMsTUFBTSxHQUFHLE1BQU0sQ0FBQztBQUNyQixRQUFJLENBQUMsT0FBTyxHQUFHLE9BQU8sQ0FBQztBQUN2QixRQUFJLENBQUMsSUFBSSxFQUFFLENBQUM7R0FDYjs7ZUFURyxrQkFBa0I7O1dBV2xCLGdCQUFFO0FBQ0osVUFBSSxDQUFDLE1BQU0sQ0FBQyxLQUFLLEdBQUcsSUFBSSxDQUFDLGNBQWMsQ0FBQztBQUN4QyxVQUFJLENBQUMsTUFBTSxDQUFDLE1BQU0sR0FBRyxJQUFJLENBQUM7S0FDM0I7OztXQUVVLHVCQUFFOzs7QUFDWCxVQUFHLElBQUksQ0FBQyxPQUFPLENBQUMsWUFBWSxDQUFDLE1BQU0sS0FBSyxTQUFTLEVBQUM7QUFDaEQsWUFBSSxDQUFDLE1BQU0sQ0FBQyxJQUFJLEdBQUcsRUFBQyxNQUFNLEVBQUUsSUFBSSxDQUFDLE9BQU8sQ0FBQyxZQUFZLENBQUMsTUFBTSxFQUFDLENBQUM7QUFDOUQsWUFBSSxDQUFDLGVBQWUsQ0FBQyxVQUFVLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxZQUFZLENBQUMsTUFBTSxDQUFDLENBQUMsSUFBSSxDQUFDLFVBQUEsT0FBTyxFQUFJO0FBQ2hGLGdCQUFLLE9BQU8sR0FBRyxPQUFPLENBQUM7U0FDeEIsQ0FBQyxDQUFDO0FBQ0gsWUFBSSxDQUFDLE9BQU8sQ0FBQyxZQUFZLENBQUMsS0FBSyxFQUFFLENBQUM7T0FDbkM7S0FDRjs7O1NBeEJHLGtCQUFrQjs7O0FBNEJ4QixrQkFBa0IsQ0FBQyxPQUFPLEdBQUcsQ0FBQyxRQUFRLEVBQUUsWUFBWSxFQUFFLFFBQVEsRUFBRSxTQUFTLEVBQUMsaUJBQWlCLEVBQUUsZ0JBQWdCLENBQUMsQ0FBQzs7UUFFdEcsa0JBQWtCLEdBQWxCLGtCQUFrQjs7Ozs7Ozs7OzRCQzlCUSxpQkFBaUI7OzJCQUNwQixnQkFBZ0I7OzhCQUN6QixtQkFBbUI7O0FBRTFDLElBQUksSUFBSSxtQ0FBcUIsQ0FBQztBQUM5QixJQUFJLEdBQUcsR0FBRyw2QkFBZ0IsT0FBTyxDQUFDO0FBQ2xDLElBQUksTUFBTSxHQUFHLHVCQUFPLE9BQU8sQ0FBQzs7UUFFbkIsSUFBSSxHQUFKLElBQUk7UUFDSixHQUFHLEdBQUgsR0FBRztRQUNILE1BQU0sR0FBTixNQUFNOzs7Ozs7Ozs7Ozs7O0lDVlQsZUFBZTtBQUNSLFdBRFAsZUFBZSxDQUNQLEtBQUssRUFBQzswQkFEZCxlQUFlOztBQUVqQixRQUFJLENBQUMsS0FBSyxHQUFHLEtBQUssQ0FBQztHQUNwQjs7ZUFIRyxlQUFlOztXQUtYLGtCQUFDLElBQUksRUFBQztBQUNaLGFBQU8sSUFBSSxDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUMsZ0JBQWdCLEVBQUM7QUFDckMsY0FBTSxFQUFFLEtBQUs7QUFDYixjQUFNLEVBQUU7QUFDSixjQUFJLEVBQUUsSUFBSTtBQUNWLGVBQUssRUFBRSxDQUFDO1NBQ1g7T0FDRixDQUFDLENBQUMsSUFBSSxDQUFDLFVBQUEsQ0FBQztlQUFJLENBQUMsQ0FBQyxJQUFJO09BQUEsQ0FBQyxDQUFDO0tBQ3RCOzs7V0FFYSxpQkFBQyxLQUFLLEVBQUM7QUFDbkIsYUFBTyxJQUFJLGVBQWUsQ0FBQyxLQUFLLENBQUMsQ0FBQztLQUNuQzs7O1NBakJHLGVBQWU7OztBQW9CckIsZUFBZSxDQUFDLE9BQU8sQ0FBQyxPQUFPLEdBQUcsQ0FBQyxPQUFPLENBQUMsQ0FBQzs7UUFFbkMsZUFBZSxHQUFmLGVBQWU7Ozs7Ozs7Ozs7Ozs7SUN0QmxCLGlCQUFpQjtBQUNWLFdBRFAsaUJBQWlCLENBQ1QsTUFBTSxFQUFFLFVBQVUsRUFBRSxNQUFNLEVBQUUsU0FBUyxFQUFFLE9BQU8sRUFBRSxjQUFjLEVBQUM7MEJBRHZFLGlCQUFpQjs7QUFFbkIsUUFBSSxDQUFDLGNBQWMsR0FBRyxjQUFjLENBQUM7QUFDckMsUUFBSSxDQUFDLElBQUksRUFBRSxDQUFDO0FBQ1osUUFBSSxDQUFDLE1BQU0sR0FBRyxNQUFNLENBQUM7QUFDckIsUUFBSSxDQUFDLFVBQVUsR0FBRyxVQUFVLENBQUM7QUFDN0IsUUFBSSxDQUFDLE1BQU0sR0FBRyxNQUFNLENBQUM7QUFDckIsUUFBSSxDQUFDLFNBQVMsR0FBRyxTQUFTLENBQUM7QUFDM0IsUUFBSSxDQUFDLE9BQU8sR0FBRyxPQUFPLENBQUM7R0FDeEI7O2VBVEcsaUJBQWlCOztXQVdqQixnQkFBRTs7O0FBQ0osVUFBSSxDQUFDLGNBQWMsQ0FBQyxPQUFPLEVBQUUsQ0FBQyxJQUFJLENBQUMsVUFBQyxJQUFJLEVBQUUsTUFBTSxFQUFFLE9BQU8sRUFBRSxNQUFNLEVBQUs7QUFDcEUsY0FBSyxVQUFVLENBQUMsTUFBTSxHQUFHLElBQUksQ0FBQztBQUM5QixjQUFLLFVBQVUsQ0FBQyxJQUFJLEdBQUcsSUFBSSxDQUFDLFFBQVEsQ0FBQztBQUNyQyxjQUFLLE1BQU0sQ0FBQyxNQUFNLEdBQUcsSUFBSSxDQUFDO0FBQzFCLGNBQUssTUFBTSxDQUFDLElBQUksR0FBRyxJQUFJLENBQUMsUUFBUSxDQUFDO0FBQ2pDLGNBQUssTUFBTSxDQUFDLEtBQUssR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLFVBQVUsQ0FBQztPQUMzQyxDQUFDLENBQUM7S0FDSjs7O1dBRUssZ0JBQUMsSUFBSSxFQUFDO0FBQ1YsVUFBSSxDQUFDLGNBQWMsQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLENBQUM7S0FDbEM7OztXQUVLLGtCQUFFOzs7QUFDTixVQUFJLENBQUMsY0FBYyxDQUFDLE1BQU0sRUFBRSxDQUFDLElBQUksQ0FBQyxVQUFDLElBQUksRUFBRSxNQUFNLEVBQUUsT0FBTyxFQUFFLE1BQU0sRUFBSztBQUNuRSxlQUFLLE1BQU0sQ0FBQyxZQUFZLENBQUMsT0FBSyxNQUFNLENBQUMsT0FBTyxFQUFFLEVBQUUsRUFBRTtBQUM5QyxnQkFBTSxFQUFFLElBQUk7QUFDWixpQkFBTyxFQUFFLEtBQUs7QUFDZCxnQkFBTSxFQUFFLElBQUk7U0FDZixDQUFDLENBQUM7QUFDSCxlQUFLLE9BQU8sQ0FBQyxRQUFRLENBQUMsTUFBTSxFQUFFLENBQUM7T0FDaEMsQ0FBQyxDQUFDO0tBQ0o7OztXQUVPLGtCQUFDLElBQUksRUFBQztBQUNaLFVBQUksSUFBSSxDQUFDLFNBQVMsQ0FBQyxJQUFJLEVBQUUsQ0FBQyxNQUFNLENBQUMsQ0FBQyxFQUFFLElBQUksQ0FBQyxNQUFNLENBQUMsSUFBSSxJQUFJLEVBQUU7QUFDeEQsZUFBTyxVQUFVLENBQUM7T0FDbkIsTUFBTTtBQUNMLGVBQU8sRUFBRSxDQUFDO09BQ1g7S0FDRjs7O1NBMUNHLGlCQUFpQjs7O0FBNkN2QixpQkFBaUIsQ0FBQyxPQUFPLEdBQUcsQ0FBQyxRQUFRLEVBQUUsWUFBWSxFQUFFLFFBQVEsRUFBRSxXQUFXLEVBQUUsU0FBUyxFQUFFLGdCQUFnQixDQUFDLENBQUM7O1FBRWhHLGlCQUFpQixHQUFqQixpQkFBaUI7Ozs7Ozs7OzsyQkMvQ1EsZ0JBQWdCOzswQkFDbkIsZUFBZTs7QUFFOUMsSUFBSSxJQUFJLGlDQUFvQixDQUFDO0FBQzdCLElBQUksR0FBRyxHQUFHLDJCQUFlLE9BQU8sQ0FBQzs7UUFFeEIsSUFBSSxHQUFKLElBQUk7UUFDSixHQUFHLEdBQUgsR0FBRzs7Ozs7Ozs7Ozs7OztJQ1BOLGNBQWM7QUFDUCxXQURQLGNBQWMsQ0FDTixLQUFLLEVBQUUsT0FBTyxFQUFDOzBCQUR2QixjQUFjOztBQUVoQixRQUFJLENBQUMsS0FBSyxHQUFHLEtBQUssQ0FBQztBQUNuQixRQUFJLENBQUMsT0FBTyxHQUFHLE9BQU8sQ0FBQztHQUN4Qjs7ZUFKRyxjQUFjOztXQU1aLGdCQUFDLElBQUksRUFBQztBQUNWLFVBQUksQ0FBQyxPQUFPLENBQUMsUUFBUSxDQUFDLElBQUksR0FBSSx3QkFBd0IsR0FBRyxJQUFJLEFBQUMsQ0FBQztLQUNoRTs7O1dBRU0sbUJBQUU7QUFDUCxhQUFPLElBQUksQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDLGNBQWMsRUFBRTtBQUNwQyxjQUFNLEVBQUUsS0FBSztPQUNkLENBQUMsQ0FBQyxJQUFJLENBQUMsVUFBQSxDQUFDO2VBQUksQ0FBQyxDQUFDLElBQUk7T0FBQSxDQUFDLENBQUM7S0FDdEI7OztXQUVLLGtCQUFFO0FBQ04sYUFBTyxJQUFJLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQyxjQUFjLEVBQUU7QUFDcEMsY0FBTSxFQUFFLEtBQUs7T0FDZCxDQUFDLENBQUMsSUFBSSxDQUFDLFVBQUEsQ0FBQztlQUFJLENBQUMsQ0FBQyxJQUFJO09BQUEsQ0FBQyxDQUFDO0tBQ3RCOzs7V0FFYSxpQkFBQyxLQUFLLEVBQUUsT0FBTyxFQUFDO0FBQzVCLGFBQU8sSUFBSSxjQUFjLENBQUMsS0FBSyxFQUFFLE9BQU8sQ0FBQyxDQUFDO0tBQzNDOzs7U0F4QkcsY0FBYzs7O0FBNEJwQixjQUFjLENBQUMsT0FBTyxDQUFDLE9BQU8sR0FBRyxDQUFDLE9BQU8sRUFBRSxTQUFTLENBQUMsQ0FBQzs7UUFFN0MsY0FBYyxHQUFkLGNBQWMiLCJmaWxlIjoiZ2VuZXJhdGVkLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXNDb250ZW50IjpbIihmdW5jdGlvbiBlKHQsbixyKXtmdW5jdGlvbiBzKG8sdSl7aWYoIW5bb10pe2lmKCF0W29dKXt2YXIgYT10eXBlb2YgcmVxdWlyZT09XCJmdW5jdGlvblwiJiZyZXF1aXJlO2lmKCF1JiZhKXJldHVybiBhKG8sITApO2lmKGkpcmV0dXJuIGkobywhMCk7dmFyIGY9bmV3IEVycm9yKFwiQ2Fubm90IGZpbmQgbW9kdWxlICdcIitvK1wiJ1wiKTt0aHJvdyBmLmNvZGU9XCJNT0RVTEVfTk9UX0ZPVU5EXCIsZn12YXIgbD1uW29dPXtleHBvcnRzOnt9fTt0W29dWzBdLmNhbGwobC5leHBvcnRzLGZ1bmN0aW9uKGUpe3ZhciBuPXRbb11bMV1bZV07cmV0dXJuIHMobj9uOmUpfSxsLGwuZXhwb3J0cyxlLHQsbixyKX1yZXR1cm4gbltvXS5leHBvcnRzfXZhciBpPXR5cGVvZiByZXF1aXJlPT1cImZ1bmN0aW9uXCImJnJlcXVpcmU7Zm9yKHZhciBvPTA7bzxyLmxlbmd0aDtvKyspcyhyW29dKTtyZXR1cm4gc30pIiwiaW1wb3J0ICogYXMgTGFuZGluZ01vZHVsZSBmcm9tICcuL2xhbmRpbmcvbGFuZGluZy5tb2R1bGUnO1xuaW1wb3J0ICogYXMgU2Vzc2lvbk1vZHVsZSBmcm9tICcuL3Nlc3Npb24vc2Vzc2lvbi5tb2R1bGUnO1xuaW1wb3J0ICogYXMgRmF2TW9kdWxlIGZyb20gJy4vZmF2bW9kdWxlL2Zhdm1vZHVsZS5tb2R1bGUnO1xuaW1wb3J0ICogYXMgQ29tbW9uTW9kdWxlIGZyb20gJy4vY29tbW9ucy9jb21tb24ubW9kdWxlLmpzJztcbmltcG9ydCAqIGFzIFJlZ2lzdHJ5TW9kdWxlIGZyb20gJy4vcmVnaXN0cnkvcmVnaXN0cnkubW9kdWxlJztcbmltcG9ydCAqIGFzIE15U3RhY2tzTW9kdWxlIGZyb20gJy4vbXlzdGFja3MvbXlzdGFja3MubW9kdWxlJztcbmltcG9ydCAqIGFzIEZhdm9yaXRlc01vZHVsZSBmcm9tICcuL2Zhdm9yaXRlcy9mYXZvcml0ZXMubW9kdWxlJztcbmltcG9ydCAqIGFzIENyZWF0ZU1vZHVsZSBmcm9tICcuL2NyZWF0ZS9jcmVhdGUubW9kdWxlJztcbmltcG9ydCAqIGFzIERldGFpbE1vZHVsZSBmcm9tICcuL2RldGFpbC9kZXRhaWwubW9kdWxlJztcblxuYW5ndWxhci5tb2R1bGUoJ3N0YWNrZmlsZXMnLCBbJ3VpLnJvdXRlcicsJ2luZmluaXRlLXNjcm9sbCcsJ2xvY2FseXRpY3MuZGlyZWN0aXZlcycsJ3plcm9jbGlwYm9hcmQnXSlcblxuLmZhY3RvcnkoJ2xhbmRpbmdGYWN0b3J5JywgTGFuZGluZ01vZHVsZS5zdmMpXG4uY29udHJvbGxlcignbGFuZGluZ0NvbnRyb2xsZXInLCBMYW5kaW5nTW9kdWxlLmN0cmwpXG5cbi5mYWN0b3J5KCdzZXNzaW9uRmFjdG9yeScsIFNlc3Npb25Nb2R1bGUuc3ZjKVxuLmNvbnRyb2xsZXIoJ3Nlc3Npb25Db250cm9sbGVyJywgU2Vzc2lvbk1vZHVsZS5jdHJsKVxuXG4uZmFjdG9yeSgnZmF2RmFjdG9yeScsIEZhdk1vZHVsZS5zdmMpXG4uY29udHJvbGxlcignZmF2Q29udHJvbGxlcicsIEZhdk1vZHVsZS5jdHJsKVxuXG4uZmFjdG9yeSgnY29tbW9uRmFjdG9yeScsIENvbW1vbk1vZHVsZS5zdmMpXG4uY29udHJvbGxlcignY29tbW9uQ29udHJvbGxlcicsIENvbW1vbk1vZHVsZS5jdHJsKVxuXG4uZmFjdG9yeSgncmVnaXN0cnlMb2FkZXInLCBSZWdpc3RyeU1vZHVsZS5sb2FkZXIpXG4uZmFjdG9yeSgncmVnaXN0cnlGYWN0b3J5JywgUmVnaXN0cnlNb2R1bGUuc3ZjKVxuLmNvbnRyb2xsZXIoJ3JlZ2lzdHJ5Q29udHJvbGxlcicsIFJlZ2lzdHJ5TW9kdWxlLmN0cmwpXG5cbi5mYWN0b3J5KCdteXN0YWNrc0ZhY3RvcnknLCBNeVN0YWNrc01vZHVsZS5zdmMpXG4uY29udHJvbGxlcignbXlzdGFja3NDb250cm9sbGVyJywgTXlTdGFja3NNb2R1bGUuY3RybClcblxuLmZhY3RvcnkoJ2Zhdm9yaXRlc0ZhY3RvcnknLCBGYXZvcml0ZXNNb2R1bGUuc3ZjKVxuLmNvbnRyb2xsZXIoJ2Zhdm9yaXRlc0NvbnRyb2xsZXInLCBGYXZvcml0ZXNNb2R1bGUuY3RybClcblxuLmZhY3RvcnkoJ2NyZWF0ZUZhY3RvcnknLCBDcmVhdGVNb2R1bGUuc3ZjKVxuLmNvbnRyb2xsZXIoJ2NyZWF0ZUNvbnRyb2xsZXInLCBDcmVhdGVNb2R1bGUuY3RybClcblxuLmZhY3RvcnkoJ2RldGFpbEZhY3RvcnknLCBEZXRhaWxNb2R1bGUuc3ZjKVxuLmNvbnRyb2xsZXIoJ2RldGFpbENvbnRyb2xsZXInLCBEZXRhaWxNb2R1bGUuY3RybClcblxuLmNvbmZpZyhbXCIkc3RhdGVQcm92aWRlclwiLCBcIiR1cmxSb3V0ZXJQcm92aWRlclwiLCAoJHN0YXRlUHJvdmlkZXIsICR1cmxSb3V0ZXJQcm92aWRlcikgPT4ge1xuXG4gICAgJHVybFJvdXRlclByb3ZpZGVyLndoZW4oJycsICcvJyk7XG4gICAgJHVybFJvdXRlclByb3ZpZGVyLm90aGVyd2lzZShcIi80MDRcIik7XG5cbiAgICAkc3RhdGVQcm92aWRlci5cbiAgICAgIHN0YXRlKCdsYW5kaW5nJywge1xuICAgICAgICAgIHVybDogJy8nLFxuICAgICAgICAgIHZpZXdzOiB7XG4gICAgICAgICAgICBmdWxsOiB7XG4gICAgICAgICAgICAgIHRlbXBsYXRlVXJsOiAncGFydGlhbHMvbGFuZGluZ3BhZ2UuaHRtbCcsXG4gICAgICAgICAgICAgIGNvbnRyb2xsZXI6ICdsYW5kaW5nQ29udHJvbGxlcidcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICB9KS5cbiAgICAgIHN0YXRlKCdyZWdpc3RyeScsIHtcbiAgICAgICAgdXJsOiAnL3JlZ2lzdHJ5JyxcbiAgICAgICAgY2FjaGU6IGZhbHNlLFxuICAgICAgICB2aWV3czoge1xuICAgICAgICAgIHRvcDoge1xuICAgICAgICAgICAgdGVtcGxhdGVVcmw6ICdwYXJ0aWFscy90b3AtYmFyLmh0bWwnXG4gICAgICAgICAgfSxcbiAgICAgICAgICBzaWRlOiB7XG4gICAgICAgICAgICB0ZW1wbGF0ZVVybDogJ3BhcnRpYWxzL3NpZGUtbWVudS5odG1sJ1xuICAgICAgICAgIH0sXG4gICAgICAgICAgY29udGVudDoge1xuICAgICAgICAgICAgdGVtcGxhdGVVcmw6ICdwYXJ0aWFscy9yZWdpc3RyeS5odG1sJyxcbiAgICAgICAgICAgIGNvbnRyb2xsZXI6ICdyZWdpc3RyeUNvbnRyb2xsZXIgYXMgcidcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH0pLlxuICAgICAgc3RhdGUoJ2RldGFpbCcsIHtcbiAgICAgICAgdXJsOicvcmVnaXN0cnkvOmlkJyxcbiAgICAgICAgY2FjaGU6IGZhbHNlLFxuICAgICAgICB2aWV3czoge1xuICAgICAgICAgIHRvcDoge1xuICAgICAgICAgICAgdGVtcGxhdGVVcmw6ICdwYXJ0aWFscy90b3AtYmFyLmh0bWwnXG4gICAgICAgICAgfSxcbiAgICAgICAgICBzaWRlOiB7XG4gICAgICAgICAgICB0ZW1wbGF0ZVVybDogJ3BhcnRpYWxzL3NpZGUtbWVudS5odG1sJ1xuICAgICAgICAgIH0sXG4gICAgICAgICAgY29udGVudDoge1xuICAgICAgICAgICAgdGVtcGxhdGVVcmw6ICdwYXJ0aWFscy9yZWdpc3RyeS5kZXRhaWwuaHRtbCcsXG4gICAgICAgICAgICBjb250cm9sbGVyOiAnZGV0YWlsQ29udHJvbGxlciBhcyBkJ1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfSkuXG4gICAgICBzdGF0ZSgnbXlzdGFja3MnLCB7XG4gICAgICAgIHVybDonL215c3RhY2tzJyxcbiAgICAgICAgY2FjaGU6IGZhbHNlLFxuICAgICAgICB2aWV3czoge1xuICAgICAgICAgIHRvcDoge1xuICAgICAgICAgICAgdGVtcGxhdGVVcmw6ICdwYXJ0aWFscy90b3AtYmFyLmh0bWwnXG4gICAgICAgICAgfSxcbiAgICAgICAgICBzaWRlOiB7XG4gICAgICAgICAgICB0ZW1wbGF0ZVVybDogJ3BhcnRpYWxzL3NpZGUtbWVudS5odG1sJ1xuICAgICAgICAgIH0sXG4gICAgICAgICAgY29udGVudDoge1xuICAgICAgICAgICAgdGVtcGxhdGVVcmw6ICdwYXJ0aWFscy9teXN0YWNrcy5odG1sJyxcbiAgICAgICAgICAgIGNvbnRyb2xsZXI6ICdteXN0YWNrc0NvbnRyb2xsZXIgYXMgbSdcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH0pLlxuICAgICAgc3RhdGUoJ2Zhdm9yaXRlcycsIHtcbiAgICAgICAgdXJsOicvZmF2b3JpdGVzJyxcbiAgICAgICAgY2FjaGU6IGZhbHNlLFxuICAgICAgICB2aWV3czoge1xuICAgICAgICAgIHRvcDoge1xuICAgICAgICAgICAgdGVtcGxhdGVVcmw6ICdwYXJ0aWFscy90b3AtYmFyLmh0bWwnXG4gICAgICAgICAgfSxcbiAgICAgICAgICBzaWRlOiB7XG4gICAgICAgICAgICB0ZW1wbGF0ZVVybDogJ3BhcnRpYWxzL3NpZGUtbWVudS5odG1sJ1xuICAgICAgICAgIH0sXG4gICAgICAgICAgY29udGVudDoge1xuICAgICAgICAgICAgdGVtcGxhdGVVcmw6ICdwYXJ0aWFscy9mYXZvcml0ZXMuaHRtbCcsXG4gICAgICAgICAgICBjb250cm9sbGVyOiAnZmF2b3JpdGVzQ29udHJvbGxlciBhcyBmYydcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH0pLlxuICAgICAgc3RhdGUoJ2NyZWF0ZScsIHtcbiAgICAgICAgdXJsOicvY3JlYXRlJyxcbiAgICAgICAgdmlld3M6IHtcbiAgICAgICAgICB0b3A6IHtcbiAgICAgICAgICAgIHRlbXBsYXRlVXJsOiAncGFydGlhbHMvdG9wLWJhci5odG1sJ1xuICAgICAgICAgIH0sXG4gICAgICAgICAgc2lkZToge1xuICAgICAgICAgICAgdGVtcGxhdGVVcmw6ICdwYXJ0aWFscy9zaWRlLW1lbnUuaHRtbCdcbiAgICAgICAgICB9LFxuICAgICAgICAgIGNvbnRlbnQ6IHtcbiAgICAgICAgICAgIHRlbXBsYXRlVXJsOiAncGFydGlhbHMvY3JlYXRlLmh0bWwnXG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9KS5cbiAgICAgIHN0YXRlKCc0MDQnLCB7XG4gICAgICAgIHVybDonLzQwNCcsXG4gICAgICAgIHZpZXdzOiB7XG4gICAgICAgICAgZnVsbDoge1xuICAgICAgICAgICAgdGVtcGxhdGVVcmw6ICdwYXJ0aWFscy80MDQuaHRtbCdcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH0pO1xuXG4gICAgICBmdW5jdGlvbiBhdXRoZW50aWNhdGUoJHEsICRyb290U2NvcGUsICRzdGF0ZSwgJHRpbWVvdXQpIHtcbiAgICAgIGlmICgkcm9vdFNjb3BlLmxvZ2dlZCkge1xuICAgICAgICAvLyBSZXNvbHZlIHRoZSBwcm9taXNlIHN1Y2Nlc3NmdWxseVxuICAgICAgICByZXR1cm4gJHEud2hlbigpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgJHN0YXRlLmdvKCdyZWdpc3RyeScpO1xuICAgICAgICAvLyBSZWplY3QgdGhlIGF1dGhlbnRpY2F0aW9uIHByb21pc2UgdG8gcHJldmVudCB0aGUgc3RhdGUgZnJvbSBsb2FkaW5nXG4gICAgICAgIHJldHVybiAkcS5yZWplY3QoKTtcbiAgICAgIH1cbiAgICB9XG59XSlcblxuLmRpcmVjdGl2ZSgnbmdFbnRlcicsIGZ1bmN0aW9uICgpIHtcbiAgICByZXR1cm4gZnVuY3Rpb24gKHNjb3BlLCBlbGVtZW50LCBhdHRycykge1xuICAgICAgICBlbGVtZW50LmJpbmQoXCJrZXlkb3duIGtleXByZXNzXCIsIGZ1bmN0aW9uIChldmVudCkge1xuICAgICAgICAgICAgaWYoZXZlbnQud2hpY2ggPT09IDEzKSB7XG4gICAgICAgICAgICAgICAgc2NvcGUuJGFwcGx5KGZ1bmN0aW9uICgpe1xuICAgICAgICAgICAgICAgICAgICBzY29wZS4kZXZhbChhdHRycy5uZ0VudGVyKTtcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICB9O1xufSlcblxuLmRpcmVjdGl2ZSgnbW9kYWwnLCBmdW5jdGlvbiAoKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgICAgdGVtcGxhdGU6ICc8ZGl2IGNsYXNzPVwibW9kYWwgZmFkZVwiPicgK1xuICAgICAgICAnPGRpdiBjbGFzcz1cIm1vZGFsLWRpYWxvZ1wiPicgK1xuICAgICAgICAnPGRpdiBjbGFzcz1cIm1vZGFsLWNvbnRlbnRcIj4nICtcbiAgICAgICAgJzxkaXYgY2xhc3M9XCJtb2RhbC1oZWFkZXJcIj4nICtcbiAgICAgICAgJzxidXR0b24gdHlwZT1cImJ1dHRvblwiIGNsYXNzPVwiY2xvc2VcIiBkYXRhLWRpc21pc3M9XCJtb2RhbFwiIGFyaWEtaGlkZGVuPVwidHJ1ZVwiPiZ0aW1lczs8L2J1dHRvbj4nICtcbiAgICAgICAgJzxoNCBjbGFzcz1cIm1vZGFsLXRpdGxlXCI+e3sgdGl0bGUgfX08L2g0PicgK1xuICAgICAgICAnPC9kaXY+JyArXG4gICAgICAgICc8ZGl2IGNsYXNzPVwibW9kYWwtYm9keVwiIG5nLXRyYW5zY2x1ZGU+PC9kaXY+JyArXG4gICAgICAgICc8L2Rpdj4nICtcbiAgICAgICAgJzwvZGl2PicgK1xuICAgICAgICAnPC9kaXY+JyxcbiAgICAgICAgcmVzdHJpY3Q6ICdFJyxcbiAgICAgICAgdHJhbnNjbHVkZTogdHJ1ZSxcbiAgICAgICAgcmVwbGFjZTp0cnVlLFxuICAgICAgICBzY29wZTp0cnVlLFxuICAgICAgICAgICAgbGluazogZnVuY3Rpb24gcG9zdExpbmsoc2NvcGUsIGVsZW1lbnQsIGF0dHJzKSB7XG4gICAgICAgICAgICBzY29wZS50aXRsZSA9IGF0dHJzLnRpdGxlO1xuICAgICAgICAgICAgc2NvcGUuJHdhdGNoKGF0dHJzLnZpc2libGUsIGZ1bmN0aW9uKHZhbHVlKXtcbiAgICAgICAgICAgICAgICBpZih2YWx1ZSA9PT0gdHJ1ZSlcbiAgICAgICAgICAgICAgICAgICAgJChlbGVtZW50KS5tb2RhbCgnc2hvdycpO1xuICAgICAgICAgICAgICAgIGVsc2VcbiAgICAgICAgICAgICAgICAgICAgJChlbGVtZW50KS5tb2RhbCgnaGlkZScpO1xuICAgICAgICAgICAgICAgIH0pO1xuXG4gICAgICAgICAgICAgICAgJChlbGVtZW50KS5vbignc2hvd24uYnMubW9kYWwnLCBmdW5jdGlvbigpe1xuICAgICAgICAgICAgICAgICAgICBzY29wZS4kYXBwbHkoZnVuY3Rpb24oKXtcbiAgICAgICAgICAgICAgICAgICAgICAgIHNjb3BlLiRwYXJlbnRbYXR0cnMudmlzaWJsZV0gPSB0cnVlO1xuICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICB9KTtcblxuICAgICAgICAgICAgICAgICQoZWxlbWVudCkub24oJ2hpZGRlbi5icy5tb2RhbCcsIGZ1bmN0aW9uKCl7XG4gICAgICAgICAgICAgICAgICAgIHNjb3BlLiRhcHBseShmdW5jdGlvbigpe1xuICAgICAgICAgICAgICAgICAgICAgICAgc2NvcGUuJHBhcmVudFthdHRycy52aXNpYmxlXSA9IGZhbHNlO1xuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICB9O1xufSlcblxuLmRpcmVjdGl2ZSgnYXV0b2ZvY3VzJywgWyckdGltZW91dCcsIGZ1bmN0aW9uKCR0aW1lb3V0KSB7XG4gICAgcmV0dXJuIHtcbiAgICAgICAgcmVzdHJpY3Q6ICdBJyxcbiAgICAgICAgICAgIGxpbmsgOiBmdW5jdGlvbigkc2NvcGUsICRlbGVtZW50KSB7XG4gICAgICAgICAgICAgICAgJHRpbWVvdXQoZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICAgICAgICAgICRlbGVtZW50WzBdLmZvY3VzKCk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgIH07XG59XSlcblxuLmRpcmVjdGl2ZSgnZmF2JywgZnVuY3Rpb24oKXtcbiAgICByZXR1cm4ge1xuICAgICAgICB0ZW1wbGF0ZTogJzxzdmcgbmctY2xpY2s9XCJ0b2dnbGUoKVwiIG5nLWNsYXNzPVwie1xcJ2J0bi1vZmZcXCc6IWlzU2VsZWN0ZWQsIFxcJ2J0bi1vblxcJzppc1NlbGVjdGVkLH1cIiBjbGFzcz1cInN0YXJcIiAgd2lkdGg9XCIyNHB4XCIgaGVpZ2h0PVwiMjRweFwiIHZpZXdCb3g9XCIwIDAgNDggNDhcIiB2ZXJzaW9uPVwiMS4xXCIgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiIHhtbG5zOnhsaW5rPVwiaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGlua1wiIHhtbG5zOnNrZXRjaD1cImh0dHA6Ly93d3cuYm9oZW1pYW5jb2RpbmcuY29tL3NrZXRjaC9uc1wiPicrXG4gICAgICAgICAgICAnPGcgaWQ9XCJTdGFja2ZpbGVzLmlvXCIgc3Ryb2tlPVwibm9uZVwiIHN0cm9rZS13aWR0aD1cIjFcIiBmaWxsPVwibm9uZVwiIGZpbGwtcnVsZT1cImV2ZW5vZGRcIiBza2V0Y2g6dHlwZT1cIk1TUGFnZVwiPicrXG4gICAgICAgICAgICAgICAgJzxnIGlkPVwiLXN0YXJcIiBza2V0Y2g6dHlwZT1cIk1TQXJ0Ym9hcmRHcm91cFwiIGZpbGw9XCIjZjFmMWYxXCI+JytcbiAgICAgICAgICAgICAgICAgICAgJzxnIGlkPVwic3RhclwiIHNrZXRjaDp0eXBlPVwiTVNMYXllckdyb3VwXCIgdHJhbnNmb3JtPVwidHJhbnNsYXRlKDQuMDAwMDAwLCA0LjAwMDAwMClcIj4nICtcbiAgICAgICAgICAgICAgICAgICAgICAgICc8cGF0aCBkPVwiTTQwLDE0LjQ4IEwyNS42MiwxMy4yNCBMMjAsMCBMMTQuMzgsMTMuMjYgTDAsMTQuNDggTDEwLjkyLDIzLjk0IEw3LjY0LDM4IEwyMCwzMC41NCBMMzIuMzYsMzggTDI5LjEsMjMuOTQgTDQwLDE0LjQ4IEw0MCwxNC40OCBaIE0yMCwyNi44IEwxMi40OCwzMS4zNCBMMTQuNDgsMjIuNzggTDcuODQsMTcuMDIgTDE2LjYsMTYuMjYgTDIwLDguMiBMMjMuNDIsMTYuMjggTDMyLjE4LDE3LjA0IEwyNS41NCwyMi44IEwyNy41NCwzMS4zNiBMMjAsMjYuOCBMMjAsMjYuOCBaXCIgaWQ9XCJTaGFwZVwiIHNrZXRjaDp0eXBlPVwiTVNTaGFwZUdyb3VwXCI+PC9wYXRoPicrXG4gICAgICAgICAgICAgICAgICAgICc8L2c+JytcbiAgICAgICAgICAgICAgICAnPC9nPicgK1xuICAgICAgICAgICAgJzwvZz4nICtcbiAgICAgICAgJzwvc3ZnPicsXG4gICAgICAgIHJlc3RyaWN0OiAnRScsXG4gICAgICAgIHNjb3BlOiB7XG4gICAgICAgICAgICBmaWQ6ICdAJyxcbiAgICAgICAgICAgIGlzU2VsZWN0ZWQ6ICc9JyxcbiAgICAgICAgICAgIG9uU2VsZWN0OiAnJidcbiAgICAgICAgfSxcbiAgICAgICAgbGluazogZnVuY3Rpb24oc2NvcGUsIGVsZW1lbnQsIGF0dHJpYnV0ZXMpe1xuICAgICAgICAgICAgc2NvcGUuaXNTZWxlY3RlZCA9IGZhbHNlO1xuICAgICAgICAgICAgc2NvcGUudG9nZ2xlID0gZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICAgIHNjb3BlLmlzU2VsZWN0ZWQgPSAhc2NvcGUuaXNTZWxlY3RlZDtcbiAgICAgICAgICAgICAgICBzY29wZS5vblNlbGVjdCgpKHNjb3BlLmZpZCxzY29wZS5pc1NlbGVjdGVkKTtcbiAgICAgICAgICAgIH07XG5cbiAgICAgICAgfVxuICAgIH07XG59KTtcbiIsImNsYXNzIENvbW1vbkNvbnRyb2xsZXJ7XG4gIGNvbnN0cnVjdG9yKCRzY29wZSwgY29tbW9uRmFjdG9yeSl7XG4gICAgdGhpcy4kc2NvcGUgPSAkc2NvcGU7XG4gICAgdGhpcy5jb21tb25GYWN0b3J5ID0gY29tbW9uRmFjdG9yeTtcbiAgfVxuXG4gIHRvZ2dsZU1vZGFsKCl7XG4gICAgdGhpcy4kc2NvcGUuY29weVRleHQgPSB7c3RhdHVzOiAnbm90Q2xpY2tlZCd9O1xuICAgIHRoaXMuJHNjb3BlLnNob3dNb2RhbCA9ICF0aGlzLiRzY29wZS5zaG93TW9kYWw7XG4gIH1cblxuICBnZW5lcmF0ZUVtYmVkKGlkKXtcbiAgICB0aGlzLiRzY29wZS5lbWJlZFNjcmlwdCA9ICc8c2NyaXB0IHNyYz1cIicrd2luZG93LmxvY2F0aW9uLnByb3RvY29sKycvLycrd2luZG93LmxvY2F0aW9uLmhvc3RuYW1lKycvZW1iZWQvZmlsZS8nK2lkKycuanNcIj48L3NjcmlwdD4nO1xuICB9XG5cbiAgZGVwbG95KGlkKXtcbiAgICB3aW5kb3cubG9jYXRpb24uaHJlZiA9ICgnL2FwaS92MS9kZXBsb3kvJytpZCk7XG4gIH1cblxuICBzZWFyY2hGaWxlKCl7XG4gICAgdmFyIHRlcm0gPSB0aGlzLmRhdGEuc2VhcmNoO1xuICAgIHRoaXMuY29tbW9uRmFjdG9yeS5zZWFyY2hGaWxlKHRlcm0pLnRoZW4ocmVzdWx0cyA9PiB7XG4gICAgICB0aGlzLnJlc3VsdHMgPSByZXN1bHRzO1xuICAgIH0pO1xuICB9XG59XG5cbkNvbW1vbkNvbnRyb2xsZXIuJGluamVjdCA9IFsnJHNjb3BlJywgJ2NvbW1vbkZhY3RvcnknXTtcblxuZXhwb3J0IHsgQ29tbW9uQ29udHJvbGxlciB9O1xuIiwiaW1wb3J0IHsgQ29tbW9uQ29udHJvbGxlciB9IGZyb20gJy4vY29tbW9uLmN0cmwnO1xuaW1wb3J0IHsgQ29tbW9uU2VydmljZSB9IGZyb20gJy4vY29tbW9uLnN2Yyc7XG5cbmxldCBjdHJsID0gQ29tbW9uQ29udHJvbGxlcjtcbmxldCBzdmMgPSBDb21tb25TZXJ2aWNlLmZhY3Rvcnk7XG5cbmV4cG9ydCB7IGN0cmwgfTtcbmV4cG9ydCB7IHN2YyB9O1xuIiwiY2xhc3MgQ29tbW9uU2VydmljZXtcbiAgY29uc3RydWN0b3IoJGh0dHApe1xuICAgIHRoaXMuJGh0dHAgPSAkaHR0cDtcbiAgfVxuXG4gIHNlYXJjaEZpbGUodGVybSl7XG4gICAgcmV0dXJuIHRoaXMuJGh0dHAuZ2V0KCcvYXBpL3YxL3NlYXJjaCcsIHtcbiAgICAgIG1ldGhvZDogJ0dFVCcsXG4gICAgICBwYXJhbXM6IHtcbiAgICAgICAgdGVybTogdGVybVxuICAgICAgfVxuICAgIH0pLnRoZW4ociA9PiByLmRhdGEpO1xuICB9XG5cbiAgc3RhdGljIGZhY3RvcnkoJGh0dHApe1xuICAgIHJldHVybiBuZXcgQ29tbW9uU2VydmljZSgkaHR0cCk7XG4gIH1cbn1cblxuQ29tbW9uU2VydmljZS5mYWN0b3J5LiRpbmplY3QgPSBbJyRodHRwJ107XG5cbmV4cG9ydCB7IENvbW1vblNlcnZpY2UgfTtcbiIsImNsYXNzIENyZWF0ZUNvbnRyb2xsZXJ7XG4gIGNvbnN0cnVjdG9yKCRzY29wZSwgJHJvb3RTY29wZSwgJHN0YXRlLCAkd2luZG93LCBjcmVhdGVGYWN0b3J5KXtcbiAgICB0aGlzLmNyZWF0ZUZhY3RvcnkgPSBjcmVhdGVGYWN0b3J5O1xuICAgIHRoaXMuJHNjb3BlID0gJHNjb3BlO1xuICAgIHRoaXMuJHJvb3RTY29wZSA9ICRyb290U2NvcGU7XG4gICAgdGhpcy4kc3RhdGUgPSAkc3RhdGU7XG4gICAgdGhpcy4kd2luZG93ID0gJHdpbmRvdztcbiAgICB0aGlzLmluaXQoKTtcbiAgfVxuXG4gIGluaXQoKXtcbiAgICBpZih0aGlzLiRyb290U2NvcGUubG9nZ2VkKXtcbiAgICAgIHRoaXMuJHNjb3BlLnVzZXIgPSB0aGlzLiRyb290U2NvcGUudXNlcjtcbiAgICAgIHRoaXMuJHNjb3BlLmxvY2tlZCA9IGZhbHNlO1xuICAgICAgdGhpcy4kc2NvcGUuc3RhY2tmaWxlID0gXCJVbmFibGUgdG8gZmV0Y2ggdHV0dW0ueW1sIGZyb20gR2l0aHViIHJlcG9zaXRvcnkuIFBsZWFzZSBzZWxlY3QgYSByZXBvc2l0b3J5IHRoYXQgY29udGFpbnMgYSB0dXR1bS55bWwgb3IgYSBkb2NrZXItY29tcG9zZS55bWwgZmlsZVwiO1xuICAgIH1cbiAgfVxuXG4gIGdldE9yZ3MoKXtcbiAgICB2YXIgb3JncyA9IFtdO1xuICAgIHZhciByZXBvcyA9IFtdO1xuICAgIHZhciBicmFuY2hlcyA9IFtdO1xuICAgIHRoaXMuZGF0YS5wYXRoID0gXCIvXCI7XG4gICAgdGhpcy4kc2NvcGUuc3RhY2tmaWxlID0gXCJXaW5kb3cgd2lsbCBhdXRvbWF0aWNhbGx5IHJlZnJlc2ggYWZ0ZXIgZmlsbGluZyBmb3JtLlwiO1xuXG4gICAgdGhpcy5jcmVhdGVGYWN0b3J5LmdldFVzZXJPcmdzKCkudGhlbihkYXRhID0+IHtcbiAgICAgIGFuZ3VsYXIuZm9yRWFjaChkYXRhLCAodmFsdWUsIGtleSkgPT4ge1xuICAgICAgICBvcmdzLnB1c2godmFsdWUubG9naW4pO1xuICAgICAgfSk7XG4gICAgICBvcmdzLnB1c2godGhpcy4kc2NvcGUudXNlcik7XG4gICAgICB0aGlzLiRzY29wZS5vcmdzID0gb3JncztcbiAgICB9KTtcbiAgfVxuXG4gIGdldFJlcG9zKCl7XG4gICAgdmFyIHJlcG9zID0gW107XG4gICAgdmFyIGJyYW5jaGVzID0gW107XG4gICAgdGhpcy5kYXRhLnBhdGggPSBcIi9cIjtcbiAgICB0aGlzLiRzY29wZS5zdGFja2ZpbGUgPSBcIldpbmRvdyB3aWxsIGF1dG9tYXRpY2FsbHkgcmVmcmVzaCBhZnRlciBmaWxsaW5nIGZvcm0uXCI7XG5cbiAgICB0aGlzLmNyZWF0ZUZhY3RvcnkuZ2V0VXNlclJlcG9zKHRoaXMuZGF0YS5vcmduYW1lKS50aGVuKGRhdGEgPT4ge1xuICAgICAgdGhpcy4kc2NvcGUucmVwb3MgPSBbXTtcbiAgICAgIGFuZ3VsYXIuZm9yRWFjaChkYXRhLCAodmFsdWUsIGtleSkgPT4ge1xuICAgICAgICAgIHJlcG9zLnB1c2godmFsdWUubmFtZSk7XG4gICAgICB9KTtcbiAgICAgIHRoaXMuJHNjb3BlLnJlcG9zID0gcmVwb3M7XG4gICAgfSk7XG4gIH1cblxuICBnZXRCcmFuY2hlcygpe1xuICAgIHZhciBicmFuY2hlcyA9IFtdO1xuICAgIHRoaXMuZGF0YS5wYXRoID0gXCIvXCI7XG4gICAgdGhpcy4kc2NvcGUuc3RhY2tmaWxlID0gXCJXaW5kb3cgd2lsbCBhdXRvbWF0aWNhbGx5IHJlZnJlc2ggYWZ0ZXIgZmlsbGluZyBmb3JtLlwiO1xuXG4gICAgdGhpcy5jcmVhdGVGYWN0b3J5LmdldFJlcG9icmFuY2hlcyh0aGlzLmRhdGEub3JnbmFtZSwgdGhpcy5kYXRhLnJlcG9uYW1lKS50aGVuKGRhdGEgPT4ge1xuICAgICAgYW5ndWxhci5mb3JFYWNoKGRhdGEsICh2YWx1ZSwga2V5KSA9PiB7XG4gICAgICAgIGJyYW5jaGVzLnB1c2godmFsdWUpO1xuICAgICAgfSk7XG4gICAgICB0aGlzLiRzY29wZS5icmFuY2hlcyA9IGJyYW5jaGVzO1xuICAgIH0pO1xuICB9XG5cbiAgZ2V0Q29tcG9zZUZpbGUob3JnbmFtZSwgbmFtZSwgYnJhbmNoLCBwYXRoKXtcbiAgICBpZihvcmduYW1lID09PSB1bmRlZmluZWQpe1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICB0aGlzLiRzY29wZS5zdGFja2ZpbGUgPSBcIlwiO1xuICAgIHRoaXMuY3JlYXRlRmFjdG9yeS5nZXRVc2VyUmVwb0luZm8ob3JnbmFtZSwgbmFtZSwgYnJhbmNoLCBwYXRoKS50aGVuKGRhdGEgPT4ge1xuICAgICAgaWYoZGF0YSA9PT0gXCJGaWxlIG5vdCBmb3VuZFwiKXtcbiAgICAgICAgdGhpcy4kc2NvcGUuc3RhY2tmaWxlID0gXCJVbmFibGUgdG8gZmV0Y2ggdHV0dW0ueW1sIGZyb20gR2l0aHViIHJlcG9zaXRvcnkuIFBsZWFzZSBzZWxlY3QgYSByZXBvc2l0b3J5IHRoYXQgY29udGFpbnMgYSB0dXR1bS55bWwgb3IgYSBkb2NrZXItY29tcG9zZS55bWwgZmlsZVwiO1xuICAgICAgICB0aGlzLiRzY29wZS5sb2NrZWQgPSB0cnVlO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdGhpcy4kc2NvcGUubG9ja2VkID0gZmFsc2U7XG4gICAgICAgIHRoaXMuJHNjb3BlLnN0YWNrZmlsZSA9IGRhdGE7XG4gICAgICB9XG4gICAgfSk7XG4gIH1cblxuICBjcmVhdGVOZXcoKXtcbiAgICB2YXIgdGl0bGUgPSB0aGlzLmRhdGEudGl0bGU7XG4gICAgdmFyIHN0YWNrZmlsZSA9IGpzeWFtbC5sb2FkKHRoaXMuJHNjb3BlLnN0YWNrZmlsZSk7XG4gICAgdmFyIGJyYW5jaCA9IHRoaXMuZGF0YS5icmFuY2g7XG4gICAgdmFyIHBhdGggPSB0aGlzLmRhdGEucGF0aDtcbiAgICB2YXIgcHJvamVjdE5hbWUgPSB0aGlzLmRhdGEucmVwb25hbWU7XG4gICAgdmFyIG9yZ2FuaXphdGlvbk5hbWUgPSB0aGlzLmRhdGEub3JnbmFtZTtcbiAgICB2YXIgZGVzY3JpcHRpb24gPSB0aGlzLmRhdGEuZGVzY3JpcHRpb247XG5cbiAgICB2YXIgZm9ybSA9IHtcbiAgICAgICAgdGl0bGU6IHRpdGxlLnJlcGxhY2UoL1teYS16QS1aMC05XS9nLCcgJyksXG4gICAgICAgIHN0YWNrZmlsZTogc3RhY2tmaWxlLFxuICAgICAgICBicmFuY2g6IGJyYW5jaCxcbiAgICAgICAgcGF0aDogcGF0aCxcbiAgICAgICAgbmFtZTogcHJvamVjdE5hbWUsXG4gICAgICAgIG9yZ25hbWU6IG9yZ2FuaXphdGlvbk5hbWUsXG4gICAgICAgIGRlc2NyaXB0aW9uOiBkZXNjcmlwdGlvblxuICAgIH07XG5cbiAgICB0aGlzLmNyZWF0ZUZhY3Rvcnkuc2F2ZUZpbGUoZm9ybSkudGhlbigoKSA9PiB7XG4gICAgICB0aGlzLiRzdGF0ZS5nbygnbXlzdGFja3MnLCB7fSwgeyByZWxvYWQ6IHRydWUsIGluaGVyaXQ6IGZhbHNlLCBub3RpZnk6IHRydWUgfSk7XG4gICAgfSk7XG4gIH1cbn1cblxuQ3JlYXRlQ29udHJvbGxlci4kaW5qZWN0ID0gWyckc2NvcGUnLCAnJHJvb3RTY29wZScsICckc3RhdGUnLCAnJHdpbmRvdycsICdjcmVhdGVGYWN0b3J5J107XG5cbmV4cG9ydCB7IENyZWF0ZUNvbnRyb2xsZXIgfTtcbiIsImltcG9ydCB7IENyZWF0ZUNvbnRyb2xsZXIgfSBmcm9tICcuL2NyZWF0ZS5jdHJsJztcbmltcG9ydCB7IENyZWF0ZVNlcnZpY2UgfSBmcm9tICcuL2NyZWF0ZS5zdmMnO1xuXG5sZXQgY3RybCA9IENyZWF0ZUNvbnRyb2xsZXI7XG5sZXQgc3ZjID0gQ3JlYXRlU2VydmljZS5mYWN0b3J5O1xuXG5leHBvcnQgeyBjdHJsIH07XG5leHBvcnQgeyBzdmMgfTtcbiIsImNsYXNzIENyZWF0ZVNlcnZpY2V7XG4gIGNvbnN0cnVjdG9yKCRodHRwKXtcbiAgICB0aGlzLiRodHRwID0gJGh0dHA7XG4gIH1cblxuICBnZXRVc2VyUmVwb3MobmFtZSl7XG4gICAgcmV0dXJuIHRoaXMuJGh0dHAuZ2V0KCcvYXBpL3YxL3VzZXIvcmVwb3MnLCB7XG4gICAgICBtZXRob2Q6ICdHRVQnLFxuICAgICAgcGFyYW1zOiB7XG4gICAgICAgIG5hbWU6IG5hbWVcbiAgICAgIH1cbiAgICB9KS50aGVuKHIgPT4gci5kYXRhKTtcbiAgfVxuXG4gIGdldFVzZXJPcmdzKCl7XG4gICAgcmV0dXJuIHRoaXMuJGh0dHAuZ2V0KCcvYXBpL3YxL3VzZXIvb3JncycsIHtcbiAgICAgIG1ldGhvZDogJ0dFVCdcbiAgICB9KS50aGVuKHIgPT4gci5kYXRhKTtcbiAgfVxuXG4gIGdldFJlcG9icmFuY2hlcyhvcmduYW1lLCByZXBvKXtcbiAgICByZXR1cm4gdGhpcy4kaHR0cC5nZXQoJy9hcGkvdjEvdXNlci9yZXBvcy9icmFuY2hlcycsIHtcbiAgICAgIG1ldGhvZDogJ0dFVCcsXG4gICAgICBwYXJhbXM6IHtcbiAgICAgICAgb3JnbmFtZTogb3JnbmFtZSxcbiAgICAgICAgcmVwbzogcmVwb1xuICAgICAgfVxuICAgIH0pLnRoZW4ociA9PiByLmRhdGEpO1xuICB9XG5cbiAgZ2V0VXNlclJlcG9JbmZvKG9yZ25hbWUsIHJlcG8sIGJyYW5jaCwgcGF0aCl7XG4gICAgcmV0dXJuIHRoaXMuJGh0dHAucG9zdCgnL2FwaS92MS91c2VyL3JlcG9zL25ldycsIHtcbiAgICAgIG1ldGhvZDogJ1BPU1QnLFxuICAgICAgcGFyYW1zOiB7XG4gICAgICAgICAgb3JnbmFtZTogb3JnbmFtZSxcbiAgICAgICAgICByZXBvOiByZXBvLFxuICAgICAgICAgIGJyYW5jaDogYnJhbmNoLFxuICAgICAgICAgIHBhdGg6IHBhdGhcbiAgICAgIH1cbiAgICB9KS50aGVuKHIgPT4gci5kYXRhKTtcbiAgfVxuXG4gIHNhdmVGaWxlKGZvcm0pe1xuICAgIHJldHVybiB0aGlzLiRodHRwLnBvc3QoJy9hcGkvdjEvY3JlYXRlJywge1xuICAgICAgbWV0aG9kOiAnUE9TVCcsXG4gICAgICBwYXJhbXM6IHtcbiAgICAgICAgICBmb3JtIDogZm9ybVxuICAgICB9XG4gICB9KTtcbiAgfVxuXG4gIHN0YXRpYyBmYWN0b3J5KCRodHRwKXtcbiAgICByZXR1cm4gbmV3IENyZWF0ZVNlcnZpY2UoJGh0dHApO1xuICB9XG59XG5cbkNyZWF0ZVNlcnZpY2UuZmFjdG9yeS4kaW5qZWN0ID0gWyckaHR0cCddO1xuXG5leHBvcnQgeyBDcmVhdGVTZXJ2aWNlIH07XG4iLCJjbGFzcyBEZXRhaWxDb250cm9sbGVye1xuIGNvbnN0cnVjdG9yKCRzY29wZSwgJHJvb3RTY29wZSwgJHN0YXRlLCAkd2luZG93LCAkc3RhdGVQYXJhbXMsIGRldGFpbEZhY3Rvcnkpe1xuICAgdGhpcy4kc2NvcGUgPSAkc2NvcGU7XG4gICB0aGlzLiRyb290U2NvcGUgPSAkcm9vdFNjb3BlO1xuICAgdGhpcy4kc3RhdGUgPSAkc3RhdGU7XG4gICB0aGlzLiR3aW5kb3cgPSAkd2luZG93O1xuICAgdGhpcy4kc3RhdGVQYXJhbXMgPSAkc3RhdGVQYXJhbXM7XG4gICB0aGlzLmRldGFpbEZhY3RvcnkgPSBkZXRhaWxGYWN0b3J5O1xuICAgdGhpcy5pbml0KCk7XG4gfVxuXG4gaW5pdCgpe1xuICAgaWYodGhpcy4kcm9vdFNjb3BlLmxvZ2dlZCl7XG4gICAgIHRoaXMuJHNjb3BlLnVzZXIgPSB0aGlzLiRyb290U2NvcGUudXNlcjtcbiAgICAgdGhpcy4kc2NvcGUubG9nZ2VkID0gdGhpcy4kcm9vdFNjb3BlLmxvZ2dlZDtcbiAgIH1cblxuICAgdGhpcy5kZXRhaWxGYWN0b3J5LmdldEZpbGVXaXRoSWQodGhpcy4kc3RhdGVQYXJhbXMuaWQpLnRoZW4ociA9PiB7XG4gICAgIHRoaXMuZGF0YSA9IHIuZGF0YTtcbiAgICAgaWYoci5zdGF0dXMgPCAzMDApe1xuICAgICAgIHRoaXMuZGV0YWlsRmFjdG9yeS5nZXRZQU1MRmlsZShyLmRhdGEuX2lkLCByLmRhdGEucHJvamVjdE5hbWUsIHIuZGF0YS5wYXRoKS50aGVuKHlhbWxEYXRhID0+IHtcbiAgICAgICAgIHRoaXMuY29tcG9zZUZpbGUgPSB5YW1sRGF0YTtcbiAgICAgICAgIHRoaXMuJHNjb3BlLmxvYWRlZCA9IHRydWU7XG4gICAgICAgfSk7XG4gICAgIH1cbiAgIH0sICgpID0+IHtcbiAgICAgdGhpcy4kc3RhdGUuZ28oJzQwNCcpO1xuICAgfSk7XG4gfVxuXG4gZGVsZXRlU3RhY2tmaWxlKGlkKXtcbiAgIHRoaXMuZGV0YWlsRmFjdG9yeS5kZWxldGVTdGFja2ZpbGUoaWQpLnRoZW4oKCkgPT4ge1xuICAgICB0aGlzLiRzdGF0ZS5nbygnbXlzdGFja3MnLCB7fSwgeyByZWxvYWQ6IHRydWUsIGluaGVyaXQ6IGZhbHNlLCBub3RpZnk6IHRydWUgfSk7XG4gICB9KTtcbiB9XG59XG5cbkRldGFpbENvbnRyb2xsZXIuJGluamVjdCA9IFsnJHNjb3BlJywgJyRyb290U2NvcGUnLCAnJHN0YXRlJywgJyR3aW5kb3cnLCAnJHN0YXRlUGFyYW1zJywgJ2RldGFpbEZhY3RvcnknXTtcblxuZXhwb3J0IHsgRGV0YWlsQ29udHJvbGxlciB9O1xuIiwiaW1wb3J0IHsgRGV0YWlsQ29udHJvbGxlciB9IGZyb20gJy4vZGV0YWlsLmN0cmwnO1xuaW1wb3J0IHsgRGV0YWlsU2VydmljZSB9IGZyb20gJy4vZGV0YWlsLnN2Yyc7XG5cbmxldCBjdHJsID0gRGV0YWlsQ29udHJvbGxlcjtcbmxldCBzdmMgPSBEZXRhaWxTZXJ2aWNlLmZhY3Rvcnk7XG5cbmV4cG9ydCB7IGN0cmwgfTtcbmV4cG9ydCB7IHN2YyB9O1xuIiwiY2xhc3MgRGV0YWlsU2VydmljZXtcbiAgY29uc3RydWN0b3IoJGh0dHApe1xuICAgIHRoaXMuJGh0dHAgPSAkaHR0cDtcbiAgfVxuXG4gIGdldEZpbGVXaXRoSWQoaWQpe1xuICAgIHJldHVybiB0aGlzLiRodHRwLmdldCgnL2FwaS92MS9maWxlcy8nICsgaWQsIHtcbiAgICAgIG1ldGhvZDogJ0dFVCcsXG4gICAgICBwYXJhbXM6IHtcbiAgICAgICAgaWQ6IGlkXG4gICAgICB9XG4gICAgfSkudGhlbihyID0+IHIpO1xuICB9XG5cbiAgZ2V0WUFNTEZpbGUoaWQsIHJlcG8sIHBhdGgpe1xuICAgIHJldHVybiB0aGlzLiRodHRwLnBvc3QoJy9hcGkvdjEvdXNlci9yZXBvcy9maWxlJywge1xuICAgICAgbWV0aG9kOiAnUE9TVCcsXG4gICAgICBwYXJhbXM6IHtcbiAgICAgICAgaWQ6IGlkLFxuICAgICAgICByZXBvOiByZXBvLFxuICAgICAgICBwYXRoOiBwYXRoXG4gICAgICB9XG4gICAgfSkudGhlbihyID0+IHIuZGF0YSk7XG4gIH1cblxuICBkZWxldGVTdGFja2ZpbGUoaWQpe1xuICAgIHJldHVybiB0aGlzLiRodHRwLmRlbGV0ZSgnL2FwaS92MS9maWxlcy8nICsgaWQsIHtcbiAgICAgIG1ldGhvZDogJ0RFTEVURScsXG4gICAgICBwYXJhbXM6IHtcbiAgICAgICAgaWQ6IGlkXG4gICAgICB9XG4gICAgfSkudGhlbihyID0+IHIuZGF0YSk7XG4gIH1cblxuICBzdGF0aWMgZmFjdG9yeSgkaHR0cCl7XG4gICAgcmV0dXJuIG5ldyBEZXRhaWxTZXJ2aWNlKCRodHRwKTtcbiAgfVxufVxuXG5EZXRhaWxTZXJ2aWNlLmZhY3RvcnkuJGluamVjdCA9IFsnJGh0dHAnXTtcblxuZXhwb3J0IHsgRGV0YWlsU2VydmljZSB9O1xuIiwiY2xhc3MgRmF2Q29udHJvbGxlcntcbiAgY29uc3RydWN0b3IoJHNjb3BlLCAkcm9vdFNjb3BlLCBmYXZGYWN0b3J5KXtcbiAgICB0aGlzLmZhdkZhY3RvcnkgPSBmYXZGYWN0b3J5O1xuICAgIHRoaXMuJHNjb3BlID0gJHNjb3BlO1xuICAgIHRoaXMuJHJvb3RTY29wZSA9ICRyb290U2NvcGU7XG4gICAgdGhpcy5pbml0KCk7XG4gICAgdGhpcy4kc2NvcGUuZmF2b3JpdGVMaXN0ID0gW107XG5cbiAgfVxuXG4gIGluaXQoKXtcbiAgICBpZih0aGlzLiRyb290U2NvcGUubG9nZ2VkKXtcbiAgICAgIHRoaXMuJHNjb3BlLnVzZXIgPSB0aGlzLiRyb290U2NvcGUudXNlcjtcbiAgICAgIHRoaXMuJHNjb3BlLmxvZ2dlZCA9IHRoaXMuJHJvb3RTY29wZS5sb2dnZWQ7XG4gICAgICB0aGlzLmZhdkZhY3RvcnkuY2hlY2tGYXYoKS50aGVuKGZhdm9yaXRlcyA9PiB7XG4gICAgICAgIHRoaXMuJHNjb3BlLmZhdm9yaXRlTGlzdCA9IGZhdm9yaXRlcy5kYXRhO1xuICAgICAgfSk7XG4gICAgfVxuICB9XG5cbiAgaW5jcmVtZW50KGZpbGUpe1xuICAgIGlmKHRoaXMuJHJvb3RTY29wZS5sb2dnZWQpe1xuICAgICAgZmlsZS5zdGFycyA9IGZpbGUuc3RhcnMgKyAxO1xuICAgIH1cbiAgfVxuXG4gIHRvZ2dsZVN0YXR1cyhmaWxlKXtcbiAgICB0aGlzLmZhdkZhY3RvcnkuZmF2RmlsZShmaWxlLl9pZCkudGhlbigoKSA9PiB7XG4gICAgICBpZih0aGlzLiRyb290U2NvcGUubG9nZ2VkKXtcbiAgICAgICAgdGhpcy4kc2NvcGUuZmF2b3JpdGVMaXN0LnB1c2goZmlsZS5faWQpO1xuICAgICAgfVxuICAgIH0pO1xuICB9XG5cbiAgdW5Ub2dnbGVTdGF0dXMoZmlsZSl7XG4gICAgdGhpcy5mYXZGYWN0b3J5LnVuRmF2RmlsZShmaWxlLl9pZCkudGhlbigoKSA9PiB7XG4gICAgICBpZih0aGlzLiRzY29wZS5sb2dnZWQpe1xuICAgICAgICB2YXIgaW5kZXggPSB0aGlzLiRzY29wZS5mYXZvcml0ZUxpc3QuaW5kZXhPZihmaWxlLl9pZCk7XG4gICAgICAgIHRoaXMuJHNjb3BlLmZhdm9yaXRlTGlzdC5zcGxpY2UoaW5kZXgsIDEpO1xuICAgICAgfVxuICAgIH0pO1xuICB9XG5cbiAgaXNTZWxlY3RlZChmaWxlKXtcbiAgICByZXR1cm4gdGhpcy4kc2NvcGUuZmF2b3JpdGVMaXN0LmluZGV4T2YoZmlsZS5faWQpID4gLTE7XG4gIH1cbn1cblxuRmF2Q29udHJvbGxlci4kaW5qZWN0ID0gWyckc2NvcGUnLCAnJHJvb3RTY29wZScsICdmYXZGYWN0b3J5J107XG5cbmV4cG9ydCB7IEZhdkNvbnRyb2xsZXIgfTtcbiIsImltcG9ydCB7IEZhdkNvbnRyb2xsZXIgfSBmcm9tICcuL2Zhdm1vZHVsZS5jdHJsJztcbmltcG9ydCB7IEZhdlNlcnZpY2UgfSBmcm9tICcuL2Zhdm1vZHVsZS5zdmMnO1xuXG5sZXQgY3RybCA9IEZhdkNvbnRyb2xsZXI7XG5sZXQgc3ZjID0gRmF2U2VydmljZS5mYWN0b3J5O1xuXG5leHBvcnQgeyBjdHJsIH07XG5leHBvcnQgeyBzdmMgfTtcbiIsImNsYXNzIEZhdlNlcnZpY2V7XG4gIGNvbnN0cnVjdG9yKCRodHRwKXtcbiAgICB0aGlzLiRodHRwID0gJGh0dHA7XG4gIH1cblxuICBjaGVja0Zhdigpe1xuICAgIHJldHVybiB0aGlzLiRodHRwLmdldCgnL2FwaS92MS91c2VyL2ZhdicsIHtcbiAgICAgIG1ldGhvZDogJ0dFVCdcbiAgICB9KTtcbiAgfVxuICBcbiAgZmF2RmlsZShpZCl7XG4gICAgcmV0dXJuIHRoaXMuJGh0dHAuZ2V0KCcvYXBpL3YxL2ZpbGVzL2Zhdi8nICsgaWQsIHtcbiAgICAgIG1ldGhvZDogJ0dFVCdcbiAgICB9KS50aGVuKHIgPT4gci5kYXRhKTtcbiAgfVxuXG4gIHVuRmF2RmlsZShpZCl7XG4gICAgcmV0dXJuIHRoaXMuJGh0dHAuZ2V0KCcvYXBpL3YxL2ZpbGVzL3VuZmF2LycgKyBpZCwge1xuICAgICAgbWV0aG9kOiAnR0VUJ1xuICAgIH0pLnRoZW4ociA9PiByLmRhdGEpO1xuICB9XG5cbiAgc3RhdGljIGZhY3RvcnkoJGh0dHApe1xuICAgIHJldHVybiBuZXcgRmF2U2VydmljZSgkaHR0cCk7XG4gIH1cbn1cblxuRmF2U2VydmljZS5mYWN0b3J5LiRpbmplY3QgPSBbJyRodHRwJ107XG5cbmV4cG9ydCB7IEZhdlNlcnZpY2UgfTtcbiIsImNsYXNzIEZhdm9yaXRlQ29udHJvbGxlcntcbiAgY29uc3RydWN0b3IoJHNjb3BlLCAkcm9vdFNjb3BlLCBmYXZvcml0ZXNGYWN0b3J5KXtcbiAgICB0aGlzLmZhdm9yaXRlc0ZhY3RvcnkgPSBmYXZvcml0ZXNGYWN0b3J5O1xuICAgIHRoaXMuJHNjb3BlID0gJHNjb3BlO1xuICAgIHRoaXMuJHJvb3RTY29wZSA9ICRyb290U2NvcGU7XG4gICAgdGhpcy5pbml0KCk7XG4gIH1cblxuICBpbml0KCl7XG4gICAgdGhpcy5mYXZvcml0ZXNGYWN0b3J5LmdldFVzZXJGYXZvcml0ZXMoKS50aGVuKGRhdGEgPT4ge1xuICAgICAgdGhpcy5maWxlcyA9IGRhdGE7XG4gICAgICB0aGlzLiRzY29wZS5sb2FkZWQgPSB0cnVlO1xuICAgIH0pO1xuICB9XG5cbiAgcmVtb3ZlUm93KGZpbGUpe1xuICAgIHZhciBpbmRleCA9IC0xO1xuXHRcdGZvciggdmFyIGkgPSAwOyBpIDwgdGhpcy5maWxlcy5sZW5ndGg7IGkrKyApIHtcblx0XHRcdGlmKCB0aGlzLmZpbGVzW2ldLl9pZCA9PT0gZmlsZS5faWQgKSB7XG5cdFx0XHRcdGluZGV4ID0gaTtcblx0XHRcdFx0YnJlYWs7XG5cdFx0XHR9XG5cdFx0fVxuXHRcdHRoaXMuZmlsZXMuc3BsaWNlKCBpbmRleCwgMSApO1xuICB9XG59XG5cbkZhdm9yaXRlQ29udHJvbGxlci4kaW5qZWN0ID0gWyckc2NvcGUnLCAnJHJvb3RTY29wZScsICdmYXZvcml0ZXNGYWN0b3J5J107XG5cbmV4cG9ydCB7IEZhdm9yaXRlQ29udHJvbGxlciB9O1xuIiwiaW1wb3J0IHsgRmF2b3JpdGVDb250cm9sbGVyIH0gZnJvbSAnLi9mYXZvcml0ZXMuY3RybCc7XG5pbXBvcnQgeyBGYXZvcml0ZVNlcnZpY2UgfSBmcm9tICcuL2Zhdm9yaXRlcy5zdmMnO1xuXG5sZXQgY3RybCA9IEZhdm9yaXRlQ29udHJvbGxlcjtcbmxldCBzdmMgPSBGYXZvcml0ZVNlcnZpY2UuZmFjdG9yeTtcblxuZXhwb3J0IHsgY3RybCB9O1xuZXhwb3J0IHsgc3ZjIH07XG4iLCJjbGFzcyBGYXZvcml0ZVNlcnZpY2V7XG4gIGNvbnN0cnVjdG9yKCRodHRwKXtcbiAgICB0aGlzLiRodHRwID0gJGh0dHA7XG4gIH1cblxuICBnZXRVc2VyRmF2b3JpdGVzKCl7XG4gICAgcmV0dXJuIHRoaXMuJGh0dHAuZ2V0KCcvYXBpL3YxL3VzZXIvZmF2b3JpdGVzJyx7XG4gICAgICAgIG1ldGhvZDogJ0dFVCdcbiAgICB9KS50aGVuKHIgPT4gci5kYXRhKTtcbiAgfVxuXG4gIHN0YXRpYyBmYWN0b3J5KCRodHRwKXtcbiAgICByZXR1cm4gbmV3IEZhdm9yaXRlU2VydmljZSgkaHR0cCk7XG4gIH1cbn1cblxuRmF2b3JpdGVTZXJ2aWNlLmZhY3RvcnkuJGluamVjdCA9IFsnJGh0dHAnXTtcblxuZXhwb3J0IHsgRmF2b3JpdGVTZXJ2aWNlIH07XG4iLCJjbGFzcyBNYWluQ29udHJvbGxlcntcbiAgY29uc3RydWN0b3IoJHN0YXRlLCAkd2luZG93LCBsYW5kaW5nRmFjdG9yeSkge1xuICAgIHRoaXMubGFuZGluZ0ZhY3RvcnkgPSBsYW5kaW5nRmFjdG9yeTtcbiAgICB0aGlzLiRzdGF0ZSA9ICRzdGF0ZTtcbiAgICB0aGlzLiR3aW5kb3cgPSAkd2luZG93O1xuICB9XG4gIHNpZ25pbihwYWdlKXtcbiAgICB0aGlzLmxhbmRpbmdGYWN0b3J5LnNpZ25pbihwYWdlKTtcbiAgfVxuXG4gIHNlYXJjaCgpe1xuICAgIGlmKHRoaXMuZGF0YS5zZWFyY2ggIT09IFwiXCIpe1xuICAgICAgdGhpcy4kd2luZG93LmxvY2FsU3RvcmFnZS5zZWFyY2ggPSB0aGlzLmRhdGEuc2VhcmNoO1xuICAgICAgY29uc29sZS5sb2codGhpcy4kd2luZG93LmxvY2FsU3RvcmFnZS5zZWFyY2gpO1xuICAgICAgdGhpcy4kc3RhdGUuZ28oXCJyZWdpc3RyeVwiKTtcbiAgICB9XG4gIH1cbn1cblxuTWFpbkNvbnRyb2xsZXIuJGluamVjdCA9IFsnJHN0YXRlJywgJyR3aW5kb3cnLCAnbGFuZGluZ0ZhY3RvcnknXTtcblxuZXhwb3J0IHsgTWFpbkNvbnRyb2xsZXIgfTtcbiIsImltcG9ydCB7IE1haW5Db250cm9sbGVyIH0gZnJvbSAnLi9sYW5kaW5nLmN0cmwnO1xuaW1wb3J0IHsgTWFpblNlcnZpY2UgfSBmcm9tICcuL2xhbmRpbmcuc3ZjJztcblxubGV0IGN0cmwgPSBNYWluQ29udHJvbGxlcjtcbmxldCBzdmMgPSBNYWluU2VydmljZS5mYWN0b3J5O1xuXG5leHBvcnQgeyBjdHJsIH07XG5leHBvcnQgeyBzdmMgfTtcbiIsImNsYXNzIE1haW5TZXJ2aWNlIHtcbiAgY29uc3RydWN0b3IoJHdpbmRvdyl7XG4gICAgdGhpcy4kd2luZG93ID0gJHdpbmRvdztcbiAgfVxuXG4gIHNpZ25pbihwYWdlKXtcbiAgICB0aGlzLiR3aW5kb3cubG9jYXRpb24uaHJlZiA9ICgnL2F1dGgvZ2l0aHViP3JlZGlyZWN0PScgKyBwYWdlKTtcbiAgfVxuXG4gIHN0YXRpYyBmYWN0b3J5KCR3aW5kb3cpe1xuICAgIHJldHVybiBuZXcgTWFpblNlcnZpY2UoJHdpbmRvdyk7XG4gIH1cbn1cblxuTWFpblNlcnZpY2UuZmFjdG9yeS4kaW5qZWN0ID0gWyckd2luZG93J107XG5cbmV4cG9ydCB7IE1haW5TZXJ2aWNlIH07XG4iLCJjbGFzcyBNeVN0YWNrQ29udHJvbGxlciB7XG4gIGNvbnN0cnVjdG9yKCRzY29wZSwgbXlzdGFja3NGYWN0b3J5KXtcbiAgICB0aGlzLm15c3RhY2tzRmFjdG9yeSA9IG15c3RhY2tzRmFjdG9yeTtcbiAgICB0aGlzLiRzY29wZSA9ICRzY29wZTtcbiAgICB0aGlzLmluaXQoKTtcbiAgfVxuXG4gIGluaXQoKXtcbiAgICB0aGlzLm15c3RhY2tzRmFjdG9yeS5nZXRVc2VyRmlsZXMoKS50aGVuKGRhdGEgPT4ge1xuICAgICAgdGhpcy5maWxlcyA9IGRhdGE7XG4gICAgICB0aGlzLiRzY29wZS5sb2FkZWQgPSB0cnVlO1xuICAgIH0pO1xuICB9XG59XG5cbk15U3RhY2tDb250cm9sbGVyLiRpbmplY3QgPSBbJyRzY29wZScsICdteXN0YWNrc0ZhY3RvcnknXTtcblxuZXhwb3J0IHsgTXlTdGFja0NvbnRyb2xsZXIgfTtcbiIsImltcG9ydCB7IE15U3RhY2tDb250cm9sbGVyIH0gZnJvbSAnLi9teXN0YWNrcy5jdHJsJztcbmltcG9ydCB7IE15U3RhY2tTZXJ2aWNlIH0gZnJvbSAnLi9teXN0YWNrcy5zdmMnO1xuXG5sZXQgY3RybCA9IE15U3RhY2tDb250cm9sbGVyO1xubGV0IHN2YyA9IE15U3RhY2tTZXJ2aWNlLmZhY3Rvcnk7XG5cbmV4cG9ydCB7IGN0cmwgfTtcbmV4cG9ydCB7IHN2YyB9O1xuIiwiY2xhc3MgTXlTdGFja1NlcnZpY2Uge1xuICBjb25zdHJ1Y3RvcigkaHR0cCl7XG4gICAgdGhpcy4kaHR0cCA9ICRodHRwO1xuICB9XG5cbiAgZ2V0VXNlckZpbGVzKCl7XG4gICAgcmV0dXJuIHRoaXMuJGh0dHAuZ2V0KCcvYXBpL3YxL3VzZXIvZmlsZXMnLCB7XG4gICAgICBtZXRob2Q6ICdHRVQnLFxuICAgIH0pLnRoZW4ociA9PiByLmRhdGEpO1xuICB9XG5cbiAgc3RhdGljIGZhY3RvcnkoJGh0dHApe1xuICAgIHJldHVybiBuZXcgTXlTdGFja1NlcnZpY2UoJGh0dHApO1xuICB9XG59XG5cbk15U3RhY2tTZXJ2aWNlLmZhY3RvcnkuJGluamVjdCA9IFsnJGh0dHAnXTtcblxuZXhwb3J0IHsgTXlTdGFja1NlcnZpY2UgfTtcbiIsImNsYXNzIExvYWRlciB7XG4gIGNvbnN0cnVjdG9yKHJlZ2lzdHJ5RmFjdG9yeSkge1xuICAgIHRoaXMucmVnaXN0cnlGYWN0b3J5ID0gcmVnaXN0cnlGYWN0b3J5O1xuICAgIHRoaXMuaXRlbXMgPSBbXTtcbiAgICB0aGlzLmJ1c3kgPSBmYWxzZTtcbiAgICB0aGlzLmFmdGVyID0gMTtcbiAgfVxuXG4gIG5leHRQYWdlKCkge1xuICAgIGlmICh0aGlzLmJ1c3kpIHJldHVybjtcbiAgICB0aGlzLmJ1c3kgPSB0cnVlO1xuICAgIHZhciBzZWxmID0gdGhpcztcblxuICAgIHJldHVybiB0aGlzLnJlZ2lzdHJ5RmFjdG9yeS5nZXRGaWxlcyh0aGlzLmFmdGVyKS50aGVuKGZpbGVzID0+IHtcbiAgICAgIHZhciBsaXN0ID0gZmlsZXM7XG4gICAgICBpZihsaXN0Lmxlbmd0aCA9PT0gMCl7XG4gICAgICAgIHNlbGYuYnVzeSA9IHRydWU7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGZvcih2YXIgaSA9IDA7IGkgPCBsaXN0Lmxlbmd0aDsgaSsrKXtcbiAgICAgICAgICAgIHNlbGYuaXRlbXMucHVzaChsaXN0W2ldKTtcbiAgICAgICAgfVxuICAgICAgICBzZWxmLmFmdGVyID0gc2VsZi5hZnRlciArIDE7XG4gICAgICAgIHNlbGYuYnVzeSA9IGZhbHNlO1xuICAgICAgfVxuICAgIH0sICgpID0+IHtcbiAgICAgIHNlbGYuaXRlbXMgPSBbXTtcbiAgICB9KTtcbiAgfVxuXG4gIHN0YXRpYyBmYWN0b3J5KHJlZ2lzdHJ5RmFjdG9yeSl7XG4gICAgcmV0dXJuIG5ldyBMb2FkZXIocmVnaXN0cnlGYWN0b3J5KTtcbiAgfVxufVxuXG5Mb2FkZXIuJGluamVjdCA9IFsncmVnaXN0cnlGYWN0b3J5J107XG5cbmV4cG9ydCB7IExvYWRlciB9O1xuIiwiY2xhc3MgUmVnaXN0cnlDb250cm9sbGVye1xuICBjb25zdHJ1Y3Rvcigkc2NvcGUsICRyb290U2NvcGUsICRzdGF0ZSwgJHdpbmRvdywgcmVnaXN0cnlGYWN0b3J5LCByZWdpc3RyeUxvYWRlcil7XG4gICAgdGhpcy5yZWdpc3RyeUZhY3RvcnkgPSByZWdpc3RyeUZhY3Rvcnk7XG4gICAgdGhpcy5yZWdpc3RyeUxvYWRlciA9IHJlZ2lzdHJ5TG9hZGVyO1xuICAgIHRoaXMuJHNjb3BlID0gJHNjb3BlO1xuICAgIHRoaXMuJHJvb3RTY29wZSA9ICRyb290U2NvcGU7XG4gICAgdGhpcy4kc3RhdGUgPSAkc3RhdGU7XG4gICAgdGhpcy4kd2luZG93ID0gJHdpbmRvdztcbiAgICB0aGlzLmluaXQoKTtcbiAgfVxuXG4gIGluaXQoKXtcbiAgICB0aGlzLiRzY29wZS5maWxlcyA9IHRoaXMucmVnaXN0cnlMb2FkZXI7XG4gICAgdGhpcy4kc2NvcGUubG9hZGVkID0gdHJ1ZTtcbiAgfVxuXG4gIGNoZWNrU2VhcmNoKCl7XG4gICAgaWYodGhpcy4kd2luZG93LmxvY2FsU3RvcmFnZS5zZWFyY2ggIT09IHVuZGVmaW5lZCl7XG4gICAgICB0aGlzLiRzY29wZS5kYXRhID0ge3NlYXJjaDogdGhpcy4kd2luZG93LmxvY2FsU3RvcmFnZS5zZWFyY2h9O1xuICAgICAgdGhpcy5yZWdpc3RyeUZhY3Rvcnkuc2VhcmNoRmlsZSh0aGlzLiR3aW5kb3cubG9jYWxTdG9yYWdlLnNlYXJjaCkudGhlbihyZXN1bHRzID0+IHtcbiAgICAgICAgdGhpcy5yZXN1bHRzID0gcmVzdWx0cztcbiAgICAgIH0pO1xuICAgICAgdGhpcy4kd2luZG93LmxvY2FsU3RvcmFnZS5jbGVhcigpO1xuICAgIH1cbiAgfVxuXG59XG5cblJlZ2lzdHJ5Q29udHJvbGxlci4kaW5qZWN0ID0gWyckc2NvcGUnLCAnJHJvb3RTY29wZScsICckc3RhdGUnLCAnJHdpbmRvdycsJ3JlZ2lzdHJ5RmFjdG9yeScsICdyZWdpc3RyeUxvYWRlciddO1xuXG5leHBvcnQgeyBSZWdpc3RyeUNvbnRyb2xsZXIgfTtcbiIsImltcG9ydCB7IFJlZ2lzdHJ5Q29udHJvbGxlciB9IGZyb20gJy4vcmVnaXN0cnkuY3RybCc7XG5pbXBvcnQgeyBSZWdpc3RyeVNlcnZpY2UgfSBmcm9tICcuL3JlZ2lzdHJ5LnN2Yyc7XG5pbXBvcnQgeyBMb2FkZXIgfSBmcm9tICcuL3JlZ2lzdHJ5LWxvYWRlcic7XG5cbmxldCBjdHJsID0gUmVnaXN0cnlDb250cm9sbGVyO1xubGV0IHN2YyA9IFJlZ2lzdHJ5U2VydmljZS5mYWN0b3J5O1xubGV0IGxvYWRlciA9IExvYWRlci5mYWN0b3J5O1xuXG5leHBvcnQgeyBjdHJsIH07XG5leHBvcnQgeyBzdmMgfTtcbmV4cG9ydCB7IGxvYWRlciB9O1xuIiwiY2xhc3MgUmVnaXN0cnlTZXJ2aWNlIHtcbiAgY29uc3RydWN0b3IoJGh0dHApe1xuICAgIHRoaXMuJGh0dHAgPSAkaHR0cDtcbiAgfVxuXG4gIGdldEZpbGVzKHBhZ2Upe1xuICAgIHJldHVybiB0aGlzLiRodHRwLmdldCgnL2FwaS92MS9maWxlcy8nLHtcbiAgICAgIG1ldGhvZDogJ0dFVCcsXG4gICAgICBwYXJhbXM6IHtcbiAgICAgICAgICBwYWdlOiBwYWdlLFxuICAgICAgICAgIGxpbWl0OiA1XG4gICAgICB9XG4gICAgfSkudGhlbihyID0+IHIuZGF0YSk7XG4gIH1cblxuICBzdGF0aWMgZmFjdG9yeSgkaHR0cCl7XG4gICAgcmV0dXJuIG5ldyBSZWdpc3RyeVNlcnZpY2UoJGh0dHApO1xuICB9XG59XG5cblJlZ2lzdHJ5U2VydmljZS5mYWN0b3J5LiRpbmplY3QgPSBbJyRodHRwJ107XG5cbmV4cG9ydCB7IFJlZ2lzdHJ5U2VydmljZSB9O1xuIiwiY2xhc3MgU2Vzc2lvbkNvbnRyb2xsZXJ7XG4gIGNvbnN0cnVjdG9yKCRzY29wZSwgJHJvb3RTY29wZSwgJHN0YXRlLCAkbG9jYXRpb24sICR3aW5kb3csIHNlc3Npb25GYWN0b3J5KXtcbiAgICB0aGlzLnNlc3Npb25GYWN0b3J5ID0gc2Vzc2lvbkZhY3Rvcnk7XG4gICAgdGhpcy5pbml0KCk7XG4gICAgdGhpcy4kc2NvcGUgPSAkc2NvcGU7XG4gICAgdGhpcy4kcm9vdFNjb3BlID0gJHJvb3RTY29wZTtcbiAgICB0aGlzLiRzdGF0ZSA9ICRzdGF0ZTtcbiAgICB0aGlzLiRsb2NhdGlvbiA9ICRsb2NhdGlvbjtcbiAgICB0aGlzLiR3aW5kb3cgPSAkd2luZG93O1xuICB9XG5cbiAgaW5pdCgpe1xuICAgIHRoaXMuc2Vzc2lvbkZhY3RvcnkuZ2V0VXNlcigpLnRoZW4oKGRhdGEsIHN0YXR1cywgaGVhZGVycywgY29uZmlnKSA9PiB7XG4gICAgICB0aGlzLiRyb290U2NvcGUubG9nZ2VkID0gdHJ1ZTtcbiAgICAgIHRoaXMuJHJvb3RTY29wZS51c2VyID0gZGF0YS51c2VybmFtZTtcbiAgICAgIHRoaXMuJHNjb3BlLmxvZ2dlZCA9IHRydWU7XG4gICAgICB0aGlzLiRzY29wZS51c2VyID0gZGF0YS51c2VybmFtZTtcbiAgICAgIHRoaXMuJHNjb3BlLnBob3RvID0gZGF0YS5fanNvbi5hdmF0YXJfdXJsO1xuICAgIH0pO1xuICB9XG5cbiAgc2lnbmluKHBhZ2Upe1xuICAgIHRoaXMuc2Vzc2lvbkZhY3Rvcnkuc2lnbmluKHBhZ2UpO1xuICB9XG5cbiAgbG9nb3V0KCl7XG4gICAgdGhpcy5zZXNzaW9uRmFjdG9yeS5sb2dvdXQoKS50aGVuKChkYXRhLCBzdGF0dXMsIGhlYWRlcnMsIGNvbmZpZykgPT4ge1xuICAgICAgdGhpcy4kc3RhdGUudHJhbnNpdGlvblRvKHRoaXMuJHN0YXRlLmN1cnJlbnQsIHt9LCB7XG4gICAgICAgICAgcmVsb2FkOiB0cnVlLFxuICAgICAgICAgIGluaGVyaXQ6IGZhbHNlLFxuICAgICAgICAgIG5vdGlmeTogdHJ1ZVxuICAgICAgfSk7XG4gICAgICB0aGlzLiR3aW5kb3cubG9jYXRpb24ucmVsb2FkKCk7XG4gICAgfSk7XG4gIH1cblxuICBnZXRDbGFzcyhwYXRoKXtcbiAgICBpZiAodGhpcy4kbG9jYXRpb24ucGF0aCgpLnN1YnN0cigwLCBwYXRoLmxlbmd0aCkgPT0gcGF0aCkge1xuICAgICAgcmV0dXJuIFwic2VsZWN0ZWRcIjtcbiAgICB9IGVsc2Uge1xuICAgICAgcmV0dXJuIFwiXCI7XG4gICAgfVxuICB9XG59XG5cblNlc3Npb25Db250cm9sbGVyLiRpbmplY3QgPSBbJyRzY29wZScsICckcm9vdFNjb3BlJywgJyRzdGF0ZScsICckbG9jYXRpb24nLCAnJHdpbmRvdycsICdzZXNzaW9uRmFjdG9yeSddO1xuXG5leHBvcnQgeyBTZXNzaW9uQ29udHJvbGxlciB9O1xuIiwiaW1wb3J0IHsgU2Vzc2lvbkNvbnRyb2xsZXIgfSBmcm9tICcuL3Nlc3Npb24uY3RybCc7XG5pbXBvcnQgeyBTZXNzaW9uU2VydmljZSB9IGZyb20gJy4vc2Vzc2lvbi5zdmMnO1xuXG5sZXQgY3RybCA9IFNlc3Npb25Db250cm9sbGVyO1xubGV0IHN2YyA9IFNlc3Npb25TZXJ2aWNlLmZhY3Rvcnk7XG5cbmV4cG9ydCB7IGN0cmwgfTtcbmV4cG9ydCB7IHN2YyB9O1xuIiwiY2xhc3MgU2Vzc2lvblNlcnZpY2Uge1xuICBjb25zdHJ1Y3RvcigkaHR0cCwgJHdpbmRvdyl7XG4gICAgdGhpcy4kaHR0cCA9ICRodHRwO1xuICAgIHRoaXMuJHdpbmRvdyA9ICR3aW5kb3c7XG4gIH1cblxuICBzaWduaW4ocGFnZSl7XG4gICAgdGhpcy4kd2luZG93LmxvY2F0aW9uLmhyZWYgPSAoJy9hdXRoL2dpdGh1Yj9yZWRpcmVjdD0nICsgcGFnZSk7XG4gIH1cblxuICBnZXRVc2VyKCl7XG4gICAgcmV0dXJuIHRoaXMuJGh0dHAuZ2V0KCcvYXBpL3YxL3VzZXInLCB7XG4gICAgICBtZXRob2Q6ICdHRVQnXG4gICAgfSkudGhlbihyID0+IHIuZGF0YSk7XG4gIH1cblxuICBsb2dvdXQoKXtcbiAgICByZXR1cm4gdGhpcy4kaHR0cC5nZXQoJy9hdXRoL2xvZ291dCcsIHtcbiAgICAgIG1ldGhvZDogJ0dFVCdcbiAgICB9KS50aGVuKHIgPT4gci5kYXRhKTtcbiAgfVxuXG4gIHN0YXRpYyBmYWN0b3J5KCRodHRwLCAkd2luZG93KXtcbiAgICByZXR1cm4gbmV3IFNlc3Npb25TZXJ2aWNlKCRodHRwLCAkd2luZG93KTtcbiAgfVxuXG59XG5cblNlc3Npb25TZXJ2aWNlLmZhY3RvcnkuJGluamVjdCA9IFsnJGh0dHAnLCAnJHdpbmRvdyddO1xuXG5leHBvcnQgeyBTZXNzaW9uU2VydmljZSB9O1xuIl19
