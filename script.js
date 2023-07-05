const btn = document.getElementById('btn')
const input = document.getElementById('text')
const square = document.getElementById('square')
const eBtn = document.getElementById('e_btn')
const inputRange = document.getElementById('range')
const spanRange = document.getElementById('range-span') 
const circle = document.getElementById('circle') 

let numberRange

const handler = (event) => {
    changeColorSquare()
}

const inputRangeHandler = (event) => {
    spanRange.textContent = event.target.value
    numberRange = event.target.value
    sizeCircle()
}

const sizeCircle = () =>{
    circle.style.width = numberRange + '%'
    circle.style.height = numberRange + '%'
}

const changeColorSquare = () =>{
    square.style.background = input.value
}

btn.addEventListener('click', handler)
inputRange.addEventListener('input', inputRangeHandler)

eBtn.style.display = 'none'









