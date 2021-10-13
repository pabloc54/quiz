var e=Object.defineProperty,r=Object.getOwnPropertySymbols,t=Object.prototype.hasOwnProperty,a=Object.prototype.propertyIsEnumerable,s=(r,t,a)=>t in r?e(r,t,{enumerable:!0,configurable:!0,writable:!0,value:a}):r[t]=a,n=(e,n)=>{for(var c in n||(n={}))t.call(n,c)&&s(e,c,n[c]);if(r)for(var c of r(n))a.call(n,c)&&s(e,c,n[c]);return e};import{c,u as o,a as i,j as l,b as d,r as u,d as h,e as m,R as g,f as p,P as _}from"./vendor.00f40b09.js";var b="_base_1sgcn_1";var C={base:"_base_1hwif_1",categories:"_categories_1hwif_20",selectedCategories:"_selectedCategories_1hwif_48",play:"_play_1hwif_64",forbidden:"_forbidden_1hwif_84"};function v(e,r){return r.map((r=>r?e[r]:"")).join(" ")}const f=c({name:"app",initialState:{mode:"initial",selectedCategories:[],questions:5},reducers:{addCategory:(e,r)=>{e.selectedCategories.push(r.payload)},removeCategory:(e,r)=>{const t=e.selectedCategories.indexOf(r.payload);e.selectedCategories.splice(t,1)},setQuestions:(e,r)=>{e.questions=r.payload},startGame:e=>{e.mode="game"},endGame:e=>{e.mode="score"},restart:e=>{e.mode="initial"}}}),{addCategory:w,removeCategory:y,setQuestions:N,startGame:q,endGame:z,restart:S}=f.actions;var k=f.reducer;const A=["Food and Drink","Geography","General knowledge","History","Art and Literature","Movies","Music","Science","Society and Culture","Sport and Leisure"];function j(){const{selectedCategories:e,questions:r}=o((({app:e})=>e)),t=i(),a=e=>{t(y(e.target.value))},s=v(C,["play",(0===e.length||r<5||r>20)&&"forbidden"]);return l("form",{onSubmit:r=>{r.preventDefault(),e.length&&t(q())},children:d("div",{className:C.base,children:[d("div",{children:[l("h2",{children:"Welcome to Quiz Game"}),l("p",{children:"Please select one or more categories"}),d("div",{className:C.categories,children:[l("label",{htmlFor:"categories",children:"Categories"}),l("select",{name:"categories",defaultValue:"",onClick:e=>{t(w(e.target.value)),e.target.value=""},children:A.filter((r=>!e.includes(r))).map((e=>l("option",{children:e},e)))}),l("label",{htmlFor:"number",children:"Questions"}),l("input",{type:"number",name:"number",value:r,onChange:e=>{t(N(e.target.value))},min:5,max:20})]})]}),d("div",{children:[l("h3",{children:"Categories selected"}),e.length>0?l("div",{className:C.selectedCategories,children:e.map((e=>d("button",{value:e,onClick:a,children:[e," ✕"]},e)))}):l("small",{children:"None selected"})]}),l("div",{className:s,children:l("button",{type:"submit",children:"Play"})})]})})}var x={};var G={base:"_base_1z0zg_1",appear:"_appear_1z0zg_1",question:"_question_1z0zg_21",answers:"_answers_1z0zg_27",done:"_done_1z0zg_35",disappear:"_disappear_1z0zg_1"};var O={base:"_base_19ewo_1",correct:"_correct_19ewo_19",wrong:"_wrong_19ewo_23"};function P({label:e,correct:r,done:t,onClick:a}){const s=v(O,["base",t&&(r?"correct":"wrong")]);return l("button",{className:s,onClick:a,children:e})}const M=c({name:"game",initialState:{cards:[],currentCard:{},lastCard:!1,results:[]},reducers:{setCards:(e,r)=>{e.cards=r.payload,e.currentCard=e.cards[0],e.lastCard=!1,e.results=[]},answerCard:(e,r)=>{const t={card:e.currentCard,correct:r.payload===e.currentCard.correctAnswer};if(e.results.push(t),e.lastCard)return;const a=e.currentCard.index,s=e.cards[a+1];e.currentCard=s,a===e.cards.length-2&&(e.lastCard=!0)}}}),{setCards:Q,answerCard:F}=M.actions;var L=M.reducer;function D({question:e,answers:r=[],correctAnswer:t,category:a="test"}){const[s,n]=u.exports.useState(!1),{lastCard:c}=o((({game:e})=>e)),h=v(G,["base",s&&"done"]),m=i();return d("div",{className:h,children:[l("small",{children:a}),l("div",{className:G.question,children:l("h3",{children:e})}),l("div",{className:G.answers,children:r.map(((e,r)=>l(P,{label:e,correct:t===e,done:s,onClick:()=>(e=>{n(!0),setTimeout((()=>{m(F(e)),n(!1),c&&m(z())}),1e3)})(e)},r)))})]})}function E(){const[e,r]=u.exports.useState(!1),{app:{selectedCategories:t,questions:a},game:{currentCard:s}}=o((e=>e)),n=i();return u.exports.useEffect((()=>{const e=`https://api.trivia.willfry.co.uk/questions?categories=${t.join(",").replaceAll(" ","_").toLowerCase()}&limit=${a}`;h.get(e).then((({data:e})=>{console.log(e);const t=e.map((({question:e,correctAnswer:r,incorrectAnswers:t,category:a},s)=>{t.length>3&&t.splice(3);const n=[r,...t];return function(e){for(let r=e.length-1;r>0;r--){const t=Math.floor(Math.random()*(r+1)),a=e[r];e[r]=e[t],e[t]=a}}(n),{index:s,question:e,answers:n,correctAnswer:r,category:a}}));n(Q(t)),r(!0)})).catch(console.log)}),[]),{ready:e,currentCard:s}}function $(){const{ready:e,currentCard:r}=E();return l("div",{className:x.base,children:e&&l(D,n({},r))})}var H={base:"_base_g0s5r_1",restart:"_restart_g0s5r_24"};function I(){const e=i(),{app:{questions:r},game:{results:t}}=o((e=>e)),a=t.filter((({correct:e})=>e)).length;return d("div",{className:H.base,children:[l("h1",{children:5*a}),d("h3",{children:["Correct answers: ",a,"/",r]}),l("div",{className:H.results,children:t.map((({correct:e,card:r},t)=>l(R,n({correct:e},r),t)))}),l("div",{className:H.restart,children:l("button",{onClick:()=>{e(S())},children:"restart"})})]})}function R({question:e,correctAnswer:r,correct:t}){const a=v(H,["result",t&&"correct"]);return d("div",{className:a,children:[d("div",{children:[l("b",{children:"Question:"})," ",e]}),d("div",{children:[l("b",{children:"Answer:"})," ",r]})]})}function T(){const{mode:e}=o((({app:e})=>e));return l("div",{className:b,children:{initial:l(j,{}),game:l($,{}),score:l(I,{})}[e]})}const V=m({reducer:{app:k,game:L}});g.render(l(p.StrictMode,{children:l(_,{store:V,children:l(T,{})})}),document.querySelector("main"));