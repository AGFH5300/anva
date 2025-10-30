function Projects() {
  const initiatives = [
    {
      title: 'Marine engine diagnostics partnership',
      description:
        'ANVA partners with MARIDIS GmbH, a German pioneer in marine engine diagnostics, to deploy performance monitoring tools that help ship owners maximize fuel efficiency, extend engine life, and stay compliant with evolving regulations.',
      impact:
        'Combines three decades of MARIDIS innovation with ANVA’s offshore project experience to deliver data-backed maintenance strategies.',
    },
    {
      title: 'Engine division leadership build-out',
      description:
        'Recruitment for a Head of Engine Division in Dubai focuses on experts in high-speed engine and generator overhaul operations, inventory management, and workshop leadership.',
      impact:
        'Expands in-house capability to manage Caterpillar, Cummins, MTU, and Niigata powerplants for regional fleets.',
    },
    {
      title: 'Dubai Maritime City operations hub',
      description:
        'Admin and logistics hires support ANVA’s headquarters within Dubai Maritime City, coordinating documentation, reporting, and client communication for offshore campaigns.',
      impact:
        'Ensures every project maintains transparent reporting and responsive coordination across time zones.',
    },
  ]

  return (
    <div className="mx-auto max-w-6xl px-6 py-16">
      <div className="space-y-6">
        <p className="text-xs font-semibold uppercase tracking-[0.35em] text-brand-blue">Projects & Partnerships</p>
        <h1 className="text-3xl font-semibold text-brand-blue md:text-4xl">Initiatives that keep offshore assets mission-ready</h1>
        <p className="text-base leading-relaxed text-brand-slate">
          Our work spans diagnostics technology, workshop capability building, and administrative support to maintain high availability for offshore vessels throughout the Gulf and Southeast Asia.
        </p>
      </div>

      <div className="mt-10 grid gap-8 md:grid-cols-3">
        {initiatives.map((item) => (
          <article key={item.title} className="flex flex-col rounded-3xl border border-brand-blue/10 bg-white p-6 shadow-sm">
            <h2 className="text-xl font-semibold text-brand-blue">{item.title}</h2>
            <p className="mt-3 text-sm leading-relaxed text-brand-slate">{item.description}</p>
            <p className="mt-4 rounded-2xl bg-brand-blue/5 p-4 text-sm text-brand-slate">{item.impact}</p>
          </article>
        ))}
      </div>

      <section className="mt-12 grid gap-8 rounded-3xl border border-brand-blue/10 bg-gradient-to-r from-brand-blue/10 via-white to-brand-blue/10 p-8 shadow-sm md:grid-cols-2">
        <div>
          <h2 className="text-2xl font-semibold text-brand-blue">Regional logistics assignments</h2>
          <p className="mt-3 text-sm leading-relaxed text-brand-slate">
            ANVA’s consultants deliver maritime logistics, naval support services, port assessments, ship-to-ship coordination, and humanitarian aid logistics across Malaysia, Singapore, the Philippines, Indonesia, Vietnam, Thailand, Brunei Darussalam, and Timor-Leste.
          </p>
        </div>
        <div>
          <h2 className="text-2xl font-semibold text-brand-blue">Client outcomes</h2>
          <ul className="mt-3 space-y-3 text-sm leading-relaxed text-brand-slate">
            <li className="rounded-2xl border border-brand-blue/10 bg-white/80 p-4 shadow-sm">Reduced turnaround time for drydock and overhaul programs through disciplined cost control.</li>
            <li className="rounded-2xl border border-brand-blue/10 bg-white/80 p-4 shadow-sm">Improved engine reliability and compliance from continuous diagnostics and performance monitoring.</li>
            <li className="rounded-2xl border border-brand-blue/10 bg-white/80 p-4 shadow-sm">Enhanced administrative transparency via dedicated staffing within Dubai Maritime City.</li>
          </ul>
        </div>
      </section>
    </div>
  )
}

export default Projects
