import { Suspense } from 'react';
import ProgressDemo from '../client/progressBar';
import BlogPostCards from './blog-post-cards';

const Blog = async () => {
  return (
    <section className="py-8 sm:py-16 lg:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mb-12 space-y-4 text-center sm:mb-16 lg:mb-24">
          <p className="text-primary text-sm font-medium uppercase">
            Developer Insights
          </p>
          <h2 className="text-2xl font-semibold md:text-3xl lg:text-4xl">
            Uncover Key Insights & Best Practices
          </h2>
          <p className="text-muted-foreground text-xl">
            Explore real-world use cases, review best practices, and stay updated
            with insights from our developer community.
          </p>
        </div>

        <Suspense fallback={<ProgressDemo />}>
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
            <BlogPostCards />
          </div>
        </Suspense>
      </div>
    </section>
  );
};

export default Blog;
