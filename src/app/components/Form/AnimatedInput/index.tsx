import { fadeVariants } from "@/app/utils/fadeVariants";
import { motion } from "framer-motion";



interface AnimatedInputProps{
  type:any;
  name:any;
  value:any;
  onChange:any;
  placeholder:any;
  width:any;
  animation: any;
}
export const AnimatedInput = ({ type, name, value, onChange, placeholder, width, animation }:AnimatedInputProps) =>{



  return (
    <motion.div
      initial={fadeVariants[animation]}
      animate="visible"
      variants={fadeVariants}
      className="w-full"
    >
      <input
        type={type}
        name={name}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        className={`bg-acad-gray-light border border-acad-blue text-acad-gray-dark p-2 rounded-lg w-full `} 
      />
    </motion.div>
  )
};
