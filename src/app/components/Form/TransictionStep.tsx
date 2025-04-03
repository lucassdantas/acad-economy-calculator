'use client'
import { Title } from '@/app/components/Title'
import React, { useEffect, useState } from 'react'
import { motion } from 'framer-motion';

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

  const animations = [
    { type: 'slideDown' },
    { type: 'slideUp' },
    { type: 'slideDown' },
    { type: 'slideUp' }
  ];

  const [currentTextIndex, setCurrentTextIndex] = useState(0);

  if (currentTextGroupIndex < 0 || currentTextGroupIndex >= transictionTexts.length) {
    return null; 
  }

  useEffect(() => {
    if (!isInTransictionState) return;
    const textGroup = transictionTexts[currentTextGroupIndex];
    const nextText = setTimeout(() => {
      if (currentTextIndex < textGroup.length - 1) {
        setCurrentTextIndex(prevIndex => prevIndex + 1);
      } else {
        setIsInTransictionState(false);
      }
    }, 3000);

    return () => clearTimeout(nextText);
  }, [currentTextIndex, isInTransictionState, currentTextGroupIndex, setIsInTransictionState]);

  const getAnimation = (type: string) => {
    switch (type) {
      case 'slideDown':
        return { initial: { y: -20, opacity: 0 }, animate: { y: 0, opacity: 1 }, exit: { y: 20, opacity: 0 } };
      case 'slideUp':
        return { initial: { y: 20, opacity: 0 }, animate: { y: 0, opacity: 1 }, exit: { y: -20, opacity: 0 } };
      default:
        return { initial: { opacity: 0 }, animate: { opacity: 1 }, exit: { opacity: 0 } };
    }
  };

  return (
    <div className='flex flex-col items-center justify-center h-[50%]'>
      <motion.div
        key={currentTextIndex}
        {...getAnimation(animations[currentTextIndex]?.type || 'fade')}
        transition={{ duration: 0.8 }}
      >
        <Title tag={'h2'} className='transition-opacity duration-1000'>
          {transictionTexts[currentTextGroupIndex][currentTextIndex]}
        </Title>
      </motion.div>
    </div>
  );
};
