import { BlueAndYellowForms, BlueForm } from '@/app/components/BackgroundForms';
import { Button } from '@/app/components/Button';
import Link from 'next/link';
import React from 'react'

interface LastScreenProps{
  userName:string;
  economyValue:number|string;
}
export const LastScreen = ({userName, economyValue}:LastScreenProps) => {
  return (
    <div className='w-full min-h-screen text-center flex flex-col lg:flex-row items-center gap-4 relative overflow-y-hidden '>
      <BlueAndYellowForms className=''/>
      <div className='w-full lg:w-[50%]  lg:h-screen flex flex-col items-center  lg:items-center lg:justify-center pt-4'>
        <img src='/imgs/acad-logo.png' alt='Acad Logotipo' className='w-[80%] max-w-[300px] lg:max-w-[400px] -mb-6 '/>
        <div className='flex flex-col items-center lg:items-tart w-full lg:h-screen relative overflow-hidden'>
          <img src={'/imgs/discount-man-vertical.png'} alt='Homem com ícones de desconto' className='hidden lg:block object-cover object-right h-screen w-full'/>
          <img src={'/imgs/discount-man.png'} alt='Homem com ícones de desconto' className='max-w-[560px] block lg:hidden object-contain w-full'/>
          <div className='lg:hidden absolute bottom-0 left-0 w-full h-14 sm:h-20  bg-white' style={{ clipPath: 'polygon(-50% 100%, 100% 0, 100% 100%, 0 100%)' }}></div>
          <div className='lg:hidden absolute bottom-0 left-0 w-full h-14 sm:h-20  bg-gradient-to-b from-black to-white opacity-20' style={{ clipPath: 'polygon(-50% 100%, 100% 0, 100% 100%, 0 100%)' }}></div>
        </div>
      </div>

      <div className='flex flex-col items-center justify-between md:w-[50%] gap-12'>
        <div className='flex flex-col justify-center items-center'>
          <h2 className='text-2xl text-acad-blue font-bold uppercase mb-4'>{userName}, <b>com a Acad,</b> você pode economizar:</h2>
          <div className='bg-acad-yellow text-acad-blue text-4xl font-bold px-4 py-2 rounded-2xl w-[90%] max-w-[600px]'>R$ {economyValue} </div>
          <p className='text-acad-blue font-bold uppercase mt-4   text-2xl md:mt-8'>Por ano!</p>
        </div>
        <div>
          <div className='relative flex flex-col gap-4'>
            <Button onClick={() => ''} className=''>Quero economizar agora!</Button>
            <Link href='#' className='uppercase font-bold text-acad-blue underline mb-24 md:mb-0'>Não, eu não quero economizar</Link>
          </div>
        </div>
      </div>
    </div>
  )
}
