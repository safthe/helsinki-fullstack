import { useState, useEffect } from 'react'
import getWeather from '../services/weather'

const Weather = ({ name, lat, lon }) => {
  const [weather, setWeather] = useState(null)

  useEffect(() => {
    if (lat !== null && lon !== null) {
      getWeather(lat, lon)
      .then(weatherResponse => {
        setWeather(weatherResponse)
      })
      .catch(error => {
        console.log(error)
      })
    }
  }, [])

  if (weather === null) {
    return <div>retreiving weather...</div>
  } else {
    return <div>
      <h2>Weather in {name}</h2>
      <div>temperature: {weather.main.temp} Celcius</div>
      <img
        src={`https://openweathermap.org/img/wn/${weather.weather[0].icon}.png`}
        alt={weather.weather[0].description}
        style={{ width: '100px', height: 'auto' }}
       />
      <div>wind: {weather.wind.speed} m/s</div>
    </div>
  }
}
export default Weather

