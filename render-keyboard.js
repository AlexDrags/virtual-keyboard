/**
 * 
 * @param {*} renderKeyboard ф-я рендера клавиатуры на странице
 */
function renderKeyboard() {
    return `
    <div class="centralizer">
    <p class="title">Virtual Keyboard</p>
    <textarea class="body--textarea textarea" id="textarea" rows="5" cols="50" value="1"></textarea>
    <div class="body--keyboard keyboard" id="keyboard"></div>
    <p class="description">Клавиатура создана в&nbsp;операционной системе Windows</p>
    <p class="language">Для переключения языка комбинация: AltLeft + ShiftLeft</p>
    </div>
    `    
};
/**
 * 
 * @param {*} arrKeyCode 
 * @param {*} arrKey 
 * @param {*} arrCode 
 */
function addButtons(arrKeyCode, arrKey, arrCode, arrKeyRus) {
    let out = '';
    for (let i = 0; i < arrKeyCode.length; i++) {
        // if(window.navigator.language == "ru-RU") {
        //     out += `<button class="button" data-key="${arrCode[i]}">${arrKeyRus[i]}</button>`;
        // } else if(window.navigator.language == "en-US") {
            out += `<button class="button" data-key="${arrCode[i]}">${arrKey[i]}</button>`;
        // }
    }
    document.querySelector(".keyboard").innerHTML = out;
}

export {renderKeyboard, addButtons}