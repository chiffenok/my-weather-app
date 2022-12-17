import React, { useEffect, useState } from 'react'
import { Box, Container, Paper, Stack } from '@mui/material'
import './App.css'
import { CurrentWeather } from './types/Forecast'
import {
  GeoLocationButton,
  CurrentWeatherItem,
  Header,
  LoadingWeatherItem,
  MessageCard,
  PlaceSearch,
} from './components'
import useDataApi from './hooks/useDataApi'
import { GeoLocation } from './types/GeoLocation'
import GeoLocationContext from './context/GeoLocationContext'
import { REACT_APP_APPID } from './config/constants'

// import mockCurrWeather from './mock-data/mock-curr-weather.json'

function App() {
  const [geoLocation, setGeoLocation] = useState<GeoLocation>({
    lat: null,
    lon: null,
  })

  const [
    { data: dataCurrWeather, isLoading: isLoadingCurrWeather, isError: isErrorCurrWeather },
    doFetchForecast,
  ] = useDataApi<CurrentWeather | undefined>(null, undefined)

  useEffect(() => {
    if (!geoLocation.lat || !geoLocation.lon) return
    doFetchForecast(
      `https://api.openweathermap.org/data/2.5/weather?lat=${geoLocation.lat}&lon=${geoLocation.lon}&appid=${REACT_APP_APPID}&units=metric&cnt=5`,
    )
  }, [geoLocation])

  // const dataCurrWeather = mockCurrWeather
  // const isLoadingCurrWeather = false
  // const isErrorCurrWeather = false

  return (
    <GeoLocationContext.Provider value={geoLocation}>
      <Header />
      <Container maxWidth='sm'>
        <Paper elevation={3} sx={{ p: 3, borderRadius: 4, my: 3 }}>
          <Stack direction='row' spacing={2}>
            <PlaceSearch onGeoLocationChange={setGeoLocation} />
            <GeoLocationButton onGeoLocationChange={setGeoLocation} />
          </Stack>
        </Paper>
        <Box sx={{ position: 'absolute', bottom: 0, right: 0, w: 300, p: 1 }}>
          Location:{' '}
          {geoLocation.lat || geoLocation.lon
            ? geoLocation.lat + ',' + geoLocation.lon
            : 'No location'}
        </Box>
        {isLoadingCurrWeather && <LoadingWeatherItem />}
        {!isLoadingCurrWeather && isErrorCurrWeather && (
          <MessageCard severity='error' text='Error loading data. Please try later' />
        )}
        {dataCurrWeather && !isLoadingCurrWeather && <CurrentWeatherItem item={dataCurrWeather} />}
        {(!geoLocation.lat || !geoLocation.lon) && (
          <MessageCard severity='info' text='Please, choose a city or enable geolocation' />
        )}
      </Container>
    </GeoLocationContext.Provider>
  )
}

export default App
