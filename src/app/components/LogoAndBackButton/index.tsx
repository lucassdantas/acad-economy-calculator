import React from 'react'
import { MdArrowCircleLeft } from 'react-icons/md'


interface LogoAndBackButtonProps{
  currentStep:number;
  decreaseStep:any;
  formSteps:any;
  currentSubstep:number;
  setIsAppStarted:any;
  isInTransictionState:boolean;
}
export const LogoAndBackButton = ({currentStep, decreaseStep, formSteps, currentSubstep, setIsAppStarted, isInTransictionState}:LogoAndBackButtonProps) => {
  return (
    <div className='py-12 text-center w-full flex justify-between items-center mb-18 z-10'>
      <div className="w-1/3">
        {!isInTransictionState&&<MdArrowCircleLeft className='text-acad-blue cursor-pointer' size={50} onClick={() => decreaseStep(formSteps, currentStep, currentSubstep, setIsAppStarted)}/>}
      </div>
      <div className='w-1/3 text-center flex justify-center'>
        <img src='/imgs/acad-logo.png' alt='Acad Logotipo' className='max-w-[158px] '/>
      </div>
      <div className='w-1/3'></div>
    </div>
  )
}
