import { Button } from '@/components/ui/button';
import { Card, CardContent, CardFooter, CardHeader } from '@/components/ui/card';
import { Separator } from '@/components/ui/separator';
import { DummyRecipe } from '@/types/dummy-recipes';
import {
  HeartIcon,
  MessageCircleIcon,
  MoreHorizontalIcon,
  ShareIcon,
} from 'lucide-react';
import Image from 'next/image';

export default function CardPost({ recipe }: { recipe: DummyRecipe }) {
  return (
    <Card id={recipe.id} className="w-full max-w-xs shadow-none py-0 gap-0">
      <CardHeader className="flex flex-row items-center justify-between py-2.5 -mr-1">
        <div className="flex items-center gap-3">
          <Image
            src="https://github.com/vladinson009.png"
            className="h-8 w-8 rounded-full bg-secondary object-contain"
            alt=""
            height={32}
            width={32}
          />
          <div className="flex flex-col gap-0.5">
            <h6 className="text-sm leading-none font-medium">vladinson009</h6>
            <span className="text-xs">@vladinson009</span>
          </div>
        </div>
        <Button variant="ghost" size="icon">
          <MoreHorizontalIcon />
        </Button>
      </CardHeader>
      <CardContent className="p-0">
        <div className="relative w-full aspect-video bg-muted border-y">
          <Image
            src={recipe.image}
            alt={recipe.name}
            fill
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            className="object-cover"
          />
        </div>
        <div className="py-5 px-6">
          <h2 className="font-semibold">{recipe.name}</h2>
          <div className="mt-1 text-sm text-muted-foreground">
            <p>{recipe.ingredients.join(', ')}</p>
            {recipe.tags.map((tag) => (
              <span key={tag} className="text-blue-500">
                #{tag}{' '}
              </span>
            ))}
          </div>
        </div>
      </CardContent>
      <CardFooter className="border-t flex px-2 pb-0 py-2!">
        <Button variant="ghost" className="grow shrink-0 text-muted-foreground">
          <HeartIcon /> <span className="hidden sm:inline">Like</span>
        </Button>
        <Button variant="ghost" className="grow shrink-0 text-muted-foreground">
          <MessageCircleIcon />
          <span className="hidden sm:inline">Comment</span>
        </Button>
        <Button variant="ghost" className="grow shrink-0 text-muted-foreground">
          <ShareIcon /> <span className="hidden sm:inline">Share</span>
        </Button>
      </CardFooter>
    </Card>
  );
}
