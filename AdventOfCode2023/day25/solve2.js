let wasm_bindgen;(()=>{let L=0,O=`string`,N=1,Q=`Object`,J=`utf-8`,G=null,F=`undefined`,R=4,P=`function`,I=Array,K=Error,M=Uint8Array,H=undefined;var v=((a,b,d)=>{c.wasm_bindgen__convert__closures__invoke1__hce95069e5a215fc4(a,b,m(d))});var n=(a=>{const b=typeof a;if(b==`number`||b==`boolean`||a==G){return `${a}`};if(b==O){return `"${a}"`};if(b==`symbol`){const b=a.description;if(b==G){return `Symbol`}else{return `Symbol(${b})`}};if(b==P){const b=a.name;if(typeof b==O&&b.length>L){return `Function(${b})`}else{return `Function`}};if(I.isArray(a)){const b=a.length;let c=`[`;if(b>L){c+=n(a[L])};for(let d=N;d<b;d++){c+=`, `+ n(a[d])};c+=`]`;return c};const c=/\[object ([^\]]+)\]/.exec(toString.call(a));let d;if(c.length>N){d=c[N]}else{return toString.call(a)};if(d==Q){try{return `Object(`+ JSON.stringify(a)+ `)`}catch(a){return Q}};if(a instanceof K){return `${a.name}: ${a.message}\n${a.stack}`};return d});var B=((a,b)=>{});var x=((a,b,d)=>{c._dyn_core__ops__function__FnMut__A____Output___R_as_wasm_bindgen__closure__WasmClosure___describe__invoke__h996b9c93967e3da6(a,b,m(d))});var m=(a=>{if(f===d.length)d.push(d.length+ N);const b=f;f=d[b];d[b]=a;return b});var h=(a=>{const b=e(a);g(a);return b});function y(a,b){try{return a.apply(this,b)}catch(a){c.__wbindgen_exn_store(m(a))}}var t=(()=>{if(s===G||s.byteLength===L){s=new Int32Array(c.memory.buffer)};return s});var e=(a=>d[a]);var E=(async(a)=>{if(c!==H)return c;if(typeof a===F&&b!==F){a=b.replace(/\.js$/,`_bg.wasm`)};const d=A();if(typeof a===O||typeof Request===P&&a instanceof Request||typeof URL===P&&a instanceof URL){a=fetch(a)};B(d);const {instance:e,module:f}=await z(await a,d);return C(e,f)});var D=(a=>{if(c!==H)return c;const b=A();B(b);if(!(a instanceof WebAssembly.Module)){a=new WebAssembly.Module(a)};const d=new WebAssembly.Instance(a,b);return C(d,a)});var C=((a,b)=>{c=a.exports;E.__wbindgen_wasm_module=b;s=G;j=G;c.__wbindgen_start();return c});var A=(()=>{const a={};a.wbg={};a.wbg.__wbindgen_object_drop_ref=(a=>{h(a)});a.wbg.__wbindgen_string_new=((a,b)=>{const c=l(a,b);return m(c)});a.wbg.__wbg_new_abda76e883ba8a5f=(()=>{const a=new K();return m(a)});a.wbg.__wbg_stack_658279fe44541cf6=((a,b)=>{const d=e(b).stack;const f=r(d,c.__wbindgen_malloc,c.__wbindgen_realloc);const g=o;t()[a/R+ N]=g;t()[a/R+ L]=f});a.wbg.__wbg_error_f851667af71bcfc6=((a,b)=>{let d;let e;try{d=a;e=b;console.error(l(a,b))}finally{c.__wbindgen_free(d,e,N)}});a.wbg.__wbindgen_cb_drop=(a=>{const b=h(a).original;if(b.cnt--==N){b.a=L;return !0};const c=!1;return c});a.wbg.__wbg_queueMicrotask_4d890031a6a5a50c=(a=>{queueMicrotask(e(a))});a.wbg.__wbg_queueMicrotask_adae4bc085237231=(a=>{const b=e(a).queueMicrotask;return m(b)});a.wbg.__wbindgen_is_function=(a=>{const b=typeof e(a)===P;return b});a.wbg.__wbindgen_object_clone_ref=(a=>{const b=e(a);return m(b)});a.wbg.__wbg_setonmessage_a7281508ee498972=((a,b)=>{e(a).onmessage=e(b)});a.wbg.__wbg_close_3d3019a22dda6227=(a=>{e(a).close()});a.wbg.__wbg_postMessage_101f1eec24e6c59b=function(){return y(((a,b)=>{e(a).postMessage(e(b))}),arguments)};a.wbg.__wbg_now_b724952e890dc703=(a=>{const b=e(a).now();return b});a.wbg.__wbg_data_ba3ea616b5392abf=(a=>{const b=e(a).data;return m(b)});a.wbg.__wbg_newnoargs_c62ea9419c21fbac=((a,b)=>{const c=new Function(l(a,b));return m(c)});a.wbg.__wbg_get_7b48513de5dc5ea4=function(){return y(((a,b)=>{const c=Reflect.get(e(a),e(b));return m(c)}),arguments)};a.wbg.__wbg_call_90c26b09837aba1c=function(){return y(((a,b)=>{const c=e(a).call(e(b));return m(c)}),arguments)};a.wbg.__wbg_self_f0e34d89f33b99fd=function(){return y((()=>{const a=self.self;return m(a)}),arguments)};a.wbg.__wbg_window_d3b084224f4774d7=function(){return y((()=>{const a=window.window;return m(a)}),arguments)};a.wbg.__wbg_globalThis_9caa27ff917c6860=function(){return y((()=>{const a=globalThis.globalThis;return m(a)}),arguments)};a.wbg.__wbg_global_35dfdd59a4da3e74=function(){return y((()=>{const a=global.global;return m(a)}),arguments)};a.wbg.__wbindgen_is_undefined=(a=>{const b=e(a)===H;return b});a.wbg.__wbg_resolve_6e1c6553a82f85b7=(a=>{const b=Promise.resolve(e(a));return m(b)});a.wbg.__wbg_then_3ab08cd4fbb91ae9=((a,b)=>{const c=e(a).then(e(b));return m(c)});a.wbg.__wbg_buffer_a448f833075b71ba=(a=>{const b=e(a).buffer;return m(b)});a.wbg.__wbg_newwithbyteoffsetandlength_d0482f893617af71=((a,b,c)=>{const d=new M(e(a),b>>>L,c>>>L);return m(d)});a.wbg.__wbg_new_8f67e318f15d7254=(a=>{const b=new M(e(a));return m(b)});a.wbg.__wbg_set_2357bf09366ee480=((a,b,c)=>{e(a).set(e(b),c>>>L)});a.wbg.__wbg_length_1d25fa9e4ac21ce7=(a=>{const b=e(a).length;return b});a.wbg.__wbindgen_debug_string=((a,b)=>{const d=n(e(b));const f=r(d,c.__wbindgen_malloc,c.__wbindgen_realloc);const g=o;t()[a/R+ N]=g;t()[a/R+ L]=f});a.wbg.__wbindgen_throw=((a,b)=>{throw new K(l(a,b))});a.wbg.__wbindgen_memory=(()=>{const a=c.memory;return m(a)});a.wbg.__wbindgen_closure_wrapper72=((a,b,c)=>{const d=u(a,b,25,v);return m(d)});a.wbg.__wbindgen_closure_wrapper124=((a,b,c)=>{const d=w(a,b,57,x);return m(d)});return a});var u=((a,b,d,e)=>{const f={a:a,b:b,cnt:N,dtor:d};const g=(...a)=>{f.cnt++;try{return e(f.a,f.b,...a)}finally{if(--f.cnt===L){c.__wbindgen_export_2.get(f.dtor)(f.a,f.b);f.a=L}}};g.original=f;return g});var g=(a=>{if(a<132)return;d[a]=f;f=a});var w=((a,b,d,e)=>{const f={a:a,b:b,cnt:N,dtor:d};const g=(...a)=>{f.cnt++;const b=f.a;f.a=L;try{return e(b,f.b,...a)}finally{if(--f.cnt===L){c.__wbindgen_export_2.get(f.dtor)(b,f.b)}else{f.a=b}}};g.original=f;return g});var r=((a,b,c)=>{if(c===H){const c=p.encode(a);const d=b(c.length,N)>>>L;k().subarray(d,d+ c.length).set(c);o=c.length;return d};let d=a.length;let e=b(d,N)>>>L;const f=k();let g=L;for(;g<d;g++){const b=a.charCodeAt(g);if(b>127)break;f[e+ g]=b};if(g!==d){if(g!==L){a=a.slice(g)};e=c(e,d,d=g+ a.length*3,N)>>>L;const b=k().subarray(e+ g,e+ d);const f=q(a,b);g+=f.written};o=g;return e});var k=(()=>{if(j===G||j.byteLength===L){j=new M(c.memory.buffer)};return j});var l=((a,b)=>{a=a>>>L;return i.decode(k().subarray(a,a+ b))});var z=(async(a,b)=>{if(typeof Response===P&&a instanceof Response){if(typeof WebAssembly.instantiateStreaming===P){try{return await WebAssembly.instantiateStreaming(a,b)}catch(b){if(a.headers.get(`Content-Type`)!=`application/wasm`){console.warn(`\`WebAssembly.instantiateStreaming\` failed because your server does not serve wasm with \`application/wasm\` MIME type. Falling back to \`WebAssembly.instantiate\` which is slower. Original error:\\n`,b)}else{throw b}}};const c=await a.arrayBuffer();return await WebAssembly.instantiate(c,b)}else{const c=await WebAssembly.instantiate(a,b);if(c instanceof WebAssembly.Instance){return {instance:c,module:a}}else{return c}}});const a={};let b;if(typeof document!==F&&document.currentScript!==G){b=new URL(document.currentScript.src,location.href).toString()};let c=H;const d=new I(128).fill(H);d.push(H,G,!0,!1);let f=d.length;const i=typeof TextDecoder!==F?new TextDecoder(J,{ignoreBOM:!0,fatal:!0}):{decode:()=>{throw K(`TextDecoder not available`)}};if(typeof TextDecoder!==F){i.decode()};let j=G;let o=L;const p=typeof TextEncoder!==F?new TextEncoder(J):{encode:()=>{throw K(`TextEncoder not available`)}};const q=typeof p.encodeInto===P?((a,b)=>p.encodeInto(a,b)):((a,b)=>{const c=p.encode(a);b.set(c);return {read:a.length,written:c.length}});let s=G;wasm_bindgen=Object.assign(E,{initSync:D},a)})()