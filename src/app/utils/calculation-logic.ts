let billingInput = document.querySelector('#billing'),
    gymQuantityInput = document.querySelector('#gymQuantity'),
    economyResult = document.querySelector('#economyResult'),
    billingValue = Number(billing.value),
    gymQuantityValue = Number(gymQuantity.value),
    competingCompanyPrice = 0;

billingInput.addEventListener('change', () => {
  billingValue = billingInput.value
  start()
})

gymQuantityInput.addEventListener('change', () => {
  gymQuantityValue = gymQuantityInput.value
  start()
})

const perCentageDiscounts = {
  getNet: 1.5,
  cielo: 3.33,
  ecad: 40,
  light:10
}

const fixedDiscounts = {
  trainee: 2.5
}


const Discounts = {
  getNet:   {value:0, discount:0, competingPrice:0},
  ecad:     {value:0, discount:0, competingPrice:500},
  light:    {value:0, discount:0, competingPrice:5000},
  juridical:{value:0, discount:0, competingPrice:0},
  trainee:  {value:32.5, discount:2.5, competingPrice:35},

  calculatePrice: (billingValue, increaseValue, calculateType) => {
    if(calculateType === 'percentage') return (billingValue*increaseValue)/100
    return  increaseValue - billingValue
  },

  calculateDiscount: (majorValue, minorValue) => {
    return majorValue - minorValue
  },
  
  setDiscounts: (property, acadDiscountParam, majorValueParam, calculateType = 'percentage', discountType = 'percentage') => {
    if(calculateType === 'percentage'){
      Discounts[property].competingPrice  = Discounts.calculatePrice(billingValue, majorValueParam, calculateType)
      Discounts[property].value           = Discounts.calculatePrice(billingValue, acadDiscountParam, calculateType)
      Discounts[property].discount        = Discounts.calculateDiscount( Discounts[property].competingPrice, Discounts[property].value)
      return null
    }
    if(discountType === 'fixed'){
      Discounts[property].competingPrice = majorValueParam
      Discounts[property].value       = Discounts.calculatePrice(acadDiscountParam, Discounts[property].competingPrice, discountType)
      Discounts[property].discount          = Discounts.calculateDiscount( Discounts[property].competingPrice, Discounts[property].value)
      return null
    }
    
    Discounts[property].competingPrice = majorValueParam
    Discounts[property].discount       = Discounts.calculatePrice(acadDiscountParam, Discounts[property].competingPrice, discountType)
    Discounts[property].value          = Discounts.calculateDiscount( Discounts[property].competingPrice, Discounts[property].discount)
  },

}

const start = () => {
  Discounts.setDiscounts('getNet',  perCentageDiscounts.getNet, perCentageDiscounts.cielo)
  Discounts.setDiscounts('ecad',    perCentageDiscounts.ecad, Discounts.ecad.competingPrice,   'fixed')
  Discounts.setDiscounts('light',   perCentageDiscounts.light, Discounts.light.competingPrice, 'fixed')
  Discounts.setDiscounts('trainee', fixedDiscounts.trainee, Discounts.trainee.competingPrice,  'fixed', 'fixed')

  console.log(Discounts.getNet)
  console.log(Discounts.ecad)
  console.log(Discounts.light)
  console.log(Discounts.trainee)
}
start()

