declare const useDataApi: <T>(
  url: string | null,
  initialState?: T,
) => [
  {
    data?: T
    isLoading: boolean
    isError: boolean
  },
  (url: string) => Promise<void>,
]

export default useDataApi
