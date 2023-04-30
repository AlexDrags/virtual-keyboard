/**
 * 
 * @param {*} renderKeyboard ф-я рендера клавиатуры на странице
 */
function renderKeyboard() {
    return `
    <div class="centralizer">
    <p class="title">RSS Виртуальная клавиатура</p>
    <textarea class="body--textarea textarea" id="textarea" rows="5" cols="50"></textarea>
    <div class="body--keyboard keyboard" id="keyboard"></div>
    <p class="description">Клавиатура создана в&nbsp;операционной системе Windows</p>
    <p class="language">Для переключения языка комбинация: левыe ctrl + alt</p>
    </div>
    `
    
};
/**
 * 
 * @param {*} arrKeyCode 
 * @param {*} arrKey 
 * @param {*} arrCode 
 */
function addButtons(arrKeyCode, arrKey, arrCode) {
    let out = '';
    for (let i = 0; i < arrKeyCode.length; i++) {
        out += `<button class="button" data-key="${arrCode[i]}">${arrKey[i]}</button>`;
    }
    document.querySelector(".keyboard").innerHTML = out;
}

export {renderKeyboard, addButtons}