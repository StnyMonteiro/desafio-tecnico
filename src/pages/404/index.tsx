import * as React from 'react';
import { RiAlarmWarningFill } from 'react-icons/ri';

import CustomLink from '@/components/links/CustomLink';
import Seo from '@/components/Seo';

export default function NotFoundPage() {
  return (
    <main>
      <Seo templateTitle='NW - Não encontrada' />

      <main>
        <section className='bg-dark'>
          <div className='flex flex-col items-center justify-center min-h-screen text-center text-white layout'>
            <RiAlarmWarningFill
              size={60}
              className='text-main-500 animate-flicker drop-shadow-glow'
            />
            <h1 className='mt-8'>Pagina não encontrada </h1>
            <CustomLink className='mt-4' href='/'>
              Ir para pagina principal
            </CustomLink>
          </div>
        </section>
      </main>
    </main>
  );
}
