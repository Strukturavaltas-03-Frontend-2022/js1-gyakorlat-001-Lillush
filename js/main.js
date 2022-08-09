'use strict';




const handleClick = () => {
  let buttons = document.querySelectorAll(".button");
        for (let i = 0; 1 < buttons.length; i+=1) {
        buttons[i].addEventListener('click', function() {
        console.log(buttons[i].innerHTML);
       })
   }
}

