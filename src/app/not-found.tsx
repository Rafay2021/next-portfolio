'use client';

import { Button } from '@/components/ui/button';
import { Spinner } from '@/components/ui/spinner';
import { LucideArrowBigLeft } from 'lucide-react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

export default function Page() {
  let pathName = usePathname();
  pathName = pathName.replace('/', '');
  return (
    <section className='flex flex-col items-center justify-center m-20'>
      <div className='flex flex-col items-left p-20 gap-4'>
        <h1 className='font-bold text-5xl'>
          <span className='capitalize'>{pathName}</span> Page Not Found
        </h1>
        <p>Return to homepage</p>
        <Button asChild>
          <Link href={'/'}>
            <LucideArrowBigLeft />
            HomePage
          </Link>
        </Button>
      </div>
    </section>
  );
}
