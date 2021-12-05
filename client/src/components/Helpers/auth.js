export const getTokenFromLocalStorage = () => {
  // console.log('Token from LS -> ', window.localStorage.getItem('token'))
  return window.localStorage.getItem('token')
}

export const getPayLoad = () => {
  const token = getTokenFromLocalStorage()
  // console.log('Token', token)
  if (!token) return
  const splitToken = token.split('.')
  // console.log('Split token', splitToken)
  if (splitToken.length < 3) return 
  const payLoadString = splitToken[1]
  //   console.log('Payload !! -->', JSON.parse(atob(payLoadString)))
  // console.log('Payload -> ', payLoadString)
  return JSON.parse(atob(payLoadString))
}

//eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOjN9.HzqWCx2pSqHOiW6lRQeafoTp-jrD_8UVPv6ajBCASQI