import { arrKeyCode, arrKey, arrCode} from "./data-code.js";
import { mouseHandler, keyboardHandler } from "./handlers.js";
import { renderKeyboard, addButtons } from "./render-keyboard.js";

document.body.insertAdjacentHTML("afterend",renderKeyboard(arrKeyCode, arrKey));

document.addEventListener('DOMContentLoaded', ()=> {
    const TEXT_AREA = document.querySelector(".textarea");

    addButtons(arrKeyCode, arrKey, arrCode);

    document.addEventListener('keydown', function(event) {
        keyboardHandler(event, TEXT_AREA);
    });

    document.querySelectorAll(".button").forEach(function (element) {

        element.addEventListener('click', (event) => {
            mouseHandler(event, TEXT_AREA);
        });

    });
})
