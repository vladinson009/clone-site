import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';

const HeroSection = () => {
  return (
    <section className="flex min-h-[calc(100dvh-4rem)] flex-1 flex-col justify-between gap-12 overflow-x-hidden pt-8 sm:gap-16 sm:pt-16 lg:gap-24 lg:pt-24">
      {/* Hero Content */}
      <div className="mx-auto flex max-w-7xl flex-col items-center gap-8 px-4 text-center sm:px-6 lg:px-8 ">
        <div className="bg-muted flex items-center gap-2.5 rounded-full border px-3 py-2">
          <Badge className="rounded-full">AI-Powered</Badge>
          <span className="text-muted-foreground">
            Solution for client-facing businesses
          </span>
        </div>

        <h1 className="text-3xl leading-[1.29167] font-bold text-balance sm:text-4xl lg:text-5xl">
          Welcome to Next
          <span className="relative bg-[#FF9000] text-black px-2 rounded">
            Hub
            <svg
              width="223"
              height="12"
              viewBox="0 0 223 12"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="absolute inset-x-0 bottom-[-5] w-full translate-y-1/2 max-sm:hidden"
            >
              <path
                d="M1.11716 10.428C39.7835 4.97282 75.9074 2.70494 114.894 1.98894C143.706 1.45983 175.684 0.313587 204.212 3.31596C209.925 3.60546 215.144 4.59884 221.535 5.74551"
                stroke="url(#paint0_linear_10365_68643)"
                strokeWidth="2"
                strokeLinecap="round"
              />
              <defs>
                <linearGradient
                  id="paint0_linear_10365_68643"
                  x1="18.8541"
                  y1="3.72033"
                  x2="42.6487"
                  y2="66.6308"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop stopColor="var(--primary)" />
                  <stop offset="1" stopColor="var(--primary-foreground)" />
                </linearGradient>
              </defs>
            </svg>
          </span>
        </h1>

        <p className="mt-4 text-muted-foreground max-w-xl mx-auto">
          The next-generation community platform built with Next.js and shadcn/ui.
        </p>
        <div className="mt-6 flex flex-wrap justify-center gap-4">
          <Button>Create record</Button>
          <Button>{process.env.TEST}</Button>
          <Button variant="outline">Learn More</Button>
        </div>

        <Button size="lg" asChild>
          <a href="#">Try It Now</a>
        </Button>
      </div>

      {/* Image */}
      <img
        src="https://images.unsplash.com/photo-1466637574441-749b8f19452f?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=1160"
        alt="Dishes"
        className="min-h-[250px] w-full max-w-lg object-cover rounded-full mx-auto block"
      />
    </section>
  );
};

export default HeroSection;
