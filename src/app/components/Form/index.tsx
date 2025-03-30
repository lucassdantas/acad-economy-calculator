'use client'
import { BlueAndYellowForms} from '@/app/components/BackgroundForms'
import { Button } from '@/app/components/Button'
import { ProgressItems } from '@/app/components/Form/ProgressItems'
import { Title } from '@/app/components/Title'
import React, { useState } from 'react'

export const Form = () => {
  const [academyName, setAcademyName] = useState<string>('')
  const [currentStep, setCurrentStep] = useState<number>(1)
  const [currentSubstep, setCurrentSubstep] = useState<number>(1)
  const [currentSubStepTotal, setCurrentSubstepTotal] = useState<number>(3)
  const [currentInputsValues, setCurrentInputsValues] = useState<string[]>([''])
  const [errorMessage, setErrorMessage] = useState<string>('')
  const formSteps = [
    [
      {
        title:'Como se chama a <br/> sua academia?',
        inputs:[
          {type:'txt', placeholder:"Minha academia", width:100, name:'gymName' }
        ]
      },
      {
        title:"Onde fica a " + academyName,
        inputs:[
          {type:'select', placeholder:'UF', width:25, name:'gymUF'},
          {type:'select', placeholder:'Cidade', width:75, name:'gymCity'},
        ]
      },
      {
        title:`Quantas unidades a ${academyName} tem?`,
        inputs:[
          {type:'number', placeholder:'Número de unidades', width:10, name:'gymQuantity'}
        ]
      },
    ]
  ]
  const incraseStep = () => {
    setCurrentInputsValues([''])
    let hasEmptyValue = false
    currentInputsValues.forEach(inputValue => {if(inputValue === '' ) hasEmptyValue = true})
    if(hasEmptyValue) return setErrorMessage('Preencha todos os campos')
    setCurrentSubstep(currentSubstep+1)
    if(currentSubstep+2 >= formSteps[currentStep].length) {
      setCurrentStep(currentStep+1)
      setCurrentSubstep(1)
    }
  }
  
  const handleInputChange = (index: number, value: string) => {
    setErrorMessage('')
    setCurrentInputsValues((prevValues) => {
      const newValues = [...prevValues];
      newValues[index] = value;
      return newValues;
    });
  };
  
  const handleStepValues = (index:number, value:string, currentStep:number, currentSubstep:number) => {
    if(currentStep === 1 && currentSubstep === 1) setAcademyName(currentInputsValues[0])
    handleInputChange(index, value)
  }
  return (
    <div className='h-screen  w-[90%] max-w-lg'>
      <BlueAndYellowForms/>
      <div className='py-12 text-center w-full flex justify-center mb-18'>
        <img src='/imgs/acad-logo.png' alt='Acad Logotipo' className='max-w-[158px] '/>
      </div>
      <div className='flex flex-col items-center justify-center'>
        <ProgressItems currentStep={currentStep} currentStepProgress={(currentSubstep/currentSubStepTotal)*35}/>
        <div className='flex flex-col text-center items-center mt-12 gap-4'>
          <Title tag={'h2'}>{formSteps[currentStep-1][currentSubstep-1].title}</Title>
          <div className="flex gap-4 justify-between items-center w-full">
            {formSteps[currentStep-1][currentSubstep-1].inputs.map((input, i) => 
            {
              if(input.type === 'select') return (
                <select value={input.placeholder} name={input.name} key={input.name} style={{width:`${input.width}%`} } className={`bg-acad-gray-light border border-acad-blue text-acad-gray-dark p-2 rounded-lg `} onChange={(e) => handleStepValues(i, e.target.value, currentStep, currentSubstep)}>
                  <option disabled value={input.placeholder}>{input.placeholder}</option>
                </select>
              )
              return(
                <input type={input.type} placeholder={input.placeholder} name={input.name} key={input.name} className={`bg-acad-gray-light border border-acad-blue text-acad-gray-dark p-2 rounded-lg `} style={{width:`${input.width}%`}} value={currentInputsValues[i]} onChange={(e) => handleStepValues(i, e.target.value, currentStep, currentSubstep)}/>
              )
            })}
          </div>
          {errorMessage&&<span className='text-acad-blue uppercase'>{errorMessage}</span>}
          <Button className='' onClick={() => incraseStep() }>Próximo</Button>
        </div>
      </div>
    </div>
  )
}
