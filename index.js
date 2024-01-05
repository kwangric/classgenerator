const options = ['red', 'blue', 'purple', 'white']

const generate = () => {
    const results = Array.from(document.getElementsByClassName('result'))
    results.forEach((result, index) => {
        result.innerText = options[Math.floor(Math.random()*options.length)]
    })
}

document.getElementById('generate').addEventListener('click', generate)