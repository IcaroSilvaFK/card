import { DiReact, DiCss3, DiJavascript, DiSass } from "react-icons/di";
import { SiTypescript, SiStyledcomponents } from "react-icons/si";
import { AiFillHtml5 } from "react-icons/ai";

export function CardTecnologies() {
  return (
    <div className='flex flex-col gap-2 p-1 pr-3 pt-3'>
      <AiFillHtml5 size={25} color='#EB6329' />
      <DiCss3 size={25} color='#2088DC' />
      <DiSass size={25} color='#c66499' />
      <DiJavascript size={25} color='#F7E018' />
      <DiReact size={25} color='#61D5F6' />
      <SiTypescript size={25} color='#0079CB' />
      <SiStyledcomponents size={25} color='#E7A2E1' />
    </div>
  );
}
