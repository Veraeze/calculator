const calculators = document.querySelector('.calculator')
const keys = document.querySelector(".calc-keys")
const display = document.querySelector('.screen')
const open = document.querySelector(".inner")
const container = document.querySelector(".initial")
const hide = document.querySelector(".blink")

open.addEventListener('click', () => {
 
  container.style.display = 'none'
  hide.style.display = 'block';
  calculators.style.display = 'block';

})

keys.addEventListener('click', e => {
const key = e.target
const action = key.dataset.action
const keyContent = key.textContent
const displayedNum = hide.textContent
const previousKeyType = calculators.dataset.previousKeyType

if (!action) {
    console.log('number key!')
    if (displayedNum === '0') {
        displayedNum = keyContent
    }
    else if (displayedNum === '0'|| previousKeyType === 'operator') {
        hide.textContent = keyContent
    } 
    else {
        hide.textContent = displayedNum + keyContent
    }

  }

if (
    action === 'add' ||
    action === 'subtract' ||
    action === 'multiply' ||
    action === 'divide'
  ) {
    console.log('operator key!')
    key.classList.add('is-depressed')
    calculators.dataset.previousKeyType = 'operator'
    calculators.dataset.firstValue = displayedNum
    calculators.dataset.operator = action
  }
 
  if (action === 'decimal') {

    console.log('decimal key!')
    hide.textContent = displayedNum + '.'

  }
  
  if (action === 'clear') {
    console.log('clear key!')
  }
  
  if (action === 'calculate') {
    console.log('equal key!')
    const secondValue = displayedNum

  }
})

keys.addEventListener('click', e => {
    if (e.target.matches('button')) {
      const key = e.target
      
      Array.from(key.parentNode.children)
        .forEach(k => k.classList.remove('is-depressed'))
    }
    
  })

