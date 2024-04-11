import React, { ReactNode } from 'react'
import { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'gsap menu app',
  };

const RootLayout = ({ children } : { children: ReactNode }) => {
  return (
    <main>
        { children }
    </main>
  )
}

export default RootLayout