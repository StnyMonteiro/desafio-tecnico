import Image, { ImageProps } from 'next/image';
import * as React from 'react';

import { FilmType, getImage, getUrl } from '@/api/services';

interface ScrollHorizontalType {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  data: FilmType[] | undefined;
  title: string;
}

export default function ScrollHorizontal(props: ScrollHorizontalType) {
  const { data, title } = props;
  const [slideX, setSlideX] = React.useState(0);
  const ref = React.useRef<HTMLDivElement>(null);
  const widthmin = 620;
  const slideUp = () => {
    const newSlide = slideX + widthmin;
    if(!data) {
      return
    }
    if (newSlide < data.length * widthmin) {
      ref.current?.scrollTo(newSlide, 0);
      setSlideX(newSlide);
    }
  };

  const slideDown = () => {
    const newSlide = slideX - widthmin;
    if (slideX > -widthmin) {
      ref.current?.scrollTo(newSlide, 0);
      setSlideX(newSlide);
    }
  };

  return (
    <div className=' pl-9 pr-9'>
      <a className='text-white text-2xl pt-4 pb-4'>{title}</a>
      <div className='flex flex-col mt-4'>
        <div ref={ref} className='flex overflow-hidden	scroll-smooth'>
          <div className='flex flex-nowrap scroll-smooth '>
            {data &&
              data.map((foo) => {
                const linkOrigin = getImage(foo.poster_path)
                const urlFinal = getUrl(`${foo.media_type}/${foo.id}}`)
                return (
                  <div key={foo.id} className='inline-block px-3'>
                    <div className='w-64 h-64 shadow-md bg-dark hover:shadow-xl transition-shadow duration-300 ease-in-out'>
                      <Image
                        onClick={ () => window.open(urlFinal, '_blank')}
                        className='flex ml-10 mr-10 hover: cursor-pointer transition duration-300 ease-in-out transform hover:-translate-y-1 hover:scale-110'
                        width={300}
                        height={300}
                        src={linkOrigin}
                        alt={foo.title}
                      />
                    </div>
                    <p className='text-white text-xl '>
                      {' '}
                      {foo.title || foo.name}{' '}
                    </p>
                  </div>
                );
              })}
            <>
              <div
                onClick={slideDown}
                key={scrollX}
                className={` absolute h-8 w-20 bg-dark `}
              ></div>
              <a
                onClick={slideDown}
                className='absolute text-white pl-3 pt-1 hover:cursor-pointer '
              >
                Anterior
              </a>
            </>

            <div
              onClick={slideUp}
              className='absolute  h-8 w-20 bg-dark right-9 '
            ></div>
            <a
              onClick={slideUp}
              className='absolute  right-9 text-white pr-3 pt-1 hover:cursor-pointer'
            >
              Avançar
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
