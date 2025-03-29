'use client'
import { Button } from "@/app/components/Button";
import { Form } from "@/app/components/Form";
import { Title } from "@/app/components/Title";
import { useState } from "react";

export default function Home() {
  const [isAppStarted, setIsAppStarted] = useState<boolean>(false)
  
  return (
    <main className="h-screen bg-red-500">
      {isAppStarted? <Form/>:<BeforeInitApp isAppStarted setIsAppStarted={setIsAppStarted}/>}
    </main>
  );
}


const BeforeInitApp = ({isAppStarted, setIsAppStarted}:{isAppStarted:boolean, setIsAppStarted:(isAppStarted:boolean)=>void}) => {
  return(
    <div className='text-center h-full flex flex-col justify-center items-center gap-4'>
      <Title tag='h1'>Descubra quanto sua academia pode economizar</Title>
      <Title tag='h2' className='text-acad-gray'>sendo um associado ACAD Brasil!</Title>
      <Button onClick={() => setIsAppStarted(true)}>Calcular minha economia agora</Button>
    </div>
  )
}