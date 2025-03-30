export const ProgressContainer = ({ left }: { left: number }) => {
  return (
    <div className={`absolute z-10 w-[38%] h-[8px] shadow-[inset_0px_0px_2px_#1D70B780] bg-white rounded-full top-[44%] left-${left} mix-blend-lighten`}></div>
  );
};
export const ProgressBar = ({ left, progress }: { left: number; progress: number }) => {
  return (
    <div className={`absolute top-[48%] left-${left-2} -ml-4 h-[4px] bg-acad-blue rounded-full transition-all duration-300 z-20 max-w-[200px]`} style={{ width: `${progress}%` }}></div>
  );
};

