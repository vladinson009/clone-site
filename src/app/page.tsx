import ClientCarousel from '@/components/client/client-carousel';
import { dummyFetchAll } from '@/services/dummyApi';
import CardPostList from '@/components/card-post-list';
import { Separator } from '@/components/ui/separator';

export default async function Home() {
  const data = await dummyFetchAll();
  return (
    <>
      <ClientCarousel data={data} />
      <Separator className="mt-2 mb-6" />
      <CardPostList data={data} />
    </>
  );
}
