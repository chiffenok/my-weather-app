import React, { useEffect, useState } from 'react'
import './App.css'
import { CurrentWeather } from './types/Forecast'
import { CitiesSearch, CurrentWeatherItem } from './components'
import useDataApi from './hooks/useDataApi'
import Stack from '@mui/material/Stack'
import { GeoLocation } from './types/GeoLocation'
import GeoLocationContext from './context/GeoLocationContext'

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

  return (
    <GeoLocationContext.Provider value={geoLocation}>
      <Stack direction='column' alignItems='center' justifyContent='center' height='100vh'>
        <CitiesSearch onChange={setGeoLocation} />
        <p>
          Location key:{' '}
          {geoLocation.lat || geoLocation.lon
            ? geoLocation.lat + ',' + geoLocation.lon
            : 'No location'}
        </p>
        <p>City: {dataCurrWeather?.name + ', ' + dataCurrWeather?.sys.country}</p>
        {isLoadingCurrWeather && <p>CurrWeather Loading...</p>}
        {!isLoadingCurrWeather && isErrorCurrWeather && <p>CurrWeather Error</p>}
        {dataCurrWeather ? <CurrentWeatherItem item={dataCurrWeather} /> : <p>Choose the city</p>}
      </Stack>
    </GeoLocationContext.Provider>
  )
}

export default App
