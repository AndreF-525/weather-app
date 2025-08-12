import axios from "axios"
import {z} from 'zod'
import type { SearchType } from "../types"

//Type Guards o Assertions
//Unknown se utiliza cuando no conoces el tipo de dato que vas a recibir
//Esta funcion verifica todos los tipos de datos que recibe
/* function isWeatherResponse(weather: unknown) : weather is Weather {
  return (
    Boolean(weather) &&
    typeof weather === 'object' &&
    typeof (weather as Weather).name === 'string' &&
    typeof (weather as Weather).main.temp === 'number' &&
    typeof (weather as Weather).main.temp_max === 'number' &&
    typeof (weather as Weather).main.temp_min === 'number'
  )
} */

//ZOD
const Weather = z.object({ //Esto no es un type, es un schema
  name: z.string(),
  main: z.object({
    temp: z.number(),
    temp_max: z.number(),
    temp_min: z.number(),
  })
  })

export default function useWeather() {

  const fetchWeather = async (search: SearchType) => {
    
    const appId = import.meta.env.VITE_API_KEY

    try {
      const geoUrl = `http://api.openweathermap.org/geo/1.0/direct?q=${search.city},${search.country}&appid=${appId}`

      const {data} = await axios(geoUrl)
      //console.log(data)

      const lat = data[0].lat
      const lon = data[0].lon

      const weatherUrl = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${appId}`

      //Castear Resultados
      /* const { data: weatherResult } = await axios<Weather>(weatherUrl)
      console.log(weatherResult.name)
      console.log(weatherResult.main.temp) */

      //Type Guards
      /* const { data: weatherResult } = await axios(weatherUrl)
      const result = isWeatherResponse(weatherResult)
      if (result) {
        console.log(weatherResult.name)
      } else {
        console.log('Respuesta mal formada')
      } */
      
      
      //ZOD
      const { data: weatherResult } = await axios(weatherUrl)
      const result = Weather.safeParse(weatherResult)
      if (result.success) {
        console.log(result.data.name)
        console.log(result.data.main.temp)
      }
    
    } catch (error) {
      console.log(error)
    }
  }

  return {
    fetchWeather
  }
}
