import './App.css'

const features = [
  {
    icon: '🤖',
    title: 'AI-Powered Automation',
    description:
      'Harness the power of large language models and generative AI to automate repetitive tasks with intelligent, context-aware workflows — tailored precisely to your team\'s needs.',
  },
  {
    icon: '🔒',
    title: 'Secure by Design',
    description:
      'Every tool is built with security as a first-class citizen. Data never leaves your perimeter without explicit consent, and all interactions are encrypted end-to-end.',
  },
  {
    icon: '🏢',
    title: 'Enterprise-Ready',
    description:
      'Designed for large-scale deployments with role-based access control, audit logging, SSO integration, and support for on-premise or private-cloud environments.',
  },
  {
    icon: '✅',
    title: 'Compliance-First',
    description:
      'Stay ahead of regulations with built-in compliance controls for SOC 2, ISO 27001, GDPR, HIPAA, and more — without slowing down your teams.',
  },
  {
    icon: '⚙️',
    title: 'Fully Customizable',
    description:
      'Adapt every tool to your organization\'s unique processes. From custom prompts and templates to bespoke integrations, NextToolsEra molds itself around your workflow.',
  },
  {
    icon: '🚀',
    title: 'Built for the AI Era',
    description:
      'Not just another SaaS add-on — a platform reimagined from the ground up for a world where AI is the co-pilot of every knowledge worker and engineering team.',
  },
]

function App() {
  return (
    <div className="page">
      {/* ── Navigation ── */}
      <header className="nav">
        <div className="nav-inner">
          <a href="#" className="nav-brand" aria-label="NextToolsEra home">
            <img src="/nexttoolsera/logo.svg" alt="NextToolsEra logo" className="nav-logo" />
            <span className="nav-name">NextToolsEra</span>
          </a>
          <nav className="nav-links" aria-label="Primary navigation">
            <a href="#features">Features</a>
            <a href="#">Documentation</a>
            <a href="#">About</a>
            <a href="#">Contact</a>
            <a href="#" className="nav-cta">Get Started</a>
          </nav>
        </div>
      </header>

      {/* ── Hero ── */}
      <main>
        <section className="hero">
          <div className="hero-badge">Next Generation · AI Era · Enterprise Grade</div>
          <img src="/nexttoolsera/logo.svg" alt="NextToolsEra innovation icon" className="hero-icon" />
          <h1 className="hero-title">
            The Next Generation of<br />
            <span className="gradient-text">AI-Powered Tools</span>
          </h1>
          <p className="hero-subtitle">
            Accomplish common tasks in a customized, secure, and fully compliant manner.
            NextToolsEra brings enterprise-grade AI tooling that respects your security
            policies, adapts to your workflows, and scales with your organization.
          </p>
          <div className="hero-actions">
            <a href="#features" className="btn btn-primary">Explore Features</a>
            <a href="#" className="btn btn-secondary">Read the Docs</a>
          </div>
        </section>

        {/* ── Features ── */}
        <section className="features" id="features">
          <h2 className="section-title">Everything you need, nothing you don't</h2>
          <p className="section-subtitle">
            Purpose-built capabilities for teams that move fast — without cutting corners on
            security or compliance.
          </p>
          <div className="feature-grid">
            {features.map((f) => (
              <div key={f.title} className="feature-card">
                <div className="feature-icon" aria-hidden="true">{f.icon}</div>
                <h3 className="feature-title">{f.title}</h3>
                <p className="feature-desc">{f.description}</p>
              </div>
            ))}
          </div>
        </section>

        {/* ── Call to action banner ── */}
        <section className="cta-banner">
          <h2>Ready to work smarter in the AI era?</h2>
          <p>
            Join the growing community of teams transforming how they work —
            securely, compliantly, and intelligently.
          </p>
          <a href="#" className="btn btn-primary">Get Early Access</a>
        </section>
      </main>

      {/* ── Footer ── */}
      <footer className="footer">
        <div className="footer-inner">
          <div className="footer-brand">
            <img src="/nexttoolsera/logo.svg" alt="NextToolsEra logo" className="footer-logo" />
            <span>NextToolsEra</span>
          </div>
          <nav className="footer-links" aria-label="Footer navigation">
            <a href="#">Documentation</a>
            <a href="#">About</a>
            <a href="#">Features</a>
            <a href="#">Contact</a>
            <a href="#">Privacy Policy</a>
          </nav>
          <p className="footer-copy">
            © {new Date().getFullYear()} NextToolsEra. Built for the AI era.
          </p>
        </div>
      </footer>
    </div>
  )
}

export default App
