import Link from 'next/link';

export default function About() {
  return (
    <div className="hero min-h-screen bg-base-200">
      <div className="hero-content text-center">
        <div className="max-w-md">
          <h1 className="text-5xl font-bold">About</h1>
          <p className="py-6">Information about the Mindful application.</p>
          <Link href='/'>
            <button className="btn btn-primary">Go Back to Home</button>
          </Link>
        </div>
      </div>
    </div>
  );
}
