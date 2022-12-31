import { createSlice } from '@reduxjs/toolkit'
// eslint-disable-next-line no-duplicate-imports
import type { PayloadAction } from '@reduxjs/toolkit'
import { GeoLocation } from '../types/GeoLocation'

export interface LocationState {
  location: GeoLocation
}

const initialState: LocationState = {
  location: {
    lat: null,
    lon: null,
  },
}

export const locationState = createSlice({
  name: 'counter',
  initialState,
  reducers: {
    setLocation: (state, action: PayloadAction<GeoLocation>) => {
      state.location = action.payload
    },
  },
})

export const { setLocation } = locationState.actions

export default locationState.reducer
