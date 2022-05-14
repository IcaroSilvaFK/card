import type { NextPage } from "next";
import Head from "next/head";
import { CardTecnologies } from "../components/CardTecnologies";
import { Contacts } from "../components/Contacts";
import { Header } from "../components/Header";
import { Section } from "../components/Section";

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>Hellow world</title>
      </Head>
      <main className='h-[100vh] w-[100%] bg-sky-400 flex justify-center items-center'>
        <div className='bg-slate-50 rounded shadow-xl'>
          <Header />
          <div className='flex gap-4 bg-slate-50'>
            <div className='flex flex-col p-4 gap-2'>
              <Section text='Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsum, blanditiis quos odio deserunt cumque est!' />
              <Contacts />
            </div>
            <div>
              <CardTecnologies />
            </div>
          </div>
        </div>
      </main>
    </>
  );
};

export default Home;
