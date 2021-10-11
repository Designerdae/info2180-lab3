"use strict";
window.onload = function(){
   var items = document.getElementById("board").children;

   for (var a = 0; i < items.length; a++){
       items[a].classList.add('.square');
   }

}
