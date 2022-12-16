import React from 'react'
import { format, fromUnixTime } from 'date-fns'
import { CurrentWeather } from '../types/Forecast'
import { Typography } from '@mui/material'
import WeatherIcon from './WeatherIcon'
import WeatherCard from './WeatherCard'

interface Props {
  item: CurrentWeather
}

const CurrentWeatherItem = ({ item }: Props) => {
  const { main, weather, wind, clouds } = item
  const { temp, humidity } = main
  const cWeather = weather[0]

  const dateFormatted = format(fromUnixTime(item.dt), 'EEE H:mm')
  const tempFormatted = Math.round(temp)

  const Header = (
    <>
      <Typography variant='h4'>{item.name + ', ' + item.sys.country}</Typography>
      <Typography variant='h5'>{dateFormatted}</Typography>
    </>
  )

  const Temperature = (
    <>
      <WeatherIcon iconId={cWeather.icon} />
      <Typography variant='h4'>{tempFormatted}&#8451;</Typography>
    </>
  )

  const Description = (
    <Typography variant='body2'>{`${cWeather.main}, ${cWeather.description}`}</Typography>
  )

  const ExtraInformation = (
    <>
      <Typography variant='body2'>Wind: {wind.speed} m/sec</Typography>
      <Typography variant='body2'>Humidity: {humidity}&#37;</Typography>
      <Typography variant='body2'>Clouds: {clouds.all}&#37;</Typography>
    </>
  )

  return (
    <WeatherCard
      Header={Header}
      Temperature={Temperature}
      Description={Description}
      ExtraInformation={ExtraInformation}
    />
  )
}

export default CurrentWeatherItem
