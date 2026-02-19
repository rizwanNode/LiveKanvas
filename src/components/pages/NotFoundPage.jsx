'use client';

import Link from 'next/link';

export default function NotFoundPage() {
  return (
    <section className="min-h-screen flex items-center justify-center pt-20 md:pt-32">
      <div className="text-center">
        <h1 className="text-6xl font-bold text-lk-red mb-4">404</h1>
        <p className="text-xl text-lk-white-65 mb-8">Page not found</p>
        <Link href="/" className="btn-primary">Go Home</Link>
      </div>
    </section>
  );
}
