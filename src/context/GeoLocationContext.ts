import { createContext, useContext } from 'react'
import { GeoLocation } from '../types/GeoLocation'

export const GeoLocationContext = createContext<GeoLocation | null>(null)

export const useGeoLocation = () => useContext(GeoLocationContext)

export default GeoLocationContext
