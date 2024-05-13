'use client';
import Feed from '@components/Feed';


const Home = () => {
  return (
    
      <section className="w-full flex-center flex-col">
        <h1 className="head_text text-center">
          Mindful
          <br className="max-md:hidden"/>
          <span>A wellness application</span>
        </h1>
        <p>Mindnd full a wellnes application for managing emotions</p>

        <Feed/>
      </section>
      
  )
}

export default Home
