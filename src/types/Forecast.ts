export type Forecast = {
  cod: string
  message: number
  cnt: string
  city: {
    id: number
    name: string
    coord: {
      lat: number
      lon: number
    }
    country: string
    population: 568305
    timezone: 3600
    sunrise: 1671088984
    sunset: 1671123775
  }
  list: DailyForecast[]
}

export type DailyForecast = {
  dt: number
  main: {
    temp: number
  }
}

export type CurrentWeather = {
  dt: number
  main: {
    temp: number
    feels_like: number
    temp_min: number
    temp_max: number
    pressure: number
    sea_level?: number
    grnd_level?: number
    humidity: number
    temp_kf?: number
  }
  weather: {
    id: number
    main: string
    description: string
    icon: string
  }[]

  clouds: {
    all: number
  }
  wind: {
    speed: number
    deg: number
    gust?: number
  }
  visibility: number
  pop?: number
  rain?: {
    type: number
    id: number
    country: string
    sunrise: number
    sunset: number
  }
  sys: {
    type: number
    id: number
    country: string
    sunrise: number
    sunset: number
  }
  timezone: number
  id: number
  name: string
  cod: number
}

export default Forecast
