import React from 'react';
import type { Metadata } from 'next';
import { Providers } from '../../../providers';
import Navbar from './components/navbar';
import '../globals.css';
import Ending from './components/ending';

export const metadata: Metadata = {
  title: 'RoboSub UTD',
  description: 'RoboSub club at the University of Texas at Dallas',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
      </head>
      <body className={`antialiased`}>
        <Navbar/> 
        <Providers>{children}</Providers>
        <Ending start={'#1b1149'} end={'#000000'} />
      </body>
    </html>
  );
}
