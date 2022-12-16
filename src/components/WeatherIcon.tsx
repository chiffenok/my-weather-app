import React, { ReactElement } from 'react'

import { ReactComponent as Sun } from '../assets/sun.svg'
import { ReactComponent as SunClouds } from '../assets/sun-clouds.svg'
import { ReactComponent as Clouds } from '../assets/clouds.svg'
import { ReactComponent as Rain } from '../assets/rain.svg'
import { ReactComponent as ShowerRain } from '../assets/shower-rain.svg'
import { ReactComponent as Storm } from '../assets/storm.svg'
import { ReactComponent as Mist } from '../assets/mist.svg'
import { ReactComponent as Snow } from '../assets/snow.svg'
import { ReactComponent as Moon } from '../assets/moon.svg'
import { ReactComponent as MoonCloud } from '../assets/moon-cloud.svg'
import { ReactComponent as MoonRain } from '../assets/moon-rain.svg'
import { Box } from '@mui/material'

const WEATHER_ICONS: Record<string, ReactElement> = {
  '01d': <Sun />,
  '02d': <SunClouds />,
  '03d': <Clouds />,
  '04d': <Clouds />,
  '09d': <ShowerRain />,
  '10d': <Rain />,
  '11d': <Storm />,
  '13d': <Snow />,
  '50d': <Mist />,
  '01n': <Moon />,
  '02n': <MoonCloud />,
  '03n': <Clouds />,
  '04n': <Clouds />,
  '09n': <ShowerRain />,
  '10n': <MoonRain />,
  '11n': <Storm />,
  '13n': <Snow />,
  '50n': <Mist />,
}

interface Props {
  iconId: string
}

const WeatherIcon = ({ iconId }: Props) => {
  if (!WEATHER_ICONS[iconId]) return null

  return (
    <Box
      sx={{
        width: '70px',
        ml: -1,
        mb: -1,
      }}
    >
      {WEATHER_ICONS[iconId]}
    </Box>
  )
}

export default WeatherIcon
