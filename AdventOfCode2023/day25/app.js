let S=0,V=`string`,O=1,W=`Object`,Q=`utf-8`,N=null,P=`undefined`,X=4,U=`function`,L=128,K=Array,R=Error,Y=Object,T=Uint8Array,M=undefined;var E=(async(a,b)=>{if(typeof Response===U&&a instanceof Response){if(typeof WebAssembly.instantiateStreaming===U){try{return await WebAssembly.instantiateStreaming(a,b)}catch(b){if(a.headers.get(`Content-Type`)!=`application/wasm`){console.warn(`\`WebAssembly.instantiateStreaming\` failed because your server does not serve wasm with \`application/wasm\` MIME type. Falling back to \`WebAssembly.instantiate\` which is slower. Original error:\\n`,b)}else{throw b}}};const c=await a.arrayBuffer();return await WebAssembly.instantiate(c,b)}else{const c=await WebAssembly.instantiate(a,b);if(c instanceof WebAssembly.Instance){return {instance:c,module:a}}else{return c}}});var s=(a=>{const b=typeof a;if(b==`number`||b==`boolean`||a==N){return `${a}`};if(b==V){return `"${a}"`};if(b==`symbol`){const b=a.description;if(b==N){return `Symbol`}else{return `Symbol(${b})`}};if(b==U){const b=a.name;if(typeof b==V&&b.length>S){return `Function(${b})`}else{return `Function`}};if(K.isArray(a)){const b=a.length;let c=`[`;if(b>S){c+=s(a[S])};for(let d=O;d<b;d++){c+=`, `+ s(a[d])};c+=`]`;return c};const c=/\[object ([^\]]+)\]/.exec(toString.call(a));let d;if(c.length>O){d=c[O]}else{return toString.call(a)};if(d==W){try{return `Object(`+ JSON.stringify(a)+ `)`}catch(a){return W}};if(a instanceof R){return `${a.name}: ${a.message}\n${a.stack}`};return d});var G=((a,b)=>{});var C=((a,b)=>{a=a>>>S;const c=B();const d=c.subarray(a/X,a/X+ b);const e=[];for(let a=S;a<d.length;a++){e.push(f(d[a]))};return e});var z=((b,c,d)=>{a._dyn_core__ops__function__FnMut__A____Output___R_as_wasm_bindgen__closure__WasmClosure___describe__invoke__h996b9c93967e3da6(b,c,g(d))});var x=((c,d,e)=>{try{a.wasm_bindgen__convert__closures__invoke1_ref__hd9a5d763d8b640b0(c,d,w(e))}finally{b[v++]=M}});var u=((b,c,d)=>{a.wasm_bindgen__convert__closures__invoke1__h95f77d8d3c21b815(b,c,g(d))});var g=(a=>{if(d===b.length)b.push(b.length+ O);const c=d;d=b[c];b[c]=a;return c});var f=(a=>{const b=c(a);e(a);return b});function D(b,c){try{return b.apply(this,c)}catch(b){a.__wbindgen_exn_store(g(b))}}var J=(async(b)=>{if(a!==M)return a;if(typeof b===P){b=new URL(`app_bg.wasm`,import.meta.url)};const c=F();if(typeof b===V||typeof Request===U&&b instanceof Request||typeof URL===U&&b instanceof URL){b=fetch(b)};G(c);const {instance:d,module:e}=await E(await b,c);return H(d,e)});var r=(()=>{if(q===N||q.byteLength===S){q=new Int32Array(a.memory.buffer)};return q});var p=(a=>a===M||a===N);var c=(a=>b[a]);var I=(b=>{if(a!==M)return a;const c=F();G(c);if(!(b instanceof WebAssembly.Module)){b=new WebAssembly.Module(b)};const d=new WebAssembly.Instance(b,c);return H(d,b)});var H=((b,c)=>{a=b.exports;J.__wbindgen_wasm_module=c;q=N;A=N;i=N;a.__wbindgen_start();return a});var F=(()=>{const b={};b.wbg={};b.wbg.__wbindgen_object_drop_ref=(a=>{f(a)});b.wbg.__wbindgen_object_clone_ref=(a=>{const b=c(a);return g(b)});b.wbg.__wbindgen_string_new=((a,b)=>{const c=k(a,b);return g(c)});b.wbg.__wbg_cachekey_b81c1aacc6a0645c=((a,b)=>{const d=c(b).__yew_subtree_cache_key;r()[a/X+ O]=p(d)?S:d;r()[a/X+ S]=!p(d)});b.wbg.__wbg_subtreeid_e80a1798fee782f9=((a,b)=>{const d=c(b).__yew_subtree_id;r()[a/X+ O]=p(d)?S:d;r()[a/X+ S]=!p(d)});b.wbg.__wbg_setsubtreeid_e1fab6b578c800cf=((a,b)=>{c(a).__yew_subtree_id=b>>>S});b.wbg.__wbg_setcachekey_75bcd45312087529=((a,b)=>{c(a).__yew_subtree_cache_key=b>>>S});b.wbg.__wbg_listenerid_6dcf1c62b7b7de58=((a,b)=>{const d=c(b).__yew_listener_id;r()[a/X+ O]=p(d)?S:d;r()[a/X+ S]=!p(d)});b.wbg.__wbg_setlistenerid_f2e783343fa0cec1=((a,b)=>{c(a).__yew_listener_id=b>>>S});b.wbg.__wbindgen_cb_drop=(a=>{const b=f(a).original;if(b.cnt--==O){b.a=S;return !0};const c=!1;return c});b.wbg.__wbg_new_abda76e883ba8a5f=(()=>{const a=new R();return g(a)});b.wbg.__wbg_stack_658279fe44541cf6=((b,d)=>{const e=c(d).stack;const f=o(e,a.__wbindgen_malloc,a.__wbindgen_realloc);const g=l;r()[b/X+ O]=g;r()[b/X+ S]=f});b.wbg.__wbg_error_f851667af71bcfc6=((b,c)=>{let d;let e;try{d=b;e=c;console.error(k(b,c))}finally{a.__wbindgen_free(d,e,O)}});b.wbg.__wbg_queueMicrotask_4d890031a6a5a50c=(a=>{queueMicrotask(c(a))});b.wbg.__wbg_queueMicrotask_adae4bc085237231=(a=>{const b=c(a).queueMicrotask;return g(b)});b.wbg.__wbindgen_is_function=(a=>{const b=typeof c(a)===U;return b});b.wbg.__wbg_error_a526fb08a0205972=((b,c)=>{var d=C(b,c).slice();a.__wbindgen_free(b,c*X,X);console.error(...d)});b.wbg.__wbg_log_7c3433e130418e14=((b,c)=>{var d=C(b,c).slice();a.__wbindgen_free(b,c*X,X);console.log(...d)});b.wbg.__wbg_instanceof_Window_3e5cd1f48c152d01=(a=>{let b;try{b=c(a) instanceof Window}catch(a){b=!1}const d=b;return d});b.wbg.__wbg_document_d609202d16c38224=(a=>{const b=c(a).document;return p(b)?S:g(b)});b.wbg.__wbg_location_176c34e89c2c9d80=(a=>{const b=c(a).location;return g(b)});b.wbg.__wbg_body_64abc9aba1891e91=(a=>{const b=c(a).body;return p(b)?S:g(b)});b.wbg.__wbg_createElement_fdd5c113cb84539e=function(){return D(((a,b,d)=>{const e=c(a).createElement(k(b,d));return g(e)}),arguments)};b.wbg.__wbg_createElementNS_524b05a6070757b6=function(){return D(((a,b,d,e,f)=>{const h=c(a).createElementNS(b===S?M:k(b,d),k(e,f));return g(h)}),arguments)};b.wbg.__wbg_createTextNode_7ff0c034b2855f66=((a,b,d)=>{const e=c(a).createTextNode(k(b,d));return g(e)});b.wbg.__wbg_instanceof_Element_3f326a19cc457941=(a=>{let b;try{b=c(a) instanceof Element}catch(a){b=!1}const d=b;return d});b.wbg.__wbg_namespaceURI_7cc7ef157e398356=((b,d)=>{const e=c(d).namespaceURI;var f=p(e)?S:o(e,a.__wbindgen_malloc,a.__wbindgen_realloc);var g=l;r()[b/X+ O]=g;r()[b/X+ S]=f});b.wbg.__wbg_setinnerHTML_ce0d6527ce4086f2=((a,b,d)=>{c(a).innerHTML=k(b,d)});b.wbg.__wbg_outerHTML_b5a8d952b5615778=((b,d)=>{const e=c(d).outerHTML;const f=o(e,a.__wbindgen_malloc,a.__wbindgen_realloc);const g=l;r()[b/X+ O]=g;r()[b/X+ S]=f});b.wbg.__wbg_removeAttribute_2e200daefb9f3ed4=function(){return D(((a,b,d)=>{c(a).removeAttribute(k(b,d))}),arguments)};b.wbg.__wbg_setAttribute_e7b72a5e7cfcb5a3=function(){return D(((a,b,d,e,f)=>{c(a).setAttribute(k(b,d),k(e,f))}),arguments)};b.wbg.__wbg_newwithbase_f4989aa5bbd5cc29=function(){return D(((a,b,c,d)=>{const e=new URL(k(a,b),k(c,d));return g(e)}),arguments)};b.wbg.__wbg_createObjectURL_9fbd9480174d7f02=function(){return D(((b,d)=>{const e=URL.createObjectURL(c(d));const f=o(e,a.__wbindgen_malloc,a.__wbindgen_realloc);const g=l;r()[b/X+ O]=g;r()[b/X+ S]=f}),arguments)};b.wbg.__wbindgen_string_get=((b,d)=>{const e=c(d);const f=typeof e===V?e:M;var g=p(f)?S:o(f,a.__wbindgen_malloc,a.__wbindgen_realloc);var h=l;r()[b/X+ O]=h;r()[b/X+ S]=g});b.wbg.__wbg_bubbles_f1cdd0584446cad0=(a=>{const b=c(a).bubbles;return b});b.wbg.__wbg_cancelBubble_976cfdf7ac449a6c=(a=>{const b=c(a).cancelBubble;return b});b.wbg.__wbg_composedPath_12a068e57a98cf90=(a=>{const b=c(a).composedPath();return g(b)});b.wbg.__wbg_href_160af2ae1328d7b7=function(){return D(((b,d)=>{const e=c(d).href;const f=o(e,a.__wbindgen_malloc,a.__wbindgen_realloc);const g=l;r()[b/X+ O]=g;r()[b/X+ S]=f}),arguments)};b.wbg.__wbg_parentNode_92a7017b3a4fad43=(a=>{const b=c(a).parentNode;return p(b)?S:g(b)});b.wbg.__wbg_parentElement_72e144c2e8d9e0b5=(a=>{const b=c(a).parentElement;return p(b)?S:g(b)});b.wbg.__wbg_childNodes_a5762b4b3e073cf6=(a=>{const b=c(a).childNodes;return g(b)});b.wbg.__wbg_lastChild_a62e3fbaab87f734=(a=>{const b=c(a).lastChild;return p(b)?S:g(b)});b.wbg.__wbg_nextSibling_bafccd3347d24543=(a=>{const b=c(a).nextSibling;return p(b)?S:g(b)});b.wbg.__wbg_setnodeValue_630c6470d05b600e=((a,b,d)=>{c(a).nodeValue=b===S?M:k(b,d)});b.wbg.__wbg_textContent_2f37235e13f8484b=((b,d)=>{const e=c(d).textContent;var f=p(e)?S:o(e,a.__wbindgen_malloc,a.__wbindgen_realloc);var g=l;r()[b/X+ O]=g;r()[b/X+ S]=f});b.wbg.__wbg_cloneNode_405d5ea3f7e0098a=function(){return D((a=>{const b=c(a).cloneNode();return g(b)}),arguments)};b.wbg.__wbg_insertBefore_726c1640c419e940=function(){return D(((a,b,d)=>{const e=c(a).insertBefore(c(b),c(d));return g(e)}),arguments)};b.wbg.__wbg_removeChild_942eb9c02243d84d=function(){return D(((a,b)=>{const d=c(a).removeChild(c(b));return g(d)}),arguments)};b.wbg.__wbg_instanceof_ShadowRoot_0bd39e89ab117f86=(a=>{let b;try{b=c(a) instanceof ShadowRoot}catch(a){b=!1}const d=b;return d});b.wbg.__wbg_host_09eee5e3d9cf59a1=(a=>{const b=c(a).host;return g(b)});b.wbg.__wbg_data_ba3ea616b5392abf=(a=>{const b=c(a).data;return g(b)});b.wbg.__wbg_setonmessage_9961dd0a8670d682=((a,b)=>{c(a).onmessage=c(b)});b.wbg.__wbg_new_ff19bad2f50bf62b=function(){return D(((a,b)=>{const c=new Worker(k(a,b));return g(c)}),arguments)};b.wbg.__wbg_postMessage_f071c51d77b68152=function(){return D(((a,b)=>{c(a).postMessage(c(b))}),arguments)};b.wbg.__wbg_addEventListener_374cbfd2bbc19ccf=function(){return D(((a,b,d,e,f)=>{c(a).addEventListener(k(b,d),c(e),c(f))}),arguments)};b.wbg.__wbg_value_57e57170f6952449=((b,d)=>{const e=c(d).value;const f=o(e,a.__wbindgen_malloc,a.__wbindgen_realloc);const g=l;r()[b/X+ O]=g;r()[b/X+ S]=f});b.wbg.__wbg_setvalue_a11f3069fd7a1805=((a,b,d)=>{c(a).value=k(b,d)});b.wbg.__wbg_setchecked_c1d5c3726082e274=((a,b)=>{c(a).checked=b!==S});b.wbg.__wbg_value_e024243a9dae20bc=((b,d)=>{const e=c(d).value;const f=o(e,a.__wbindgen_malloc,a.__wbindgen_realloc);const g=l;r()[b/X+ O]=g;r()[b/X+ S]=f});b.wbg.__wbg_setvalue_5b3442ff620b4a5d=((a,b,d)=>{c(a).value=k(b,d)});b.wbg.__wbg_newwithstrsequenceandoptions_4806b667a908f161=function(){return D(((a,b)=>{const d=new Blob(c(a),c(b));return g(d)}),arguments)};b.wbg.__wbg_get_f01601b5a68d10e3=((a,b)=>{const d=c(a)[b>>>S];return g(d)});b.wbg.__wbg_length_1009b1af0c481d7b=(a=>{const b=c(a).length;return b});b.wbg.__wbg_new_ffc6d4d085022169=(()=>{const a=new K();return g(a)});b.wbg.__wbg_newnoargs_c62ea9419c21fbac=((a,b)=>{const c=new Function(k(a,b));return g(c)});b.wbg.__wbg_call_90c26b09837aba1c=function(){return D(((a,b)=>{const d=c(a).call(c(b));return g(d)}),arguments)};b.wbg.__wbg_new_9fb8d994e1c0aaac=(()=>{const a=new Y();return g(a)});b.wbg.__wbg_self_f0e34d89f33b99fd=function(){return D((()=>{const a=self.self;return g(a)}),arguments)};b.wbg.__wbg_window_d3b084224f4774d7=function(){return D((()=>{const a=window.window;return g(a)}),arguments)};b.wbg.__wbg_globalThis_9caa27ff917c6860=function(){return D((()=>{const a=globalThis.globalThis;return g(a)}),arguments)};b.wbg.__wbg_global_35dfdd59a4da3e74=function(){return D((()=>{const a=global.global;return g(a)}),arguments)};b.wbg.__wbindgen_is_undefined=(a=>{const b=c(a)===M;return b});b.wbg.__wbg_from_71add2e723d1f1b2=(a=>{const b=K.from(c(a));return g(b)});b.wbg.__wbg_push_901f3914205d44de=((a,b)=>{const d=c(a).push(c(b));return d});b.wbg.__wbg_is_ff7acd231c75c0e4=((a,b)=>{const d=Y.is(c(a),c(b));return d});b.wbg.__wbg_toString_6577cc00288ad588=(a=>{const b=c(a).toString();return g(b)});b.wbg.__wbg_replace_0236079f661987ca=((a,b,d,e,f)=>{const h=c(a).replace(k(b,d),k(e,f));return g(h)});b.wbg.__wbg_resolve_6e1c6553a82f85b7=(a=>{const b=Promise.resolve(c(a));return g(b)});b.wbg.__wbg_then_3ab08cd4fbb91ae9=((a,b)=>{const d=c(a).then(c(b));return g(d)});b.wbg.__wbg_buffer_a448f833075b71ba=(a=>{const b=c(a).buffer;return g(b)});b.wbg.__wbg_newwithbyteoffsetandlength_d0482f893617af71=((a,b,d)=>{const e=new T(c(a),b>>>S,d>>>S);return g(e)});b.wbg.__wbg_new_8f67e318f15d7254=(a=>{const b=new T(c(a));return g(b)});b.wbg.__wbg_set_2357bf09366ee480=((a,b,d)=>{c(a).set(c(b),d>>>S)});b.wbg.__wbg_length_1d25fa9e4ac21ce7=(a=>{const b=c(a).length;return b});b.wbg.__wbg_set_759f75cd92b612d2=function(){return D(((a,b,d)=>{const e=Reflect.set(c(a),c(b),c(d));return e}),arguments)};b.wbg.__wbindgen_debug_string=((b,d)=>{const e=s(c(d));const f=o(e,a.__wbindgen_malloc,a.__wbindgen_realloc);const g=l;r()[b/X+ O]=g;r()[b/X+ S]=f});b.wbg.__wbindgen_throw=((a,b)=>{throw new R(k(a,b))});b.wbg.__wbindgen_memory=(()=>{const b=a.memory;return g(b)});b.wbg.__wbindgen_closure_wrapper183=((a,b,c)=>{const d=t(a,b,60,u);return g(d)});b.wbg.__wbindgen_closure_wrapper453=((a,b,c)=>{const d=t(a,b,155,x);return g(d)});b.wbg.__wbindgen_closure_wrapper588=((a,b,c)=>{const d=y(a,b,206,z);return g(d)});return b});var B=(()=>{if(A===N||A.byteLength===S){A=new Uint32Array(a.memory.buffer)};return A});var t=((b,c,d,e)=>{const f={a:b,b:c,cnt:O,dtor:d};const g=(...b)=>{f.cnt++;try{return e(f.a,f.b,...b)}finally{if(--f.cnt===S){a.__wbindgen_export_2.get(f.dtor)(f.a,f.b);f.a=S}}};g.original=f;return g});var e=(a=>{if(a<132)return;b[a]=d;d=a});var y=((b,c,d,e)=>{const f={a:b,b:c,cnt:O,dtor:d};const g=(...b)=>{f.cnt++;const c=f.a;f.a=S;try{return e(c,f.b,...b)}finally{if(--f.cnt===S){a.__wbindgen_export_2.get(f.dtor)(c,f.b)}else{f.a=c}}};g.original=f;return g});var o=((a,b,c)=>{if(c===M){const c=m.encode(a);const d=b(c.length,O)>>>S;j().subarray(d,d+ c.length).set(c);l=c.length;return d};let d=a.length;let e=b(d,O)>>>S;const f=j();let g=S;for(;g<d;g++){const b=a.charCodeAt(g);if(b>127)break;f[e+ g]=b};if(g!==d){if(g!==S){a=a.slice(g)};e=c(e,d,d=g+ a.length*3,O)>>>S;const b=j().subarray(e+ g,e+ d);const f=n(a,b);g+=f.written};l=g;return e});var j=(()=>{if(i===N||i.byteLength===S){i=new T(a.memory.buffer)};return i});var k=((a,b)=>{a=a>>>S;return h.decode(j().subarray(a,a+ b))});var w=(a=>{if(v==O)throw new R(`out of js stack`);b[--v]=a;return v});let a;const b=new K(L).fill(M);b.push(M,N,!0,!1);let d=b.length;const h=typeof TextDecoder!==P?new TextDecoder(Q,{ignoreBOM:!0,fatal:!0}):{decode:()=>{throw R(`TextDecoder not available`)}};if(typeof TextDecoder!==P){h.decode()};let i=N;let l=S;const m=typeof TextEncoder!==P?new TextEncoder(Q):{encode:()=>{throw R(`TextEncoder not available`)}};const n=typeof m.encodeInto===U?((a,b)=>m.encodeInto(a,b)):((a,b)=>{const c=m.encode(a);b.set(c);return {read:a.length,written:c.length}});let q=N;let v=L;let A=N;export default J;export{I as initSync}