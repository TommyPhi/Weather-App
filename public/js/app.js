console.log('Client side js file is loaded')

const weatherform = document.querySelector('form')
const search = document.querySelector('input')
const forecastText = document.getElementById('forecast')
const message1 = document.getElementById('message1')
const message2 = document.getElementById('message2')

weatherform.addEventListener('submit', (e) => {
    e.preventDefault()

    const location = search.value;
    const searchQuery = 'http://localhost:3000/weather?address=$' + location

    message1.innerHTML = 'Loading...'
    message2.innerHTML = ''

    fetch(searchQuery).then((response) => {
        response.json().then((data) => {

            if(data.error) {
                return message1.innerHTML = data.error
            }

            message1.innerHTML = data.location
            message2.innerHTML = data.forecast
        })
    })
})

