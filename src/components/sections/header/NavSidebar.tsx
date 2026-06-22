import { Button } from '@/components/ui/button';
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetHeader,
  SheetTrigger,
} from '@/components/ui/sheet';
import Link from 'next/link';

interface NavbarItem {
  href: string;
  children: React.ReactNode;
}

interface Props {
  items: NavbarItem[];
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

export default function NavSidebar({ items, open, onOpenChange }: Props) {
  return (
    <Sheet
      open={open}
      onOpenChange={onOpenChange}>
      <SheetTrigger />
      <SheetContent
        side='left'
        className='py-15'>
        <nav className='flex flex-col px-5 gap-y-3 '>
          {items.map((item) => (
            <Button
              asChild
              variant={'ghost'}
              className='flex justify-start bg-accent'
              key={item.href}>
              <Link href={item.href}>{item.children}</Link>
            </Button>
          ))}
        </nav>
      </SheetContent>
    </Sheet>
  );
}
