const teamMembers = [
  {
    name: 'Vaibhav Gupta',
    title: 'Managing Director',
    focus:
      'Leads ANVA’s strategic growth from Dubai Maritime City with a focus on offshore vessel support, diagnostics partnerships, and multi-country logistics coordination.',
    highlight: 'Championing performance-driven marine services that balance operational reliability with commercial agility.',
    profile: 'https://ae.linkedin.com/in/vaibhavgupta2',
  },
  {
    name: 'Anusree B',
    title: 'Procurement Specialist',
    focus:
      'Coordinates technical purchasing, inventory control, and vendor alignment that underpin ANVA’s vessel support operations across the Gulf and ASEAN region.',
    highlight: 'Holds an MBA in Finance and Operations with expertise in streamlining supply chains for offshore projects.',
    profile: 'https://ae.linkedin.com/in/anusree-b-1222b01b9',
  },
  {
    name: 'Kate Trinidad',
    title: 'Operations Manager',
    focus:
      'Oversees day-to-day execution from Dubai Maritime City, ensuring client communication, documentation, and workshop readiness stay synchronized.',
    highlight: 'Aligns administrative processes with technical teams so projects maintain transparency and pace.',
    profile: 'https://ae.linkedin.com/in/kate-trinidad-17a85a26b',
  },
]

function Team() {
  return (
    <div className="mx-auto max-w-6xl px-6 py-16">
      <div className="space-y-6">
        <p className="text-xs font-semibold uppercase tracking-[0.35em] text-brand-blue">Our Leadership & Specialists</p>
        <h1 className="text-3xl font-semibold text-brand-blue md:text-4xl">Experienced mariners, engineers, and operations leaders</h1>
        <p className="text-base leading-relaxed text-brand-slate">
          ANVA’s compact core team blends strategic oversight, procurement discipline, and operational excellence—enabling us to mobilize rapidly across Dubai and Southeast Asia for every assignment.
        </p>
      </div>

      <div className="mt-10 grid gap-8 md:grid-cols-3">
        {teamMembers.map((member) => (
          <article key={member.name} className="flex flex-col rounded-3xl border border-brand-blue/10 bg-white p-6 shadow-sm">
            <div className="flex-1 space-y-3">
              <h2 className="text-xl font-semibold text-brand-blue">{member.name}</h2>
              <p className="text-sm font-semibold uppercase tracking-widest text-brand-gold">{member.title}</p>
              <p className="text-sm leading-relaxed text-brand-slate">{member.focus}</p>
              <p className="rounded-2xl bg-brand-blue/5 p-4 text-sm text-brand-slate">{member.highlight}</p>
            </div>
            <a
              href={member.profile}
              className="mt-6 inline-flex items-center rounded-full bg-brand-blue px-4 py-2 text-sm font-semibold text-white transition hover:bg-brand-gold hover:text-brand-slate"
            >
              View LinkedIn Profile
            </a>
          </article>
        ))}
      </div>
    </div>
  )
}

export default Team
