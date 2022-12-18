import { useState } from 'react'
import { GeoLocation } from '../types/GeoLocation'

const useGeoLocation = () => {
  const [geoLocationError, setGeoLocationError] = useState<string | null>(null)
  const [geoLocationLoading, setGeoLocationLoading] = useState<boolean>(false)
  const [geoLocation, setGeoLocation] = useState<GeoLocation>({ lat: null, lon: null })

  const getLocation = () => {
    setGeoLocationError(null)
    if (!navigator.geolocation) {
      setGeoLocationError('Geolocation is not supported by your browser')
    } else {
      setGeoLocationLoading(true)
      navigator.geolocation.getCurrentPosition(
        (position) => {
          setGeoLocationLoading(false)
          setGeoLocation({ lat: position.coords.latitude, lon: position.coords.longitude })
        },
        () => {
          setGeoLocationLoading(false)
          setGeoLocationError('Unable to retrieve your location. Please, give permissions')
        },
      )
    }
  }

  return {
    position: { lat: geoLocation.lat, lon: geoLocation.lon },
    geoLocationLoading,
    geoLocationError,
    getLocation,
  }
}

export default useGeoLocation
