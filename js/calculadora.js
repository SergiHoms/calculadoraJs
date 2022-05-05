// Si al apretar un número, si solo hay un cero en la pantalla y el número que
// he apretado es diferente a 0, entonces sustituir el valor de display. Si el 
// número apretado es igual a 0 entonces no hacer nada. 

// Si se pulsa el botón de borrar el último caracter y sólo queda un caracter
// entonces la pantalla se sustituirá por el valor 0

// Si se pulsa el boton de punto y no hay ningún en la pantalla sólo se puede 
// escribir un punto, si hay un operador en la pantall sólo se puede escribir
// dos puntos.  

// Si hay un operador en la pantalla y se pulsa un operador, si este es diferente
// al operador que hay en la pantalla entonces, si el último caracter de la pantalla 
// es un operador se sustituirá por el nuevo, en cambio si el último caracte de la pantalla 
// es un número se hará el cálculo y se añadirá después el nuevo operador. 

let numbers = document.querySelectorAll('.number');
let operators = document.querySelectorAll('.operator');
let point = document.querySelector('.point');
let calculate = document.querySelector('.calculate');
let remove = document.querySelector('.remove');
let removeLast = document.querySelector('.remove-last');
let display = document.querySelector('.display');

numbers.forEach( number => {

    number.addEventListener("click", () => {
        if (display.value == "0") {

            display.value = number.dataset.value;
        } else {

            display.value += number.dataset.value;
        }
    });
    
})
operators.forEach( operator => {
    operator.addEventListener("click", () => {
        display.value += operator.dataset.value;
    })
});

point.addEventListener("click", () => {
    display.value += point.dataset.value;
    

    
});

calculate.addEventListener("click", () => {
    display.value = eval(display.value);
});

remove.addEventListener("click", () => {
    display.value = 0;
});

removeLast.addEventListener("click", () => {

    if (display.value.length > 1) {
        display.value = display.value.slice(0,-1);
    }
    else {
        display.value = "0";
    }

});
