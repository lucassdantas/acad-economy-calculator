import React, { ReactNode } from 'react'

interface TitleProps {
  children:ReactNode, 
  className?:string,
  tag?:'h1'|'h2'|'h3'|'h4'|'h5'|'h6'
}
export const Title = ({children, className='', tag='h2'}:TitleProps)  => {
  if(tag==='h1') return <h1 className={`text-5xl font-bold  text-acad-blue uppercase  ${className}`}>{children}</h1>
  if(tag==='h2') return <h2 className={`text-3xl font-bold  text-acad-blue uppercase ${className}`}>{children}</h2>
  if(tag==='h3') return <h3 className={`text-2xl font-bold  text-acad-blue uppercase ${className}`}>{children}</h3>
  if(tag==='h4') return <h4 className={`text-xl  font-bold  text-acad-blue uppercase ${className}`}>{children}</h4>
  if(tag==='h5') return <h5 className={`text-lg  font-bold  text-acad-blue uppercase ${className}`}>{children}</h5>
  if(tag==='h6') return <h6 className={`text-base font-bold text-acad-blue uppercase ${className}`}>{children}</h6>
  return                <h2 className={`text-3xl font-bold  text-acad-blue uppercase ${className}`}>{children}</h2>
}
