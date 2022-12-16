import React from 'react'
import { Box, Divider, Paper, Stack } from '@mui/material'

interface Props {
  Header: JSX.Element
  Temperature: JSX.Element
  Description: JSX.Element
  ExtraInformation: JSX.Element
}

const WeatherCard = ({ Header, Temperature, Description, ExtraInformation }: Props) => {
  return (
    <Box minWidth={500}>
      <Paper elevation={5} sx={{ p: 3, borderRadius: 4 }}>
        <Stack spacing={1.5} divider={<Divider orientation='horizontal' flexItem />}>
          <Box>{Header}</Box>
          <Stack direction='row' alignItems='stretch' justifyContent='space-between'>
            <Box>
              <Stack direction='row' alignItems='center'>
                {Temperature}
              </Stack>
              {Description}
            </Box>
            <Box sx={{ textAlign: 'right', mt: 1 }}>{ExtraInformation}</Box>
          </Stack>
        </Stack>
      </Paper>
    </Box>
  )
}

export default WeatherCard
