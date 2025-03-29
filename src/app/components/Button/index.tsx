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
export const Button = ({children, onClick=() =>{}, className='text-acad-blue'}:ButtonProps) => {
  return (
    <button className={'flex items-center justify-center uppercase rounded-lg bg-acad-yellow text-center  font-bold cursor-pointer max-w-[300px] w-full p-4 hover:bg-purple_40 '+ className} onClick={() => onClick()}>
      {children}
      <MdArrowOutward/> 
    </button>
  )
}
export const LinkButton = ({children, onClick=() =>{}, className='text-acad-blue', url='#', target='_self'}:ButtonProps) => {
  return (
    <Link className={'rounded-lg bg-acad-yellow text-center  font-bold cursor-pointer max-w-[300px] w-full p-4 hover:bg-purple_40 '+ className} href={url} target={target}>{children}</Link>
  )
}
