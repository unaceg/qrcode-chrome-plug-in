(function(e){function t(t){for(var n,c,a=t[0],l=t[1],s=t[2],d=0,f=[];d<a.length;d++)c=a[d],Object.prototype.hasOwnProperty.call(i,c)&&i[c]&&f.push(i[c][0]),i[c]=0;for(n in l)Object.prototype.hasOwnProperty.call(l,n)&&(e[n]=l[n]);u&&u(t);while(f.length)f.shift()();return r.push.apply(r,s||[]),o()}function o(){for(var e,t=0;t<r.length;t++){for(var o=r[t],n=!0,a=1;a<o.length;a++){var l=o[a];0!==i[l]&&(n=!1)}n&&(r.splice(t--,1),e=c(c.s=o[0]))}return e}var n={},i={app:0},r=[];function c(t){if(n[t])return n[t].exports;var o=n[t]={i:t,l:!1,exports:{}};return e[t].call(o.exports,o,o.exports,c),o.l=!0,o.exports}c.m=e,c.c=n,c.d=function(e,t,o){c.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:o})},c.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},c.t=function(e,t){if(1&t&&(e=c(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var o=Object.create(null);if(c.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var n in e)c.d(o,n,function(t){return e[t]}.bind(null,n));return o},c.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return c.d(t,"a",t),t},c.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},c.p="";var a=window["webpackJsonp"]=window["webpackJsonp"]||[],l=a.push.bind(a);a.push=t,a=a.slice();for(var s=0;s<a.length;s++)t(a[s]);var u=l;r.push([0,"chunk-vendors"]),o()})({0:function(e,t,o){e.exports=o("56d7")},"0432":function(e,t,o){"use strict";var n=o("5d3b"),i=o.n(n);i.a},"253a":function(e,t,o){"use strict";var n=o("8e86"),i=o.n(n);i.a},"56d7":function(e,t,o){"use strict";o.r(t);o("cadf"),o("551c"),o("f751"),o("097d");var n=o("2b0e"),i=function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("div",[o("div",{staticClass:"chrome-qrcode-plugin-div"},[o("div",[o("CloseButton",{on:{click:e.closeDiv}}),o("transition",{attrs:{name:"el-fade-in-linear"}},[e.showQRCode?o("QRCodeView",{attrs:{value:e.codeValue},on:{clickChange:e.setShowBar}}):e._e()],1),o("transition",{attrs:{name:"el-fade-in-linear"}},[e.showBarCode?o("BarCodeView",{attrs:{value:e.codeValue},on:{clickChange:e.setShowQR}}):e._e()],1)],1)])])},r=[],c=(o("6b54"),o("ac4d"),o("8a81"),o("ac6a"),function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("i",{staticClass:"chrome-qrcode-plugin-close-button",on:{click:e.click}},[o("svg",{staticStyle:{width:"20px",height:"20px"},attrs:{t:"1569342895178",viewBox:"0 0 1024 1024",version:"1.1",xmlns:"http://www.w3.org/2000/svg","p-id":"2499",width:"200",height:"200"}},[o("path",{attrs:{d:"M810.666667 273.493333L750.506667 213.333333 512 451.84 273.493333 213.333333 213.333333 273.493333 451.84 512 213.333333 750.506667 273.493333 810.666667 512 572.16 750.506667 810.666667 810.666667 750.506667 572.16 512z","p-id":"2500"}})])])}),a=[],l={methods:{click:function(){this.$emit("click")}}},s=l,u=(o("253a"),o("2877")),d=Object(u["a"])(s,c,a,!1,null,null,null),f=d.exports,p=function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("div",[o("div",{staticClass:"chrome-qrcode-plugin-qrcode-view"},[o("Qrcode",{attrs:{value:e.value,size:300,level:"H"}})],1),o("div",[o("div",{staticClass:"chrome-qrcode-plugin-qrcode-tips",attrs:{title:e.value}},[e._v(e._s(e.value))]),o("el-button",{staticClass:"chrome-qrcode-plugin-qrcode-change-button",attrs:{type:"text"},on:{click:e.clickChange}},[e._v("显示二维码")])],1)])},h=[],v=o("d7b0"),g={components:{Qrcode:v["a"]},props:{value:{type:String,default:""}},methods:{clickChange:function(){this.$emit("clickChange")}}},m=g,b=(o("e86c"),Object(u["a"])(m,p,h,!1,null,null,null)),x=b.exports,w=function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("div",[o("div",{staticClass:"chrome-qrcode-plugin-barcode-view"},[o("br"),o("Barcode",{attrs:{value:e.value,displayValue:"false"}},[o("div",{staticStyle:{padding:"15px 20px",margin:"5px 10px","background-color":"#fef0f0","border-radius":"6px",color:"#f56c6c","font-size":"30px"}},[e._v("条形码不支持中文")])])],1),o("div",[o("div",{staticClass:"chrome-qrcode-plugin-barcode-tips",attrs:{title:e.value}},[e._v(e._s(e.value))]),o("el-button",{staticClass:"chrome-qrcode-plugin-barcode-change-button",attrs:{type:"text"},on:{click:e.clickChange}},[e._v("显示条形码")])],1)])},y=[],C=o("f579"),k=o.n(C),q={components:{Barcode:k.a},props:{value:{type:String,default:""}},methods:{clickChange:function(){this.$emit("clickChange")}}},_=q,S=(o("0432"),Object(u["a"])(_,w,y,!1,null,null,null)),O=S.exports,M=o("75fc"),I={removeMethod:null,setRemoveMethod:function(e){this.removeMethod=e}},j={appDivIsInit:!1,getAllDocment:function(e){return[e].concat(Object(M["a"])(Object(M["a"])(e.querySelectorAll("iframe")).map((function(e){return e.contentDocument})).filter((function(e){return null!=e}))))},moveInit:function(e,t){e.draggable=!0,e.ondragstart=function(e){screenX=e.screenX,screenY=e.screenY};var o=this.getAllDocment(t);o.forEach((function(e){return e.ondragover=function(e){return e.preventDefault()}})),e.ondragend=function(t){e.style.top=t.screenY-screenY+e.offsetTop+"px",e.style.left=t.screenX-screenX+e.offsetLeft+"px"}},removeDoc:function(e,t){while(e.hasChildNodes())e.removeChild(e.firstElementChild);t.body.removeChild(e)},addSuspensionDiv:function(e,t){var o=this;if(1!=this.appDivIsInit){this.appDivIsInit=!0;var n=e.createElement("div");n.setAttribute("style","position:fixed;left: 10px;top: 10px;background-color:  rgb(255, 255, 255); border: 2px solid #a0a0a0; z-index: 9999; border-radius: 10px; padding: 0px 5px 5px 5px");var i=e.createElement("div");i.setAttribute("id",t),n.appendChild(i),e.body.appendChild(n),this.moveInit(n,e),I.setRemoveMethod((function(){o.removeDoc(n,e),o.appDivIsInit=!1}))}}},D=j.getAllDocment,B={name:"app",components:{CloseButton:f,QRCodeView:x,BarCodeView:O},data:function(){return{codeValue:"hello world",showQRCode:!1,showBarCode:!0,domList:[]}},mounted:function(){var e=this;this.init(),setInterval((function(){null==document.onmouseup&&e.init(),e.checkIframeChange(D(document))}),2e3)},methods:{setShowQR:function(){var e=this;this.showBarCode=!1,setTimeout((function(){e.showQRCode=!0}),200)},setShowBar:function(){var e=this;this.showQRCode=!1,setTimeout((function(){e.showBarCode=!0}),200)},closeDiv:function(){I.removeMethod()},init:function(){console.log("qrcode init"),this.changeIframeList(D(document))},checkIframeChange:function(e){e.length!=this.domList.length&&this.changeIframeList(e);var t=!0,o=!1,n=void 0;try{for(var i,r=this.domList[Symbol.iterator]();!(t=(i=r.next()).done);t=!0){var c=i.value;if(e.indexOf(c)<0){this.changeIframeList(e);break}}}catch(a){o=!0,n=a}finally{try{t||null==r.return||r.return()}finally{if(o)throw n}}},changeIframeList:function(e){var t=this;console.log("find iframe dom"),this.domList=e,this.domList.forEach((function(e){e.onmouseup=function(){t.addOnmouseupGetSelect(e)},e.onmousemove=function(){t.addOnmouseupGetSelect(e)}}))},addOnmouseupGetSelect:function(e){var t=this;this.getText(e),e.onmouseup=function(){t.getText(e)}},getText:function(e){var t=e.getSelection().toString();""!=t&&(this.codeValue=t)}}},L=B,Q=(o("e580"),Object(u["a"])(L,i,r,!1,null,"b3d96244",null)),R=Q.exports,E=o("5c96"),T=o.n(E);o("0fae");n["default"].use(T.a);var V="qrcode-chrome-plug-in";function $(){j.addSuspensionDiv(document,V),new n["default"]({render:function(e){return e(R)}}).$mount("#"+V)}n["default"].config.productionTip=!1,chrome.runtime.onMessage.addListener((function(e,t,o){$(),o(!0)}))},"5d3b":function(e,t,o){var n=o("ec88");"string"===typeof n&&(n=[[e.i,n,""]]),n.locals&&(e.exports=n.locals);var i=o("499e").default;i("2794371a",n,!0,{sourceMap:!1,shadowMode:!1})},"6d9c":function(e,t,o){t=e.exports=o("2350")(!1),t.push([e.i,".chrome-qrcode-plugin-close-button{border:none;float:right;padding:5px;padding-bottom:0;cursor:pointer;padding-right:2px}.chrome-qrcode-plugin-close-button:hover{fill:#409eff;background:none;color:#409eff}",""])},"6efd":function(e,t,o){var n=o("d41b");"string"===typeof n&&(n=[[e.i,n,""]]),n.locals&&(e.exports=n.locals);var i=o("499e").default;i("13ea65be",n,!0,{sourceMap:!1,shadowMode:!1})},"8e86":function(e,t,o){var n=o("6d9c");"string"===typeof n&&(n=[[e.i,n,""]]),n.locals&&(e.exports=n.locals);var i=o("499e").default;i("a45cc106",n,!0,{sourceMap:!1,shadowMode:!1})},9798:function(e,t,o){var n=o("9ef2");"string"===typeof n&&(n=[[e.i,n,""]]),n.locals&&(e.exports=n.locals);var i=o("499e").default;i("ac9edc12",n,!0,{sourceMap:!1,shadowMode:!1})},"9ef2":function(e,t,o){t=e.exports=o("2350")(!1),t.push([e.i,".chrome-qrcode-plugin-div[data-v-b3d96244]{padding:0;margin:0}",""])},d41b:function(e,t,o){t=e.exports=o("2350")(!1),t.push([e.i,".chrome-qrcode-plugin-qrcode-view{width:300px;height:330px}.chrome-qrcode-plugin-qrcode-tips{width:200px;overflow:hidden;text-overflow:ellipsis;white-space:nowrap;float:left;padding:5px;line-height:30px;font-family:黑体}.chrome-qrcode-plugin-qrcode-change-button{padding:5px;float:right;background-color:#fff;font-family:黑体}",""])},e580:function(e,t,o){"use strict";var n=o("9798"),i=o.n(n);i.a},e86c:function(e,t,o){"use strict";var n=o("6efd"),i=o.n(n);i.a},ec88:function(e,t,o){t=e.exports=o("2350")(!1),t.push([e.i,".chrome-qrcode-plugin-barcode-tips{width:200px;overflow:hidden;text-overflow:ellipsis;white-space:nowrap;float:left;padding:5px;line-height:30px;font-family:黑体}.chrome-qrcode-plugin-barcode-change-button{padding:5px;float:right;background-color:#fff;font-family:黑体}",""])}});