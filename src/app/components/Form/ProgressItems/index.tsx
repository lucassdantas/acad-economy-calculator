import { ProgressBar, ProgressContainer } from '@/app/components/Form/ProgressItems/ProgressBar';
import React from 'react'

interface ProgressBarProps{
  currentStep:number;
  currentStepProgress:number;
}
export const ProgressItems = ({currentStep, currentStepProgress}:ProgressBarProps) => {
  const steps = [1,2,3]
  return (
    <div className='flex justify-between gap-4 w-full relative'>
      {steps.map((step, i) => (
        <div key={step} className=''>
          <div className={`relative flex justify-center items-center bg-white rounded-full p-2 shadow-[inset_0px_0px_2px_#1D70B780] `}>
            <span className={`${currentStep >= step? 'bg-acad-blue text-white':' text-acad-gray-dark'} flex items-center justify-center rounded-full border border-acad-blue text-center font-bold text-xl w-[36px] h-[36px] z-40`} >
              {step}
            </span>
          </div>
          {step<steps.length && <ProgressContainer left={step===1? 12:69}/>}
        </div>
      ))}
      {currentStep===1 && <ProgressBar left={12} progress={currentStepProgress} />}
      {currentStep===2 && 
        <>
          <ProgressBar left={16} progress={100} />
          <ProgressBar left={71} progress={currentStepProgress} />
        </>
      }
    </div>
  )
}
