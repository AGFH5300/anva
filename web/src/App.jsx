import { BrowserRouter, NavLink, Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import About from './pages/About'
import VisionMission from './pages/VisionMission'
import Team from './pages/Team'
import Contact from './pages/Contact'
import Projects from './pages/Projects'
import Footer from './components/Footer'

const navigation = [
  { to: '/', label: 'Home' },
  { to: '/about', label: 'About Us' },
  { to: '/vision-mission', label: 'Vision & Mission' },
  { to: '/projects', label: 'Projects & Partnerships' },
  { to: '/team', label: 'Meet Our Team' },
  { to: '/contact', label: 'Contact' },
]

function App() {
  return (
    <BrowserRouter>
      <div className="flex min-h-screen flex-col bg-gradient-to-b from-white via-white to-slate-100 text-slate-900">
        <header className="border-b border-brand-blue/10 bg-white/90 backdrop-blur supports-[backdrop-filter]:bg-white/70">
          <div className="mx-auto flex max-w-7xl flex-wrap items-center justify-between gap-4 px-6 py-4 md:flex-nowrap">
            <NavLink to="/" className="flex items-center gap-3">
              <img src="/anva-logo.jpg" alt="ANVA logo" className="h-12 w-12" />
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.35em] text-brand-blue">Advanced Nautical Ventures FZE</p>
                <p className="text-sm font-medium text-brand-slate">Marine Services & Diagnostics</p>
              </div>
            </NavLink>
            <nav className="flex flex-1 justify-end">
              <ul className="flex flex-wrap items-center gap-3 text-sm font-medium text-brand-slate md:gap-6">
                {navigation.map((link) => (
                  <li key={link.to}>
                    <NavLink
                      to={link.to}
                      className={({ isActive }) =>
                        `rounded-full px-3 py-1 transition hover:text-brand-blue md:px-4 md:py-2 ${
                          isActive ? 'bg-brand-blue text-white shadow-sm' : ''
                        }`
                      }
                    >
                      {link.label}
                    </NavLink>
                  </li>
                ))}
              </ul>
            </nav>
          </div>
        </header>

        <main className="flex-1">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/vision-mission" element={<VisionMission />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/team" element={<Team />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </main>

        <Footer />
      </div>
    </BrowserRouter>
  )
}

export default App
