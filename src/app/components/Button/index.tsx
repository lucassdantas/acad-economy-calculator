import Link from 'next/link';
import React, { ReactNode } from 'react'
import { MdArrowOutward } from 'react-icons/md';

type ButtonProps = {
  children:ReactNode;
  onClick: () => void;
  className?:string;
  url?:string;
  target?:string;
}
export const Button = ({children, onClick=() =>{}, className=''}:ButtonProps) => {
  return (
    <button className={'flex items-center justify-center uppercase rounded-lg bg-acad-yellow text-center hover:bg-acad-light-yellow   font-bold cursor-pointer w-fit p-2 px-6 text-acad-blue transition-all duration-300'+ className} onClick={() => onClick()}>
      {children}
      <MdArrowOutward size={32} className='font-bold'/> 
    </button>
  )
}
export const LinkButton = ({children, onClick=() =>{}, className='text-acad-blue', url='#', target='_self'}:ButtonProps) => {
  return (
    <Link className={'rounded-lg bg-acad-yellow text-center  font-bold cursor-pointer max-w-[300px] w-full p-4 '+ className} href={url} target={target}>{children}</Link>
  )
}
