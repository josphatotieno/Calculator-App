const numBtns = document.querySelectorAll('.num-btn');
const operatorBtns = document.querySelectorAll('.operator-btn');
const equalsBtn = document.querySelector('.equals-btn')
const clearBtn = document.querySelector('.clear-btn');
const display = document.querySelector('#display');

numBtns.forEach(numBtn => {
    numBtn.addEventListener('click', (e) => {
        // console.log(e.target.textContent);
        display.textContent += e.target.textContent;
    })
});

let firstNum = '';
let operator = '';
let secondNum = '';

operatorBtns.forEach(operatorBtn => {
    
    operatorBtn.addEventListener('click', (e) => {
        
        // console.log(e.target.textContent);
        if(display.textContent !== '') {
            firstNum = display.textContent;
        }

        // console.log(num,operatorBtn.textContent);
        display.textContent += e.target.textContent;
        operator = e.target.textContent;

        // console.log(firstNum,operator);
    })

    
})



equalsBtn.addEventListener('click', () => {
    if(/[*]/.test(display.textContent)) {
        const indexOfOperator = display.textContent.indexOf('*');
        secondNum = display.textContent.slice(indexOfOperator+1);

        multiply(firstNum,secondNum)
    } else if(/[+]/.test(display.textContent)) {
        const indexOfOperator = display.textContent.indexOf('+');
        secondNum = display.textContent.slice(indexOfOperator+1);

        add(firstNum,secondNum)

    } else if(/[-]/.test(display.textContent)) {
        const indexOfOperator = display.textContent.indexOf('-');
        secondNum = display.textContent.slice(indexOfOperator+1);

        substract(firstNum,secondNum)

    } else if(/[/]/.test(display.textContent)) {
        const indexOfOperator = display.textContent.indexOf('/');
        secondNum = display.textContent.slice(indexOfOperator+1);

        divide(firstNum,secondNum)
    } 

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
