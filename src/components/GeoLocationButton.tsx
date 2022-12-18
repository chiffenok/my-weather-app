import { CircularProgress, IconButton, Tooltip } from '@mui/material'
import React, { SetStateAction, useEffect } from 'react'
import { GeoLocation } from '../types/GeoLocation'
import GpsNotFixedIcon from '@mui/icons-material/GpsNotFixed'
import GpsFixedIcon from '@mui/icons-material/GpsFixed'
import GpsOffIcon from '@mui/icons-material/GpsOff'
import useGeoLocation from '../hooks/useGeoLocation'

interface Props {
  onGeoLocationChange: React.Dispatch<SetStateAction<GeoLocation>>
}

const GeoLocationButton = ({ onGeoLocationChange }: Props) => {
  const { position, geoLocationError, geoLocationLoading, getLocation } = useGeoLocation()

  useEffect(() => {
    if (position) onGeoLocationChange({ lat: position.lat, lon: position.lon })
  }, [position])

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
      {position.lat && position.lon ? <GpsFixedIcon /> : <GpsNotFixedIcon />}
    </IconButton>
  )
}

export default GeoLocationButton
