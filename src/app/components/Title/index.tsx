import React from 'react'

interface TitleProps {
  children: string
  className?: string
  tag?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6'
}

export const Title = ({ children, className = '', tag = 'h2' }: TitleProps) => {
  const Tag = tag // Define dinamicamente a tag

  return (
    <Tag
      className={`${
        tag === 'h1'
          ? 'text-4xl'
          : tag === 'h2'
          ? 'text-2xl'
          : tag === 'h3'
          ? 'text-2xl'
          : tag === 'h4'
          ? 'text-xl'
          : tag === 'h5'
          ? 'text-lg'
          : 'text-base'
      } font-bold text-acad-blue uppercase ${className}`}
      dangerouslySetInnerHTML={{ __html: children }}
    />
  )
}
