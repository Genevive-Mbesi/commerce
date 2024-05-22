'use client';
import Feed from '@components/Feed';
import Image from 'next/image';


const Home = () => {
  return (
    
      <section className='home relative w-full h-screen'> 
        <div className="flex justify-center pt-20 p-8 flex-col items-center lg:flex-row">
        <div className="grid flex-grow h-52 card bg-purple-950 rounded-box place-items-center">We're MINDFUL</div> 
        
        </div>

        <div class="divider"></div> 
        <div className="flex justify-center flex-col p-8 items-center lg:flex-row">
        <div className="grid flex-grow h-72 card bg-amber-400 rounded-box place-items-center">content</div> 
        <div className="divider lg:divider-horizontal"></div> 
        <div className="grid flex-grow h-52 card bg-fuchsia-800 rounded-box place-items-center">content</div> 
        <div className="divider lg:divider-horizontal"></div> 
        <div className="grid flex-grow h-52 card bg-amber-300 rounded-box place-items-center">content</div> 
        <div className="divider lg:divider-horizontal"></div> 
        <div className="grid flex-grow h-52 card bg-purple-700 rounded-box place-items-center">content</div> 
        </div>
        <div class="divider"></div> 
        <div className="flex justify-center flex-col p-8 items-center lg:flex-row">
        <div className="grid flex-grow h-96 card bg-amber-500 rounded-box place-items-center">content</div> 
        <div className="divider lg:divider-horizontal"></div> 
        <div className="grid flex-grow h-96 card bg-purple-300 rounded-box place-items-center">content</div> 
        <div className="divider lg:divider-horizontal"></div> 
        <div className="grid flex-grow h-96 card bg-amber-700 rounded-box place-items-center">content</div> 
        </div>
        
        
      </section>
      
  )
}
 
export default Home
