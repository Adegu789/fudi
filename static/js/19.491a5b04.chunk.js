(window.webpackJsonp=window.webpackJsonp||[]).push([[19],{228:function(e,t,n){"use strict";n.r(t);var r=n(33),o=n.n(r),a=n(55),i=n(3),s=n(4),c=n(6),l=n(5),u=n(7),d=n(28),p=n(0),g=n.n(p),m=n(25),f=n(221),v=n(245),w=n(12),h=n(57),y=n(79),b=function(e){function t(){return Object(i.a)(this,t),Object(c.a)(this,Object(l.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(s.a)(t,[{key:"componentDidMount",value:function(){var e=Object(a.a)(o.a.mark(function e(){var t,n;return o.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:document.querySelector("#mainManifest").setAttribute("href","/delivery-manifest.json"),document.getElementsByTagName("body")[0].classList.add("bg-grey"),(t=this.props.delivery_user).success&&d.messaging.isSupported()&&(n=this.props.saveNotificationToken,h.a.requestPermission().then(Object(a.a)(o.a.mark(function e(){var r;return o.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,h.a.getToken();case 2:r=e.sent,n(r,t.data.id,t.data.auth_token);case 4:case"end":return e.stop()}},e,this)}))).catch(function(e){console.log("Unable to get permission to notify.",e)}),navigator.serviceWorker.addEventListener("message",function(e){return console.log(e)}));case 4:case"end":return e.stop()}},e,this)}));return function(){return e.apply(this,arguments)}}()},{key:"render",value:function(){return window.innerWidth>768?g.a.createElement(v.a,{to:"/"}):this.props.delivery_user.success?g.a.createElement(g.a.Fragment,null,g.a.createElement(m.a,{seotitle:"Delivery Orders",seodescription:localStorage.getItem("seoMetaDescription"),ogtype:"website",ogtitle:localStorage.getItem("seoOgTitle"),ogdescription:localStorage.getItem("seoOgDescription"),ogurl:window.location.href,twittertitle:localStorage.getItem("seoTwitterTitle"),twitterdescription:localStorage.getItem("seoTwitterDescription")}),g.a.createElement(f.default,null)):g.a.createElement(v.a,{to:"/delivery/login"})}}]),t}(p.Component);t.default=Object(w.b)(function(e){return{delivery_user:e.delivery_user.delivery_user}},{saveNotificationToken:y.a})(b)}}]);