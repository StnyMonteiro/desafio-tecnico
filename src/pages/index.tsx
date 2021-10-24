import { useRouter } from 'next/router';
import * as React from 'react';

import { users, UserType } from '@/lib/fakeData';

import Header from '@/components/layout/Header';
import Profile from '@/components/layout/Profile';
import Seo from '@/components/Seo';

export default function HomePage() {
  const router = useRouter();
  const onClick = (id: number) => {
    router.push(
      {
        pathname: `/home/[id]`,
        query: {
          id,
        },
      },
      `/home`,
      { shallow: true }
    );
  };

  const ProfileGenerator = (user: UserType): React.ReactElement => {
    return (
      <div
        onClick={() => onClick(user.id)}  
        className='flex ml-10 mr-10 hover: cursor-pointer transition duration-300 ease-in-out transform hover:-translate-y-1 hover:scale-110'
      >
        <Profile
          aspect={170}
          name={user.name}
          image={user.image}
        />
      </div>
    );
  };

  return (
    <body className='h-screen w-screen bg-dark2'>
      <Seo />
      <main>
        <Header />

        <div className='flex justify-center pt-8'>
          <h1 className='font-light text-3xl text-white lg:text-5xl '>
            Quem está assistindo?
          </h1>
        </div>

        <div className='flex align-middle justify-center mt-40  '>
          {users.map((user) => {
            return ProfileGenerator(user);
          })}
        </div>
      </main>
    </body>
  );
}
