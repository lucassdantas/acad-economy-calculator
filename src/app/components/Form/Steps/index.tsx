import { Button } from '@/app/components/Button';
import { Title } from '@/app/components/Title';
import React from 'react'

interface StepProps{
  question:string;
  inputs:any[];
  conclusionTexts:string[]
}
export const Steps = ({question, inputs, conclusionTexts}:StepProps) => {
  return (
    <div>
      <Title tag={'h2'}>{question}</Title>
      {inputs.map((input:any) => {
        return <a>{input}</a>
      })}
      <Button onClick={() => setCurrentStep(+1)}>Próximo</Button>
      
    </div>
  )
}
export const formSteps = (academyName:string) =>  {
  return {
    firstStep:{
      firstSubStep:{
        title:'Como se chama a sua academia?',
        inputs:[
          {type:'txt', placeholder:"Minha academia", width:'100' }
        ]
      },
      secondSubStep:{
        title:"Onde fica a " + academyName,
        inputs:[
          {type:'select', placeholder:'UF', width:'25'},
          {type:'select', placeholder:'Cidade', width:'75'},
        ]
      },
      thirdSubStep:{
        title:`Quantas unidades a ${academyName} tem?`,
        inputs:[
          {type:'number', placeholder:'Número de unidades'}
        ]
      },
      conclusionTexts:[
        {text:'Perfeito!'}
      ]
    }
  }
}