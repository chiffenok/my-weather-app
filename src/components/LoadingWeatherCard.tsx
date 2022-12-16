import React from 'react'
import { Skeleton } from '@mui/material'
import WeatherCard from './WeatherCard'

const LoadingWeatherItem = () => {
  const Header = (
    <>
      <Skeleton width={200} height={40} />
      <Skeleton width={120} height={35} />
    </>
  )

  const Temperature = <Skeleton width={120} height={65} />

  const Description = <Skeleton width={110} height={20} />

  const ExtraInformation = (
    <>
      <Skeleton width={100} />
      <Skeleton width={100} />
      <Skeleton width={100} />
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

export default LoadingWeatherItem
