// ==UserScript==
// @name        Netflix Pause Removal
// @namespace   *://www.netflix.com
// @version     1.1.0
// @grant       none
// @description Automatically clicks "continue playing"
// ==/UserScript==
setInterval(function(){}, 9999); //Dummy SetInterval (Gets cleared during netflix's load events)
setInterval(function(){try{document.getElementsByClassName("button continue-playing")[0].click()}catch(e){}}, 33);
