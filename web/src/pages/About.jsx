function About() {
  return (
    <div className="mx-auto max-w-5xl px-6 py-16">
      <div className="space-y-6">
        <p className="text-xs font-semibold uppercase tracking-[0.35em] text-brand-blue">About Advanced Nautical Ventures FZE</p>
        <h1 className="text-3xl font-semibold text-brand-blue md:text-4xl">Operational excellence for offshore and maritime stakeholders</h1>
        <p className="text-base leading-relaxed text-brand-slate">
          Advanced Nautical Ventures FZE (ANVA) is a privately held marine services company founded in 2024 and headquartered in Dubai Maritime City. We deliver comprehensive offshore support that blends technical engineering leadership, commercial responsiveness, and disciplined project management for ship owners, operators, and service providers.
        </p>
      </div>

      <section className="mt-12 grid gap-10 md:grid-cols-2">
        <div className="space-y-4">
          <h2 className="text-2xl font-semibold text-brand-blue">Core capabilities</h2>
          <ul className="space-y-3 text-sm leading-relaxed text-brand-slate">
            <li className="rounded-2xl border border-brand-blue/10 bg-white p-4 shadow-sm">
              Offshore vessel chartering and brokerage backed by 24/7 operational oversight.
            </li>
            <li className="rounded-2xl border border-brand-blue/10 bg-white p-4 shadow-sm">
              Technical, commercial, and administrative vessel support, from drydocking supervision to inventory control.
            </li>
            <li className="rounded-2xl border border-brand-blue/10 bg-white p-4 shadow-sm">
              Marine logistics planning and humanitarian response capabilities across Southeast Asian trade routes.
            </li>
            <li className="rounded-2xl border border-brand-blue/10 bg-white p-4 shadow-sm">
              Specialist engine diagnostics programs that help clients maximize fuel efficiency and maintain compliance.
            </li>
          </ul>
        </div>
        <div className="space-y-4">
          <h2 className="text-2xl font-semibold text-brand-blue">Where we operate</h2>
          <p className="text-sm leading-relaxed text-brand-slate">
            ANVA teams mobilize across Malaysia, Singapore, the Philippines, Indonesia, Vietnam, Thailand, Brunei Darussalam, and Timor-Leste—linking clients with vetted local partners to keep offshore assets mission-ready.
          </p>
          <div className="rounded-3xl border border-brand-blue/10 bg-gradient-to-br from-white to-brand-blue/10 p-6 shadow-sm">
            <p className="text-sm leading-relaxed text-brand-slate">
              From our base in Dubai, we coordinate procurement, crew changes, and maintenance windows that align with complex shipping schedules in the Gulf and Asia-Pacific.
            </p>
          </div>
        </div>
      </section>

      <section className="mt-12 rounded-3xl border border-brand-blue/10 bg-white p-8 shadow-sm">
        <h2 className="text-2xl font-semibold text-brand-blue">Commitment to tailored service</h2>
        <p className="mt-4 text-sm leading-relaxed text-brand-slate">
          Every engagement is shaped around client goals—whether that is accelerating a drydocking campaign, deploying specialized technicians, or designing long-term maintenance programs. We focus on cost-effective delivery without compromising on safety, regulatory compliance, or the quality of insight our teams provide.
        </p>
      </section>
    </div>
  )
}

export default About
