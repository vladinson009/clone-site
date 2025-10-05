import ClientCarousel from '@/components/client/client-carousel';
import { dummyFetchAll } from '@/services/dummyApi';
import CardPostList from '@/components/card-post-list';

export default async function Home() {
  const data = await dummyFetchAll();
  return (
    <>
      <ClientCarousel data={data} />
      <CardPostList data={data} />
    </>
  );
}
