import Link from 'next/link';

export default function Hello() {
  return (
    <div className="hero min-h-screen bg-base-200">
   <div className="hero-content text-center">
        <div className="max-w-md">
        <h1 className="text-5xl font-bold">Mindful</h1>
        <p className="py-6">A Wellness Application designed to help manage emotions better.</p>
     <Link href='/about'>
            <button className="btn btn-primary">Get </button>
     </Link>
      </div>
     
    </div>
  </div>
  );
}