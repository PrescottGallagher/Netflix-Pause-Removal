setInterval(function(){}, 9999); //Dummy SetInterval (Gets cleared during netflix's load events)
setInterval(function(){try{document.getElementsByClassName("button continue-playing")[0].click()}catch(e){}}, 33);
