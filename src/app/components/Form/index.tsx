'use client'
import { BlueAndYellowForms} from '@/app/components/BackgroundForms'
import { Button } from '@/app/components/Button'
import { ProgressItems } from '@/app/components/Form/ProgressItems'
import { SelectLocationStep } from '@/app/components/Form/SelectLocationStep'
import { TransactionStep } from '@/app/components/Form/TransictionStep'
import { LastScreen } from '@/app/components/LastScreen'
import { LogoAndBackButton } from '@/app/components/LogoAndBackButton'
import { Title } from '@/app/components/Title'
import React, { useEffect, useState } from 'react'
import { MdArrowCircleLeft } from 'react-icons/md'

interface FormProps{
  isLastScreen:boolean;
  setIsLastScreen:(status:boolean) => void;
  userName:string;
  setUserName:(userName:string) => void;
  isAppStarted:boolean;
  setIsAppStarted:any
}
export const Form = ({isLastScreen, setIsLastScreen, userName, setUserName, isAppStarted, setIsAppStarted}:FormProps) => {
  const [academyName, setAcademyName] = useState<string>('') 
  const [UF, setUF] = useState<string>('')
  const [city, setCity] = useState<string>('')
  const [gymUnits, setGymUnits] = useState<string>('')
  const [gymBilling, setGymBilling] = useState<string>('')
  const [ecadValue, setEcadValue] = useState<string>('')
  const [lightBilling, setLightBilling] = useState<string>('')
  const [traineeLifeSecure, setTraineeLifeSecure] = useState<string>('')
  const [lawyerAccount, setLawyerAccount] = useState<string>('')

  const [email, setEmail] = useState<string>('')
  const [phone, setPhone] = useState<string>('')

  const formSteps = [
    [
      {
        title:'Como se chama a <br/> sua academia?',
        inputs:[
          {type:'txt', placeholder:"Minha academia", width:100, name:'gymName' }
        ]
      },
      {
        title:"Onde fica a " + academyName ,
        inputs:[
          {type:'select', placeholder:'UF',     width:25, name:'gymUF'  },
          {type:'select', placeholder:'Cidade', width:75, name:'gymCity'},
        ]
      },
      {
        title:`Quantas unidades a ${academyName} tem?`,
        inputs:[
          {type:'number', placeholder:'Número de unidades', width:100, name:'gymQuantity'}
        ]
      },
    ],
    [
      {
        title:'Qual é o faturamento da '+ academyName,
        inputs:[
          {type:'txt', placeholder:"Faturamento", width:100, name:'gymBilling' }
        ]
      },
      {
        title:'Quanto você paga de ECAD?',
        inputs:[
          {type:'txt', placeholder:"Valor", width:100, name:'ecadValue' }
        ]
      },
      {
        title:'Quanto a ' + academyName + ' gasta de energia em média por mês?',
        inputs:[
          {type:'txt', placeholder:"valor", width:100, name:'lightExpenditure' }
        ]
      },
      {
        title:'Quanto paga por seguro estagiário?',
        inputs:[
          {type:'txt', placeholder:"valor", width:100, name:'traineeSecure' }
        ]
      },
      {
        title:'Quanto paga de advogado?',
        inputs:[
          {type:'txt', placeholder:"valor", width:100, name:'lawyerExpenditure' }
        ]
      },
      
    ],
    [
      {
        title:'Como se chama?',
        inputs:[
          {type:'txt', placeholder:"Nome Sobrenome", width:100, name:'customerName' }
        ]
      },
      {
        title:'Seu e-mail',
        inputs:[
          {type:'email', placeholder:"email@email.com.br", width:100, name:'customerEmail' }
        ]
      },
      {
        title:'Whatsapp',
        inputs:[
          {type:'txt', placeholder:"(00)00000-0000", width:100, name:'customerPhone' }
        ]
      },
      
    ]
  ]
  const [currentStep, setCurrentStep] = useState<number>(1)
  const [currentSubstep, setCurrentSubstep] = useState<number>(1)
  const [currentSubStepTotal, setCurrentSubstepTotal] = useState<number>(formSteps[currentStep-1].length)
  const [currentInputsValues, setCurrentInputsValues] = useState<string[]>([''])
  const [errorMessage, setErrorMessage] = useState<string>('')
  const [isInTransictionState, setIsInTransictionState] = useState<boolean>(false)
  
  const increaseStep = () => {
    let hasEmptyValue = false
    currentInputsValues.forEach(inputValue => {if(inputValue === '' ) hasEmptyValue = true})
    if(hasEmptyValue) return setErrorMessage('Preencha todos os campos')
    let resetedInputValues = Array.from({ length: formSteps[currentStep - 1][currentSubstep - 1].inputs.length }, () => '');
    setCurrentInputsValues(resetedInputValues)
    
    setCurrentSubstep(currentSubstep+1)
    if(currentSubstep >= formSteps[(currentStep-1)].length) {
      setIsInTransictionState(true)
      setCurrentStep(currentStep+1)
      setCurrentSubstep(1)
      setCurrentSubstepTotal(formSteps[currentStep-1].length)
    }
  }
  const decreaseStep = (formSteps:any, currentStep:number, currentSubstep:number, setIsAppStarted:any) => {
    setCurrentSubstep(currentSubstep-1)
    if(currentSubstep <= 1) {
      if(currentStep <= 1) return setIsAppStarted(false)
      setCurrentStep(currentStep-1)
      setCurrentSubstep(1)
      setCurrentSubstepTotal(formSteps[currentStep-1].length)
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
    if(currentStep === 1 && currentSubstep === 1) setAcademyName(value)
    if(currentStep === 1 && currentSubstep === 2) {
      if(index === 0) setUF(value) 
      if(index === 1) setCity(value) 
    }
    if(currentStep === 1 && currentSubstep === 3) setGymUnits(value)

    if(currentStep === 2 && currentSubstep === 1) {
      const numericValue = parseInt(value.replace(/\D/g, ''), 10) || 0;
      const formattedValue = new Intl.NumberFormat('pt-BR', { 
        style: 'decimal', 
        minimumFractionDigits: 2 
      }).format(numericValue / 100);

      value = formattedValue

      setGymBilling(value);
    }
    if(currentStep === 2 && currentSubstep === 2) setEcadValue(value)
    if(currentStep === 2 && currentSubstep === 3) setLightBilling(value)
    if(currentStep === 2 && currentSubstep === 4) setTraineeLifeSecure(value)
    if(currentStep === 2 && currentSubstep === 5) setLawyerAccount(value)
    
    handleInputChange(index, value)
  }

  const handleFormSubmit = async () => {
    const formData = new FormData();
    formData.append('name', userName);
    formData.append('email', email);
    formData.append('phone', phone);

    try {
      const response = await fetch(`${location.protocol}//${location.hostname}/backend/send-email.php`, {
        method: 'POST',
        body: formData,
      });

      if (response.ok) {
        alert('Formulário enviado com sucesso!');
        setIsLastScreen(true)
      } else {
        alert('Erro ao enviar o formulário.');
      }
    } catch (error) {
      console.error('Erro ao enviar:', error);
      alert('Erro ao conectar ao servidor.');
    }
    
  }
  
  //obriga a preencher o primeiro valor no select
  useEffect(() => {
    setCurrentInputsValues((prevValues) => {
      if (prevValues.length === formSteps[currentStep - 1][currentSubstep - 1].inputs.length) {
        return prevValues; 
      }
      return Array.from({ length: formSteps[currentStep - 1][currentSubstep - 1].inputs.length }, () => '');
    });
  }, [currentStep, currentSubstep, formSteps]);

  return (
  <div className='flex flex-col w-full items-center  h-screen'>
    <LogoAndBackButton currentStep={currentStep} decreaseStep={decreaseStep} formSteps={formSteps} currentSubstep={currentSubstep} setIsAppStarted={setIsAppStarted}/>
    {currentInputsValues[0]}
    
    <div className='h-screen w-[90%] max-w-lg'>
      <BlueAndYellowForms/>
      {!isLastScreen && isInTransictionState && <TransactionStep isInTransictionState={isInTransictionState} setIsInTransictionState={setIsInTransictionState} currentTextGroupIndex={currentStep-2}/>}
      {!isLastScreen && !isInTransictionState &&
        <div className='flex flex-col items-center justify-center'>
          {currentStep === formSteps.length && <Title tag={'h4'} className='text-acad-gray-dark font-medium mb-4'>Para finalizar</Title>}
          <ProgressItems currentStep={currentStep} currentStepProgress={(currentSubstep/currentSubStepTotal)*22}/>
          
          {currentStep === formSteps.length && //check is is last step
            <div className='flex flex-col gap-4 w-full mt-12 items-center justify-center'>
              <div className='text-left w-full' >
                <Title tag={'h5'}>Como se chama?</Title>
                <input type='txt' placeholder='Nome Sobrenome' name='name' onChange={(e) => setUserName(e.target.value)} value={userName} className={`bg-acad-gray-light border border-acad-blue text-acad-gray-dark p-2 rounded-lg w-full `} />
              </div>
              <div className='text-left w-full' >
                <Title tag={'h5'}>Seu e-mail</Title>
                <input type='email' placeholder='email@email.com.br' name='email' onChange={(e) => setEmail(e.target.value)} value={email} className={`bg-acad-gray-light border border-acad-blue text-acad-gray-dark p-2 rounded-lg w-full `}/>
              </div>
              <div className='text-left w-full' >
                <Title tag={'h5'}>Whatsapp</Title>
                <input type='txt' placeholder='(00)00000-0000' name='email' onChange={(e) => setPhone(e.target.value)} value={phone} className={`bg-acad-gray-light border border-acad-blue text-acad-gray-dark p-2 rounded-lg w-full `}/>
              </div>
              <Button className='mt-4' onClick={() => handleFormSubmit() }>Ver quanto consigo economizar</Button>
            </div>
          }
          
          {currentStep < formSteps.length &&
            <div className='flex flex-col text-center items-center mt-12 gap-4'>
              <Title tag={'h2'}>{formSteps[currentStep-1][currentSubstep-1].title}</Title>
              <div className="flex gap-4 justify-between items-center w-full">
                {formSteps[currentStep-1][currentSubstep-1].inputs.map((input, i) => {
                  if(input.type === 'select') return (
                    <SelectLocationStep 
                      UF={UF} city={city} currentInputsValues={currentInputsValues} currentStep={currentStep} currentSubstep={currentSubstep} handleStepValues={handleStepValues} i={i}
                      input={input} setCity={setCity} setUF={setUF} key={i}
                    />
                  )
                  return(<input onChange={(e) => handleStepValues(i, e.target.value, currentStep, currentSubstep)} value={currentInputsValues[i]} type={input.type} placeholder={input.placeholder} name={input.name} key={input.name} className={`bg-acad-gray-light border border-acad-blue text-acad-gray-dark p-2 rounded-lg `} style={{width:`${input.width}%`}} />)
                })}
              </div>
              {errorMessage&&<span className='text-acad-blue uppercase'>{errorMessage}</span>}
              <Button className='' onClick={() => increaseStep() }>Próximo</Button>
            </div>
          }
        </div>
      }
    </div>
  </div>
  )
}
