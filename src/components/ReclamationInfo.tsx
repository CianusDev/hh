import { ReactNode } from "react";

type ReclamationInfoProps = {
    text:string;
    colored_text:string;
    before_colored_text?:ReactNode;
}
const ReclamationInfo = (props:ReclamationInfoProps) => {
  return (
    <div className='flex-1 w-full px-4 flex justify-center items-center md:h-24 h-auto bg-[#2A354F]/10 text-[0.8rem] text-center mt-10'>
        <strong>{props.text}<br/>{props.before_colored_text} <b className="text-[#F39200]">{props.colored_text}</b></strong>
    </div>
  )
}

export default ReclamationInfo