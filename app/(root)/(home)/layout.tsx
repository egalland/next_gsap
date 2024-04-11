import Menu from '@/components/Menu';
import { Metadata } from 'next';
import React, { ReactNode } from 'react';

export const metadata: Metadata = {
  title: 'gsap menu app',
};

const HomeLayout = ({ children } : { children: ReactNode }) => {
  return (
    <main className=''>
      <Menu />
            <section className=''>
                { children }
            </section>
    </main>
  )
}

export default HomeLayout