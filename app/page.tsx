import Link from 'next/link';

export default function HomePage() {
  return (
    <div className="space-y-10">
      <section className="rounded-[2rem] bg-white p-10 shadow-lg shadow-slate-200/60">
        <div className="grid gap-10 lg:grid-cols-[1.2fr_0.8fr] lg:items-center">
          <div>
            <p className="text-sm uppercase tracking-[0.4em] text-pharmacy-dark">Smart Pharmacy Platform</p>
            <h1 className="mt-6 text-4xl font-semibold text-slate-900 sm:text-5xl">
              Order medicines, manage prescriptions, and chat with your pharmacy in one place.
            </h1>
            <p className="mt-6 max-w-2xl text-slate-600">
              A modern pharmacy experience with cart management, real-time order tracking, pharmacy inventory comparison, and role-based access control for customers, pharmacists, and admins.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link href="/medicines" className="inline-flex rounded-full bg-pharmacy px-6 py-3 text-sm font-semibold text-white shadow hover:bg-pharmacy-dark">
                Browse medicines
              </Link>
              <Link href="/auth/login" className="inline-flex rounded-full border border-slate-300 bg-white px-6 py-3 text-sm font-semibold text-slate-700 hover:bg-slate-50">
                Sign in
              </Link>
            </div>
          </div>
          <div className="rounded-[2rem] bg-pharmacy-light p-8 text-pharmacy-dark shadow-inner">
            <div className="space-y-4">
              <div className="rounded-3xl bg-white p-6 shadow-sm">
                <h2 className="text-xl font-semibold">Medicine discovery</h2>
                <p className="mt-2 text-sm text-slate-600">Search products, compare prices, and view availability across pharmacies.</p>
              </div>
              <div className="rounded-3xl bg-white p-6 shadow-sm">
                <h2 className="text-xl font-semibold">Cart and checkout</h2>
                <p className="mt-2 text-sm text-slate-600">Add items from one pharmacy, manage quantities, and place order requests fast.</p>
              </div>
              <div className="rounded-3xl bg-white p-6 shadow-sm">
                <h2 className="text-xl font-semibold">Real-time communication</h2>
                <p className="mt-2 text-sm text-slate-600">Chat directly with your pharmacy and receive updates on order status.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {[
          { title: 'Customer portal', description: 'Manage orders, addresses, saved medicines, and prescriptions.' },
          { title: 'Pharmacist workspace', description: 'Handle inventory, confirm orders, and support customers.' },
          { title: 'Admin controls', description: 'Monitor users, pharmacies, and system activity with ease.' },
        ].map((feature) => (
          <div key={feature.title} className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
            <h3 className="text-lg font-semibold text-slate-900">{feature.title}</h3>
            <p className="mt-3 text-sm leading-6 text-slate-600">{feature.description}</p>
          </div>
        ))}
      </section>
    </div>
  );
}
