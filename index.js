import { arrKeyCode, arrKey, arrCode, arrKeyRus, lang } from "./data-code.js";
import { mouseHandler, keyboardHandler } from "./handlers.js";
import { renderKeyboard, addButtons } from "./render-keyboard.js";


let newArrKey = [];
arrKey.forEach(element => {
    const el = element.toUpperCase();
    newArrKey.push(el);
});

let newArrKeyRu = [];
arrKeyRus.forEach(element => {
    const el = element.toUpperCase();
    newArrKeyRu.push(el);
});
console.log(newArrKey);

document.body.insertAdjacentHTML("afterend",renderKeyboard(arrKeyCode, arrKey));
addButtons(arrKeyCode, arrKey, arrCode, arrKeyRus);

document.addEventListener('DOMContentLoaded', ()=> {
    const TEXT_AREA = document.querySelector(".textarea");    
    let capsLock = document.querySelector(`#keyboard .button[data-key="CapsLock"]`);
    

    document.addEventListener('keydown', function(event) {
        let current = event.key;
        // console.log(current);
        if( event.ctrlKey  && event.altKey) {

            if(lang.language === 'eu'){
                lang.language = 'ru';
                addButtons(arrKeyCode, arrKeyRus, arrCode);
            } else if(lang.language === 'ru'){
                lang.language = 'eu'
                addButtons(arrKeyCode, arrKey, arrCode);
            }                  
        }
        
        if (current == "CapsLock" && !capsLock.classList.contains('big') && lang.language == 'ru'){
            capsLock.classList.toggle("big")
            addButtons(arrKeyCode, newArrKeyRu, arrCode);
        } else
        
        if (current == "CapsLock" && capsLock.classList.contains('big') && lang.language == 'ru'){
            capsLock.classList.toggle("big")
            addButtons(arrKeyCode, arrKeyRus, arrCode);
        } else
        
        if (current == "CapsLock" && !capsLock.classList.contains('big') && lang.language == 'eu'){
            capsLock.classList.toggle("big")
            addButtons(arrKeyCode, newArrKey, arrCode);
        } else
        
        if (current == "CapsLock" && capsLock.classList.contains('big') && lang.language == 'eu'){
            capsLock.classList.toggle("big")
            addButtons(arrKeyCode, arrKey, arrCode);
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
