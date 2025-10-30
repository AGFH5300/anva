import { Link } from 'react-router-dom'

function Home() {
  return (
    <div className="mx-auto flex max-w-7xl flex-col gap-16 px-6 py-16">
      <section className="grid gap-10 rounded-3xl bg-gradient-to-r from-brand-blue via-brand-blue/90 to-brand-slate p-10 text-white shadow-xl">
        <div className="space-y-6">
          <span className="inline-flex items-center rounded-full bg-brand-gold px-3 py-1 text-xs font-semibold uppercase tracking-[0.35em] text-brand-slate">
            Advanced Nautical Ventures FZE
          </span>
          <h1 className="text-4xl font-bold leading-tight md:text-5xl">
            Offshore marine solutions engineered for reliability across the Middle East and Asia-Pacific.
          </h1>
          <p className="max-w-2xl text-base text-white/80 md:text-lg">
            ANVA delivers technical, commercial, and operational support for offshore operators—from vessel chartering and project management to advanced marine engine diagnostics—anchored in Dubai Maritime City and active across Southeast Asia.
          </p>
          <div className="flex flex-wrap gap-4">
            <Link
              to="/contact"
              className="inline-flex items-center rounded-full bg-white px-6 py-3 text-sm font-semibold text-brand-blue shadow-sm transition hover:bg-brand-gold hover:text-brand-slate"
            >
              Partner with us
            </Link>
            <Link
              to="/projects"
              className="inline-flex items-center rounded-full border border-white/60 px-6 py-3 text-sm font-semibold text-white transition hover:border-brand-gold hover:text-brand-gold"
            >
              Explore active initiatives
            </Link>
          </div>
        </div>
        <dl className="grid gap-6 sm:grid-cols-3">
          <div className="rounded-2xl bg-white/10 p-6">
            <dt className="text-sm uppercase tracking-widest text-brand-gold">Founded</dt>
            <dd className="text-3xl font-semibold">2024</dd>
            <p className="mt-2 text-sm text-white/70">Established in Dubai to deliver end-to-end offshore and maritime support.</p>
          </div>
          <div className="rounded-2xl bg-white/10 p-6">
            <dt className="text-sm uppercase tracking-widest text-brand-gold">Operations</dt>
            <dd className="text-3xl font-semibold">8+ countries</dd>
            <p className="mt-2 text-sm text-white/70">Supporting fleets across Malaysia, Singapore, the Philippines, Indonesia, Vietnam, Thailand, Brunei, and Timor-Leste.</p>
          </div>
          <div className="rounded-2xl bg-white/10 p-6">
            <dt className="text-sm uppercase tracking-widest text-brand-gold">Expertise</dt>
            <dd className="text-3xl font-semibold">Marine diagnostics</dd>
            <p className="mt-2 text-sm text-white/70">Partnering with MARIDIS GmbH to elevate engine monitoring and performance analytics.</p>
          </div>
        </dl>
      </section>

      <section className="grid gap-12 md:grid-cols-2">
        <div className="space-y-6">
          <h2 className="text-3xl font-semibold text-brand-blue">Comprehensive offshore lifecycle support</h2>
          <p className="text-base leading-relaxed text-brand-slate">
            From pre-deployment planning to asset optimization, ANVA aligns technical know-how with commercial responsiveness. Our specialists coordinate vessel brokerage, drydocking projects, and critical spare supply chains so crews can focus on safe, efficient operations.
          </p>
          <ul className="grid gap-4 text-sm text-brand-slate">
            <li className="flex gap-3 rounded-2xl border border-brand-blue/10 bg-white p-4 shadow-sm">
              <span className="mt-1 h-3 w-3 flex-shrink-0 rounded-full bg-brand-gold" aria-hidden="true" />
              Offshore vessel chartering, brokerage, and 24/7 operational oversight.
            </li>
            <li className="flex gap-3 rounded-2xl border border-brand-blue/10 bg-white p-4 shadow-sm">
              <span className="mt-1 h-3 w-3 flex-shrink-0 rounded-full bg-brand-gold" aria-hidden="true" />
              Technical project management including drydocking, cost control, and documentation.
            </li>
            <li className="flex gap-3 rounded-2xl border border-brand-blue/10 bg-white p-4 shadow-sm">
              <span className="mt-1 h-3 w-3 flex-shrink-0 rounded-full bg-brand-gold" aria-hidden="true" />
              Engine diagnostics programs that extend asset life and improve fuel efficiency.
            </li>
          </ul>
        </div>
        <div className="grid gap-6">
          <div className="rounded-3xl border border-dashed border-brand-blue/20 bg-white/80 p-6 shadow-sm">
            <h3 className="text-lg font-semibold text-brand-blue">Regional readiness</h3>
            <p className="mt-3 text-sm text-brand-slate">
              Our teams mobilize quickly across ASEAN trade routes, connecting clients with trusted local partners and ports vetted through on-the-ground experience.
            </p>
          </div>
          <div className="rounded-3xl border border-dashed border-brand-blue/20 bg-white/80 p-6 shadow-sm">
            <h3 className="text-lg font-semibold text-brand-blue">People-first partnerships</h3>
            <p className="mt-3 text-sm text-brand-slate">
              ANVA invests in recruiting and upskilling marine engineers, administrators, and diagnostics specialists to sustain complex operations around the clock.
            </p>
          </div>
          <div className="rounded-3xl border border-dashed border-brand-blue/20 bg-white/80 p-6 shadow-sm">
            <h3 className="text-lg font-semibold text-brand-blue">Data-driven performance</h3>
            <p className="mt-3 text-sm text-brand-slate">
              Through our MARIDIS GmbH partnership, stakeholders receive actionable insights that reduce downtime and align with evolving maritime regulations.
            </p>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Home
