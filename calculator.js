class Calculator {
    constructor(dis1, dis2, dis3) {
        this.dis1 = dis1
        this.dis2 = dis2        
        this.clear()
    }
    clear() {
        this.dis1Element = '0';
        this.dis2Element = '';                  
        this.operation = undefined
    }
    delete() {
        this.dis2Element = this.dis2Element.toString().slice(0, -1)
    }
    numbers(number) {
        if (number === '.' && this.dis2Element.includes('.')) return
        this.dis2Element = this.dis2Element.toString() + number.toString()        
               }
    chooseOperation(operation) {
        if (this.dis2Element === '') return
        if (this.dis1Element !== '') {
            this.compute()
        }
        this.operation = operation
        this.dis1Element = this.dis2Element
        this.dis2Element = ''
    }
    compute() {
        let computation
        const prev = parseFloat(this.dis1Element)
        const current = parseFloat(this.dis2Element)
        if (isNaN(prev) || isNaN(current)) return
        switch (this.operation) {
            case '+':
                computation = prev + current
                break
            case '-':
                computation = prev - current
                break
            case '/':
                computation = prev / current
                break
            case '*':
                computation = prev * current
                break
            case '%':
                computation = prev % current
                break
            default:
                return
        }
        this.dis2Element = computation
        this.operation = undefined
        this.dis1Element = ''
    }        
    updateDisplay() {        
        this.dis2.innerText = this.dis2Element        
        this.dis1.innerText = this.dis1Element      
                
}
}
const num = document.querySelectorAll('#number');
const operation5 = document.querySelectorAll('#operation');
const allClear = document.querySelector('#clear');
const del = document.querySelector('#delete');
const equal = document.querySelector('#equals');
const dis1 = document.querySelector('#previous-operand');
const dis2 = document.querySelector('#current-operand');

const calculator = new Calculator(dis1, dis2)

num.forEach(button => {
    button.addEventListener('click', () => {
        calculator.numbers(button.innerText)
        calculator.updateDisplay()
    })
});

operation5.forEach(button => {
    button.addEventListener('click', () => {
        calculator.chooseOperation(button.innerText)       
        calculator.updateDisplay()
    })
});

equal.addEventListener('click', button => {
    calculator.compute()
    calculator.updateDisplay()
})
allClear.addEventListener('click', button => {
    calculator.clear()
    calculator.updateDisplay()
})
del.addEventListener('click', button => {
    calculator.delete()
    calculator.updateDisplay()
})



