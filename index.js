import { arrKeyCode, arrKey, arrCode, arrKeyRus } from "./data-code.js";
import { mouseHandler, keyboardHandler } from "./handlers.js";
import { renderKeyboard, addButtons } from "./render-keyboard.js";


let newArrKey = [];
arrKey.forEach(element => {
    const el = element.toUpperCase();
    newArrKey.push(el);
});
console.log(newArrKey);

document.body.insertAdjacentHTML("afterend",renderKeyboard(arrKeyCode, arrKey));

document.addEventListener('DOMContentLoaded', ()=> {
    const TEXT_AREA = document.querySelector(".textarea");    
    addButtons(arrKeyCode, arrKey, arrCode, arrKeyRus);
    
    let capsLock = document.querySelector(`#keyboard .button[data-key="CapsLock"]`);

    document.addEventListener('keydown', function(event) {
        let current = event.key;
        console.log(current);
        if (current == "CapsLock" && !capsLock.classList.contains('big')){
            capsLock.classList.toggle("big")
            addButtons(arrKeyCode, newArrKey, arrCode, arrKeyRus);
        } else 
        if (current == "CapsLock" && capsLock.classList.contains('big')){
            capsLock.classList.toggle("big")
            addButtons(arrKeyCode, arrKey, arrCode, arrKeyRus);
        }
        if(current == TEXT_AREA) {
            TEXT_AREA.preventDefault();
            keyboardHandler(event, TEXT_AREA);
        }

        keyboardHandler(event, TEXT_AREA);
    });

    document.querySelectorAll(".button").forEach(function (element) {        

        element.addEventListener('click', (event) => {            
            mouseHandler(event, TEXT_AREA);
        });

    });

    
})
