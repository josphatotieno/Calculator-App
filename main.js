const numBtns = document.querySelectorAll('.num-btn');
const operatorBtns = document.querySelectorAll('.operator-btn');
const equalsBtn = document.querySelector('.equals-btn')
const clearBtn = document.querySelector('.clear-btn');
const display = document.querySelector('#display');

numBtns.forEach(numBtn => {
    numBtn.addEventListener('click', (e) => {
        display.textContent += e.target.textContent;
    })
});

let firstNum = '';
let operator = '';
let secondNum = '';

operatorBtns.forEach(operatorBtn => {
    
    operatorBtn.addEventListener('click', (e) => {
    
        if(display.textContent !== '') {
            firstNum = display.textContent;
        } else if(/[*]/.test(display.textContent)) {
            multiply(firstNum,secondNum);
        }

        display.textContent += e.target.textContent;
        operator = e.target.textContent;
    })

    
})

function operate(firstNum,secondNum,operator) {
    if(operator === '+') {
        add(firstNum,secondNum);
    } else if(operator === '-') {
        substract(firstNum,secondNum);
    } else if(operator === '*') {
        multiply(firstNum,secondNum);
    } else if(operator === '/') {
        divide(firstNum,secondNum);
    }
}

equalsBtn.addEventListener('click', () => {
    if(/[*]/.test(display.textContent)) {
        const indexOfOperator = display.textContent.indexOf('*');
        secondNum = display.textContent.slice(indexOfOperator+1);

    } else if(/[+]/.test(display.textContent)) {
        const indexOfOperator = display.textContent.indexOf('+');
        secondNum = display.textContent.slice(indexOfOperator+1);

    } else if(/[-]/.test(display.textContent)) {
        const indexOfOperator = display.textContent.indexOf('-');
        secondNum = display.textContent.slice(indexOfOperator+1);

    } else if(/[/]/.test(display.textContent)) {
        const indexOfOperator = display.textContent.indexOf('/');
        secondNum = display.textContent.slice(indexOfOperator+1);
    } 

    operate(firstNum,secondNum,operator);

});

function add(num1,num2) {
    display.textContent = parseInt(num1) + parseInt(num2);
}

function substract(num1,num2) {
    display.textContent = num1 - num2;
}

function divide(num1,num2) {
    display.textContent = num1 / num2;
}

function multiply(num1,num2) {
    display.textContent = num1 * num2;
}

clearBtn.addEventListener('click', () => {
    display.textContent = '';
})
