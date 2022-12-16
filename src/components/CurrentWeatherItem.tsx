import React from 'react'
import { format } from 'date-fns'
import { CurrentWeather } from '../types/Forecast'

interface Props {
  item: CurrentWeather
}

const CurrentWeatherItem = ({ item }: Props) => {
  const { main } = item
  const { temp } = main

  const dateFormated = format(new Date(item.dt), 'EEE dd.MM')

  return (
    <li>
      {dateFormated} <br />
      {temp}
    </li>
  )
}

export default CurrentWeatherItem
