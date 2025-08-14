import type { Weather } from "../../hooks/useWeather"

type WeatherDetailsProps = {
  weather: Weather
}

export default function WeatherDetails({weather} : WeatherDetailsProps) {
  return (
    <div>WeatherDetails</div>
  )
}
