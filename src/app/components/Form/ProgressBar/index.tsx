import React from 'react'

interface ProgressBarProps{
  currentStep:number;
  currentStepProgress:number;
}
export const ProgressBar = ({currentStep,currentStepProgress}:ProgressBarProps) => {

  const steps = [
    1,
    2,
    3
  ]
  return (
    <div className='flex justify-between gap-4 w-full'>
      {steps.map((step, i) => (
        <div className={`flex justify-center items-center rounded-full p-2 shadow-[inset_0_0px_4px_rgba(0,0,0,0.2)]`} key={step}>
          <span className={`${currentStep >= step? 'bg-acad-blue text-white':'text-acad-gray-dark'} flex items-center justify-center rounded-full border border-acad-blue text-center font-bold text-xl w-[36px] h-[36px]`} >
            {step}
          </span>
        </div>
      ))}
    </div>
  )
}
