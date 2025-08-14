import { temperatureFormat } from "../../helpers"
import type { Weather } from "../../hooks/useWeather"

type WeatherDetailsProps = {
  weather: Weather
}

export default function WeatherDetails({weather} : WeatherDetailsProps) {
  return (
    <div>
      <h2>Clima de {weather.name}</h2>
      <p>{temperatureFormat(weather.main.temp)}&deg;C</p>
      <div>
        <p>Min:<span>{temperatureFormat(weather.main.temp_min)}&deg;C</span></p>
        <p>Max:<span>{temperatureFormat(weather.main.temp_max)}&deg;C</span></p>
      </div>
    </div>
  )
}
