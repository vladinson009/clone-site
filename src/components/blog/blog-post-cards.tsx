import { ArrowRightIcon } from 'lucide-react';
import { Button } from '../ui/button';
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '../ui/card';
import { getBlogs } from '@/services/blogsApi';

export default async function BlogPostCards() {
  const blogCards = await getBlogs();
  return blogCards.map((item, index) => (
    <Card key={index} className="pt-0 shadow-none max-lg:last:col-span-full">
      <CardContent className="px-0">
        <img
          src={item.imageLink}
          alt={item.title}
          className="aspect-video h-60 w-full rounded-t-xl object-cover"
        />
      </CardContent>
      <CardHeader className="mb-2 gap-3">
        <CardTitle className="text-xl">
          <a href={item.title}>{item.title}</a>
        </CardTitle>
        <CardDescription className="text-base">{item.description}</CardDescription>
      </CardHeader>
      <CardFooter>
        <Button
          className="group rounded-lg text-base shadow-sm has-[>svg]:px-6"
          size="lg"
          asChild
        >
          <a href={item.title}>
            Read More
            <ArrowRightIcon className="transition-transform duration-200 group-hover:translate-x-0.5" />
          </a>
        </Button>
      </CardFooter>
    </Card>
  ));
}
