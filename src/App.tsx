import React, { useEffect, useState } from 'react'
import './App.css'
import { CurrentWeather } from './types/Forecast'
import {
  CitiesSearch,
  CurrentWeatherItem,
  Header,
  LoadingWeatherItem,
  MessageCard,
} from './components'
import useDataApi from './hooks/useDataApi'
import { Box, Stack } from '@mui/material'
import { GeoLocation } from './types/GeoLocation'
import GeoLocationContext from './context/GeoLocationContext'

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

  const appid = '37a7c895746a4830cc3456b2b7438659'

  useEffect(() => {
    if (!geoLocation.lat || !geoLocation.lon) return
    doFetchForecast(
      `https://api.openweathermap.org/data/2.5/weather?lat=${geoLocation.lat}&lon=${geoLocation.lon}&appid=${appid}&units=metric&cnt=5`,
    )
  }, [geoLocation])

  // const dataCurrWeather = mockCurrWeather
  // const isLoadingCurrWeather = false
  // const isErrorCurrWeather = false

  return (
    <GeoLocationContext.Provider value={geoLocation}>
      <Header />
      <Stack direction='column' alignItems='center' justifyContent='center' sx={{ mt: 2 }}>
        <CitiesSearch onChange={setGeoLocation} />
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
          <MessageCard severity='info' text='Please enable geolocation' />
        )}
      </Stack>
    </GeoLocationContext.Provider>
  )
}

export default App
