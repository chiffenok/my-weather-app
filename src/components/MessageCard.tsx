import React from 'react'
import { Alert, AlertTitle, Box, Paper, Stack } from '@mui/material'

interface Props {
  severity: 'info' | 'error'
  text: string
}

const WeatherCard = ({ severity, text }: Props) => {
  return (
    <Box minWidth={500} height={186}>
      <Paper elevation={5} sx={{ p: 3, borderRadius: 4, height: '100%' }}>
        <Stack spacing={1.5} alignItems='center' justifyContent='center' sx={{ height: '100%' }}>
          <Alert severity={severity}>
            <AlertTitle sx={{ textTransform: 'capitalize' }}>{severity}</AlertTitle>
            {text}
          </Alert>
        </Stack>
      </Paper>
    </Box>
  )
}

export default WeatherCard
