function VisionMission() {
  return (
    <div className="mx-auto max-w-4xl px-6 py-16">
      <div className="rounded-3xl border border-brand-blue/10 bg-white p-10 shadow-sm">
        <p className="text-xs font-semibold uppercase tracking-[0.35em] text-brand-blue">Vision & Mission</p>
        <h1 className="mt-4 text-3xl font-semibold text-brand-blue md:text-4xl">Guided by reliability, powered by smart delivery</h1>
        <p className="mt-6 text-base leading-relaxed text-brand-slate">
          ANVA’s strategy is grounded in the promise made to offshore operators: smart work and smart delivery for a smarter tomorrow. Every project we accept is designed to reduce downtime, control costs, and give decision-makers the clarity they need to keep vessels moving.
        </p>
      </div>

      <section className="mt-12 grid gap-10 md:grid-cols-2">
        <div className="rounded-3xl border border-brand-blue/10 bg-gradient-to-br from-white to-brand-blue/10 p-8 shadow-sm">
          <h2 className="text-2xl font-semibold text-brand-blue">Our vision</h2>
          <p className="mt-4 text-sm leading-relaxed text-brand-slate">
            To set the standard for marine diagnostics, logistics, and project delivery in the Gulf and Asia-Pacific—empowering ship owners, operators, and service providers with proactive insight and dependable execution.
          </p>
        </div>
        <div className="rounded-3xl border border-brand-blue/10 bg-gradient-to-br from-white to-brand-blue/10 p-8 shadow-sm">
          <h2 className="text-2xl font-semibold text-brand-blue">Our mission</h2>
          <p className="mt-4 text-sm leading-relaxed text-brand-slate">
            Provide tailored, reliable, and cost-effective offshore solutions by combining engineering expertise, commercial responsiveness, and trusted regional partnerships across Dubai Maritime City and Southeast Asia.
          </p>
        </div>
      </section>

      <section className="mt-12 space-y-6">
        <h2 className="text-2xl font-semibold text-brand-blue">What guides our teams</h2>
        <ul className="grid gap-4 text-sm leading-relaxed text-brand-slate md:grid-cols-2">
          <li className="rounded-2xl border border-brand-blue/10 bg-white p-6 shadow-sm">
            <span className="text-sm font-semibold uppercase tracking-widest text-brand-gold">Client focus</span>
            <p className="mt-3 text-sm leading-relaxed text-brand-slate">
              Every assignment is shaped around the operational realities of our clients—covering everything from drydock planning to spare-part logistics.
            </p>
          </li>
          <li className="rounded-2xl border border-brand-blue/10 bg-white p-6 shadow-sm">
            <span className="text-sm font-semibold uppercase tracking-widest text-brand-gold">Engineered insight</span>
            <p className="mt-3 text-sm leading-relaxed text-brand-slate">
              Through diagnostics partnerships, we transform raw vessel data into actionable maintenance decisions that extend asset life.
            </p>
          </li>
          <li className="rounded-2xl border border-brand-blue/10 bg-white p-6 shadow-sm">
            <span className="text-sm font-semibold uppercase tracking-widest text-brand-gold">People development</span>
            <p className="mt-3 text-sm leading-relaxed text-brand-slate">
              Recruiting and upskilling marine engineers, administrators, and diagnostics specialists ensures we can mobilize quickly for critical operations.
            </p>
          </li>
          <li className="rounded-2xl border border-brand-blue/10 bg-white p-6 shadow-sm">
            <span className="text-sm font-semibold uppercase tracking-widest text-brand-gold">Regional stewardship</span>
            <p className="mt-3 text-sm leading-relaxed text-brand-slate">
              We align with port authorities and partners across Malaysia, Singapore, the Philippines, Indonesia, Vietnam, Thailand, Brunei, and Timor-Leste to deliver seamless cross-border support.
            </p>
          </li>
        </ul>
      </section>
    </div>
  )
}

export default VisionMission
