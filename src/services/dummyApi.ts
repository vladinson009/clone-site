import { DummyRecipe } from '@/types/dummy-recipes';

export async function dummyFetchAll() {
  const response = await fetch('https://dummyjson.com/recipes');
  const { recipes }: { recipes: DummyRecipe[] } = await response.json();
  return recipes;
}
