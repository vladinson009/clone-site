import HomeCarousel from '@/components/home-carousel';
import { LeftSheet } from '@/components/client/left-sheet';
import ClientCarousel from '@/components/client/client-carousel';
import { dummyFetchAll } from '@/services/dummyApi';
import CardPost from '@/components/card-post';

export default async function Home() {
  const data = await dummyFetchAll();
  return (
    <>
      {/* <h1>Home</h1> */}
      {/* <HomeCarousel /> */}
      <ClientCarousel data={data} />
      <div className="flex justify-center">
        <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 max-w-6xl mx-auto px-4">
          <CardPost />
          <CardPost />
          <CardPost />
          <CardPost />
          <CardPost />
          <CardPost />
          <CardPost />
          <CardPost />
          <CardPost />
          <CardPost />
        </div>
      </div>
    </>
  );
}
