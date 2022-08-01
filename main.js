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

            if(/[*]/.test(display.textContent)) {
                findFirstAndSecondNum()
            }
            console.log(findSecondNum(),secondNum);
            firstNum = display.textContent;

            display.textContent += e.target.textContent;
            operator = e.target.textContent;

        } 
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
    findSecondNum();

    operate(firstNum,secondNum,operator);

});


function findSecondNum() {
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
}

function findFirstAndSecondNum() {
    if(/[*]/.test(display.textContent)) {
       firstNum = display.textContent.split('*')[0];
       secondNum = display.textContent.split('*')[1];

       operate(firstNum,secondNum,operator)


    } else if(/[+]/.test(display.textContent)) {
        firstNum = display.textContent.split('+')[0];
        secondNum = display.textContent.split('+')[1];

         operate(firstNum,secondNum,operator)

    } else if(/[-]/.test(display.textContent)) {
        firstNum = display.textContent.split('-')[0];
        secondNum = display.textContent.split('-')[1];

        operate(firstNum,secondNum,operator);

    } else if(/[/]/.test(display.textContent)) {
        firstNum = display.textContent.split('/')[0];
        secondNum = display.textContent.split('/')[1];

        operate(firstNum,secondNum,operator);
    } 
}



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
