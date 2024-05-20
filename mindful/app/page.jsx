'use client';
import Feed from '@components/Feed';
import Image from 'next/image';


const Home = () => {
  return (
    
      <section className='relative w-full h-screen'>
        <h1 className="flex justify-center items-center">
          <Image
        src="/assets/mindful.png"
        alt="Picture of the author"
        layout="fill"
        objectFit="cover"
    
      />

          <br className="max-md:hidden"/>
        </h1>
      </section>
      
  )
}

export default Home
