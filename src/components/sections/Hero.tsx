'use client';

import Image from 'next/image';
import React, { useEffect, useState } from 'react';
import { Button } from '../ui/button';
import { Poppins } from 'next/font/google';
import { cn } from '@/lib/utils';
import { LucideArrowBigRightDash } from 'lucide-react';

const poppins = Poppins({
  subsets: ['latin'],
  weight: ['800'],
});

const textCollection = ['Developer', 'Engineer', 'Creator'];

export function TypingText({ className }: { className?: string }) {
  const [wordIndex, setWordIndex] = useState(0);
  const text = textCollection[wordIndex];

  const [display, setDisplay] = useState('');
  const [index, setIndex] = useState(0);
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    const speed = deleting ? 60 : 120;

    const timer = setTimeout(() => {
      if (!deleting) {
        const next = index + 1;
        setDisplay(text.slice(0, next));
        setIndex(next);

        if (next === text.length) {
          setTimeout(() => setDeleting(true), 800);
        }
      } else {
        const next = index - 1;
        setDisplay(text.slice(0, next));
        setIndex(next);

        if (next === 0) {
          setDeleting(false);
          setWordIndex((prev) => (prev + 1) % textCollection.length);
        }
      }
    }, speed);

    return () => clearTimeout(timer);
  }, [index, deleting, text]);

  return <h1 className={className}>Full Stack {display}|</h1>;
}

export default function Hero(props: React.HtmlHTMLAttributes<HTMLElement>) {
  /* 
  
  
  */
  return (
    <section
      {...props}
      className='section flex md:flex-col lg:flex-row min-h-screen'>
      <div className='z-10 flex-1 md:relative md:bg-none md:min-h-screen md:bottom-0 lg:bg-black text-accent flex flex-col justify-center items-start gap-y-5 p-10'>
        <TypingText
          className={cn('font-bold md:text-5xl text-4xl', poppins.className)}
        />
        <p className='text-2xl'>Freelance Full-Stack Developer</p>
        <Button
          variant='outline'
          className='text-black'>
          View Projects
          <LucideArrowBigRightDash className='h-5 w-5' />
        </Button>
      </div>

      <div className='flex-1 lg:relative'>
        <Image
          src='/rafay.png'
          alt='rafay hero Image'
          fill
          className='object-cover'
          loading='eager'
        />
      </div>
    </section>
  );
}

export function HeroShape() {
  return (
    <svg
      viewBox='0 0 100 100'
      preserveAspectRatio='none'
      className='absolute inset-0 w-full h-full border-4'>
      <polygon
        points='60,0 100,0 100,100 40,100'
        className='fill-primary'
      />

      <polygon
        points='0,0 60,0 40,100 0,100'
        className=' fill-background'
      />
    </svg>
  );
}
