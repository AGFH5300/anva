function Footer() {
  return (
    <footer className="border-t border-brand-blue/10 bg-brand-blue text-white">
      <div className="mx-auto flex max-w-7xl flex-col gap-8 px-6 py-10 md:flex-row md:items-start md:justify-between">
        <div className="space-y-2 max-w-md">
          <p className="text-sm font-semibold uppercase tracking-[0.35em] text-brand-gold">Advanced Nautical Ventures FZE</p>
          <p className="text-lg font-semibold">Smart work + Smart delivery for a smarter tomorrow.</p>
          <p className="text-sm text-white/80">
            Headquartered in Dubai Maritime City, ANVA delivers technical, commercial, and operational support for offshore and maritime clients across the Middle East and Asia-Pacific.
          </p>
        </div>
        <div className="grid grid-cols-1 gap-6 text-sm md:grid-cols-3">
          <div>
            <h3 className="mb-3 text-sm font-semibold uppercase tracking-widest text-brand-gold">Contact</h3>
            <p>Dubai Maritime City, UAE</p>
            <p>Phone: <a href="tel:+971523567890" className="font-semibold text-brand-gold">+971 52 356 7890</a></p>
            <p>Email: <a href="mailto:info@anva-group.com" className="font-semibold text-brand-gold">info@anva-group.com</a></p>
          </div>
          <div>
            <h3 className="mb-3 text-sm font-semibold uppercase tracking-widest text-brand-gold">Operations</h3>
            <ul className="space-y-1 text-white/90">
              <li>Marine logistics & vessel chartering</li>
              <li>Technical project management</li>
              <li>Engine diagnostics & performance monitoring</li>
            </ul>
          </div>
          <div>
            <h3 className="mb-3 text-sm font-semibold uppercase tracking-widest text-brand-gold">Stay Connected</h3>
            <p>Follow ANVA on LinkedIn for hiring updates, partnerships, and new deployments.</p>
            <a
              href="https://www.linkedin.com/company/advanced-nautical-ventures/"
              className="inline-flex items-center gap-2 rounded-full bg-white px-4 py-2 text-sm font-semibold text-brand-blue shadow-sm transition hover:bg-brand-gold hover:text-brand-slate"
            >
              LinkedIn
            </a>
          </div>
        </div>
      </div>
      <div className="border-t border-white/20 py-4">
        <p className="text-center text-xs text-white/70">© {new Date().getFullYear()} Advanced Nautical Ventures FZE. All rights reserved.</p>
      </div>
    </footer>
  )
}

export default Footer
