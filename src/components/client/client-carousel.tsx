'use client';
import * as React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
  type CarouselApi,
} from '@/components/ui/carousel';
import { cn } from '@/lib/utils';
import { DummyRecipe } from '@/types/dummy-recipes';
import Image from 'next/image';

export default function ClientCarousel({ data }: { data: DummyRecipe[] }) {
  const [api, setApi] = React.useState<CarouselApi>();
  const [current, setCurrent] = React.useState(0);

  React.useEffect(() => {
    if (!api) {
      return;
    }
    setCurrent(api.selectedScrollSnap() + 1);
    api.on('select', () => {
      setCurrent(api.selectedScrollSnap() + 1);
    });
  }, [api]);
  return (
    <div className="mx-auto max-w-xs">
      <Carousel setApi={setApi} className="w-full max-w-xs" opts={{ loop: true }}>
        <CarouselContent className="py-3">
          {data.map((recipe, index) => (
            <CarouselItem key={recipe.id} className={cn('basis-[33%]', {})}>
              <Card
                className={cn('transition-transform duration-500', {
                  'scale-[0.6]': index !== current - 1,
                })}
              >
                <CardContent className="relative flex aspect-square items-center justify-center p-6">
                  <Image
                    src={recipe.image}
                    alt={recipe.name}
                    // width={30}
                    // height={30}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  />
                  {/* <span className="text-4xl font-semibold">{recipe.name}</span> */}
                </CardContent>
              </Card>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>
    </div>
  );
}
