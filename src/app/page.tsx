'use client'
import { BlueForm } from "@/app/components/BackgroundForms";
import { Button } from "@/app/components/Button";
import { Form } from "@/app/components/Form";
import { Title } from "@/app/components/Title";
import { useState } from "react";

export default function Home() {
  const [isAppStarted, setIsAppStarted] = useState<boolean>(true)
  
  return (
    <main className="h-screen flex items-center justify-center relative">
      {isAppStarted? <Form/>:<BeforeInitApp isAppStarted setIsAppStarted={setIsAppStarted}/>}
    </main>
  );
}


const BeforeInitApp = ({isAppStarted, setIsAppStarted}:{isAppStarted:boolean, setIsAppStarted:(isAppStarted:boolean)=>void}) => {
  return(
    <div className='text-center flex flex-col items-center gap-4'>
      <BlueForm className='absolute bottom-0 right-0'/>
      <Title tag='h1'>Descubra quanto sua academia pode economizar</Title>
      <Title tag='h2' className='text-acad-gray'>sendo um associado ACAD Brasil!</Title>
      <Button onClick={() => setIsAppStarted(true)}>Calcular minha economia agora</Button>
      <img src={'/imgs/feito-por-diagonal.png'} alt='diagonal-copyright' className='absolute bottom-2'/>
    </div>
  )
}