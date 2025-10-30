function Contact() {
  return (
    <div className="mx-auto max-w-5xl px-6 py-16">
      <div className="grid gap-10 rounded-3xl border border-brand-blue/10 bg-white p-10 shadow-sm md:grid-cols-[1.1fr,1fr]">
        <div className="space-y-6">
          <p className="text-xs font-semibold uppercase tracking-[0.35em] text-brand-blue">Contact</p>
          <h1 className="text-3xl font-semibold text-brand-blue md:text-4xl">Let’s coordinate your next offshore operation</h1>
          <p className="text-sm leading-relaxed text-brand-slate">
            Reach our Dubai Maritime City headquarters for vessel support, diagnostics programs, or regional logistics engagements. Our teams respond within one business day to align scope, timelines, and compliance requirements.
          </p>

          <div className="space-y-4 text-sm text-brand-slate">
            <div>
              <h2 className="text-sm font-semibold uppercase tracking-widest text-brand-gold">Head office</h2>
              <p>Dubai Maritime City, United Arab Emirates</p>
            </div>
            <div>
              <h2 className="text-sm font-semibold uppercase tracking-widest text-brand-gold">Call</h2>
              <a href="tel:+971523567890" className="font-semibold text-brand-blue hover:text-brand-gold">
                +971 52 356 7890
              </a>
            </div>
            <div>
              <h2 className="text-sm font-semibold uppercase tracking-widest text-brand-gold">Email</h2>
              <p>
                Commercial enquiries:{' '}
                <a href="mailto:info@anva-group.com" className="font-semibold text-brand-blue hover:text-brand-gold">
                  info@anva-group.com
                </a>
              </p>
              <p>
                Technical support:{' '}
                <a href="mailto:technical@anva-group.com" className="font-semibold text-brand-blue hover:text-brand-gold">
                  technical@anva-group.com
                </a>
              </p>
            </div>
          </div>
        </div>

        <form className="space-y-4">
          <div>
            <label htmlFor="name" className="block text-sm font-semibold text-brand-blue">
              Name
            </label>
            <input
              id="name"
              name="name"
              type="text"
              placeholder="Enter your full name"
              className="mt-1 w-full rounded-xl border border-brand-blue/20 bg-white px-4 py-3 text-sm shadow-sm focus:border-brand-blue focus:outline-none focus:ring-2 focus:ring-brand-blue/40"
              required
            />
          </div>
          <div>
            <label htmlFor="email" className="block text-sm font-semibold text-brand-blue">
              Email
            </label>
            <input
              id="email"
              name="email"
              type="email"
              placeholder="name@company.com"
              className="mt-1 w-full rounded-xl border border-brand-blue/20 bg-white px-4 py-3 text-sm shadow-sm focus:border-brand-blue focus:outline-none focus:ring-2 focus:ring-brand-blue/40"
              required
            />
          </div>
          <div>
            <label htmlFor="subject" className="block text-sm font-semibold text-brand-blue">
              Project scope
            </label>
            <input
              id="subject"
              name="subject"
              type="text"
              placeholder="Engine overhaul, STS support, logistics planning..."
              className="mt-1 w-full rounded-xl border border-brand-blue/20 bg-white px-4 py-3 text-sm shadow-sm focus:border-brand-blue focus:outline-none focus:ring-2 focus:ring-brand-blue/40"
            />
          </div>
          <div>
            <label htmlFor="message" className="block text-sm font-semibold text-brand-blue">
              Message
            </label>
            <textarea
              id="message"
              name="message"
              rows="5"
              placeholder="Share timelines, vessel details, or port locations so we can respond with the right specialists."
              className="mt-1 w-full rounded-xl border border-brand-blue/20 bg-white px-4 py-3 text-sm shadow-sm focus:border-brand-blue focus:outline-none focus:ring-2 focus:ring-brand-blue/40"
              required
            />
          </div>
          <button
            type="submit"
            className="inline-flex w-full items-center justify-center rounded-full bg-brand-blue px-6 py-3 text-sm font-semibold text-white transition hover:bg-brand-gold hover:text-brand-slate"
          >
            Submit enquiry
          </button>
        </form>
      </div>
    </div>
  )
}

export default Contact
