(function(e){function t(t){for(var s,o,i=t[0],c=t[1],l=t[2],d=0,f=[];d<i.length;d++)o=i[d],Object.prototype.hasOwnProperty.call(n,o)&&n[o]&&f.push(n[o][0]),n[o]=0;for(s in c)Object.prototype.hasOwnProperty.call(c,s)&&(e[s]=c[s]);u&&u(t);while(f.length)f.shift()();return r.push.apply(r,l||[]),a()}function a(){for(var e,t=0;t<r.length;t++){for(var a=r[t],s=!0,i=1;i<a.length;i++){var c=a[i];0!==n[c]&&(s=!1)}s&&(r.splice(t--,1),e=o(o.s=a[0]))}return e}var s={},n={app:0},r=[];function o(t){if(s[t])return s[t].exports;var a=s[t]={i:t,l:!1,exports:{}};return e[t].call(a.exports,a,a.exports,o),a.l=!0,a.exports}o.m=e,o.c=s,o.d=function(e,t,a){o.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:a})},o.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},o.t=function(e,t){if(1&t&&(e=o(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var a=Object.create(null);if(o.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var s in e)o.d(a,s,function(t){return e[t]}.bind(null,s));return a},o.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return o.d(t,"a",t),t},o.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},o.p="/";var i=window["webpackJsonp"]=window["webpackJsonp"]||[],c=i.push.bind(i);i.push=t,i=i.slice();for(var l=0;l<i.length;l++)t(i[l]);var u=c;r.push([0,"chunk-vendors"]),a()})({0:function(e,t,a){e.exports=a("56d7")},"56d7":function(e,t,a){"use strict";a.r(t);a("e260"),a("e6cf"),a("cca6"),a("a79d");var s=a("2b0e"),n=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("v-app",[a("v-content",[a("Home")],1)],1)},r=[],o=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("v-container",[a("v-row",{staticClass:"text-center justify-center"},[a("v-col",{staticClass:"mb-5",attrs:{cols:"12"}},[a("p",{staticClass:"display-2 font-weight-bold mb-3"},[e._v(" COVID-19 U.S. ")])]),a("v-col",{staticClass:"mb-5 red--text",attrs:{cols:"12"}},[a("p",{staticClass:"font-weight-regular"},[e._v(" New ")]),a("h2",{staticClass:"display-3 font-weight-bold mb-3"},[e._v(" "+e._s(e.newConfirmed)+" ")])]),a("v-col",{staticClass:"mb-5 red--text text--darken-4",attrs:{cols:"12"}},[a("p",{staticClass:"subheading font-weight-regular"},[e._v(" Confirmed ")]),a("h2",{staticClass:"display-3 font-weight-bold mb-3"},[e._v(" "+e._s(e.totalConfirmed)+" ")])]),a("v-col",{staticClass:"mb-5 green--text",attrs:{cols:"12"}},[a("p",{staticClass:"subheading font-weight-regular"},[e._v(" Recovered ")]),a("h2",{staticClass:"display-3 font-weight-bold mb-3"},[e._v(" "+e._s(e.totalRecovered)+" ")])]),a("v-col",{staticClass:"mb-5 blue-grey--text text--darken-3",attrs:{cols:"12"}},[a("p",{staticClass:"subheading font-weight-regular"},[e._v(" Deceased ")]),a("h2",{staticClass:"display-3 font-weight-bold mb-3"},[e._v(" "+e._s(e.totalDeaths)+" ")])]),a("v-col",{staticClass:"mb-5",attrs:{cols:"12"}},[a("div",[e._v("Updated: "+e._s(e.updatedTime))])])],1)],1)},i=[],c=(a("d3b7"),a("ac1f"),a("25f0"),a("5319"),a("96cf"),a("1da1")),l={name:"Home",data:function(){return{minutesPerHour:60,hoursPerDay:24,yesterdayConfirmed:0,updated:0,newConfirmed:0,totalConfirmed:0,newRecovered:0,totalRecovered:0,newDeaths:0,totalDeaths:0,headers:[{text:"States",align:"start",sortable:!1,value:"state"},{text:"Confirmed",value:"cases"},{text:"Test",value:"tests"},{text:"Deceased",value:"deaths"}],states:[{state:"New York",cases:247215,todayCases:6174,deaths:18298,todayDeaths:627,active:205030,tests:617555,testsPerOneMillion:31478},{state:"New Jersey",cases:85301,todayCases:3881,deaths:4202,todayDeaths:132,active:79828,tests:172543,testsPerOneMillion:19426},{state:"Massachusetts",cases:38077,todayCases:1705,deaths:1706,todayDeaths:146,active:28253,tests:162241,testsPerOneMillion:23754},{state:"Pennsylvania",cases:32734,todayCases:1003,deaths:1237,todayDeaths:135,active:30847,tests:158854,testsPerOneMillion:12419},{state:"California",cases:31430,todayCases:712,deaths:1175,todayDeaths:28,active:28905,tests:246400,testsPerOneMillion:6294},{state:"Michigan",cases:31424,todayCases:633,deaths:2391,todayDeaths:83,active:25796,tests:113800,testsPerOneMillion:11429},{state:"Illinois",cases:30357,todayCases:1197,deaths:1290,todayDeaths:31,active:28461,tests:143318,testsPerOneMillion:11178}]}},computed:{updatedTime:function(){var e=new Date(this.updated),t=e.toLocaleDateString("en-US")+" "+e.toLocaleTimeString("en-US")+" PDT";return t}},created:function(){this.fetchData()},methods:{fetchData:function(){var e=this;return Object(c["a"])(regeneratorRuntime.mark((function t(){var a,s,n,r,o,i;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,fetch("https://corona.lmao.ninja/v2/countries/USA");case 3:return a=t.sent,t.next=6,a.json();case 6:if(s=t.sent,n=new Date,r=n.getTimezoneOffset(),o=null,i=null,!(n.getHours()===e.hoursPerDay-r&&n.getHours()>=e.minutesPerHour/2||n.getHours()>=e.hoursPerDay-r)){t.next=19;break}return t.next=14,fetch("https://corona.lmao.ninja/v2/countries/USA?yesterday=true");case 14:return o=t.sent,t.next=17,o.json();case 17:i=t.sent,e.yesterdayConfirmed=i.todayCases;case 19:e.updated=s.updated,e.newConfirmed=e.numberWithCommas(s.todayCases+e.yesterdayConfirmed),e.totalConfirmed=e.numberWithCommas(s.cases),e.totalRecovered=e.numberWithCommas(s.recovered),e.totalDeaths=e.numberWithCommas(s.deaths),t.next=29;break;case 26:t.prev=26,t.t0=t["catch"](0),console.error(t.t0);case 29:case"end":return t.stop()}}),t,null,[[0,26]])})))()},numberWithCommas:function(e){return e.toString().replace(/\B(?=(\d{3})+(?!\d))/g,",")}}},u=l,d=a("2877"),f=a("6544"),h=a.n(f),p=a("62ad"),v=a("a523"),m=a("0fd9"),y=Object(d["a"])(u,o,i,!1,null,null,null),b=y.exports;h()(y,{VCol:p["a"],VContainer:v["a"],VRow:m["a"]});var C={name:"App",components:{Home:b},data:function(){return{}}},g=C,w=a("7496"),x=a("a75b"),_=Object(d["a"])(g,n,r,!1,null,null,null),D=_.exports;h()(_,{VApp:w["a"],VContent:x["a"]});var O=a("f309");s["a"].use(O["a"]);var P=new O["a"]({});s["a"].config.productionTip=!1,new s["a"]({vuetify:P,render:function(e){return e(D)}}).$mount("#app")}});
//# sourceMappingURL=app.d90b33b1.js.map