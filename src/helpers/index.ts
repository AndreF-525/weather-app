export const temperatureFormat = (temperature: number) : number => {
  const kelivn = 273.15
  return parseInt((temperature - kelivn).toString())
}