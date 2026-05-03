'use client';

import Link from 'next/link';
import { useSupabaseAuth } from '@/hooks/useSupabaseAuth';

export default function NavBar() {
  const { user, signOut } = useSupabaseAuth();

  return (
    <header className="sticky top-0 z-50 bg-white/95 border-b border-slate-200 backdrop-blur">
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 sm:px-6">
        <Link href="/" className="text-lg font-semibold text-pharmacy-dark">
          Smart Pharmacy
        </Link>
        <div className="flex items-center gap-3 text-sm text-slate-700">
          <Link href="/medicines" className="rounded-full bg-pharmacy text-white px-4 py-2 transition hover:bg-pharmacy-dark">
            Medicines
          </Link>
          <Link href="/cart" className="rounded-full border border-pharmacy px-4 py-2 transition hover:bg-pharmacy-light">
            Cart
          </Link>
          {user ? (
            <>
              <Link href="/orders" className="px-3 py-2 hover:text-pharmacy-dark">
                Orders
              </Link>
              <Link href="/chat" className="px-3 py-2 hover:text-pharmacy-dark">
                Chat
              </Link>
              <Link href="/profile" className="px-3 py-2 hover:text-pharmacy-dark">
                Profile
              </Link>
              <button onClick={signOut} className="rounded-full bg-slate-100 px-4 py-2 text-slate-700 transition hover:bg-slate-200">
                Sign out
              </button>
            </>
          ) : (
            <Link href="/auth/login" className="rounded-full bg-slate-100 px-4 py-2 text-slate-700 transition hover:bg-slate-200">
              Sign in
            </Link>
          )}
        </div>
      </nav>
    </header>
  );
}
