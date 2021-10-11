"use strict";
window.onload = function(){
   var item = document.getElementById("board").children;

   for (var a = 0; a < item.length; a++){
       item[a].classList.add('.square');
   }

}
