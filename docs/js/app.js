!function(){"use strict";var e="undefined"==typeof global?self:global;if("function"!=typeof e.require){var t={},r={},n={},a={}.hasOwnProperty,i=/^\.\.?(\/|$)/,l=function(e,t){for(var r,n=[],a=(i.test(t)?e+"/"+t:t).split("/"),l=0,o=a.length;l<o;l++)r=a[l],".."===r?n.pop():"."!==r&&""!==r&&n.push(r);return n.join("/")},o=function(e){return e.split("/").slice(0,-1).join("/")},u=function(t){return function(r){var n=l(o(t),r);return e.require(n,t)}},s=function(e,t){var n=h&&h.createHot(e),a={id:e,exports:{},hot:n};return r[e]=a,t(a.exports,u(e),a),a.exports},c=function(e){return n[e]?c(n[e]):e},d=function(e,t){return c(l(o(e),t))},f=function(e,n){null==n&&(n="/");var i=c(e);if(a.call(r,i))return r[i].exports;if(a.call(t,i))return s(i,t[i]);throw new Error("Cannot find module '"+e+"' from '"+n+"'")};f.alias=function(e,t){n[t]=e};var p=/\.[^.\/]+$/,v=/\/index(\.[^\/]+)?$/,g=function(e){if(p.test(e)){var t=e.replace(p,"");a.call(n,t)&&n[t].replace(p,"")!==t+"/index"||(n[t]=e)}if(v.test(e)){var r=e.replace(v,"");a.call(n,r)||(n[r]=e)}};f.register=f.define=function(e,n){if(e&&"object"==typeof e)for(var i in e)a.call(e,i)&&f.register(i,e[i]);else t[e]=n,delete r[e],g(e)},f.list=function(){var e=[];for(var r in t)a.call(t,r)&&e.push(r);return e};var h=e._hmr&&new e._hmr(d,f,t,r);f._cache=r,f.hmr=h&&h.wrap,f.brunch=!0,e.require=f}}(),function(){var e;"undefined"==typeof window?this:window;require.register("js/initialize.js",function(e,t,r){"use strict";function n(e){return e&&e.__esModule?e:{"default":e}}function a(e){var t=document.querySelector("#o1").checked,r=document.querySelector("#o2").checked,n=document.querySelector("#o3").checked;console.log(t,r,n),(0,l["default"])(e,!t,!r,!n)}var i=t("./someFile"),l=n(i),o=null,u=28;document.addEventListener("DOMContentLoaded",function(){console.log("initialized");var e=window.location.href.split("/"),t=e[e.length-1];console.log(t);var r=t.match(/^[0-9]+$/);r&&(u=parseInt(t)),console.log(u),a(u++),o=setInterval(function(){var e=u++%360;a(e)},1e4)})}),require.register("js/someFile.js",function(e,t,r){"use strict";function n(e){return e&&e.__esModule?e:{"default":e}}function a(e,t,r,n){function a(e,a,i,u,c,d){if(2e3===u?a.forEach(function(e){return e.value=e.value/u}):a.forEach(function(e){return e.value=Math.log(e.value)}),2e3===u){var f=a[0].date.split("/"),p=(0,l["default"])(f[1]+"/"+f[0]+"/"+f[2]);t?d3.select("#date").text(""):d3.select("#date").text(p.format("DD.MM.YYYY, dddd"))}var v=(d3.extent(a,function(e){return e.value}),d3.scale.linear().domain([0,1]).range([0,s])),g=a.map(function(e,t){return e.time}),h=g.length,y=d3.scale.linear().domain([0,2e3]).range([0,-s]),b=d3.svg.axis().scale(y).orient("left").ticks(n?0:3).tickFormat(function(e){return e+" l/s"}),m=d3.svg.arc().startAngle(function(e,t){return 2*t*Math.PI/h}).endAngle(function(e,t){return 2*(t+1)*Math.PI/h}).innerRadius(0),w=c.selectAll("path").data(a).enter().append("path").each(function(e){e.outerRadius=0}).style("fill",function(e){return i(e.value)}).attr("d",m);if(w.transition().ease("elastic").duration(1e3).delay(function(e,t){return 100*t*d}).attrTween("d",function(e,t){var r=d3.interpolate(e.outerRadius,v(+e.value));return function(n){return e.outerRadius=r(n),m(e,t)}}),r||c.append("circle").attr("r",s).classed("outer",!0).style("fill","none").style("stroke","lightgrey").style("stroke-width","1px"),!r){c.selectAll("line").data(g).enter().append("line").attr("y2",-s-0).style("stroke","lightgrey").style("stroke-width",".5px").attr("transform",function(e,t){return o.includes(e)?"rotate("+360*t/h+")":""})}c.append("g").attr("class","x axis").call(b);var _=1.025*s,x=c.append("g").classed("labels",!0);x.append("def").append("path").attr("id","label-path").attr("d","m0 "+-_+" a"+_+" "+_+" 0 1,1 -0.01 0"),x.selectAll("text").data(g).enter().append("text").style("text-anchor","middle").style("font-weight","bold").style("fill",function(e,t){return"#3e3e3e"}).append("textPath").attr("xlink:href","#label-path").attr("startOffset",function(e,t){return 100*t/h+50/h+"%"}).text(function(e){return!r&&o.includes(e)?e.toUpperCase():""})}var i=960,u=600,s=210,c=(d3.format("s"),d3.scale.linear().domain([0,.75,1.5]).interpolate(d3.interpolateHcl).range([d3.rgb("#ccebc5"),d3.rgb("#b3cde3"),d3.rgb("#fbb4ae")])),d=d3.scale.linear().domain([0,1]).interpolate(d3.interpolateHcl).range([d3.rgb("black"),d3.rgb("blue")]);d3.selectAll("svg").remove();var f=d3.select("body").append("svg").attr("width",i).attr("height",u).append("g").attr("transform","translate("+i/2+","+u/2+")"),p=d3.select("body").append("svg").attr("width",i).attr("height",u).append("g").attr("transform","translate("+i/2+","+u/2+")");d3.csv("data/"+e+".csv",function(e,t){return a(e,t,c,2e3,f,1)}),d3.csv("data_nieder/"+e+".csv",function(e,t){return a(e,t,d,1,p,4)})}Object.defineProperty(e,"__esModule",{value:!0});var i=t("dayjs"),l=n(i);t("dayjs/locale/de"),l["default"].locale("de");var o=["3:00","6:00","9:00","12:00","15:00","18:00","21:00"];e["default"]=a}),require.alias("process/browser.js","process"),e=require("process"),require.register("___globals___",function(e,t,r){window.jQuery=t("jquery"),window.$=t("jquery"),window.bootstrap=t("bootstrap")})}(),require("___globals___"),require("js/initialize");