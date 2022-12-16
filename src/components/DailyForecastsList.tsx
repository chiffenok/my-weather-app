import React from 'react'
import Forecast from '../types/Forecast'
import DailyForecastItem from './DailyForecastItem'

interface Props {
  data: Forecast
}

const DailyForecastsList = ({ data }: Props) => {
  return (
    <ul>
      {data.list.map((dailyForecast) => {
        return <DailyForecastItem key={dailyForecast.dt} item={dailyForecast} />
      })}
    </ul>
  )
}

export default DailyForecastsList
