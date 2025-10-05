import HomeCarousel from '@/components/home-carousel';
import { LeftSheet } from '@/components/client/left-sheet';
import ClientCarousel from '@/components/client/client-carousel';
import { dummyFetchAll } from '@/services/dummyApi';

export default async function Home() {
  const data = await dummyFetchAll();
  return (
    <>
      {/* <h1>Home</h1> */}
      {/* <HomeCarousel /> */}
      <ClientCarousel data={data} />
    </>
  );
}
