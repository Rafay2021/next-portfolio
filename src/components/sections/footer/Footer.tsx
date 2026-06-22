'use client';
import { Button } from '@/components/ui/button';
import { LucideArrowUpFromDot } from 'lucide-react';
import { useEffect, useState } from 'react';

export default function Footer() {
  const [showButton, setShowButton] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowButton(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleClick = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className='flex flex-row w-full bg-accent justify-center py-5 border-t-2 relative'>
      <small>
        &copy; {new Date().getFullYear()} Rafay Khan Portfolio. All rights
        reserved.
      </small>
      <div>
        {showButton && (
          <Button
            variant={'default'}
            onClick={handleClick}
            className='bottom-10 right-4 fixed rounded-full'>
            <LucideArrowUpFromDot className='h-4 w-4' />
          </Button>
        )}
      </div>
    </footer>
  );
}
