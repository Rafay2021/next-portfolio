'use client';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { Poppins } from 'next/font/google';
import { cn } from '@/lib/utils';
import { useState } from 'react';
import { usePathname } from 'next/navigation';
import { MenuIcon } from 'lucide-react';
import NavSidebar from '@/components/sections/header/NavSidebar';

const poppins = Poppins({
  subsets: ['latin'],
  weight: ['800'],
});

const navbarItems = [
  {
    href: '/',
    children: 'Home',
  },
  {
    href: '/about',
    children: 'About',
  },
  {
    href: '/projects',
    children: 'Projects',
  },
  {
    href: '/skills',
    children: 'Skills',
  },
  {
    href: '/contact',
    children: 'Contact',
  },
];

export default function Header() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  return (
    <header className='flex bg-accent border-b-2 justify-between items-center px-5 py-5 md:px-20'>
      <h1 className={cn('font-bold text-3xl  w-full', poppins.className)}>
        Rafay Khan
      </h1>
      <nav className='gap-5 text-lg hidden md:flex'>
        {navbarItems.map((item) => (
          <Button
            asChild
            variant={'outline'}
            className='border-2 rounded-full'
            key={item.href}>
            <Link href={item.href}>{item.children}</Link>
          </Button>
        ))}
      </nav>
      <NavSidebar
        items={navbarItems}
        open={isSidebarOpen}
        onOpenChange={setIsSidebarOpen}
      />
      <div className='flex md:hidden items-center justify-center'>
        <Button
          asChild
          variant={'ghost'}
          className='size-12 border-transparent'
          onClick={() => setIsSidebarOpen(true)}>
          <MenuIcon className='h-10 w-10' />
        </Button>
      </div>
    </header>
  );
}
