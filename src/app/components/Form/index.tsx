'use client'
import { BlueAndYellowForms} from '@/app/components/BackgroundForms'
import { ProgressItems } from '@/app/components/Form/ProgressItems'
import { formSteps } from '@/app/components/Form/utils'
import React, { useState } from 'react'

export const Form = () => {
  const [academyName, setAcademyName] = useState<string>('')
  const [currentStep, setCurrentStep] = useState<number>(2)
  const [currentSubstep, setCurrentSubstep] = useState<number>(1)
  const [currentSubStepTotal, setCurrentSubstepTotal] = useState<number>(3)
  console.log(formSteps(academyName))
  return (
    <div className='h-screen  w-[90%] max-w-lg'>
      <BlueAndYellowForms/>
      <div className='py-12 text-center w-full flex justify-center mb-18'>
        <img src='/imgs/acad-logo.png' alt='Acad Logotipo' className='max-w-[158px] '/>
      </div>
      <div className='flex justify-center '>
        <ProgressItems currentStep={currentStep} currentStepProgress={(currentSubstep/currentSubStepTotal)*35}/>
      </div>
    </div>
  )
}
