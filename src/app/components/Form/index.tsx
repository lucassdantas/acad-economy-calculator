import { BlueForm, YellowForm } from '@/app/components/BackgroundForms'
import React from 'react'

export const Form = () => {
  return (
    <div>
      <YellowForm className='absolute top-0 left-0'/>
      <BlueForm className='absolute bottom-0 right-0'/>
    </div>
  )
}
