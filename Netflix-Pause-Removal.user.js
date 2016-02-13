// ==UserScript==
// @name        Netflix Pause Removal
// @namespace   http://www.netflix.com
// @include     http://www.netflix.com/*
// @version     1.0.2
// @grant       none
// @description Automatically clicks "continue playing"
// ==/UserScript==
setInterval(function(){try{document.getElementsByClassName("button continue-playing")[0].click()}catch(e){}}, 33);
