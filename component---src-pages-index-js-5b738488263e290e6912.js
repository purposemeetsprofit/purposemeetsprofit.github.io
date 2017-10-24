webpackJsonp([35783957827783],{88:function(e,t){"use strict";var a={childContextTypes:!0,contextTypes:!0,defaultProps:!0,displayName:!0,getDefaultProps:!0,mixins:!0,propTypes:!0,type:!0},r={name:!0,length:!0,prototype:!0,caller:!0,callee:!0,arguments:!0,arity:!0},n=Object.defineProperty,l=Object.getOwnPropertyNames,s=Object.getOwnPropertySymbols,o=Object.getOwnPropertyDescriptor,i=Object.getPrototypeOf,c=i&&i(Object);e.exports=function e(t,u,f){if("string"!=typeof u){if(c){var d=i(u);d&&d!==c&&e(t,d,f)}var m=l(u);s&&(m=m.concat(s(u)));for(var h=0;h<m.length;++h){var p=m[h];if(!(a[p]||r[p]||f&&f[p])){var g=o(u,p);try{n(t,p,g)}catch(e){}}}return t}return t}},58:function(e,t){function a(){throw new Error("setTimeout has not been defined")}function r(){throw new Error("clearTimeout has not been defined")}function n(e){if(u===setTimeout)return setTimeout(e,0);if((u===a||!u)&&setTimeout)return u=setTimeout,setTimeout(e,0);try{return u(e,0)}catch(t){try{return u.call(null,e,0)}catch(t){return u.call(this,e,0)}}}function l(e){if(f===clearTimeout)return clearTimeout(e);if((f===r||!f)&&clearTimeout)return f=clearTimeout,clearTimeout(e);try{return f(e)}catch(t){try{return f.call(null,e)}catch(t){return f.call(this,e)}}}function s(){p&&m&&(p=!1,m.length?h=m.concat(h):g=-1,h.length&&o())}function o(){if(!p){var e=n(s);p=!0;for(var t=h.length;t;){for(m=h,h=[];++g<t;)m&&m[g].run();g=-1,t=h.length}m=null,p=!1,l(e)}}function i(e,t){this.fun=e,this.array=t}function c(){}var u,f,d=e.exports={};!function(){try{u="function"==typeof setTimeout?setTimeout:a}catch(e){u=a}try{f="function"==typeof clearTimeout?clearTimeout:r}catch(e){f=r}}();var m,h=[],p=!1,g=-1;d.nextTick=function(e){var t=new Array(arguments.length-1);if(arguments.length>1)for(var a=1;a<arguments.length;a++)t[a-1]=arguments[a];h.push(new i(e,t)),1!==h.length||p||n(o)},i.prototype.run=function(){this.fun.apply(null,this.array)},d.title="browser",d.browser=!0,d.env={},d.argv=[],d.version="",d.versions={},d.on=c,d.addListener=c,d.once=c,d.off=c,d.removeListener=c,d.removeAllListeners=c,d.emit=c,d.prependListener=c,d.prependOnceListener=c,d.listeners=function(e){return[]},d.binding=function(e){throw new Error("process.binding is not supported")},d.cwd=function(){return"/"},d.chdir=function(e){throw new Error("process.chdir is not supported")},d.umask=function(){return 0}},178:function(e,t,a){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}function n(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function l(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function s(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}t.__esModule=!0;var o=a(4),i=r(o),c=a(90),u=(r(c),function(e){function t(){return n(this,t),l(this,e.apply(this,arguments))}return s(t,e),t.prototype.render=function(){return i.default.createElement("div",null,i.default.createElement("div",{className:"row mb0 black p-40"},i.default.createElement("div",{className:"col s12 center-align"},i.default.createElement("div",{className:"container"},i.default.createElement("p",{className:"f-16 center-align white-text"},"Powered By"),i.default.createElement("a",{href:"https://app.fownders.com/",className:"brand-logo"},i.default.createElement("img",{className:"responsive-img",src:"https://fowndershub.imgix.net/hubfs/Fownders%20Logos/White-Fownders-Logo-Footer.png",height:55,width:160}))))))},t}(o.Component));t.default=u,e.exports=t.default},181:function(e,t,a){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}t.__esModule=!0;var n=a(4),l=r(n),s=a(85),o=(r(s),a(178)),i=r(o),c=function(){return l.default.createElement("div",null,l.default.createElement("div",{className:"section pfp-bg"},l.default.createElement("div",{className:"container p-40"},l.default.createElement("div",{className:"row mb0"},l.default.createElement("div",{className:"col s12 center-align"},l.default.createElement("img",{src:"https://www.fownders.co/hubfs/Fownders%20Logos/PMP-logo.svg",alt:"Purpose Meets Profit",height:175}),l.default.createElement("h1",{className:"f-38 white-text text-uppercase"},"Purpose Meets Profit "),l.default.createElement("p",{className:"f-18 white-text justify-text"},"We have all heard it before, follow your passion! That’s cool, but what if your passion doesn’t pay the bills? Well, who says you have to choose between making a difference and making a profit?"),l.default.createElement("p",{className:"f-18 white-text justify-text"}," Welcome to the Purpose Meets Profit podcast! Hosted by two millennial entrepreneurs, Logan Cohen and Gerard Adams, who let their purpose drive them while the profit keeps the lights on!"),l.default.createElement("p",{className:"f-18 white-text justify-text"},"Gerard is a serial entrepreneur and philanthropist who continues to innovate even with multiple successful exits under his belt. While Logan is a social impact entrepreneur who is sharing her learning experiences while in the pursuit of startup greatness."),l.default.createElement("p",{className:"f-18 white-text justify-text"},"Oh, and things get interesting… did we mention that Gerard is an investor in Logan’s company?"),l.default.createElement("p",{className:"f-18 white-text justify-text"},"Tune in for a refreshing, purpose-driven take on entrepreneurship!",l.default.createElement("br",null)))),l.default.createElement("div",{className:"row mb0 p-20"},l.default.createElement("div",{className:"col s6 right-align"},l.default.createElement("a",{href:"https://soundcloud.com/purposemeetsprofit/"},l.default.createElement("img",{src:"../static/soundcloud-button.png",alt:"",height:52}))),l.default.createElement("div",{className:"col s6 left-align"},l.default.createElement("a",{href:"https://itunes.apple.com/us/podcast/purpose-meets-profit/id1293556525?mt=2"},l.default.createElement("img",{src:"../static/itunes.png",alt:"",height:52})))))),l.default.createElement("div",{className:"container"},l.default.createElement("div",{className:"row mb0 p-40"},l.default.createElement("div",{className:"col s12 m4 left-align"},l.default.createElement("img",{className:"img-reverse",src:"https://fownders.s3.us-east-2.amazonaws.com/gerard-thumbnail.jpg",alt:"Gerard Adams"})),l.default.createElement("div",{className:"col s12 m8 left-align"},l.default.createElement("h3",{className:"f-32 turquoise-text"},"Gerard Adams"),l.default.createElement("p",{className:"f-18 turquoise-text justify-text"},"Gerard, also known as The Millennial Mentor™, is a thought leader, serial entrepreneur, angel investor, and philanthropist. His purpose is simple: to inspire other Millennials to leverage their passion to create the successful lifestyles they dream of. I became a self-made multi-millionaire at 24, but not without overcoming obstacles, fear, and self-doubt. I left college early, after a semester to be exact, to pave my own path."),l.default.createElement("div",{className:"col s1 m1 p0"},l.default.createElement("a",{href:"https://www.youtube.com/channel/UCTlTCi6PIs1D9BSpC-oA4lQ"},l.default.createElement("i",{className:"fa fa-youtube-play fa-lg grey-text-2","aria-hidden":"true"}))),l.default.createElement("div",{className:"col s1 m1 p0"},l.default.createElement("a",{href:"https://twitter.com/iamgerardadams?lang=en"},l.default.createElement("i",{className:"fa fa-twitter fa-lg grey-text-2","aria-hidden":"true"}))),l.default.createElement("div",{className:"col s1 m1 p0"},l.default.createElement("a",{href:"https://www.facebook.com/gerard.adams?ref=br_rs"},l.default.createElement("i",{className:"fa fa-facebook-square fa-lg grey-text-2","aria-hidden":"true"}))),l.default.createElement("div",{className:"col s1 m1 p0"},l.default.createElement("a",{href:"https://www.instagram.com/gerardadams/?hl=en"},l.default.createElement("i",{className:"fa fa-instagram fa-lg grey-text-2","aria-hidden":"true"}))))),l.default.createElement("hr",{className:"mb0"}),l.default.createElement("div",{className:"row mb0 p-40"},l.default.createElement("div",{className:"col s12 m4 left-align"},l.default.createElement("img",{className:"img-reverse",src:"https://fownders.s3.us-east-2.amazonaws.com/logan-cohen.jpg",alt:"Logan Cohen"})),l.default.createElement("div",{className:"col s12 m8 left-align"},l.default.createElement("h3",{className:"f-32 turquoise-text"},"Logan Cohen"),l.default.createElement("p",{className:"f-18 turquoise-text justify-text"},"Logan is a co-founder and co-CEO of KÜDZOO, the free mobile app that connects brands with Gen. Z through an educational lens. On KÜDZOO, students submit their grades, attendance, grade average improvement, and good habits for KÜDZOO Cash that they can use to go shopping for real rewards."),l.default.createElement("p",{className:"f-18 turquoise-text justify-text"},"With over half a million students using KÜDZOO, Logan is spearheading an in-class version, KÜDZOOVERIFIED, so that schools can use KÜDZOO’s services as an engagement resource."),l.default.createElement("p",{className:"f-18 turquoise-text justify-text"},"Logan’s leadership responsibilities include guiding the vision, strategy, and ensuring the execution of value creating milestones for KÜDZOO. She received dual degrees in Finance and International Business from Florida International University. Logan was named to Forbes 30 Under 30 in education for the class of 2016, Magic Johnson’s 32 under 32, and CIO’s Top 20 Female Entrepreneurs to Watch in 2017."),l.default.createElement("p",{className:"f-18 turquoise-text justify-text"},"Get Logan on her soapbox by asking about gender equality (especially in the funding gap!). She couldn’t agree more with Claire Underwood that flats are only for running, her sarcasm is an acquired taste, and if it were up to her - sriracha would be an accepted food group!"),l.default.createElement("div",{className:"col s1 m1 p0"},l.default.createElement("a",{href:"https://www.youtube.com/channel/UCFiGdBg1DHHsKMQJmPJoh_Q"},l.default.createElement("i",{className:"fa fa-youtube-play fa-lg grey-text-2","aria-hidden":"true"}))),l.default.createElement("div",{className:"col s1 m1 p0"},l.default.createElement("a",{href:"https://twitter.com/loganecohen?lang=en"},l.default.createElement("i",{className:"fa fa-twitter fa-lg grey-text-2","aria-hidden":"true"}))),l.default.createElement("div",{className:"col s1 m1 p0"},l.default.createElement("a",{href:"https://www.facebook.com/LoganCohen?ref=br_rs"},l.default.createElement("i",{className:"fa fa-facebook-square fa-lg grey-text-2","aria-hidden":"true"}))),l.default.createElement("div",{className:"col s1 m1 p0"},l.default.createElement("a",{href:"https://www.instagram.com/logansee/?hl=en"},l.default.createElement("i",{className:"fa fa-instagram fa-lg grey-text-2","aria-hidden":"true"})))))),l.default.createElement("div",{className:"brand-grey-2"},l.default.createElement("div",{className:"container p-40"},l.default.createElement("div",{className:"row mb0"},l.default.createElement("div",{className:"col s12 left-align mobile-center"},l.default.createElement("h3",{className:"f-32 turquoise-text m0"},"Our Latest Podcast ",l.default.createElement("a",{className:"hide-on-small-only",href:"https://itunes.apple.com/us/podcast/purpose-meets-profit/id1293556525"},l.default.createElement("i",{className:"f-22 fa fa-apple grey-text-3 left-align","aria-hidden":"true"}))," ",l.default.createElement("a",{className:"hide-on-small-only",href:"https://soundcloud.com/purposemeetsprofit/lets-define-success"},l.default.createElement("i",{className:"f-22 fa fa-soundcloud grey-text-3 right-align","aria-hidden":"true"})))),l.default.createElement("div",{className:"col s6 right-align hide-on-med-and-up"},l.default.createElement("a",{href:"https://itunes.apple.com/us/podcast/purpose-meets-profit/id1293556525"},l.default.createElement("i",{className:"fa fa-apple fa-lg grey-text-3 left-align","aria-hidden":"true"}))),l.default.createElement("div",{className:"col s6 left-align hide-on-med-and-up"},l.default.createElement("a",{href:"https://soundcloud.com/purposemeetsprofit/lets-define-success"},l.default.createElement("i",{className:"fa fa-soundcloud fa-lg grey-text-3 right-align","aria-hidden":"true"}))),l.default.createElement("div",{className:"col s12 left-align mobile-center"},l.default.createElement("p",{className:"f-18 grey-text-5 bold-text"},"Navigating Fundraising (Getting Scrappy & Making Money!)"))),l.default.createElement("div",{className:"row mb0"},l.default.createElement("div",{className:"col s12 center-align"},l.default.createElement("br",null),l.default.createElement("iframe",{width:"100%",height:450,scrolling:"no",frameBorder:"no",src:"https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/users/336266105&color=%2359d8cd&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true"}))))),l.default.createElement(i.default,null))};t.default=c,e.exports=t.default}});
//# sourceMappingURL=component---src-pages-index-js-5b738488263e290e6912.js.map