import { User } from "phosphor-react";

export function Section({ text }: { text: string }) {
  return (
    <div
      className='text-sm flex gap-3
     items-center'
    >
      <div>
        <User size={25} fontWeight='bold' />
      </div>
      <p style={{ fontFamily: "Poppins" }} className='w-[350px] '>
        {text}
      </p>
    </div>
  );
}
