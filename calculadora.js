window.addEventListener('load', ()=> {
    const display = document.querySelector('.calculator-display');
    const keypadButtons = document.getElementsByClassName('keypad-button','keypad-button-red','keypad-button-blue');

    const keypadButtonsArray = Array.from(keypadButtons);

    keypadButtonsArray.forEach( (button) => {
        button.addEventListener('click' , ()=> {
            calculadora(button, display)
        })
    })
});

function calculadora(button, display) {
    switch (button.innerHTML) {
        case 'c':
            borrar(display);
            break;
        case '=':
            calcular(display);
            break;
        default:
            actualizar(display, button);
            break;
    }
}

function calcular(display) {
    display.innerHTML = eval(display.innerHTML)
}
function actualizar(display, button){
    if (display.innerHTML == 0); {
        display.innerHTML = '';
    }
    display.innerHTML = display.innerHTML + button.innerHTML;
}
function borrar(display) {
    display.innerHTML = 0;
}