webpackJsonp([2827958424305],{92:function(e,t){"use strict";var a={childContextTypes:!0,contextTypes:!0,defaultProps:!0,displayName:!0,getDefaultProps:!0,mixins:!0,propTypes:!0,type:!0},r={name:!0,length:!0,prototype:!0,caller:!0,callee:!0,arguments:!0,arity:!0},n=Object.defineProperty,l=Object.getOwnPropertyNames,s=Object.getOwnPropertySymbols,o=Object.getOwnPropertyDescriptor,c=Object.getPrototypeOf,i=c&&c(Object);e.exports=function e(t,u,f){if("string"!=typeof u){if(i){var d=c(u);d&&d!==i&&e(t,d,f)}var m=l(u);s&&(m=m.concat(s(u)));for(var p=0;p<m.length;++p){var h=m[p];if(!(a[h]||r[h]||f&&f[h])){var g=o(u,h);try{n(t,h,g)}catch(e){}}}return t}return t}},42:function(e,t){function a(){throw new Error("setTimeout has not been defined")}function r(){throw new Error("clearTimeout has not been defined")}function n(e){if(u===setTimeout)return setTimeout(e,0);if((u===a||!u)&&setTimeout)return u=setTimeout,setTimeout(e,0);try{return u(e,0)}catch(t){try{return u.call(null,e,0)}catch(t){return u.call(this,e,0)}}}function l(e){if(f===clearTimeout)return clearTimeout(e);if((f===r||!f)&&clearTimeout)return f=clearTimeout,clearTimeout(e);try{return f(e)}catch(t){try{return f.call(null,e)}catch(t){return f.call(this,e)}}}function s(){h&&m&&(h=!1,m.length?p=m.concat(p):g=-1,p.length&&o())}function o(){if(!h){var e=n(s);h=!0;for(var t=p.length;t;){for(m=p,p=[];++g<t;)m&&m[g].run();g=-1,t=p.length}m=null,h=!1,l(e)}}function c(e,t){this.fun=e,this.array=t}function i(){}var u,f,d=e.exports={};!function(){try{u="function"==typeof setTimeout?setTimeout:a}catch(e){u=a}try{f="function"==typeof clearTimeout?clearTimeout:r}catch(e){f=r}}();var m,p=[],h=!1,g=-1;d.nextTick=function(e){var t=new Array(arguments.length-1);if(arguments.length>1)for(var a=1;a<arguments.length;a++)t[a-1]=arguments[a];p.push(new c(e,t)),1!==p.length||h||n(o)},c.prototype.run=function(){this.fun.apply(null,this.array)},d.title="browser",d.browser=!0,d.env={},d.argv=[],d.version="",d.versions={},d.on=i,d.addListener=i,d.once=i,d.off=i,d.removeListener=i,d.removeAllListeners=i,d.emit=i,d.prependListener=i,d.prependOnceListener=i,d.listeners=function(e){return[]},d.binding=function(e){throw new Error("process.binding is not supported")},d.cwd=function(){return"/"},d.chdir=function(e){throw new Error("process.chdir is not supported")},d.umask=function(){return 0}},66:function(e,t,a){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}function n(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function l(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function s(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}t.__esModule=!0;var o=a(2),c=r(o),i=a(21),u=(r(i),function(e){function t(){return n(this,t),l(this,e.apply(this,arguments))}return s(t,e),t.prototype.render=function(){return c.default.createElement("div",null,c.default.createElement("div",{className:"gradient-bg"},c.default.createElement("div",{className:"container p-40"},c.default.createElement("div",{className:"row mb0"},c.default.createElement("div",{className:"col s12 m6 center-align"},c.default.createElement("h3",{className:"f-22 white-text"},"Ask Me Anything (AMA)"),c.default.createElement("p",{className:"white-text f-22"},"Leave a voicemail with your name, business and question on ",c.default.createElement("a",{className:"f-22 white-text bold-text",href:"tel:862-367-6893"},"(862)367-6893")," for your chance to be featured on a PMP episode!")),c.default.createElement("div",{className:"col s12 m6 center-align"},c.default.createElement("h3",{className:"f-22 white-text"},"Join the Purpose Meets Profit VIP List!"),c.default.createElement("p",{className:"white-text f-22"},"Text PROFIT to 77948 ",c.default.createElement("br",{className:"hide-on-med-and-down"}),"For access to exclusive announcements and giveaways"))))))},t}(o.Component));t.default=u,e.exports=t.default},67:function(e,t,a){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}function n(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function l(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function s(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}t.__esModule=!0;var o=a(2),c=r(o),i=a(21),u=(r(i),function(e){function t(){return n(this,t),l(this,e.apply(this,arguments))}return s(t,e),t.prototype.render=function(){return c.default.createElement("div",null,c.default.createElement("div",{className:"row mb0 black p-40"},c.default.createElement("div",{className:"col s12 center-align"},c.default.createElement("div",{className:"container"},c.default.createElement("p",{className:"f-16 center-align white-text"},"Powered By"),c.default.createElement("a",{href:"https://app.fownders.com/",className:"brand-logo"},c.default.createElement("img",{className:"responsive-img",src:"https://fowndershub.imgix.net/hubfs/Fownders%20Logos/White-Fownders-Logo-Footer.png",height:55,width:160}))))))},t}(o.Component));t.default=u,e.exports=t.default},68:function(e,t,a){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}function n(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function l(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function s(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}t.__esModule=!0;var o=a(2),c=r(o),i=a(21),u=(r(i),function(e){function t(){return n(this,t),l(this,e.apply(this,arguments))}return s(t,e),t.prototype.render=function(){return c.default.createElement("div",null,c.default.createElement("div",{id:"newsletter",className:"gradient-bg"},c.default.createElement("div",{className:"row mb0"},c.default.createElement("div",{className:"col s12 left-align"},c.default.createElement("div",{className:"container p-40"},c.default.createElement("h3",{className:"f-32 white-text"},"Join Our Newsletter"))))))},t}(o.Component));t.default=u,e.exports=t.default},184:function(e,t,a){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}t.__esModule=!0;var n=a(2),l=r(n),s=a(89),o=(r(s),a(67)),c=r(o),i=a(66),u=r(i),f=a(68),d=(r(f),function(){return l.default.createElement("div",null,l.default.createElement("div",{className:"section pfp-bg p-40"},l.default.createElement("div",{className:"container p-40"},l.default.createElement("div",{className:"row mb0 p-40"},l.default.createElement("div",{className:"col s12 center-align"},l.default.createElement("img",{src:"https://www.fownders.co/hubfs/Fownders%20Logos/PMP-logo.svg",alt:"Purpose Meets Profit",height:175}),l.default.createElement("h1",{className:"f-38 white-text text-uppercase"},"Purpose Meets Profit Giveaway!"))))),l.default.createElement("div",{className:"container p-40"},l.default.createElement("div",{className:"row mb0"},l.default.createElement("div",{className:"col s12 center-align"},l.default.createElement("h3",{className:"f-32 turquoise-text"},"Logan and Gerard want to take you to lunch!"),l.default.createElement("p",{className:"f-22 turquoise-text"},"Meetup with Logan and Gerard in NYC for lunch on November 30th! ",l.default.createElement("br",null)," They will review how their business or idea merges Purpose and Profit by: "))),l.default.createElement("div",{className:"row mb0 p-20"},l.default.createElement("div",{className:"col s12 m11 offset-m1 left-align"},l.default.createElement("div",{className:"col s1 m1 right-align"},l.default.createElement("i",{className:"fa fa-caret-right f-18 turquoise-text brand-border-all","aria-hidden":"true"})),l.default.createElement("div",{className:"col s11 m11 left-align"},l.default.createElement("p",{className:"turquoise-text f-18 m0 pb-8"},"Reviewing your mission")),l.default.createElement("div",{className:"col s1 m1 right-align"},l.default.createElement("i",{className:"fa fa-caret-right f-18 turquoise-text brand-border-all","aria-hidden":"true"})),l.default.createElement("div",{className:"col s11 m11 left-align"},l.default.createElement("p",{className:"turquoise-text f-18 m0 pb-8"},"Discussing your business plan.")),l.default.createElement("div",{className:"col s1 m1 right-align"},l.default.createElement("i",{className:"fa fa-caret-right f-18 turquoise-text brand-border-all","aria-hidden":"true"})),l.default.createElement("div",{className:"col s11 m11 left-align"},l.default.createElement("p",{className:"turquoise-text f-18 m0 pb-8"},"Reviewing your overall pitch")),l.default.createElement("div",{className:"col s1 m1 right-align"},l.default.createElement("i",{className:"fa fa-caret-right f-18 turquoise-text brand-border-all","aria-hidden":"true"})),l.default.createElement("div",{className:"col s11 m11 left-align"},l.default.createElement("p",{className:"turquoise-text f-18 m0 pb-8"},"End with “Get Ish Done” tangible next step that you can take ")),l.default.createElement("div",{className:"col s1 m1 right-align"},l.default.createElement("i",{className:"fa fa-caret-right f-18 turquoise-text brand-border-all","aria-hidden":"true"})),l.default.createElement("div",{className:"col s11 m11 left-align"},l.default.createElement("p",{className:"turquoise-text f-18 m0 pb-8"},"Gerard and Logan will each give them a personal book recommendation.")))),l.default.createElement("hr",{className:"mb0"}),l.default.createElement("div",{className:"row mb0 p-40"},l.default.createElement("div",{className:"col s12 center-align"},l.default.createElement("h3",{className:"f-32 turquoise-text"},"How to enter"),l.default.createElement("p",{className:"turquoise-text f-18 m0 pb-8 text-uppercase"},"1. Follow us on Instagram ",l.default.createElement("a",{className:"turquoise-text f-18 m0 pb-8 text-uppercase bold-text",href:"http://instagram.com/purposemeetsprofit",target:"blank"},"@PurposeMeetsProfit")),l.default.createElement("p",{className:"turquoise-text f-18 m0 pb-8 text-uppercase"},"2. Sign up for the Purpose Meets Profit ",l.default.createElement("a",{className:"turquoise-text f-18 m0 pb-8 text-uppercase bold-text",href:"http://www.fownders.co/purposemeetsprofit-newsletter",target:"blank"},"newsletter and giveaway.")),l.default.createElement("p",{className:"turquoise-text f-18 m0 pb-8 text-uppercase"},"3. Text a PROFIT to 77948",l.default.createElement("br",{className:"hide-on-med-and-up"}),l.default.createElement("br",{className:"hide-on-med-and-up"})),l.default.createElement("div",{className:"col s12 center-align"},l.default.createElement("br",null),l.default.createElement("p",{className:"turquoise-text f-14 m0 pb-8"},l.default.createElement("i",null,"*Lunch is covered, but travel not included.  This is not a raffle, “winner” selected based on submission."),l.default.createElement("br",{className:"hide-on-med-and-up"}),l.default.createElement("br",{className:"hide-on-med-and-up"})))))),l.default.createElement("div",{className:"brand-grey-2"},l.default.createElement("div",{className:"container p-40"},l.default.createElement("div",{className:"row mb0"},l.default.createElement("div",{className:"col s12 left-align mobile-center"},l.default.createElement("h3",{className:"f-32 turquoise-text m0"},"Our Latest Podcast ",l.default.createElement("a",{className:"hide-on-small-only",href:"https://itunes.apple.com/us/podcast/purpose-meets-profit/id1293556525"},l.default.createElement("i",{className:"f-22 fa fa-apple grey-text-3 left-align","aria-hidden":"true"}))," ",l.default.createElement("a",{className:"hide-on-small-only",href:"https://soundcloud.com/purposemeetsprofit/lets-define-success"},l.default.createElement("i",{className:"f-22 fa fa-soundcloud grey-text-3 right-align","aria-hidden":"true"})))),l.default.createElement("div",{className:"col s6 right-align hide-on-med-and-up"},l.default.createElement("a",{href:"https://itunes.apple.com/us/podcast/purpose-meets-profit/id1293556525"},l.default.createElement("i",{className:"fa fa-apple fa-lg grey-text-3 left-align","aria-hidden":"true"}))),l.default.createElement("div",{className:"col s6 left-align hide-on-med-and-up"},l.default.createElement("a",{href:"https://soundcloud.com/purposemeetsprofit/lets-define-success"},l.default.createElement("i",{className:"fa fa-soundcloud fa-lg grey-text-3 right-align","aria-hidden":"true"}))),l.default.createElement("div",{className:"col s12 left-align mobile-center"},l.default.createElement("p",{className:"f-18 grey-text-5 bold-text"},"Navigating Fundraising (Getting Scrappy & Making Money!)"))),l.default.createElement("div",{className:"row mb0"},l.default.createElement("div",{className:"col s12 center-align"},l.default.createElement("br",null),l.default.createElement("iframe",{width:"100%",height:450,scrolling:"no",frameBorder:"no",src:"https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/users/336266105&color=%2359d8cd&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true"}))))),l.default.createElement(u.default,null),l.default.createElement(c.default,null))});t.default=d,e.exports=t.default}});
//# sourceMappingURL=component---src-pages-giveaway-js-d5a93baa7588dbbc9df4.js.map