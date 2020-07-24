const calculatorScreen = document.querySelector('.calculator-screen')

const updateScreen = (number) => {
  calculatorScreen.value = number
}

const numbers = document.querySelectorAll('.number')

const decimal = document.querySelector('.decimal')

inputDecimal = (dot) => {
  if (currentNumber.includes('.')) {
    return
  }
  currentNumber += dot
}

decimal.addEventListener('click', (event => {
  inputDecimal(event.target.value)
  updateScreen(currentNumber)
}))

const operators = document.querySelectorAll('.operator')

const clearBtn = document.querySelector('.all-clear')

const clearAll = () => {
  prevNumber = ''
  calculationOperator = ''
  currentNumber = '0'
}

clearBtn.addEventListener( 'click', () => {
  clearAll()
  updateScreen(currentNumber)
})

const inputOperator = (operator) => {
  if (calculationOperator === '') {
    prevNumber = currentNumber
  }
  calculationOperator = operator
  currentNumber = ''
}

const equalSign = document.querySelector('.equal-sign')

equalSign.addEventListener('click', () => {
  calculate()
  updateScreen(currentNumber)
})

const calculate = () => {
  let result = ''
  switch (calculationOperator) {
    case '+':
      result = parseFloat(prevNumber) + parseFloat(currentNumber)
      break
    case '-':
      result = prevNumber - currentNumber
    case '*':
      result = prevNumber * currentNumber
      break
    case '/':
      result = prevNumber / currentNumber
      break
    default:
      return
  }
  currentNumber = result
  calculationOperator = ''
}

let prevNumber = ''
let calculationOperator = ''
let currentNumber = '0'

numbers.forEach((number) => {
  number.addEventListener('click', () => {
    inputNumber(event.target.value)
    updateScreen(currentNumber)
  })
})

operators.forEach((operator) => {
  operator.addEventListener('click', (event) => {
    inputOperator(event.target.value)
  })
})



const inputNumber = (number) => {
  if (currentNumber === '0') {
    currentNumber = number
  } else {
    currentNumber += number
  }
}