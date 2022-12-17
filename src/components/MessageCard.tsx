import React from 'react'
import { Alert, AlertTitle, Paper, Stack } from '@mui/material'

interface Props {
  severity: 'info' | 'error'
  text: string
}

const WeatherCard = ({ severity, text }: Props) => {
  return (
    <Paper elevation={5} sx={{ p: 3, borderRadius: 4, height: 186 }}>
      <Stack spacing={1.5} justifyContent='center' sx={{ height: '100%' }}>
        <Alert severity={severity}>
          <AlertTitle sx={{ textTransform: 'capitalize' }}>{severity}</AlertTitle>
          {text}
        </Alert>
      </Stack>
    </Paper>
  )
}

export default WeatherCard
