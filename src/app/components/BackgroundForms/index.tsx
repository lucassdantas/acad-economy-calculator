import React from 'react'

export const BlueForm = ({className=''}:{className?:string}) => {
  return (
    <svg width="78" height="284" viewBox="0 0 78 284" fill="none" xmlns="http://www.w3.org/2000/svg" className={'-z-10 '+className}>
      <path d="M109.751 0.200788L333.979 256.244L0.124877 322.41L109.751 0.200788Z" fill="#003F6B"/>
    </svg>
  )
}
export const YellowForm = ({className=''}:{className?:string}) => {
  return (
    <svg width="63" height="286" viewBox="0 0 63 286" fill="none" xmlns="http://www.w3.org/2000/svg" className={'-z-10 ' + className}>
      <path d="M62.4325 -48.0271L-7.16564 285.129L-260.888 58.2771L62.4325 -48.0271Z" fill="#FBB040"/>
    </svg>
  )
}
export const BlueAndYellowForms = ({className='', yellowFormClassName='absolute top-0 left-0', blueFormClassName='absolute bottom-0 right-0'}:{className?:string, yellowFormClassName?:string, blueFormClassName?:string}) => {
  return (
    <>
      <YellowForm className={yellowFormClassName}/>
      <BlueForm className={blueFormClassName}/>
    </>
  )
}


