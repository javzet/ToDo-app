(this["webpackJsonptodo-app"]=this["webpackJsonptodo-app"]||[]).push([[0],{15:function(e,t,c){},16:function(e,t,c){"use strict";c.r(t);var n=c(9),a=c.n(n),s=c(3),r=c(1),i=Object(r.createContext)({}),o=c(0),l=function(){return Object(o.jsx)("div",{className:"hamburger-icon",children:Object(o.jsxs)("div",{className:"hamburger-container",children:[Object(o.jsx)("div",{className:"line"}),Object(o.jsx)("div",{className:"line"}),Object(o.jsx)("div",{className:"line"})]})})},u=function(){return Object(o.jsx)("div",{className:"navbar",children:Object(o.jsxs)("div",{className:"container",children:[Object(o.jsx)(l,{}),Object(o.jsx)("h1",{children:"ToDo App"})]})})},j=c(5),d=c(18),b=c(7),v=c(2),f=function(){return Object(o.jsx)("svg",{"aria-hidden":"true",focusable:"false","data-prefix":"fas","data-icon":"undo-alt",className:"return-icon",role:"img",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 512 512",children:Object(o.jsx)("path",{fill:"currentColor",d:"M255.545 8c-66.269.119-126.438 26.233-170.86 68.685L48.971 40.971C33.851 25.851 8 36.559 8 57.941V192c0 13.255 10.745 24 24 24h134.059c21.382 0 32.09-25.851 16.971-40.971l-41.75-41.75c30.864-28.899 70.801-44.907 113.23-45.273 92.398-.798 170.283 73.977 169.484 169.442C423.236 348.009 349.816 424 256 424c-41.127 0-79.997-14.678-110.63-41.556-4.743-4.161-11.906-3.908-16.368.553L89.34 422.659c-4.872 4.872-4.631 12.815.482 17.433C133.798 479.813 192.074 504 256 504c136.966 0 247.999-111.033 248-247.998C504.001 119.193 392.354 7.755 255.545 8z"})})},O=function(){return Object(o.jsx)("svg",{"aria-hidden":"true",focusable:"false","data-prefix":"far","data-icon":"times-circle",className:"times-circle-icon",role:"img",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 512 512",children:Object(o.jsx)("path",{fill:"currentColor",d:"M256 8C119 8 8 119 8 256s111 248 248 248 248-111 248-248S393 8 256 8zm0 448c-110.5 0-200-89.5-200-200S145.5 56 256 56s200 89.5 200 200-89.5 200-200 200zm101.8-262.2L295.6 256l62.2 62.2c4.7 4.7 4.7 12.3 0 17l-22.6 22.6c-4.7 4.7-12.3 4.7-17 0L256 295.6l-62.2 62.2c-4.7 4.7-12.3 4.7-17 0l-22.6-22.6c-4.7-4.7-4.7-12.3 0-17l62.2-62.2-62.2-62.2c-4.7-4.7-4.7-12.3 0-17l22.6-22.6c4.7-4.7 12.3-4.7 17 0l62.2 62.2 62.2-62.2c4.7-4.7 12.3-4.7 17 0l22.6 22.6c4.7 4.7 4.7 12.3 0 17z"})})},h=function(e){var t=function(e){var t=Object(r.useState)(e),c=Object(s.a)(t,2),n=c[0],a=c[1],i=e;return Object(v.a)(Object(v.a)({},n),{},{state:n,onInputChange:function(e,t){a(Object(v.a)(Object(v.a)({},n),{},Object(b.a)({},t,e)))},onReset:function(){a(i)}})}({noteTitle:"",noteText:""}),c=t.noteTitle,n=t.noteText,a=t.onInputChange,l=t.onReset,u=Object(r.useContext)(i),h=function(e,t){if("save"===t){var a={title:c,data:n,type:e,id:Object(d.a)()};u.setGeneralData([].concat(Object(j.a)(u.generalData),[a])),function(e){var t=localStorage.getItem("dataStored");if(null===t){var c=[];c=[].concat(Object(j.a)(c),[e]),localStorage.setItem("dataStored",JSON.stringify(c))}else{var n=JSON.parse(t);n=[].concat(Object(j.a)(n),[e]),localStorage.setItem("dataStored",JSON.stringify(n))}}(a),u.setNewCreation({type:"",active:!1}),l()}else u.setNewCreation({type:"",active:!1})};return Object(o.jsxs)("div",{className:"create-form",children:[Object(o.jsx)("input",{type:"text",placeholder:"Escribe un t\xedtulo",value:c,onChange:function(e){var t=e.target.value;return a(t,"noteTitle")}}),Object(o.jsx)("textarea",{name:"",placeholder:"notes"===e.type?"Escribe una nota...":"Escribe una lista de tareas...",value:n,onChange:function(e){var t=e.target.value;return a(t,"noteText")}}),Object(o.jsxs)("div",{className:"tool-buttons",children:[Object(o.jsxs)("button",{className:"tool-button",onClick:function(){return h(e.type,"save")},children:[Object(o.jsx)(f,{}),Object(o.jsxs)("span",{children:["Guardar ","notes"===e.type?"nota":"lista"]})]}),Object(o.jsxs)("button",{className:"tool-button",onClick:function(){return h(e.type,"cancel")},children:[Object(o.jsx)(O,{}),Object(o.jsxs)("span",{children:["Descartar ","notes"===e.type?"nota":"lista"]})]})]})]})},x=function(){return Object(o.jsx)("svg",{"aria-hidden":"true",focusable:"false","data-prefix":"far","data-icon":"image",className:"images option-button",role:"img",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 512 512",children:Object(o.jsx)("path",{fill:"currentColor",d:"M464 64H48C21.49 64 0 85.49 0 112v288c0 26.51 21.49 48 48 48h416c26.51 0 48-21.49 48-48V112c0-26.51-21.49-48-48-48zm-6 336H54a6 6 0 0 1-6-6V118a6 6 0 0 1 6-6h404a6 6 0 0 1 6 6v276a6 6 0 0 1-6 6zM128 152c-22.091 0-40 17.909-40 40s17.909 40 40 40 40-17.909 40-40-17.909-40-40-40zM96 352h320v-80l-87.515-87.515c-4.686-4.686-12.284-4.686-16.971 0L192 304l-39.515-39.515c-4.686-4.686-12.284-4.686-16.971 0L96 304v48z"})})},m=function(){return Object(o.jsx)("svg",{"aria-hidden":"true",focusable:"false","data-prefix":"far","data-icon":"check-square",className:"check-square option-button",role:"img",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 448 512",children:Object(o.jsx)("path",{fill:"currentColor",d:"M400 32H48C21.49 32 0 53.49 0 80v352c0 26.51 21.49 48 48 48h352c26.51 0 48-21.49 48-48V80c0-26.51-21.49-48-48-48zm0 400H48V80h352v352zm-35.864-241.724L191.547 361.48c-4.705 4.667-12.303 4.637-16.97-.068l-90.781-91.516c-4.667-4.705-4.637-12.303.069-16.971l22.719-22.536c4.705-4.667 12.303-4.637 16.97.069l59.792 60.277 141.352-140.216c4.705-4.667 12.303-4.637 16.97.068l22.536 22.718c4.667 4.706 4.637 12.304-.068 16.971z"})})},g=function(){var e=Object(r.useContext)(i);return Object(o.jsxs)("div",{className:"create-note",children:[Object(o.jsx)("input",{type:"text",placeholder:"Crear una nota...",onClick:function(){e.setNewCreation({type:"notes",active:!0})}}),Object(o.jsxs)("div",{className:"option-buttons",children:[Object(o.jsx)("div",{className:"todo-button option-button",onClick:function(){e.setNewCreation({type:"todos",active:!0})},children:Object(o.jsx)(m,{})}),Object(o.jsx)("div",{className:"create-button option-button",children:Object(o.jsx)(x,{})})]})]})},p=function(){return Object(o.jsx)("svg",{"aria-hidden":"true",focusable:"false","data-prefix":"fas","data-icon":"sticky-note",className:"note-image",role:"img",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 448 512",children:Object(o.jsx)("path",{fill:"currentColor",d:"M312 320h136V56c0-13.3-10.7-24-24-24H24C10.7 32 0 42.7 0 56v400c0 13.3 10.7 24 24 24h264V344c0-13.2 10.8-24 24-24zm129 55l-98 98c-4.5 4.5-10.6 7-17 7h-6V352h128v6.1c0 6.3-2.5 12.4-7 16.9z"})})},w=function(){return Object(o.jsxs)(o.Fragment,{children:[Object(o.jsxs)("div",{className:"no-notes",children:[Object(o.jsx)(p,{}),Object(o.jsx)("p",{children:"A\xfan no hay notas creadas"})]}),Object(o.jsx)(g,{})]})},C=function(e){var t=e.title,c=e.data,n=e.id;e.type;return Object(o.jsxs)("div",{className:"data-grid-item","data-data":n,children:[Object(o.jsx)("span",{children:t}),Object(o.jsx)("p",{children:c})]})};function N(e,t,c,n){e.forEach((function(e){e===t?null===c||void 0===c||c.classList.add(e):null===c||void 0===c||c.classList.remove(e)})),n&&n()}function y(e){return{switchActiveClassBetweenElements:function(t,c,n){e.forEach((function(e){(null===e||void 0===e?void 0:e.id)===t?e.classList.add(c):null===e||void 0===e||e.classList.remove(c)})),n&&n()}}}var z=function(){return Object(o.jsx)("svg",{"aria-hidden":"true",focusable:"false","data-prefix":"fas","data-icon":"bars",className:"bars-icon",role:"img",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 448 512",children:Object(o.jsx)("path",{fill:"currentColor",d:"M16 132h416c8.837 0 16-7.163 16-16V76c0-8.837-7.163-16-16-16H16C7.163 60 0 67.163 0 76v40c0 8.837 7.163 16 16 16zm0 160h416c8.837 0 16-7.163 16-16v-40c0-8.837-7.163-16-16-16H16c-8.837 0-16 7.163-16 16v40c0 8.837 7.163 16 16 16zm0 160h416c8.837 0 16-7.163 16-16v-40c0-8.837-7.163-16-16-16H16c-8.837 0-16 7.163-16 16v40c0 8.837 7.163 16 16 16z"})})},S=function(){return Object(o.jsx)("svg",{"aria-hidden":"true",focusable:"false","data-prefix":"fas","data-icon":"columns",className:"column-icon",role:"img",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 512 512",children:Object(o.jsx)("path",{fill:"currentColor",d:"M464 32H48C21.49 32 0 53.49 0 80v352c0 26.51 21.49 48 48 48h416c26.51 0 48-21.49 48-48V80c0-26.51-21.49-48-48-48zM224 416H64V160h160v256zm224 0H288V160h160v256z"})})},V=function(){return Object(o.jsx)("svg",{"aria-hidden":"true",focusable:"false","data-prefix":"fas","data-icon":"border-all",className:"grid-icon",role:"img",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 448 512",children:Object(o.jsx)("path",{fill:"currentColor",d:"M416 32H32A32 32 0 0 0 0 64v384a32 32 0 0 0 32 32h384a32 32 0 0 0 32-32V64a32 32 0 0 0-32-32zm-32 64v128H256V96zm-192 0v128H64V96zM64 416V288h128v128zm192 0V288h128v128z"})})},H=function(e){var t=e.gridRef,c=Object(r.useRef)(null),n=Object(r.useRef)(null),a=Object(r.useRef)(null),i=Object(r.useState)([]),l=Object(s.a)(i,2),u=l[0],j=l[1];Object(r.useEffect)((function(){j([c.current,n.current,a.current])}),[]);var d=y(u).switchActiveClassBetweenElements,b=(y([t.current]).switchActiveClassBetweenElements,function(e){"bars"===e?(d("bars","active-style"),N(["bars","grid","column"],"bars",t.current)):"grid"===e?(d("grid","active-style"),N(["bars","grid","column"],"grid",t.current)):(d("column","active-style"),N(["bars","grid","column"],"column",t.current))});return Object(r.useLayoutEffect)((function(){var e,n;null===(e=c.current)||void 0===e||e.classList.add("active-style"),null===(n=t.current)||void 0===n||n.classList.add("grid")}),[]),Object(o.jsxs)("div",{className:"view-style-buttons",children:[Object(o.jsx)("button",{id:"bars",ref:a,onClick:function(){return b("bars")},children:Object(o.jsx)(z,{})}),Object(o.jsx)("button",{id:"grid",ref:c,onClick:function(){return b("grid")},children:Object(o.jsx)(V,{})}),Object(o.jsx)("button",{id:"column",ref:n,onClick:function(){return b("column")},children:Object(o.jsx)(S,{})})]})},L=function(e){var t=e.data,c=Object(r.useRef)(null);return Object(o.jsx)(o.Fragment,{children:t.length>0?Object(o.jsxs)(o.Fragment,{children:[Object(o.jsx)(g,{}),Object(o.jsx)(H,{gridRef:c}),Object(o.jsx)("div",{className:"data-grid",id:"data-grid",ref:c,children:t.map((function(e){return Object(r.createElement)(C,Object(v.a)(Object(v.a)({},e),{},{key:e.id}))}))})]}):Object(o.jsx)(w,{})})};function k(){var e=Object(r.useState)([]),t=Object(s.a)(e,2),c=t[0],n=t[1],a=Object(r.useState)({type:"",active:!1}),l=Object(s.a)(a,2),j=l[0],d=l[1];return Object(r.useEffect)((function(){n(function(){var e=localStorage.getItem("dataStored");return null!==e?JSON.parse(e):[]}())}),[]),Object(o.jsx)(i.Provider,{value:{generalData:c,setGeneralData:n,newCreation:j,setNewCreation:d},children:Object(o.jsxs)("div",{children:[Object(o.jsx)(u,{}),Object(o.jsxs)("div",{className:"content",children:[!j.active&&Object(o.jsx)(L,{data:c}),"notes"===j.type&&Object(o.jsx)(h,{type:"notes"}),"todos"===j.type&&Object(o.jsx)(h,{type:"todos"})]})]})})}c(15);a.a.render(Object(o.jsx)(k,{}),document.getElementById("root"))}},[[16,1,2]]]);
//# sourceMappingURL=main.027b497c.chunk.js.map