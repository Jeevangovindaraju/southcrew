// File: src/app/threads/components/NewsletterSignup.tsx
'use client';

import { useState } from 'react';

export default function NewsletterSignup() {
  const [email, setEmail] = useState('');
  
  return (
    <section className="py-20 bg-[#fff9f2]">
      <div className="max-w-md mx-auto text-center px-4">
        <h2 className="text-2xl font-semibold mb-4">Join the Crew</h2>
        <p className="text-zinc-600 mb-6">Get first access to drops, events & exclusive content.</p>
        <form className="flex flex-col sm:flex-row gap-4" onSubmit={(e) => e.preventDefault()}>
          <input
            type="email"
            placeholder="Your email address"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="flex-1 px-4 py-3 border border-zinc-300 rounded-md focus:outline-none"
          />
          <button
            type="submit"
            className="px-6 py-3 bg-orange-500 text-white font-semibold rounded-md hover:bg-orange-600 transition"
          >
            Subscribe
          </button>
        </form>
      </div>
    </section>
  );
}  {/* <-- Ensure you have this closing parenthesis and brace to end the function properly */}
