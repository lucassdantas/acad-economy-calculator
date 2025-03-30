'use client'
import { Title } from '@/app/components/Title'
import React, { useEffect, useState } from 'react'

interface TransactionStepProps {
  isInTransictionState: boolean;
  setIsInTransictionState: any;
  currentTextGroupIndex: number;
}

export const TransactionStep = ({
  isInTransictionState,
  setIsInTransictionState,
  currentTextGroupIndex
}: TransactionStepProps) => {

  const transictionTexts = [
    ['perfeito'],
    [
      'Ótimo!',
      'Calculando a sua economia...',
      'Reduzindo Taxas...',
      'Aplicando descontos...'
    ]
  ];

  const [currentTextIndex, setCurrentTextIndex] = useState(0);
  const [opacity, setOpacity] = useState(0);

  if (currentTextGroupIndex < 0 || currentTextGroupIndex >= transictionTexts.length) {
    return null; 
  }

  useEffect(() => {
    if (!isInTransictionState) return;
    const textGroup = transictionTexts[currentTextGroupIndex];
    setOpacity(0);
    const fadeIn = setTimeout(() => setOpacity(1), 100);
    const nextText = setTimeout(() => {
      if (currentTextIndex < textGroup.length - 1) {
        setCurrentTextIndex(prevIndex => prevIndex + 1);
      } else {
        setIsInTransictionState(false);
      }
    }, 3000);

    return () => {
      clearTimeout(fadeIn);
      clearTimeout(nextText);
    };
  }, [currentTextIndex, isInTransictionState, currentTextGroupIndex, setIsInTransictionState]);

  return (
    <div className='flex flex-col items-center justify-center h-[50%]'>
      <Title tag={'h2'} className='transition-opacity duration-1000' style={{opacity}}>
        {transictionTexts[currentTextGroupIndex][currentTextIndex]}
      </Title>
    </div>
  );
};
