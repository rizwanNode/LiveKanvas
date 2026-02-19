'use client';

import Link from 'next/link';

export default function ContactPage() {
  return (
    <>
      <section className="relative py-20 md:py-32 overflow-hidden">
        <div className="container-lk relative z-10 max-w-3xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">Contact Us</h1>
          <h2 className="text-2xl md:text-3xl font-semibold text-white mb-4">We&apos;d Love to Hear from You!</h2>
          <p className="text-lk-white-65 text-lg mb-4 leading-relaxed">
            Have questions, feedback, or ideas? We are here to help. Whether you&apos;re a content creator, a potential partner, or just curious about what we do, don&apos;t hesitate to reach out.
          </p>
          <p className="text-lk-white-65 mb-10">
            Drop us an email, and we&apos;ll get back to you within 24-48 hours.
          </p>

          <form className="space-y-4 mb-16">
            <input type="text" placeholder="Name" className="w-full px-4 py-3 bg-lk-gray-15 border border-lk-gray-25 rounded-lg text-white placeholder:text-lk-white-40 focus:outline-none focus:border-lk-red" />
            <input type="email" placeholder="Email" className="w-full px-4 py-3 bg-lk-gray-15 border border-lk-gray-25 rounded-lg text-white placeholder:text-lk-white-40 focus:outline-none focus:border-lk-red" />
            <textarea placeholder="Message.." rows={6} className="w-full px-4 py-3 bg-lk-gray-15 border border-lk-gray-25 rounded-lg text-white placeholder:text-lk-white-40 focus:outline-none focus:border-lk-red resize-none" />
            <button type="submit" className="btn-primary w-full py-4">Submit</button>
          </form>

          <div className="text-center mb-16">
            <h3 className="text-xl font-semibold text-white mb-2">Follow Us</h3>
            <p className="text-lk-white-65 mb-4">Stay connected and updated through our social media channels.</p>
            <div className="flex items-center justify-center gap-4">
              {['Instagram', 'X', 'Facebook'].map((name) => (
                <a key={name} href="#" className="w-10 h-10 rounded-full bg-lk-gray-15 flex items-center justify-center text-white/70 hover:text-white hover:bg-lk-gray-25 transition-all text-xs font-bold">
                  {name[0]}
                </a>
              ))}
            </div>
          </div>

          <div className="red-gradient-card p-8 md:p-12">
            <h3 className="text-2xl md:text-3xl font-bold text-white mb-2">Need Help Fast?</h3>
            <p className="text-lk-white-65 mb-6">Check out our FAQs page for answers to common questions.</p>
            <Link href="/faq" className="btn-outline">Visit FAQs</Link>
          </div>
        </div>
      </section>
    </>
  );
}
