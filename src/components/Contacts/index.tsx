import { At, GithubLogo, LinkedinLogo, Phone } from "phosphor-react";

export function Contacts() {
  return (
    <div className='flex flex-col border p-2 rounded'>
      <div>
        <strong className='text-sm'>Contatos :</strong>
      </div>
      <div className='flex flex-col gap-3'>
        <p className='flex items-center gap-2'>
          <At size={20} /> email: <em>icarovsilva1@gmail.com</em>
        </p>
        <p className='flex items-center gap-2'>
          <Phone size={20} /> celular: (62)99835-85242
        </p>
        <p className='flex items-center gap-2'>
          <GithubLogo size={20} /> github:{" "}
          <a
            href='https://github.com/IcaroSilvaFK'
            target='_blank'
            rel='noreferrer'
            className='hover:text-sky-500 transition'
          >
            https://github.com/IcaroSilvaFK
          </a>
        </p>
        <p className='flex items-center gap-2'>
          <LinkedinLogo size={20} />
          LinkedIn:{" "}
          <a
            href='www.linkedin.com/in/icarovieira'
            target='_blank'
            rel='noreferrer'
            className='hover:text-sky-500 transition'
          >
            www.linkedin.com/in/icarovieira
          </a>
        </p>
      </div>
    </div>
  );
}
