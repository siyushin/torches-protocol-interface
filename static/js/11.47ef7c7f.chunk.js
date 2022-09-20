/*! For license information please see 11.47ef7c7f.chunk.js.LICENSE.txt */
(this["webpackJsonpTorches-web-app"]=this["webpackJsonpTorches-web-app"]||[]).push([[11],{1188:function(e,t,a){"use strict";a.d(t,"a",(function(){return n})),a.d(t,"b",(function(){return r})),a.d(t,"c",(function(){return o}));a(16);var n=function(e,t){return isNaN(e)||null===e?"0":("number"===typeof e?e:e.toNumber()).toLocaleString("en-US",{maximumFractionDigits:null!==t&&void 0!==t?t:20})},r=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:4,a=new RegExp("^(\\d)+(\\.(\\d){1,"+t+"})?$");return a.test(e)?e:e.toFixed(t)},o=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:18;return new RegExp("^\\d*(\\.\\d{0,"+e+"})?$")}},1221:function(e,t,a){"use strict";var n=a(2),r=a(14),o=a(10),c=a.n(o),i=a(0),l=a(18),s=a(8),u=["bsPrefix","className","as"],m=i.forwardRef((function(e,t){var a=e.bsPrefix,o=e.className,i=e.as,m=void 0===i?"div":i,d=Object(r.a)(e,u),p=Object(l.b)(a,"row"),f=Object(l.a)(),h="".concat(p,"-cols"),v=[];return f.forEach((function(e){var t,a=d[e];delete d[e],t=null!=a&&"object"===typeof a?a.cols:a;var n="xs"!==e?"-".concat(e):"";null!=t&&v.push("".concat(h).concat(n,"-").concat(t))})),Object(s.jsx)(m,Object(n.a)(Object(n.a)({ref:t},d),{},{className:c.a.apply(void 0,[o,p].concat(v))}))}));m.displayName="Row",t.a=m},1293:function(e,t,a){e.exports=a.p+"static/media/logo.e601b2df.svg"},1294:function(e,t,a){e.exports=a.p+"static/media/logo_grey.883988a6.svg"},1295:function(e,t,a){e.exports={modal:"ClaimModal_modal__k5JPN",claimContainer:"ClaimModal_claimContainer__4Nx1X",logo:"ClaimModal_logo__3Wgl0",title:"ClaimModal_title__12xDJ",value:"ClaimModal_value__3KUB5",buttonItem:"ClaimModal_buttonItem__3AbmR",link:"ClaimModal_link__2piS4"}},1296:function(e,t,a){e.exports=a.p+"static/media/rocket.37d012a5.svg"},1304:function(e,t,a){"use strict";a.r(t);var n=a(13),r=a(0),o=a.n(r),c=a(1177),i=a(1221),l=a(597),s=a(276),u=a(10),m=a.n(u),d=a(1173),p=a(36),f=a(120),h=a(9),v=a(39),g=a(1293),y=a.n(g),w=a(2),b=a(5),E=a(1182),x=(a(1190),a(375)),N=a(1188),k=a(1294),O=a.n(k),C=a(260),j=a.n(C),T=a(1295),L=a.n(T);function _(){_=function(){return e};var e={},t=Object.prototype,a=t.hasOwnProperty,n="function"==typeof Symbol?Symbol:{},r=n.iterator||"@@iterator",o=n.asyncIterator||"@@asyncIterator",c=n.toStringTag||"@@toStringTag";function i(e,t,a){return Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}),e[t]}try{i({},"")}catch(C){i=function(e,t,a){return e[t]=a}}function l(e,t,a,n){var r=t&&t.prototype instanceof m?t:m,o=Object.create(r.prototype),c=new N(n||[]);return o._invoke=function(e,t,a){var n="suspendedStart";return function(r,o){if("executing"===n)throw new Error("Generator is already running");if("completed"===n){if("throw"===r)throw o;return O()}for(a.method=r,a.arg=o;;){var c=a.delegate;if(c){var i=b(c,a);if(i){if(i===u)continue;return i}}if("next"===a.method)a.sent=a._sent=a.arg;else if("throw"===a.method){if("suspendedStart"===n)throw n="completed",a.arg;a.dispatchException(a.arg)}else"return"===a.method&&a.abrupt("return",a.arg);n="executing";var l=s(e,t,a);if("normal"===l.type){if(n=a.done?"completed":"suspendedYield",l.arg===u)continue;return{value:l.arg,done:a.done}}"throw"===l.type&&(n="completed",a.method="throw",a.arg=l.arg)}}}(e,a,c),o}function s(e,t,a){try{return{type:"normal",arg:e.call(t,a)}}catch(C){return{type:"throw",arg:C}}}e.wrap=l;var u={};function m(){}function d(){}function p(){}var f={};i(f,r,(function(){return this}));var h=Object.getPrototypeOf,v=h&&h(h(k([])));v&&v!==t&&a.call(v,r)&&(f=v);var g=p.prototype=m.prototype=Object.create(f);function y(e){["next","throw","return"].forEach((function(t){i(e,t,(function(e){return this._invoke(t,e)}))}))}function w(e,t){var n;this._invoke=function(r,o){function c(){return new t((function(n,c){!function n(r,o,c,i){var l=s(e[r],e,o);if("throw"!==l.type){var u=l.arg,m=u.value;return m&&"object"==typeof m&&a.call(m,"__await")?t.resolve(m.__await).then((function(e){n("next",e,c,i)}),(function(e){n("throw",e,c,i)})):t.resolve(m).then((function(e){u.value=e,c(u)}),(function(e){return n("throw",e,c,i)}))}i(l.arg)}(r,o,n,c)}))}return n=n?n.then(c,c):c()}}function b(e,t){var a=e.iterator[t.method];if(void 0===a){if(t.delegate=null,"throw"===t.method){if(e.iterator.return&&(t.method="return",t.arg=void 0,b(e,t),"throw"===t.method))return u;t.method="throw",t.arg=new TypeError("The iterator does not provide a 'throw' method")}return u}var n=s(a,e.iterator,t.arg);if("throw"===n.type)return t.method="throw",t.arg=n.arg,t.delegate=null,u;var r=n.arg;return r?r.done?(t[e.resultName]=r.value,t.next=e.nextLoc,"return"!==t.method&&(t.method="next",t.arg=void 0),t.delegate=null,u):r:(t.method="throw",t.arg=new TypeError("iterator result is not an object"),t.delegate=null,u)}function E(e){var t={tryLoc:e[0]};1 in e&&(t.catchLoc=e[1]),2 in e&&(t.finallyLoc=e[2],t.afterLoc=e[3]),this.tryEntries.push(t)}function x(e){var t=e.completion||{};t.type="normal",delete t.arg,e.completion=t}function N(e){this.tryEntries=[{tryLoc:"root"}],e.forEach(E,this),this.reset(!0)}function k(e){if(e){var t=e[r];if(t)return t.call(e);if("function"==typeof e.next)return e;if(!isNaN(e.length)){var n=-1,o=function t(){for(;++n<e.length;)if(a.call(e,n))return t.value=e[n],t.done=!1,t;return t.value=void 0,t.done=!0,t};return o.next=o}}return{next:O}}function O(){return{value:void 0,done:!0}}return d.prototype=p,i(g,"constructor",p),i(p,"constructor",d),d.displayName=i(p,c,"GeneratorFunction"),e.isGeneratorFunction=function(e){var t="function"==typeof e&&e.constructor;return!!t&&(t===d||"GeneratorFunction"===(t.displayName||t.name))},e.mark=function(e){return Object.setPrototypeOf?Object.setPrototypeOf(e,p):(e.__proto__=p,i(e,c,"GeneratorFunction")),e.prototype=Object.create(g),e},e.awrap=function(e){return{__await:e}},y(w.prototype),i(w.prototype,o,(function(){return this})),e.AsyncIterator=w,e.async=function(t,a,n,r,o){void 0===o&&(o=Promise);var c=new w(l(t,a,n,r),o);return e.isGeneratorFunction(a)?c:c.next().then((function(e){return e.done?e.value:c.next()}))},y(g),i(g,c,"Generator"),i(g,r,(function(){return this})),i(g,"toString",(function(){return"[object Generator]"})),e.keys=function(e){var t=[];for(var a in e)t.push(a);return t.reverse(),function a(){for(;t.length;){var n=t.pop();if(n in e)return a.value=n,a.done=!1,a}return a.done=!0,a}},e.values=k,N.prototype={constructor:N,reset:function(e){if(this.prev=0,this.next=0,this.sent=this._sent=void 0,this.done=!1,this.delegate=null,this.method="next",this.arg=void 0,this.tryEntries.forEach(x),!e)for(var t in this)"t"===t.charAt(0)&&a.call(this,t)&&!isNaN(+t.slice(1))&&(this[t]=void 0)},stop:function(){this.done=!0;var e=this.tryEntries[0].completion;if("throw"===e.type)throw e.arg;return this.rval},dispatchException:function(e){if(this.done)throw e;var t=this;function n(a,n){return c.type="throw",c.arg=e,t.next=a,n&&(t.method="next",t.arg=void 0),!!n}for(var r=this.tryEntries.length-1;r>=0;--r){var o=this.tryEntries[r],c=o.completion;if("root"===o.tryLoc)return n("end");if(o.tryLoc<=this.prev){var i=a.call(o,"catchLoc"),l=a.call(o,"finallyLoc");if(i&&l){if(this.prev<o.catchLoc)return n(o.catchLoc,!0);if(this.prev<o.finallyLoc)return n(o.finallyLoc)}else if(i){if(this.prev<o.catchLoc)return n(o.catchLoc,!0)}else{if(!l)throw new Error("try statement without catch or finally");if(this.prev<o.finallyLoc)return n(o.finallyLoc)}}}},abrupt:function(e,t){for(var n=this.tryEntries.length-1;n>=0;--n){var r=this.tryEntries[n];if(r.tryLoc<=this.prev&&a.call(r,"finallyLoc")&&this.prev<r.finallyLoc){var o=r;break}}o&&("break"===e||"continue"===e)&&o.tryLoc<=t&&t<=o.finallyLoc&&(o=null);var c=o?o.completion:{};return c.type=e,c.arg=t,o?(this.method="next",this.next=o.finallyLoc,u):this.complete(c)},complete:function(e,t){if("throw"===e.type)throw e.arg;return"break"===e.type||"continue"===e.type?this.next=e.arg:"return"===e.type?(this.rval=this.arg=e.arg,this.method="return",this.next="end"):"normal"===e.type&&t&&(this.next=t),u},finish:function(e){for(var t=this.tryEntries.length-1;t>=0;--t){var a=this.tryEntries[t];if(a.finallyLoc===e)return this.complete(a.completion,a.afterLoc),x(a),u}},catch:function(e){for(var t=this.tryEntries.length-1;t>=0;--t){var a=this.tryEntries[t];if(a.tryLoc===e){var n=a.completion;if("throw"===n.type){var r=n.arg;x(a)}return r}}throw new Error("illegal catch attempt")},delegateYield:function(e,t,a){return this.delegate={iterator:k(e),resultName:t,nextLoc:a},"next"===this.method&&(this.arg=void 0),u}},e}var B=function(e){var t=Object(r.useContext)(v.d).connectedAddress,a=Object(r.useContext)(v.c).networkType,c=Object(r.useContext)(v.g).web3,i=Object(d.a)(),l=i.t,u=i.i18n,f=Object(r.useState)(!1),g=Object(n.a)(f,2),y=g[0],k=g[1],C=Object(r.useState)(!1),T=Object(n.a)(C,2),B=T[0],P=T[1],S=Object(r.useState)(!1),F=Object(n.a)(S,2),M=F[0],A=F[1],U=Object(r.useState)(""),H=Object(n.a)(U,2),G=H[0],I=H[1],R=Object(r.useState)(!0),W=Object(n.a)(R,2),Y=W[0],q=(W[1],Object(r.useRef)(!1)),D=function(){var t=Object(b.a)(_().mark((function t(){var a,n=arguments;return _().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:a=!(n.length>0&&void 0!==n[0])||n[0],k(!1),P(!1),A(!1),I(""),a&&(e.handleClaimClose(),q.current=!0);case 6:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}(),J=function(){var n=Object(b.a)(_().mark((function n(r){var o,i,l,s,u;return _().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return o={url:window.location.href},k(!0),i=e.data.map((function(e){return e.qToken&&e.qToken.network&&e.qToken.network[a]?e.qToken.network[a].address:"0x0000000000000000000000000000000000000000"})),n.next=5,p.a.getGasInfo(c);case 5:return l=n.sent,n.next=8,p.a.getComptroller(c,a);case 8:s=n.sent,u=s.methods.claimComp(t,i).estimateGas().then(function(){var a=Object(b.a)(_().mark((function a(n){return _().wrap((function(a){for(;;)switch(a.prev=a.next){case 0:return u*=2,a.next=3,s.methods.claimComp(t,i).send({from:t,gasLimit:u,gasPrice:c.utils.toHex(l.gasPrice)}).on("transactionHash",(function(t){e.data.claimTxnHash=t,q.current||I(t)})).then((function(t){t.events.Failure?(window.gtag("event","collectTop",Object(w.a)(Object(w.a)({},o),{},{error:"response event fail"})),q.current||(A(!0),k(!1))):(window.gtag("event","collectTop",o),q.current||(r(),P(!0),k(!1))),e.data.claimTxnHash=null})).catch((function(t){4001===t.code?(window.gtag("event","collectTop",Object(w.a)(Object(w.a)({},o),{},{error:"user rejected"})),q.current||D(!1)):(window.gtag("event","collectTop",Object(w.a)(Object(w.a)({},o),{},{error:"other error1"})),q.current||(A(!0),k(!1)),e.data.claimTxnHash=null)}));case 3:case"end":return a.stop()}}),a)})));return function(e){return a.apply(this,arguments)}}()).catch((function(t){window.gtag("event","collectTop",Object(w.a)(Object(w.a)({},o),{},{error:"other error2"})),q.current||(A(!0),k(!1)),e.data.claimTxnHash=null}));case 10:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}(),$=function(){var t=Object(b.a)(_().mark((function t(n){var r,o,c;return _().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return r={url:window.location.href},o=h.a.COMP.network[a].address,c=e.data.compSymbol,18,"https://www.torches.finance/favicon.png",t.prev=5,t.next=8,window.ethereum.request({method:"wallet_watchAsset",params:{type:"ERC20",options:{address:o,symbol:c,decimals:18,image:"https://www.torches.finance/favicon.png"}}});case 8:t.sent?(window.gtag("event","addTop",r),console.log("Thanks for your interest!")):(console.log("Your loss!"),window.gtag("event","addTop",Object(w.a)(Object(w.a)({},r),{},{error:"response event fail"}))),t.next=16;break;case 12:t.prev=12,t.t0=t.catch(5),console.log(t.t0),window.gtag("event","addTop",Object(w.a)(Object(w.a)({},r),{},{error:"other error"}));case 16:case"end":return t.stop()}}),t,null,[[5,12]])})));return function(e){return t.apply(this,arguments)}}(),K=o.a.createElement(x.g,{type:"loading",txnHash:G,title:l("CommonModal.PleaseWait")}),z=o.a.createElement(x.g,{type:"success",txnHash:G,content:l(Y?"Banking.ClaimModal.TokensClaimedSuccessfully":"Banking.ClaimModal.AddTokenToWalletSuccessfully"),okText:"OK",handleOk:function(){return D()}}),V=o.a.createElement(v.a.Consumer,null,(function(e){var t=e.handleUpdate;return o.a.createElement(x.g,{type:"error",txnHash:G,content:l(Y?"Banking.ClaimModal.TokensClaimFailed":"Banking.ClaimModal.AddTokenToWalletFalid"),okText:l("CommonModal.Retry"),handleOk:function(){return Y?J(t):$(t)}})}));return o.a.createElement(E.a,{show:e.show,onHide:D,"aria-labelledby":"contained-modal-title-vcenter",className:m()("customModal",L.a.modal),centered:!0},o.a.createElement(E.a.Header,{closeButton:!0}),y?K:B?z:M?V:o.a.createElement(E.a.Body,null,o.a.createElement("div",{className:"contentContainer"},o.a.createElement("div",{className:L.a.claimContainer},o.a.createElement("img",{className:L.a.logo,src:O.a,alt:"logo"}),o.a.createElement("div",{className:L.a.title},l("Banking.ClaimModal.ClaimToken")),o.a.createElement("div",{className:L.a.value},Object(N.b)(e.data.compAccrued,8))),o.a.createElement("div",{className:"buttonsContainer"},o.a.createElement("div",{className:L.a.buttonItem},o.a.createElement(v.a.Consumer,null,(function(e){var t=e.handleUpdate;return o.a.createElement(s.a,{variant:"green",onClick:function(){return J(t)}},p.a.toUpperCase(u.language,l("Banking.Collect")))}))),o.a.createElement("div",{className:L.a.buttonItem},o.a.createElement(v.a.Consumer,null,(function(e){var t=e.handleUpdate;return o.a.createElement(s.a,{variant:"outline-green-lg",onClick:function(){return $(t)}},p.a.toUpperCase(u.language,l("Banking.AddTokenToWallet")))}))),o.a.createElement("a",{className:L.a.link,href:h.a.blockExplorers[a],target:"_blank"},l("Banking.ViewOnChainExplorer",{chain:a.toUpperCase()})," ",o.a.createElement("img",{src:j.a,width:"auto",height:"16",className:"d-inline-block align-top",alt:""}))))))},P=a(1296),S=a.n(P);t.default=function(e){var t=e.styles,a=e.data,u=Object(r.useContext)(v.d).connectedAddress,g=Object(r.useContext)(v.c).networkType,w="unsupported"!==g&&(void 0==a.loading||void 0==u||a.loading),b=Object(d.a)(),E=b.t,N=b.i18n,k=(parseFloat(a.totalLoanBalance)/parseFloat(a.totalBorrowLimitFiat)*100).toFixed(2),O=Object(r.useState)(!1),C=Object(n.a)(O,2),j=C[0],T=C[1],L=p.a.fixedNaN(k),_=new Date("2022-07-15T10:00:00.000Z").getTime()>(new Date).getTime();return o.a.createElement("div",{className:t.dashboard},o.a.createElement(c.a,{className:t.dashboardContainer},o.a.createElement("h1",{className:t.title},E("Banking.SloganHead")),o.a.createElement("div",{className:t.description},E("Banking.SloganDesc")),o.a.createElement("div",{className:t.tilesContainer},o.a.createElement(i.a,null,o.a.createElement(l.a,{className:t.savingWrap,xs:6,sm:6,md:h.a.COMP.network[g]?4:6},o.a.createElement("div",{className:m()(t.tile,t.supplyTile)},o.a.createElement("div",{className:t.label},E("Banking.SupplyBalance")),o.a.createElement("div",{className:t.value},f.a.getCurrencyFormatted(a.totalSavingsBalance,4)),o.a.createElement("div",{className:t.apy},o.a.createElement("span",{className:t.apyTitle},E("Banking.APY")),o.a.createElement("span",{className:t.apyNum},p.a.fixedNaN(parseFloat(a.totalSavingsAPY).toFixed(2)),"%")))),h.a.COMP.network[g]&&o.a.createElement(l.a,{className:t.colletWrap,xs:12,sm:12,md:"4"},o.a.createElement("div",{className:m()(t.tile,t.netTile)},o.a.createElement("img",{className:t.logo,src:y.a,alt:"logo"}),o.a.createElement("div",{className:t.label},o.a.createElement(x.n,{type:"line",title:E("Banking.Unclaimed"),desc:o.a.createElement("div",null,o.a.createElement("p",null,E("Banking.Unclaimed-info1")),o.a.createElement("p",{style:{marginTop:10}},E("Banking.Unclaimed-info2")))})),o.a.createElement("div",{className:t.value},_?0:(null===a||void 0===a?void 0:a.compAccrued)?parseFloat(a.compAccrued).toFixed(4):0),o.a.createElement("div",{className:t.buttonGroup},o.a.createElement(s.a,{variant:"outline-grey",size:"sm",disabled:_||0===Number(a.compAccrued)||w,onClick:function(){T(!0)}},_?o.a.createElement(x.n,{type:"icon",iconColor:"white",title:E("Common.ComingSoon"),desc:o.a.createElement("div",null,o.a.createElement("p",null,E("Banking.Unclaimed-info1")),o.a.createElement("p",{style:{marginTop:10}},E("Banking.Unclaimed-info2")))}):E("Banking.Collect")),o.a.createElement("a",{className:t.boostBtn,href:"/".concat(N.language,"/nft#topRewards")},o.a.createElement("img",{src:S.a,width:21,height:20}),o.a.createElement("span",null,E("Banking.Boost")))))),o.a.createElement(l.a,{className:t.loanWrap,xs:6,sm:6,md:h.a.COMP.network[g]?4:6},o.a.createElement("div",{className:m()(t.tile,t.borrowTile)},o.a.createElement("div",{className:t.label},E("Banking.BorrowBalance")),o.a.createElement("div",{className:t.value},f.a.getCurrencyFormatted(a.totalLoanBalance,4)),o.a.createElement("div",{className:t.apy},o.a.createElement("span",{className:t.apyTitle},E("Banking.APY")),o.a.createElement("span",{className:t.apyNum},p.a.fixedNaN(parseFloat(a.totalLoanAPY).toFixed(2)),"%")))))),o.a.createElement("div",{className:t.loanPercentWrap},o.a.createElement("div",{className:t.loanPercentInner},o.a.createElement(x.a,{percent:L}),o.a.createElement("div",{className:t.loanLimitContainer},o.a.createElement("div",{className:t.minLoan},"$0"),o.a.createElement("div",{className:t.usedLoan},o.a.createElement("div",{className:t.usedLoanT},o.a.createElement("span",{className:t.usedPercent},L+"%"),o.a.createElement(x.n,{type:"line",title:E("Banking.loanUsedPercent"),tooltipClassName:"percent-tooltips",desc:o.a.createElement("div",{className:t.info},o.a.createElement("p",null,E("Banking.loanUsedPercent-info1")),o.a.createElement("p",null,E("Banking.loanUsedPercent-info2")))}))),o.a.createElement("div",{className:t.maxLoan},"$"+p.a.fixedNaN(parseFloat(a.totalBorrowLimitFiat).toFixed(2))))))),j&&void 0!=a.compSymbol&&o.a.createElement(B,{data:a,logo:y.a,styles:t,handleClaimClose:function(){T(!1)},show:j}))}}}]);
//# sourceMappingURL=11.47ef7c7f.chunk.js.map