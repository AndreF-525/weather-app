import { temperatureFormat } from "../../helpers"
import type { Weather } from "../../hooks/useWeather"
import styles from './WeatherDetails.module.css'

type WeatherDetailsProps = {
  weather: Weather
}

export default function WeatherDetails({weather} : WeatherDetailsProps) {
  return (
    <div className={styles.container}>
      <h2>Clima de {weather.name}</h2>
      <p className={styles.current}>{temperatureFormat(weather.main.temp)}&deg;C</p>
      <div className={styles.temperatures}>
        <p>Min: <span>{temperatureFormat(weather.main.temp_min)}&deg;C</span></p>
        <p>Max: <span>{temperatureFormat(weather.main.temp_max)}&deg;C</span></p>
      </div>
    </div>
  )
}
