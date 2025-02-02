import { options } from './api/auth/[...nextauth]/options';
import { getServerSession } from 'next-auth/next';

export default async function Home() {
  const session = await getServerSession(options);

  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      {session ? (
        <div>
          <h1>Coogbay HomePage</h1>
          <h1>Hello, {session.user?.name}</h1>
        </div>
      ) : (
        <h2 className='flex'>
          Sign In!
        </h2>
      )
      }
    </div>
  );
}
