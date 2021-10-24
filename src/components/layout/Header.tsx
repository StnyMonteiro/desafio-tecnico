import { useRouter } from 'next/router';
import * as React from 'react';

import { users } from '@/lib/fakeData';

import Profile from './Profile';

interface HeaderState {
  logged?: boolean;
  id?: number;
}

export default function Header(props: HeaderState) {
  const { logged = false, id = -1 } = props;
  const user = users[id];
  const router = useRouter();

  const renderLogo = () => {
    return (
      <>
        <div onClick={() => router.push(`/`)}className='flex text-2xl flex-row font-semibold hover:cursor-pointer'>
          <p className='text-white'>Nivia </p>
          <p className='text-main-500'>World</p>
        </div>
      </>
    );
  };

  if (logged) {
    return (
      <header className='flex sticky w-full pt-5 pb-5 pl-9 pr-9'>
        <div className='flex flex-1'>{renderLogo()}</div>

        <div className='flex justify-center align-middle'>
          <Profile image={user.image} aspect={35} nameOff />
          <a className='text-white ml-2 mt-1 '>{user.name}</a>
        </div>
      </header>
    );
  }

  return (
    <header className='flex sticky w-full pt-5 pb-5 justify-center'>
      {renderLogo()}
    </header>
  );
}
