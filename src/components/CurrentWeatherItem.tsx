import React from 'react'
import { format, fromUnixTime } from 'date-fns'
import { CurrentWeather } from '../types/Forecast'
import { Box, Divider, Paper, Stack, Typography } from '@mui/material'
import WeatherIcon from './WeatherIcon'

interface Props {
  item: CurrentWeather
}

const CurrentWeatherItem = ({ item }: Props) => {
  const { main, weather, wind, clouds } = item
  const { temp, humidity } = main
  const cWeather = weather[0]

  const dateFormatted = format(fromUnixTime(item.dt), 'EEE H:mm')
  const tempFormatted = Math.round(temp)

  return (
    <Box minWidth={500}>
      <Paper elevation={5} sx={{ p: 3, borderRadius: 4 }}>
        <Stack spacing={1.5} divider={<Divider orientation='horizontal' flexItem />}>
          <Box>
            <Typography variant='h4'>{item.name + ', ' + item.sys.country}</Typography>
            <Typography variant='h5'>{dateFormatted}</Typography>
          </Box>

          <Stack direction='row' alignItems='stretch' justifyContent='space-between'>
            <Box>
              <Stack direction='row' alignItems='center'>
                <WeatherIcon iconId={cWeather.icon} />
                <Typography variant='h4'>{tempFormatted}&#8451;</Typography>
              </Stack>
              <Typography variant='body2'>{`${cWeather.main}, ${cWeather.description}`}</Typography>
            </Box>
            <Box sx={{ textAlign: 'right', mt: 1 }}>
              <Typography variant='body2'>Wind: {wind.speed} m/sec</Typography>
              <Typography variant='body2'>Humidity: {humidity}&#37;</Typography>
              <Typography variant='body2'>Clouds: {clouds.all}&#37;</Typography>
            </Box>
          </Stack>
        </Stack>
      </Paper>
    </Box>
  )
}

export default CurrentWeatherItem
