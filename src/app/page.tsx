'use client'
import { BlueAndYellowForms, BlueForm } from "@/app/components/BackgroundForms";
import { Button } from "@/app/components/Button";
import { Form } from "@/app/components/Form";
import { LastScreen } from "@/app/components/LastScreen";
import { Title } from "@/app/components/Title";
import Link from "next/link";
import { useState } from "react";

export default function Home() {
  const [isAppStarted, setIsAppStarted] = useState<boolean>(false)
  const [isLastScreen, setIsLastScreen] = useState<boolean>(false)
  const [userName, setUserName] = useState<string>('')
  const [economyTotals, setEconomyTotals] = useState<string|number>('10.000')

  return (
    <main className="flex items-center justify-center relative">
      {isAppStarted ? 
        isLastScreen?
          <LastScreen userName={userName} economyValue={economyTotals}/>:<Form economyTotals={economyTotals} setEconomyTotals={setEconomyTotals} isLastScreen={isLastScreen} setIsLastScreen={setIsLastScreen} userName={userName} setUserName={setUserName} isAppStarted={isAppStarted} setIsAppStarted={setIsAppStarted}/>
        :
        <BeforeInitApp isAppStarted setIsAppStarted={setIsAppStarted}/>}
    </main>
  );
}


const BeforeInitApp = ({isAppStarted, setIsAppStarted}:{isAppStarted:boolean, setIsAppStarted:(isAppStarted:boolean)=>void}) => {
  return(
    <div className='w-full min-h-screen text-center flex flex-col lg:flex-row items-center gap-4  relative overflow-y-hidden'>
      <BlueAndYellowForms className=''/>
      <div className='w-full lg:w-[50%]  lg:h-screen flex flex-col items-center  lg:items-center lg:justify-center pt-24'>
        <img src='/imgs/acad-logo.png' alt='Acad Logotipo' className='w-[80%] max-w-[300px] lg:max-w-[80%] -mb-6 '/>
        <div className='flex flex-col items-center lg:items-tart w-full lg:h-screen relative overflow-hidden'>
          <img src={'/imgs/discount-man-vertical.png'} alt='Homem com ícones de desconto' className='hidden lg:block object-contain '/>
          <img src={'/imgs/discount-man.png'} alt='Homem com ícones de desconto' className='max-w-[560px] block lg:hidden object-contain w-full'/>
          <div className='lg:hidden absolute bottom-0 left-0 w-full h-22 bg-white' style={{ clipPath: 'polygon(-50% 100%, 100% 0, 100% 100%, 0 100%)' }}></div>
          <div className='lg:hidden absolute bottom-0 left-0 w-full h-22 bg-gradient-to-b from-black to-white opacity-20' style={{ clipPath: 'polygon(-50% 100%, 100% 0, 100% 100%, 0 100%)' }}></div>
        </div>
      </div>

      <div className='flex flex-col lg:items-start justify-center lg:justify-start lg:text-start lg:w-[50%] gap-4 mb-24 lg:mb-0 px-4'>
        <Title tag='h1'>Descubra quanto sua academia pode economizar</Title>
        <Title tag='h2' className='text-acad-gray-dark mb-4'>sendo um associado ACAD Brasil!</Title>
        <div className='w-full flex justify-center lg:justify-start lg:mt-12'>
          <Button onClick={() => setIsAppStarted(true)}>Calcular minha economia agora</Button>
        </div>
        <Link href='https://diagonal.ag/' target='_blank' className='mt-12 w-full flex justify-center'>
          <img src={'/imgs/feito-por-diagonal.png'} alt='diagonal-copyright' />
        </Link>
      </div>
    </div>
  )
}