(this["webpackJsonptip-calculator-app"]=this["webpackJsonptip-calculator-app"]||[]).push([[0],[,,function(t,e,n){t.exports={container:"Total_container__yuQLJ",sections:"Total_sections__2bH3Y",section:"Total_section__3wQqj",button:"Total_button__3dvyM",buttonActive:"Total_buttonActive__2lx7G"}},,function(t,e,n){t.exports={container:"Layout_container__1nNA4",logo:"Layout_logo__3WbSF",card:"Layout_card__3M4t8"}},function(t,e,n){t.exports={container:"SelectTip_container__30iMC",tipsContainer:"SelectTip_tipsContainer__3Vrxo",input:"SelectTip_input__3BfHn"}},,function(t,e,n){t.exports={buttonActive:"Tip_buttonActive__33h0f",button:"Tip_button__3P-3P"}},,function(t,e,n){t.exports={button:"Button_button__6-R6B"}},function(t,e,n){t.exports={container:"Input_container__3I1CM"}},function(t,e,n){t.exports={form:"Calculator_form__33tGC"}},,,,,function(t,e,n){},,function(t,e,n){"use strict";n.r(e);var c=n(1),a=n.n(c),i=n(8),o=n.n(i),s=(n(16),n(3)),r=n(4),l=n.n(r),u=n(0);var j=function(t){return Object(u.jsxs)("div",{className:l.a.container,children:[Object(u.jsx)("div",{className:l.a.logo,children:Object(u.jsx)("img",{src:"./images/logo.svg",alt:"logo"})}),Object(u.jsx)("div",{className:l.a.card,children:t.children})]})},d=n(7),b=n.n(d),p=n(9),v=n.n(p);var O=function(t){return Object(u.jsx)("button",{className:"".concat(v.a.button," ").concat(t.className),onClick:t.onClick,children:t.children})};var h=function(t){var e=t.value,n=t.isActive;return Object(u.jsxs)(O,{className:"".concat(b.a.button," ").concat(n&&b.a.buttonActive),onClick:function(n){n.preventDefault(),t.onAddTip(e)},children:[e,"%"]})},x=n(10),m=n.n(x);var _=function(t){var e=t.imgPath,n=t.imgAlt,c=t.type,a=t.placeholder,i=t.value;return Object(u.jsxs)("div",{className:m.a.container,children:[e&&Object(u.jsx)("img",{src:e,alt:n}),Object(u.jsx)("input",{className:t.className,type:c,placeholder:a,onChange:t.onChange,value:i})]})},f=n(5),g=n.n(f),A=[{value:5},{value:10},{value:15},{value:25},{value:50}];var N=function(t){var e=t.tipInput,n=t.tip,c=function(e){t.onAddTipButton(e)};return Object(u.jsxs)("div",{className:g.a.container,children:[Object(u.jsx)("h3",{children:"Select Tip %"}),Object(u.jsxs)("div",{className:g.a.tipsContainer,children:[A.map((function(t,e){return Object(u.jsx)(h,{value:t.value,onAddTip:c,isActive:t.value===n},e)})),Object(u.jsx)(_,{className:g.a.input,type:"number",placeholder:"Custom",onChange:function(e){t.onAddTipInput(e.target.value)},value:e})]})]})},T=n(11),C=n.n(T);var y=function(t){var e=t.bill;return Object(u.jsxs)("div",{children:[Object(u.jsx)("h3",{children:"Bill"}),Object(u.jsx)(_,{imgPath:"./images/icon-dollar.svg",imgAlt:"dollar icon",placeholder:"0",type:"number",onChange:function(e){t.onAddBill(e.target.value)},value:e})]})};var S=function(t){var e=t.numberOfPeople;return Object(u.jsxs)("div",{children:[Object(u.jsx)("h3",{children:"Number of People"}),Object(u.jsx)(_,{imgPath:"./images/icon-person.svg",imgAlt:"person icon",placeholder:"0",type:"number",onChange:function(e){t.onAddNumberOfPeople(e.target.value)},value:e})]})},P=n(2),B=n.n(P);var I=function(t){var e=t.result,n=e.tipAmount,c=e.total;return Object(u.jsxs)("div",{className:B.a.container,children:[Object(u.jsxs)("div",{className:B.a.sections,children:[Object(u.jsxs)("div",{className:B.a.section,children:[Object(u.jsx)("div",{children:Object(u.jsxs)("h3",{children:["Tip Amount ",Object(u.jsx)("span",{children:"/ person"})]})}),n?Object(u.jsx)("p",{children:n.toFixed(2)}):Object(u.jsx)("p",{children:"$0.00"})]}),Object(u.jsxs)("div",{className:B.a.section,children:[Object(u.jsx)("div",{children:Object(u.jsxs)("h3",{children:["Total ",Object(u.jsx)("span",{children:"/ person"})]})}),c?Object(u.jsx)("p",{children:c.toFixed(2)}):Object(u.jsx)("p",{children:"$0.00"})]})]}),Object(u.jsx)(O,{className:"".concat(B.a.button," ").concat(c&&B.a.buttonActive),onClick:function(){t.onResetFields()},children:"Reset"})]})},k={tipAmount:0,total:0};var F=function(){var t=Object(c.useState)(""),e=Object(s.a)(t,2),n=e[0],a=e[1],i=Object(c.useState)(""),o=Object(s.a)(i,2),r=o[0],l=o[1],d=Object(c.useState)(""),b=Object(s.a)(d,2),p=b[0],v=b[1],O=Object(c.useState)(""),h=Object(s.a)(O,2),x=h[0],m=h[1],_=Object(c.useState)(k),f=Object(s.a)(_,2),g=f[0],A=f[1];return Object(c.useEffect)((function(){if(n<=0||r<=0||x<=0)A(k);else{var t=n*r/100/x;A({tipAmount:t,total:n/x+t})}}),[n,r,x]),Object(u.jsxs)(j,{children:[Object(u.jsxs)("form",{className:C.a.form,children:[Object(u.jsx)(y,{onAddBill:function(t){a(t)},bill:n}),Object(u.jsx)(N,{onAddTipButton:function(t){v(""),l(r!==t?t:"")},onAddTipInput:function(t){v(t),l(t)},tipInput:p,tip:r}),Object(u.jsx)(S,{onAddNumberOfPeople:function(t){m(t)},numberOfPeople:x})]}),Object(u.jsx)(I,{result:g,onResetFields:function(){a(""),l(""),v(""),m("")}})]})};var M=function(){return Object(u.jsx)(F,{})};o.a.render(Object(u.jsx)(a.a.StrictMode,{children:Object(u.jsx)(M,{})}),document.getElementById("root"))}],[[18,1,2]]]);
//# sourceMappingURL=main.5ef05c4d.chunk.js.map