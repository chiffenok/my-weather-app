import React, { SetStateAction, useState } from 'react'
import { GeoLocation } from '../types/GeoLocation'

interface Props {
  onChange: React.Dispatch<SetStateAction<GeoLocation>>
}

const CitiesSearch = ({ onChange }: Props) => {
  const [geoLocationError, setGeoLocationError] = useState<string | null>(null)
  const [geoLocationLoading, setGeoLocationLoading] = useState<boolean>(false)

  const getLocation = () => {
    setGeoLocationError(null)
    if (!navigator.geolocation) {
      setGeoLocationError('Geolocation is not supported by your browser')
    } else {
      setGeoLocationLoading(true)
      navigator.geolocation.getCurrentPosition(
        (position) => {
          setGeoLocationLoading(false)
          onChange({ lat: position.coords.latitude, lon: position.coords.longitude })
        },
        () => {
          setGeoLocationError('Unable to retrieve your location')
        },
      )
    }
  }
  return (
    <>
      <button onClick={getLocation}>GeoLocation</button>
      {geoLocationError && <p>{geoLocationError}</p>}
      {geoLocationLoading && <p>geoLocationLoading...</p>}
    </>
  )
}

export default CitiesSearch
