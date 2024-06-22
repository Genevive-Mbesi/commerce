'use client';
import Feed from '@components/feed';
import Image from 'next/image';


const Home = () => {
  return (
    
<section className="home relative font-serif text-xl text-slate-100 font-semibold w-full min-h-screen"> 
  <div className="flex flex-col items-center justify-center p-4 lg:p-8 lg:flex-row lg:flex-wrap">
    <div className="grid flex-grow h-60 lg:h-96 card bg-amber-500 rounded-box place-items-center m-4 w-full lg:w-1/3 xl:w-1/4">Happy</div> 
    <div className="grid flex-grow h-60 lg:h-96 card bg-purple-300 rounded-box place-items-center m-4 w-full lg:w-1/3 xl:w-1/4">Sad</div> 
    <div className="grid flex-grow h-60 lg:h-96 card bg-orange-500 rounded-box place-items-center m-4 w-full lg:w-1/3 xl:w-1/4">Fearful</div> 
    <div className="grid flex-grow h-60 lg:h-96 card bg-purple-700 rounded-box place-items-center m-4 w-full lg:w-1/3 xl:w-1/4">Angry</div> 
  </div>
</section>
   
      
  )
}
 
export default Home
