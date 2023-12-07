const request = require('request')

const forecast = (latitude, longitude,  callback) => {
    const url = 'http://api.weatherstack.com/current?access_key=7556ff0e906c3f4427c6d2290f9aeb18&query= ' + latitude  + ',' + longitude +'&units=f'
    request({url, json: true}, (error, { body }) => {
        if(error) {
            callback('Unable to connect to weather service!', undefined)
        } else if(body.error) {
            callback('Unable to find location.', undefined)
        } else {
            callback(undefined, `${body.current.weather_descriptions[0]}. It is ${body.current.temperature} degrees out. It feels like ${body.current.feelslike} degrees out.`)
        }
    })
}

module.exports = forecast