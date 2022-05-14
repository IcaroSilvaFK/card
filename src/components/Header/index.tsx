import Image from "next/image";

export function Header() {
  return (
    <header className='flex items-center justify-start p-6 bg-cyan-600 rounded-t'>
      <Image
        src='/assets/eu.jpeg'
        width='50'
        height='50'
        alt='Icaro Vieira'
        className='rounded-[50%]'
      />
      <div className='flex-1 flex align-center justify-center text-white text-lg'>
        <h1 style={{ fontFamily: "Poppins" }} className=''>
          Desenvolvedor Front-End
        </h1>
      </div>
    </header>
  );
}
