'use client'
import { BlueForm } from "@/app/components/BackgroundForms";
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
  

  return (
    <main className="h-screen flex items-center justify-center relative">
      {isAppStarted ? 
        isLastScreen?
          <LastScreen userName={userName} economyValue={10000}/>:<Form isLastScreen={isLastScreen} setIsLastScreen={setIsLastScreen} userName={userName} setUserName={setUserName} isAppStarted={isAppStarted} setIsAppStarted={setIsAppStarted}/>
        :
        <BeforeInitApp isAppStarted setIsAppStarted={setIsAppStarted}/>}
    </main>
  );
}


const BeforeInitApp = ({isAppStarted, setIsAppStarted}:{isAppStarted:boolean, setIsAppStarted:(isAppStarted:boolean)=>void}) => {
  return(
    <div className='w-full h-fit text-center flex flex-col items-center gap-4 md:flex-row relative'>
      <BlueForm className='absolute bottom-0 right-0'/>
      <div className='w-full text-left md:flex md:flex-col md:items-start md:justify-between md:h-screen md:w-[50%]'>
        <img src={'/imgs/discount-man.png'} alt='Homem com ícones de desconto' className='w-full mt-58 block md:hidden'/>
        <img src={'/imgs/discount-man-vertical.png'} alt='Homem com ícones de desconto' className='hidden md:block  w-full object-contain max-w-[752px]  text-left'/>
      </div>
      <div className='flex flex-col items-center justify-center md:justify-start md:text-start md:w-[50%] gap-4 mb-24 md:mb-0 px-4'>
        <Title tag='h1'>Descubra quanto sua academia pode economizar</Title>
        <Title tag='h2' className='text-acad-gray-dark mb-4'>sendo um associado ACAD Brasil!</Title>
        <div className='w-full flex justify-center md:justify-start md:mt-12'>
          <Button onClick={() => setIsAppStarted(true)}>Calcular minha economia agora</Button>
        </div>
        <Link href='https://diagonal.ag/' target='_blank' className='absolute bottom-2'>
          <img src={'/imgs/feito-por-diagonal.png'} alt='diagonal-copyright' />
        </Link>
      </div>
    </div>
  )
}