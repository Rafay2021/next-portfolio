import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/components/ui/carousel';
import { Card, CardContent } from '@/components/ui/card';

export default function Projects(props: React.HtmlHTMLAttributes<HTMLElement>) {
  return (
    <section
      {...props}
      className='section flex flex-col border-2 items-center p-8'>
      <h3 className='heading-accent'>Projects</h3>
      <Carousel
        opts={{
          align: 'start',
        }}
        className='w-full max-w-48 sm:max-w-xs md:max-w-sm'>
        <CarouselContent>
          {Array.from({ length: 5 }).map((_, index) => (
            <CarouselItem
              key={index}
              className='basis-1/2 lg:basis-1/3'>
              <div className='p-1'>
                <Card>
                  <CardContent className='flex aspect-square items-center justify-center p-6'>
                    <span className='text-3xl font-semibold'>{index + 1}</span>
                  </CardContent>
                </Card>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>
    </section>
  );
}
