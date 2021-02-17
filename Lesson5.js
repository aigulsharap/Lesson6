const body = document.querySelector('body')

const createInput = (text) => {
    const div = document.createElement('div')

    const span = document.createElement('span')
    span.textContent = text
    div.append(span)
    
    const input = document.createElement('input')
    input.type = 'text'
    div.append(input)

    body.append(div)

    return input
}

const input1 = createInput('Длина изделия, см.: ')
const input2 = createInput('Длина рукава, см.: ')

const result = document.createElement('p')
body.append(result)

const calculate = () => {
    const summ = +input1.value + +input2.value + 30
    result.textContent = `Расход ткани ${summ}`
}

input1.addEventListener("input", calculate)
input2.addEventListener("input", calculate)