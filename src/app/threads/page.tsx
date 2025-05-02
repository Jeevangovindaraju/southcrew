'use client';

import HeroSection from './components/HeroSection';
import ProductGrid from './components/ProductGrid';
import StorySection from './components/StorySection';
import Testimonials from './components/Testimonials';
import NewsletterSignup from './components/NewsletterSignup';

export default function ThreadsPage() {
  return (
    <div className="space-y-32">
      <HeroSection />
      <ProductGrid />
      <StorySection />
      <Testimonials />
      <NewsletterSignup />
    </div>
  );
}
