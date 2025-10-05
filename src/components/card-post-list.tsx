import { DummyRecipe } from '@/types/dummy-recipes';
import CardPost from './card-post';

export default function CardPostList({ data }: { data: DummyRecipe[] }) {
  return (
    <div className="flex justify-center">
      <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 max-w-6xl mx-auto px-4">
        {data.map((recipe) => (
          <CardPost recipe={recipe} key={recipe.id} />
        ))}
      </div>
    </div>
  );
}
