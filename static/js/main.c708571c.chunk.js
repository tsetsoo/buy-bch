(this["webpackJsonpbuy-bch"]=this["webpackJsonpbuy-bch"]||[]).push([[0],{22:function(e,t,r){},37:function(e){e.exports=JSON.parse('{"order.email":"\u0412\u0430\u0448\u0438\u044f\u0442 \u0438\u043c\u0435\u0439\u043b \u0430\u0434\u0440\u0435\u0441","order.bchAddress":"\u0412\u0430\u0448\u0438\u044f\u0442 \u0411\u0438\u0442\u043a\u043e\u0439\u043d \u041a\u0435\u0448 \u0430\u0434\u0440\u0435\u0441","order.bgnAmount":"Amount of BGN you want to spend","order.bchAmount":"Estimated amount of BCH you will receive","order.termAndConditions":"I Accept <a>Terms and Conditions</a>","order.exchangeRateTerms":"I understand exchange rate is recalculated at <a>payment time</a>","order.buyButton":"Buy BCH","order.scanQr":"Scan QR Code","header.heading":"Buy BCH powered by POYPE","currentOrder.amount":"You are buying BCH for {amount} BGN.","currentOrder.reset":"Start Over","currentOrder.confirmation":"Are you sure you want to start over? This will reset all progress up to this point.","qrScanner.back":"Go Back","qrScanner.confirmationMessage":"Is this your BCH address?","qrScanner.submit":"Yes","qrScanner.scanAgain":"Try again","phone.number":"Your Phone Number (e.g. +359888123456)","phone.smsCode":"SMS Code","phone.submit":"Submit","photo.typeId":"Please upload a photo of your ID in PNG or JPEG format","photo.typeFace":"Please upload a selfie in PNG or JPEG format","photo.typeDeclaration":"Please upload a photo copy of your declaration form in PNG or JPEG format","photo.declarationUrl":"Please download your declaration form <a>here</a>","photo.upload":"Upload","payment.thankYou":"Thank you for your order","payment.payHere":"Pay {amount} BGN","payment.newOrder":"New Order","bchapi.error.general":"Unexpected error. Please contact system administrator.","bchapi.error.notEnoughBch":"Insuffiecient BCH reserves in the service to fulfill the order. Please decrease the amount or try again later","bchapi.error.phoneNumber":"Phone number is not formed correctly. Please follow the example: +359888123456","bchapi.error.validationCode":"Validation code is invalid. Please try again.","bchapi.error.photoFormat":"Photo is of wrong format. Please try again."}')},38:function(e){e.exports=JSON.parse('{"order.email":"Your Email","order.bchAddress":"Your Bitcoin Cash Wallet Address","order.bgnAmount":"Amount of BGN you want to spend","order.bchAmount":"Estimated amount of BCH you will receive","order.termAndConditions":"I Accept <a>Terms and Conditions</a>","order.exchangeRateTerms":"I understand exchange rate is recalculated at <a>payment time</a>","order.buyButton":"Buy BCH","order.scanQr":"Scan QR Code","header.heading":"Buy BCH powered by POYPE","currentOrder.amount":"You are buying BCH for {amount} BGN.","currentOrder.reset":"Start Over","currentOrder.confirmation":"Are you sure you want to start over? This will reset all progress up to this point.","qrScanner.back":"Go Back","qrScanner.confirmationMessage":"Is this your BCH address?","qrScanner.submit":"Yes","qrScanner.scanAgain":"Try again","phone.number":"Your Phone Number (e.g. +359888123456)","phone.smsCode":"SMS Code","phone.submit":"Submit","photo.typeId":"Please upload a photo of your ID in PNG or JPEG format","photo.typeFace":"Please upload a selfie in PNG or JPEG format","photo.typeDeclaration":"Please upload a photo copy of your declaration form in PNG or JPEG format","photo.declarationUrl":"Please download your declaration form <a>here</a>","photo.upload":"Upload","payment.thankYou":"Thank you for your order","payment.payHere":"Pay {amount} BGN","payment.newOrder":"New Order","bchapi.error.general":"Unexpected error. Please contact system administrator.","bchapi.error.notEnoughBch":"Insuffiecient BCH reserves in the service to fulfill the order. Please decrease the amount or try again later","bchapi.error.phoneNumber":"Phone number is not formed correctly. Please follow the example: +359888123456","bchapi.error.validationCode":"Validation code is invalid. Please try again.","bchapi.error.photoFormat":"Photo is of wrong format. Please try again."}')},49:function(e,t,r){},68:function(e,t,r){},71:function(e,t,r){},72:function(e,t,r){},73:function(e,t,r){},81:function(e,t,r){},82:function(e,t,r){},83:function(e,t,r){},84:function(e,t,r){},85:function(e,t,r){},86:function(e,t,r){"use strict";r.r(t);var n=r(0),a=r(1),o=r.n(a),c=r(36),s=r.n(c),i=(r(49),r(6)),u=r.n(i),d=r(8),l=r(5),b=r(16),p=r.n(b),A="https://api-stage.buybch.poype.io",h=function(){var e=Object(d.a)(u.a.mark((function e(t){var r;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,p.a.get("".concat(A,"/rate/bchbgn?amount_bgn=").concat(t));case 3:return r=e.sent,e.abrupt("return",r.data.amount_bch);case 7:return e.prev=7,e.t0=e.catch(0),e.abrupt("return",{errorId:"bchapi.error.general"});case 10:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(t){return e.apply(this,arguments)}}(),g=function(){var e=Object(d.a)(u.a.mark((function e(t){var r;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,p.a.get("".concat(A,"/order/").concat(t));case 3:return r=e.sent,e.abrupt("return",r.data);case 7:return e.prev=7,e.t0=e.catch(0),e.abrupt("return",{errorId:"bchapi.error.general"});case 10:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(t){return e.apply(this,arguments)}}(),f=function(){var e=Object(d.a)(u.a.mark((function e(t,r,n){var a;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,p.a.post("".concat(A,"/order"),{bgn_amount:t,bch_addr:r,email:n});case 3:return a=e.sent,e.abrupt("return",{order:a.data});case 7:return e.prev=7,e.t0=e.catch(0),e.abrupt("return",v(e.t0,503,"bchapi.error.notEnoughBch"));case 10:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(t,r,n){return e.apply(this,arguments)}}(),m=function(){var e=Object(d.a)(u.a.mark((function e(t,r){return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,p.a.post("".concat(A,"/order/").concat(t,"/id/phone"),{phone:r});case 3:e.next=8;break;case 5:return e.prev=5,e.t0=e.catch(0),e.abrupt("return",v(e.t0,400,"bchapi.error.phoneNumber"));case 8:case"end":return e.stop()}}),e,null,[[0,5]])})));return function(t,r){return e.apply(this,arguments)}}(),j=function(){var e=Object(d.a)(u.a.mark((function e(t,r,n){var a;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,p.a.post("".concat(A,"/order/").concat(t,"/id/phone"),{phone:r,secret_code:n});case 3:return a=e.sent,e.abrupt("return",{order:a.data});case 7:return e.prev=7,e.t0=e.catch(0),e.abrupt("return",v(e.t0,403,"bchapi.error.validationCode"));case 10:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(t,r,n){return e.apply(this,arguments)}}(),O=function(){var e=Object(d.a)(u.a.mark((function e(t,r,n){var a;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,p.a.post("".concat(A,"/order/").concat(t,"/id/").concat(n),r,{headers:{"Content-Type":r.type}});case 3:return a=e.sent,e.abrupt("return",{order:a.data});case 7:return e.prev=7,e.t0=e.catch(0),e.abrupt("return",v(e.t0,400,"bchapi.error.photoFormat"));case 10:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(t,r,n){return e.apply(this,arguments)}}(),v=function(e,t,r){return{errorId:e.response&&e.response.status===t?r:"bchapi.error.general"}},x=(r(68),r(91)),B=r(37),w=r(38),C=o.a.createContext(),y=function(e){return/^bg\b/.test(e)?B:w},I=navigator.language,E=function(e){var t=Object(a.useState)(I),r=Object(l.a)(t,2),o=r[0],c=r[1],s=Object(a.useState)(y(I)),i=Object(l.a)(s,2),u=i[0],d=i[1];return Object(n.jsx)(C.Provider,{value:{locale:o,selectLanguage:function(e){c(e),d(y(e))}},children:Object(n.jsx)(x.a,{messages:u,locale:o,children:e.children})})},N=r(90),G=(r(71),{bg:{value:"bg-BG",label:"\u0411\u0413"},en:{value:"en",label:"EN"}}),R=function(){var e=Object(a.useContext)(C),t=Object(a.useState)(/^bg\b/.test(e.locale)?G.bg:G.en),r=Object(l.a)(t,2),o=r[0],c=r[1],s=Object(N.a)();return Object(n.jsxs)("div",{className:"header-container",children:[Object(n.jsx)("a",{href:"https://www.poype.io/",children:Object(n.jsx)("img",{alt:"Poype Logo",className:"brand-logo",src:"data:image/png;base64,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"})}),Object(n.jsx)("div",{className:"powered-text",children:s.formatMessage({id:"header.heading"})}),Object(n.jsx)("div",{className:"language",onClick:function(){return function(){var t=o.label===G.bg.label?"en":"bg";c(G[t]),e.selectLanguage(G[t].value)}()},children:o.label})]})},k=r(12),P=r(18),S=(r(72),function(e){var t=e.children,r=e.className,a=Object(P.a)(e,["children","className"]);return Object(n.jsx)("button",Object(k.a)(Object(k.a)({className:r||"custom-button"},a),{},{children:t}))}),Y=(r(73),function(e){var t=e.handleChange,r=e.label,a=(e.shrink,e.children),o=e.containerClasses,c=Object(P.a)(e,["handleChange","label","shrink","children","containerClasses"]);return Object(n.jsxs)("div",{className:"".concat(o||""," group"),children:[Object(n.jsx)("input",Object(k.a)({className:"form-input",onChange:t},c)),r?Object(n.jsx)("label",{className:"".concat(c.value.length?"shrink":""," form-input-label"),children:r}):null,a]})}),D=r(40),M=r.n(D);r(22);var U=function(e){var t=e.setBchState,r=Object(a.useState)(""),o=Object(l.a)(r,2),c=o[0],s=o[1],i=Object(a.useState)(""),u=Object(l.a)(i,2),d=u[0],b=u[1],p=Object(N.a)(),A=function(e){e.preventDefault(),t({bchAddress:c||"",showQr:!1})};return Object(n.jsxs)("div",{className:"form-container",children:[c?Object(n.jsxs)("div",{children:[Object(n.jsx)("p",{children:p.formatMessage({id:"qrScanner.confirmationMessage"})}),Object(n.jsx)("p",{children:c}),Object(n.jsxs)("div",{className:"buttons",children:[Object(n.jsx)(S,{color:"custom-button-green",onClick:A,children:p.formatMessage({id:"qrScanner.submit"})}),Object(n.jsx)(S,{color:"red",onClick:function(e){e.preventDefault(),s("")},children:p.formatMessage({id:"qrScanner.scanAgain"})})]})]}):Object(n.jsxs)("div",{children:[Object(n.jsx)(M.a,{delay:300,onError:function(e){return b(e)},onScan:function(e){return s(e)},style:{margin:"10px 0px"}}),Object(n.jsx)(S,{color:"custom-button-red",onClick:A,children:p.formatMessage({id:"qrScanner.back"})})]}),d?Object(n.jsx)("p",{className:"error-message",children:d}):null]})},Q=(r(81),function(){return Object(n.jsx)("div",{className:"spinner-overlay",children:Object(n.jsx)("div",{className:"spinner-container"})})}),K=(r(82),function(e){return function(t){var r=t.children,o=Object(P.a)(t,["children"]),c=Object(a.useState)(""),s=Object(l.a)(c,2),i=s[0],u=s[1],d=Object(a.useState)(!1),b=Object(l.a)(d,2),p=b[0],A=b[1],h=Object(N.a)();return p?Object(n.jsx)(Q,{}):Object(n.jsxs)("div",{className:"form-container",children:[o.bgnAmount?Object(n.jsx)("p",{className:"current-order-text",children:h.formatMessage({id:"currentOrder.amount"},{amount:o.bgnAmount})}):null,Object(n.jsx)(e,Object(k.a)(Object(k.a)({setErrorMessage:function(e){u(e?h.formatMessage({id:e}):"")},setLoading:A},o),{},{children:r})),i?Object(n.jsx)("p",{className:"error-message",children:i}):null]})}});r(83);var L=K((function(e){var t=e.setOrder,r=e.setErrorMessage,o=e.setLoading,c=Object(a.useState)(""),s=Object(l.a)(c,2),i=s[0],b=s[1],p=Object(a.useState)(""),A=Object(l.a)(p,2),g=A[0],m=A[1],j=Object(a.useState)({bchAddress:"",showQr:!1}),O=Object(l.a)(j,2),v=O[0],x=O[1],B=Object(a.useState)(""),w=Object(l.a)(B,2),C=w[0],y=w[1],I=Object(a.useRef)(!1),E=Object(N.a)();Object(a.useEffect)((function(){if(I.current){var e=setTimeout(Object(d.a)(u.a.mark((function e(){var t;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,h(i);case 2:t=e.sent,y(t);case 4:case"end":return e.stop()}}),e)}))),1e3);return function(){return clearTimeout(e)}}I.current=!0}),[i]);var G=function(){var e=Object(d.a)(u.a.mark((function e(n){var a;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n.preventDefault(),o(!0),e.next=4,f(i,v.bchAddress,g);case 4:a=e.sent,o(!1),a.order?(localStorage.setItem("orderId",a.order.id),t(a.order)):a.errorId&&r(a.errorId);case 7:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();if(v.showQr)return Object(n.jsx)(U,{setBchState:x});var R=function(e,t,r){return Object(n.jsxs)("div",{className:"group checkbox",children:[Object(n.jsx)("input",{type:"checkbox",required:!0,name:e}),Object(n.jsx)("label",{children:E.formatMessage({id:t},{a:function(e){return Object(n.jsx)("a",{href:r,children:e})}})})]})};return Object(n.jsx)("div",{children:Object(n.jsxs)("form",{onSubmit:G,children:[Object(n.jsx)(Y,{name:"email",type:"email",handleChange:function(e){m(e.target.value)},value:g,label:E.formatMessage({id:"order.email"}),required:!0}),Object(n.jsx)(Y,{name:"bchAddress",type:"bchAddress",handleChange:function(e){x(Object(k.a)(Object(k.a)({},v),{},{bchAddress:e.target.value}))},value:v.bchAddress,label:E.formatMessage({id:"order.bchAddress"}),required:!0,containerClasses:"qrCodeContainer",children:Object(n.jsx)("img",{alt:"Scan QR Code",src:"data:image/png;base64,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",onClick:function(e){e.preventDefault(),x(Object(k.a)(Object(k.a)({},v),{},{showQr:!0}))}})}),Object(n.jsx)(Y,{name:"bgn",type:"number",step:"any",handleChange:function(e){b(e.target.value)},value:i,label:E.formatMessage({id:"order.bgnAmount"}),required:!0,max:"9999",min:"1"}),Object(n.jsx)(Y,{name:"bch",type:"text",value:C?C.toString():"",label:E.formatMessage({id:"order.bchAmount"}),readOnly:!0}),R("termsConditions","order.termAndConditions","https://api-stage.buybch.poype.io/static/terms.html"),R("exchangeRateTerms","order.exchangeRateTerms","https://api-stage.buybch.poype.io/static/terms.html#rate_note"),Object(n.jsx)("div",{className:"buttons",children:Object(n.jsx)(S,{type:"submit",children:E.formatMessage({id:"order.buyButton"})})})]})})})),V=function(){localStorage.clear(),window.location.reload()},H=function(e,t){e.preventDefault(),window.confirm(t)&&V()},X=(r(84),function(e){var t=e.paymentUrl,r=e.bgnAmount,o=Object(a.useReducer)((function(e){return 0===e?e+1:e-1}),0),c=Object(l.a)(o,2)[1],s=Object(N.a)();return Object(n.jsxs)("div",{className:"form-container",children:[Object(n.jsx)("p",{children:s.formatMessage({id:"payment.thankYou"})}),Object(n.jsxs)("div",{className:"buttons",children:[Object(n.jsx)(S,{onClick:function(){window.open(t,"_blank"),localStorage.setItem("new-order-button-visible",!0),setTimeout(c,1e3)},children:s.formatMessage({id:"payment.payHere"},{amount:r})}),localStorage.getItem("new-order-button-visible")?Object(n.jsx)(S,{className:"secondary-button",onClick:V,children:s.formatMessage({id:"payment.newOrder"})}):null]})]})});var F=K((function(e){var t=e.orderId,r=e.setOrder,o=e.setErrorMessage,c=e.setLoading,s=Object(a.useState)(""),i=Object(l.a)(s,2),b=i[0],p=i[1],A=Object(a.useState)(""),h=Object(l.a)(A,2),g=h[0],f=h[1],O=Object(a.useState)(!1),v=Object(l.a)(O,2),x=v[0],B=v[1],w=Object(N.a)();Object(a.useEffect)((function(){var e=localStorage.getItem("phone");e&&(p(e),B(!0))}),[]);var C=function(){var e=Object(d.a)(u.a.mark((function e(n){var a,s;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(n.preventDefault(),o(""),c(!0),!x){e.next=10;break}return e.next=6,j(t,b,g);case 6:(a=e.sent).order?(r(a.order),localStorage.removeItem("phone")):a.errorId&&(o(a.errorId),c(!1)),e.next=15;break;case 10:return e.next=12,m(t,b);case 12:(s=e.sent)?o(s.errorId):localStorage.setItem("phone",b),c(!1);case 15:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return Object(n.jsx)("div",{children:Object(n.jsxs)("form",{onSubmit:C,children:[Object(n.jsx)(Y,{name:"phoneNumber",type:"text",handleChange:function(e){p(e.target.value)},value:b,label:w.formatMessage({id:"phone.number"}),required:!0}),x?Object(n.jsx)(Y,{name:"validationCode",type:"text",handleChange:function(e){f(e.target.value)},value:g,label:w.formatMessage({id:"phone.smsCode"}),required:!0}):null,Object(n.jsxs)("div",{className:"buttons",children:[Object(n.jsx)(S,{type:"submit",children:w.formatMessage({id:"phone.submit"})}),Object(n.jsx)(S,{className:"secondary-button",onClick:function(e){return H(e,w.formatMessage({id:"currentOrder.confirmation"}))},children:w.formatMessage({id:"currentOrder.reset"})})]})]})})}));r(85);var J=K((function(e){var t=e.orderId,r=e.setOrder,o=e.photoSuffix,c=e.declarationFormUrl,s=e.setErrorMessage,i=e.setLoading,b=Object(a.useState)(null),p=Object(l.a)(b,2),A=p[0],h=p[1],g=Object(a.useState)(0),f=Object(l.a)(g,2),m=f[0],j=f[1],v=Object(N.a)(),x=function(){var e=Object(d.a)(u.a.mark((function e(n){var a;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n.preventDefault(),s(""),i(!0),e.next=5,O(t,A,o);case 5:a=e.sent,i(!1),a.order?(h(null),j(0===m?1+m:m-1),r(a.order)):a.errorId&&s(a.errorId);case 8:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return Object(n.jsxs)("div",{children:[Object(n.jsx)("p",{children:v.formatMessage({id:"id_photo"===o?"photo.typeId":"face_photo"===o?"photo.typeFace":"declaration_form"===o?"photo.typeDeclaration":void 0})}),Object(n.jsxs)("form",{onSubmit:x,children:[Object(n.jsx)(Y,{name:"photo",type:"file",handleChange:function(e){if(e.target.files&&e.target.files[0]){var t=e.target.files[0];h(t)}},required:!0,accept:"image/*"},m),A?Object(n.jsx)("img",{alt:"To upload",src:URL.createObjectURL(A)}):null,c?Object(n.jsx)("p",{children:v.formatMessage({id:"photo.declarationUrl"},{a:function(e){return Object(n.jsx)("a",{href:c,children:e})}})}):null,Object(n.jsxs)("div",{className:"buttons",children:[Object(n.jsx)(S,{type:"submit",children:v.formatMessage({id:"photo.upload"})}),Object(n.jsx)(S,{className:"secondary-button",onClick:function(e){return H(e,v.formatMessage({id:"currentOrder.confirmation"}))},children:v.formatMessage({id:"currentOrder.reset"})})]})]})]})}));var T=function(){var e=Object(a.useState)({}),t=Object(l.a)(e,2),r=t[0],o=t[1];return Object(a.useEffect)((function(){var e=localStorage.getItem("orderId");if(e){function t(){return(t=Object(d.a)(u.a.mark((function t(){var r;return u.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,g(e);case 2:r=t.sent,o(r);case 4:case"end":return t.stop()}}),t)})))).apply(this,arguments)}!function(){t.apply(this,arguments)}()}}),[]),Object(n.jsxs)("div",{className:"App",children:[Object(n.jsx)(R,{}),Object(n.jsx)("div",{className:"contents",children:function(){if("pending_payment"===r.status)return Object(n.jsx)(X,{paymentUrl:r.payment_url,bgnAmount:r.bgn_amount});if("pending_id"===r.status){if("phone"===r.id_pending)return Object(n.jsx)(F,{orderId:r.id,setOrder:o,bgnAmount:r.bgn_amount});if("id_photo"===r.id_pending||"face_photo"===r.id_pending||"declaration_form"===r.id_pending)return Object(n.jsx)(J,{orderId:r.id,setOrder:o,photoSuffix:r.id_pending,declarationFormUrl:r.id_ext_url,bgnAmount:r.bgn_amount})}return Object(n.jsx)(L,{setOrder:o})}()})]})},Z=function(e){e&&e instanceof Function&&r.e(3).then(r.bind(null,92)).then((function(t){var r=t.getCLS,n=t.getFID,a=t.getFCP,o=t.getLCP,c=t.getTTFB;r(e),n(e),a(e),o(e),c(e)}))};s.a.render(Object(n.jsx)(E,{children:Object(n.jsx)(o.a.StrictMode,{children:Object(n.jsx)(T,{})})}),document.getElementById("root")),Z()}},[[86,1,2]]]);
//# sourceMappingURL=main.c708571c.chunk.js.map