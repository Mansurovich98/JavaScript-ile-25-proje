let inputBegin = document.querySelector('input[type="text"]')
let button = document.querySelector('input[type="button"]')
let numberContainer = document.querySelector('.numberContainer')

function isPrime(num){
    if(num <= 1) return false
    if(num <= 3) return true
    if(num % 2 === 0 || num % 3 === 0) return false
    let i = 5
    while (i * i <= num){
        if(num % i === 0 || num % (i + 2) === 0) return false
        i += 6
    }
    return true
}

button.addEventListener('click', e => {
    numberContainer.textContent = ""
    document.querySelector('ul').style.display = 'none';

    let theNumber = Number(inputBegin.value)

    try {
        if(isNaN(theNumber)) {
            let warning = document.createElement('div')
            warning.classList.add('nan')
            warning.textContent = "It's not a number!"
            numberContainer.appendChild(warning)
        } else if (!isFinite(theNumber) || theNumber === 0){
            let warning2 = document.createElement('div')
            warning2.classList.add('infiniti')
            warning2.textContent = "Enter a number!"
            numberContainer.appendChild(warning2)
        } else {
            document.querySelector('ul').style.display = 'flex';

            for(let i = 0; i <= theNumber; i++) {
            let number = document.createElement('div')
            number.classList.add('numberBox')
            if(isPrime(i)){
                    number.style.backgroundColor = '#FF6868'
                } else if (i % 2 === 0){
                    number.style.backgroundColor = '#DCFFB7'
                } else {
                    number.style.backgroundColor = '#FFBB64'
                }
                number.textContent = i
                numberContainer.appendChild(number)
            }
        }
    } catch (e) {
        console.log(e.message)
    }
})