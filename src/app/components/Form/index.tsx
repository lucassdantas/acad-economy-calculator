import { BlueAndYellowForms} from '@/app/components/BackgroundForms'
import { ProgressBar } from '@/app/components/Form/ProgressBar'
import React from 'react'

export const Form = () => {
  return (
    <div className='h-screen  w-[90%] max-w-lg'>
      <BlueAndYellowForms/>
      <div className='py-12 text-center w-full flex justify-center mb-18'>
        <img src='/imgs/acad-logo.png' alt='Acad Logotipo' className='max-w-[158px] '/>
      </div>
      <div className='flex justify-center '>
        <ProgressBar currentStep={1} currentStepProgress={0}/>
      </div>
    </div>
  )
}
