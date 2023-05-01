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

document.body.insertAdjacentHTML("afterend",renderKeyboard(arrKeyCode, arrKey));
addButtons(arrKeyCode, arrKey, arrCode, arrKeyRus);

document.addEventListener('DOMContentLoaded', ()=> {
     
    const TEXT_AREA = document.querySelector(".textarea");    
    let capsLock = document.querySelector(`#keyboard .button[data-key="CapsLock"]`);
    
    
    document.addEventListener('keydown', function(event) {
        let current = event.key;
        let target = event.target;

        if( event.shiftKey  && event.altKey) {

            if (lang.language === 'eu') {
                addButtons(arrKeyCode, arrKeyRus, arrCode);
                lang.language = 'ru';
                localStorage.setItem('lang', JSON.stringify(lang));
            } else
            if (lang.language === 'ru') {
                addButtons(arrKeyCode, arrKey, arrCode);
                lang.language = 'eu';
                localStorage.setItem('lang', JSON.stringify(lang));
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

        if(target == TEXT_AREA) {
            TEXT_AREA.preventDefault();
            keyboardHandler(event, TEXT_AREA);
        } 
        keyboardHandler(event, TEXT_AREA);
        
    });

    document.addEventListener('click', (event) => {  
        let current = event.target; 
        
        mouseHandler(event, TEXT_AREA);
            
    });  
});
