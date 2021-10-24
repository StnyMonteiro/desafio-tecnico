import * as React from 'react';

import NextImage from '../NextImage';

interface ProfileState {
  name?: string;
  image: string;
  nameOff?: boolean,
  aspect: number
}

export default function Profile(props: ProfileState) {
  const { name, image, aspect, nameOff = false } = props;
  return (
    <div className={``}>
      <div className='flex flex-col align-middle justify-center text-center'>
        <NextImage className={`border-main-500 border-2 rounded-full ${!nameOff && `border-4`}`} imgClassName='rounded-full' alt='Imagem de perfil'  width={aspect} height={aspect} useSkeleton={true} src={image} />
        {!nameOff && <p className='text-white mt-3 mb-43 text-xl'>{name}</p>}
      </div>
    </div>
  );
}
