import ClientCarousel from '@/components/client/client-carousel';
import { dummyFetchAll } from '@/services/dummyApi';
import CardPostList from '@/components/card-post-list';
import { Separator } from '@/components/ui/separator';

//! Cache revalidation for the whole page:
// export const revalidate = 5 // revalidate cache after 5 sec
// export const dynamic = 'force-dynamic' // no-store of cache. Revalidate on each request

export default async function Products() {
  const data = await dummyFetchAll();
  return (
    <>
      <ClientCarousel data={data} />
      <Separator className="mt-2 mb-6" />
      <CardPostList data={data} />
    </>
  );
}
