import { createContext, useContext } from 'react'
import { GeoLocation } from '../types/GeoLocation'

export const GeoLocationContext = createContext<GeoLocation | null>(null)

export const useGeoLocationContext = () => useContext(GeoLocationContext)

export default GeoLocationContext
