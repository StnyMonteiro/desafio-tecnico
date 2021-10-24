import { getURL } from 'next/dist/shared/lib/utils';
import Image, { ImageProps } from 'next/image';
import { useRouter } from 'next/router';
import * as React from 'react';

import { users, UserType } from '@/lib/fakeData';

import Header from '@/components/layout/Header';
import ScrollHorizontal from '@/components/layout/ScrollHorizontal';
import NextImage from '@/components/NextImage';

import {
  FilmType,
  getImage,
  getImageHightDPI,
  getMovies,
  getTrending,
  getUrl,
  tredingType,
} from '@/api/services';

export default function HomePage() {
  const router = useRouter();
  const user = users[Number.parseInt(router.query.id as string)] as UserType;
  const [treding, setTreding] = React.useState<FilmType[] | undefined>();
  const [banner, setBanner] = React.useState<FilmType>();

  const loadTreding = async () => {
    const { results } = await getTrending();

    setTreding(results);
    if (results.length >= 0) {
      const result = results.slice(0, 1);

      const resultaded = result[0] as FilmType;
      const urlFinal = getUrl(`${resultaded.media_type}/${resultaded.id}`);

      const bannerzin = {
        ...resultaded,
        image: getImageHightDPI(resultaded.backdrop_path),
        title: resultaded.title || resultaded.name,
        urlFinal: urlFinal,
      };
      setBanner(bannerzin);
    }
  };

  React.useEffect(() => {
    loadTreding();
  }, []);

  return (
    <body className='h-screen w-screen  pb-10 bg-dark2 '>
      <Header id={user.id} logged={true} />

      <div>
        {banner && (
          <div className={'relative w-screen pl-10 pr-10	h-64 hover:cursor-pointer mb-4 mt-2'}>
            <Image
              onClick={() => window.open(banner?.urlFinal, '_blank')}
              layout={'fill'}
              src={banner?.image}
              alt={banner?.title}
            />
            <h1 className='absolute bottom-14  text-white text-2xl'>{banner.title}</h1>
            <p className='absolute bottom-4 text-white '>{banner.overview.slice(0, 120)}...</p>

          </div>
        )}
        
      </div>

      <div>
        <ScrollHorizontal data={treding} title='Principas Titulos' />
      </div>

      <div className='flex flex-wrap -mx-8 -mb-8'></div>
    </body>
  );
}
