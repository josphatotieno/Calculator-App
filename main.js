const numBtns = document.querySelectorAll('.num-btn');
const operatorBtns = document.querySelectorAll('.operator-btn');
const equalsBtn = document.querySelector('.equals-btn');
const deleteBtn = document.querySelector('.delete-btn')
const clearBtn = document.querySelector('.clear-btn');
const display = document.querySelector('#display');

let firstNum = '';
let operator = '';
let secondNum = '';

numBtns.forEach(numBtn => {
    numBtn.addEventListener('click', (e) => {
        display.textContent += e.target.textContent;
    })
});



operatorBtns.forEach(operatorBtn => {
    
    operatorBtn.addEventListener('click', (e) => {
    
        if(/[^0-9]/.test(display.textContent) === false) {

            firstNum = display.textContent;

            display.textContent += e.target.textContent;
            
        } else if(/[*]/.test(display.textContent) || /[+]/.test(display.textContent) || /[-]/.test(display.textContent) || /[/]/.test(display.textContent)) {
            const regex = /[*](?=[0-9])/;
            const regex2 = /[*](?![0-9])/
            if(regex.test(display.textContent)) {
                findFirstAndSecondNum();
            } else if(regex2.test(display.textContent)){
               display.textContent = display.textContent.replace('*','*')
            }
            
        }

        operator = e.target.textContent;

        // if(display.textContent !== '') {

        //     if(/[*]/.test(display.textContent) || /[+]/.test(display.textContent) || /[-]/.test(display.textContent) || /[/]/.test(display.textContent)) {
        //         const regex = /[*](?=[0-9])/;
        //         const regex2 = /[*](?![0-9])/
        //         if(regex.test(display.textContent)) {
        //             findFirstAndSecondNum();
        //         } else if(regex2.test(display.textContent)){
        //            display.textContent = display.textContent.replace('*','*')
        //         }
                
        //     }
            
        //     firstNum = display.textContent;

        //     display.textContent += e.target.textContent;
        //     operator = e.target.textContent;

        // } 
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
};


deleteBtn.addEventListener('click', () => {
    if(display.textContent !== '') {
        const arr = display.textContent.split('');
        arr.splice(arr.length-1);
        display.textContent = arr.join('');
    }
    
})

clearBtn.addEventListener('click', () => {
    display.textContent = '';
})
