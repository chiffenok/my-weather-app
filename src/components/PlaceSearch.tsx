import React, { useEffect } from 'react'
import { TextField, Autocomplete } from '@mui/material'
import { REACT_APP_SERVER_URL } from '../config/constants'
import axios from 'axios'
import { GeoLocation } from '../types/GeoLocation'
import { Place } from '../types/Place'

interface Props {
  onGeoLocationChange: React.Dispatch<React.SetStateAction<GeoLocation>>
}

const PlaceSearch = ({ onGeoLocationChange }: Props) => {
  const [value, setValue] = React.useState<Place | null>(null)
  const [inputValue, setInputValue] = React.useState('')
  const [options, setOptions] = React.useState<readonly Place[]>([])

  useEffect(() => {
    let active = true

    if (inputValue === '') {
      setOptions(value ? [value] : [])
      return undefined
    }

    const getData = setTimeout(async () => {
      const response = await axios.get(`${REACT_APP_SERVER_URL}/api/geo?q=${inputValue}`)

      if (active) {
        let newOptions: readonly Place[] = []

        if (value) {
          newOptions = [value]
        }

        if (response) {
          newOptions = [...newOptions, ...response.data]
        }
        setOptions(newOptions)
      }
    }, 800)

    return () => {
      active = false
      clearTimeout(getData)
    }
  }, [value, inputValue])

  const handleSelectChange = (event: React.SyntheticEvent, newValue: Place | null) => {
    setOptions(newValue ? [newValue, ...options] : options)
    setValue(newValue)
    if (newValue) onGeoLocationChange({ lat: newValue.lat, lon: newValue.lon })
  }

  return (
    <Autocomplete
      id='place-search'
      fullWidth
      size='small'
      getOptionLabel={(option) => (typeof option === 'string' ? option : option.name)}
      filterOptions={(x) => x}
      options={options}
      value={value}
      autoComplete
      includeInputInList
      filterSelectedOptions
      onChange={(event, newValue) => {
        handleSelectChange(event, newValue)
      }}
      onInputChange={(event, newInputValue) => {
        setInputValue(newInputValue)
      }}
      renderInput={(params) => <TextField {...params} label='Choose a location' fullWidth />}
      renderOption={(props, option) => (
        <li {...props} key={option.lat + '_' + option.lon}>
          {`${option.name}, ${option.state ? option.state + ', ' : ''}${option.country}`}
        </li>
      )}
    />
  )
}

export default PlaceSearch
