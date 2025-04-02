export const ProgressContainer = ({ left }: { left: number }) => {
  return (
    <div className={`absolute z-10 w-[46%] h-[8px] shadow-[inset_0px_0px_2px_#1D70B780] bg-white rounded-full top-[44%] left-${left} mix-blend-lighten`}></div>
  );
};
export const ProgressBar = ({ leftPosition, progress, barNumber }: { leftPosition: number; progress: number, barNumber:number; }) => {
  if(barNumber === 2)return(
    <div className={`absolute top-[48%] left-[50%] h-[4px] bg-acad-blue rounded-full transition-all duration-300 z-20 min-w-[8%]`} style={{ width: `${progress}%` }}></div>
  )
  return (
    <div className={`absolute top-[48%] left-[${leftPosition}%]  h-[4px] bg-acad-blue rounded-full transition-all duration-300 z-20 min-w-[8%]`} style={{ width: `${progress}%`,left:leftPosition }}></div>
  );
};

