import { BlueForm } from '@/app/components/BackgroundForms';
import { Button } from '@/app/components/Button';
import Link from 'next/link';
import React from 'react'

interface LastScreenProps{
  userName:string;
  economyValue:number;
}
export const LastScreen = ({userName, economyValue}:LastScreenProps) => {
  return (
    <div className='w-full h-fit text-center flex flex-col md:flex-row items-center justify-between relative '>
      <BlueForm className='absolute bottom-0 right-0'/>
      <div className='w-full text-left md:flex md:flex-col md:items-start md:justify-between h-screen md:w-[50%]'>
        <img src={'/imgs/discount-man.png'} alt='Homem com ícones de desconto' className='mt-[42%] block md:hidden'/>
        <img src={'/imgs/discount-man-vertical.png'} alt='Homem com ícones de desconto' className='hidden md:block  w-full object-contain max-w-[752px]  text-left'/>
      </div>
      <div className='flex flex-col items-center justify-center md:w-[50%]'>
        <h2 className='text-2xl text-acad-blue font-bold uppercase mb-4'>{userName}, <b>com a Acad,</b> você pode economizar:</h2>
        <div className='bg-acad-yellow text-acad-blue text-4xl font-bold px-4 py-2 rounded-2xl w-[90%] max-w-[600px]'>R$ {economyValue} </div>
        <p className='text-acad-blue font-bold uppercase mt-4 mb-18  text-2xl md:mt-8'>Por ano!</p>
        <div className='relative flex flex-col gap-4'>
          <Button onClick={() => ''} className=''>Quero economizar agora!</Button>
          <Link href='#' className='uppercase font-bold text-acad-blue underline mb-24 md:mb-0'>Não, eu não quero economizar</Link>
        </div>
      </div>
    </div>
  )
}
