/* Detect zoom, based on https://github.com/tombigel/detect-zoom
IE, opera, firefox was cutted */
!function(e,n,o){"use strict";"undefined"!=typeof module&&module.exports?module.exports=o():"function"==typeof define&&define.amd?define("detect-zoom",function(){return o()}):e[n]=o()}(window,"detectZoom",function(){function n(){return window.devicePixelRatio||1}function e(){var e=Math.round(window.outerWidth/window.innerWidth*100)/100;return{zoom:e,devicePxPerCssPx:e*n()}}function o(){var e=Math.round(document.documentElement.clientWidth/window.innerWidth*100)/100;return{zoom:e,devicePxPerCssPx:e*n()}}function t(){var e=(90==Math.abs(window.orientation)?screen.height:screen.width)/window.innerWidth;return{zoom:e,devicePxPerCssPx:e*n()}}var i,r=(i=function(){return{zoom:1,devicePxPerCssPx:1}},window.chrome&&!(window.opera||0<=navigator.userAgent.indexOf(" Opera"))?i=e:0<Object.prototype.toString.call(window.HTMLElement).indexOf("Constructor")?i=o:"orientation"in window&&"webkitRequestAnimationFrame"in window&&(i=t),i);return{zoom:function(){return r().zoom}}});