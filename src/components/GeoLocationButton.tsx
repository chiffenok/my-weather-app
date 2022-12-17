import { CircularProgress, IconButton, Tooltip } from '@mui/material'
import React, { SetStateAction, useState } from 'react'
import { GeoLocation } from '../types/GeoLocation'
import GpsNotFixedIcon from '@mui/icons-material/GpsNotFixed'
import GpsOffIcon from '@mui/icons-material/GpsOff'

interface Props {
  onGeoLocationChange: React.Dispatch<SetStateAction<GeoLocation>>
}

const GeoLocationButton = ({ onGeoLocationChange }: Props) => {
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
          onGeoLocationChange({ lat: position.coords.latitude, lon: position.coords.longitude })
        },
        () => {
          setGeoLocationLoading(false)
          setGeoLocationError('Unable to retrieve your location. Please, give permissions')
        },
      )
    }
  }

  if (geoLocationLoading) return <CircularProgress />

  if (geoLocationError)
    return (
      <Tooltip title={geoLocationError}>
        <IconButton onClick={getLocation} color='error' aria-label='error getting location'>
          <GpsOffIcon />
        </IconButton>
      </Tooltip>
    )

  return (
    <IconButton onClick={getLocation} color='primary' aria-label='set you location'>
      <GpsNotFixedIcon />
    </IconButton>
  )
}

export default GeoLocationButton
