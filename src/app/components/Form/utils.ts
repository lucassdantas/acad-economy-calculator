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

