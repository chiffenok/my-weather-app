import React from 'react'
import { format } from 'date-fns'
import { DailyForecast } from '../types/Forecast'

interface Props {
  item: DailyForecast
}

const DailyForecastItem = ({ item }: Props) => {
  const { dt, main } = item
  const { temp } = main

  const dateFormated = format(new Date(dt), 'EEE dd.MM')

  return (
    <li>
      {dateFormated} <br />
      {temp}
    </li>
  )
}

export default DailyForecastItem
