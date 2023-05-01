/**
 * 
 * @param {event.key} event 
 * @param {document.querySelector(".textarea")} TEXT_AREA 
 * @returns значение или эффект нажатия текущей кнопки с клавиатуры
 */
function keyboardHandler(event, TEXT_AREA) {
    
    document.querySelector(`#keyboard .button[data-key="${event.code}"]`).classList.add("button--active");
    setTimeout(() => {
        document.querySelector(`#keyboard .button[data-key="${event.code}"]`).classList.remove("button--active");
    }, 1000);

    

    switch (event.key) {
        case 'Backspace':            
            return  TEXT_AREA.value = TEXT_AREA.value.slice(0, -1);                
        case 'Enter':
            return  TEXT_AREA.value += `\n`;
        case 'Space':
            return  TEXT_AREA.value += ` `;
        case 'Tab':
            return  TEXT_AREA.value += `    `;
        case 'CapsLock':
            return  TEXT_AREA.value += ``;
        case 'OS':
            return  TEXT_AREA.value += ``;
        case 'Control':
            return  TEXT_AREA.value += ``;
        case 'Alt':
            return  TEXT_AREA.value += ``;
        case 'Shift':
            return  TEXT_AREA.value += ``;
        default:
            TEXT_AREA.value += event.key;
    };
};

/**
 * 
 * @param {current.firstChild.data} event 
 * @param {document.querySelector(".textarea")} TEXT_AREA 
 * @returns значение или эффект нажатия текущей кнопки с мыши
 */
function mouseHandler(event, TEXT_AREA) {
    
    let current = event.target;
    current.classList.add("button--active");
    setTimeout(() => {
        current.classList.remove("button--active");
    }, 1000);

    switch (current.dataset.key) {
        case 'Backspace':            
            return  TEXT_AREA.value = TEXT_AREA.value.slice(0, -1);                
        case 'Enter':
            return  TEXT_AREA.value += `\n`;
        case 'Space':
            return  TEXT_AREA.value += ` `;
        case 'Tab':
            return  TEXT_AREA.value += `    `;
        case 'CapsLock':
            return  TEXT_AREA.value += ``;
            // current.classList.toggle("big")
        case 'ControlLeft':
            return  TEXT_AREA.value += ``; 
        case 'ControlRight':
            return  TEXT_AREA.value += ``;           
        case 'OS':
            return  TEXT_AREA.value += ``;
        case 'AltLeft':
            return  TEXT_AREA.value += ``;
        case 'AltRight':
            return  TEXT_AREA.value += ``;
        case 'ShiftLeft':
            return  TEXT_AREA.value += ``;
        case 'ShiftRight':
            return  TEXT_AREA.value += ``;
        default:
            TEXT_AREA.value += current.firstChild.data;
    };
};

export {keyboardHandler, mouseHandler}