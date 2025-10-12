import { Button } from '@/components/ui/button';
export default function Home() {
  return (
    <>
      <section className="text-center py-20">
        <h1 className="text-4xl font-bold tracking-tight">
          Welcome to Next
          <span className="bg-[#FF9000] text-black px-2 rounded">Hub</span>
        </h1>
        <p className="mt-4 text-muted-foreground max-w-xl mx-auto">
          The next-generation community platform built with Next.js and shadcn/ui.
        </p>
        <div className="mt-6 flex justify-center gap-4">
          <Button>Create record</Button>
          <Button>{process.env.TEST}</Button>
          <Button variant="outline">Learn More</Button>
        </div>
      </section>
    </>
  );
}
