import { useState, useEffect } from 'react'
import './App.css'

function App() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  })

  // Clear hash and scroll to top on page load/refresh
  useEffect(() => {
    if (window.location.hash) {
      window.history.replaceState(null, '', window.location.pathname)
    }
    window.scrollTo(0, 0)
  }, [])

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    alert('Thank you for your inquiry! We will get back to you soon.')
    setFormData({ name: '', email: '', phone: '', message: '' })
  }

  return (
    <div className="app">
      {/* Header */}
      <header className="header">
        <div className="container">
          <a href="#" className="logo" onClick={(e) => {
            e.preventDefault()
            window.scrollTo({ top: 0, behavior: 'smooth' })
            window.history.replaceState(null, '', window.location.pathname)
          }}>
            <img src="/images/image-removebg-preview.png" alt="ReTerra Logo" className="logo-img" />
            <span className="logo-text">ReTerra Green Solutions</span>
          </a>
          <nav className="nav">
            <a href="#about">About Us</a>
            <a href="#challenge">Challenge</a>
            <a href="#opportunities">Opportunities</a>
            <a href="#approach">Our Approach</a>
            <a href="#plan">Our Offerings</a>
            <a href="#collaborations">Collaborations</a>
            <a href="#contact">Contact</a>
          </nav>
        </div>
      </header>

      {/* Hero Section */}
      <section className="hero">
        <div className="hero-overlay"></div>
        <div className="hero-content">
          <p className="hero-welcome">Welcome to</p>
          <h1>ReTerra Green Solutions</h1>
          <h2 className="hero-headline">Revolutionizing Solar Panel Recycling for a Sustainable Future</h2>
          <p className="hero-description">At the forefront of solar panel recycling, spearheading efforts for sustainable and environmentally conscious disposal and recycling practices.</p>
          <div className="hero-cta">
            <a href="#about" className="cta-button primary">Learn More</a>
            <a href="#contact" className="cta-button secondary">Contact Us</a>
          </div>
        </div>
        <div className="hero-scroll">
          <span>Scroll Down</span>
          <div className="scroll-arrow">↓</div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="section about">
        <div className="container">
          <h2>About Us</h2>
          <div className="about-wrapper">
            <div className="about-image">
              <img 
                src="https://images.unsplash.com/photo-1509391366360-2e959784a276?w=600&q=80" 
                alt="Solar panels in a field"
              />
            </div>
            <div className="about-text">
              <p>
                ReTerra Green Solutions is working on a Mission to provide compliant, convenient and credible 
                sustainability solutions across the Electronic and Battery Waste category. Built by a team of 
                young entrepreneurs, ReTerra Green Solutions (established in 2025) is embarking on its way to 
                become India's leading Solar Panel recycler.
              </p>
              <p>
                The rapid adoption of solar modules globally has helped countries build cleaner energy, however 
                this technology has its own set of drawbacks. These panels at end of life are either left in 
                open grounds, dumped into landfills or sent into unorganised recycling channels where the recyclers 
                scrap through readily recoverable metals and dump remaining material into landfills leaving out 
                valuable minerals which have immense industrial applications.
              </p>
              <p>
                To solve this problem, we use best in class technology combining Pyro and Hydro metallurgical 
                processes to recover crucial metals and minerals from spent solar panels. We do not just stop there, 
                we are continuously working with institutions and researchers to build technology capable of 
                recycling latest tech in most energy efficient and sustainable ways.
              </p>
              <p className="about-highlight">
                Our continuous endeavour is to find ways to make latest technologies truly sustainable by solving 
                their end of life puzzle.
              </p>
            </div>
          </div>
          
          <div className="importance-section">
            <h3>It's important to consider "What we leave behind"</h3>
            <div className="framework-grid">
              <div className="framework-card">
                <div className="framework-icon">📋</div>
                <h4>Current Framework</h4>
                <p>Partial Extraction of Aluminium, Glass & Junction Box being done</p>
              </div>
              <div className="framework-card">
                <div className="framework-icon">⚠️</div>
                <h4>Current Impact to Society</h4>
                <p>Loss of prospective value which can be recovered from Solar Cells & waste dumped into landfills harming our planet.</p>
              </div>
              <div className="framework-card highlight">
                <div className="framework-icon">⚙️</div>
                <h4>Our Process</h4>
                <p>With all certifications & world class technology in place, we recover highest value from solar panel compared to all other traditional methods.</p>
              </div>
              <div className="framework-card highlight">
                <div className="framework-icon">🌍</div>
                <h4>Impact we leave to Earth</h4>
                <p>With Proper Recycling, we aim to Create a truly circular economy and recovering crucial metals and minerals which are not recovered in traditional methods.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Challenge Section */}
      <section id="challenge" className="section challenge">
        <div className="container">
          <h2>Challenge</h2>
          <div className="challenge-header">
            <img 
              src="https://images.unsplash.com/photo-1466611653911-95081537e5b7?w=800&q=80" 
              alt="Environmental challenges"
              className="challenge-hero-img"
            />
            <h3>Our Services Environmental Challenges</h3>
            <p>
              Hydrotech redefines your relationship with energy. Save money. Minimize your carbon footprint. 
              Take control of your power costs today!
            </p>
          </div>
          <div className="challenge-grid">
            <div className="challenge-card">
              <img src="https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=400&q=80" alt="E-waste" />
              <h4>E-Waste Volume and Composition</h4>
              <p>Foresee the pain and trouble that we are bounds to ensue equal blame belongs to their duty...</p>
            </div>
            <div className="challenge-card">
              <img src="https://images.unsplash.com/photo-1611284446314-60a58ac0deb9?w=400&q=80" alt="Landfill" />
              <h4>Landfill Contamination and Soil Pollution</h4>
              <p>Foresee the pain and trouble that we are bounds to ensue equal blame belongs to their duty...</p>
            </div>
            <div className="challenge-card">
              <img src="https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?w=400&q=80" alt="Energy" />
              <h4>Resource Depletion and Energy Consumption</h4>
              <p>Foresee the pain and trouble that we are bounds to ensue equal blame belongs to their duty...</p>
            </div>
            <div className="challenge-card">
              <img src="https://images.unsplash.com/photo-1483728642387-6c3bdd6c93e5?w=400&q=80" alt="Emissions" />
              <h4>Greenhouse Gas Emissions</h4>
              <p>Foresee the pain and trouble that we are bounds to ensue equal blame belongs to their duty...</p>
            </div>
            <div className="challenge-card">
              <img src="https://images.unsplash.com/photo-1581092160607-ee22621dd758?w=400&q=80" alt="Recycling" />
              <h4>Complex Recycling Challenges</h4>
              <p>Foresee the pain and trouble that we are bounds to ensue equal blame belongs to their duty...</p>
            </div>
          </div>
        </div>
      </section>

      {/* Opportunities Section */}
      <section id="opportunities" className="section opportunities">
        <div className="container">
          <h2>Opportunities</h2>
          <div className="opportunities-header">
            <span className="highlight-badge">Highlights</span>
            <h3>Economic Opportunities</h3>
            <p>For creating value and pursuing economic avenues</p>
          </div>
          <div className="opportunities-accordion">
            <div className="accordion-item">
              <div className="accordion-icon">♻️</div>
              <div className="accordion-content">
                <h4>Resource Recovery and Circular Economy</h4>
                <p>
                  End-of-life solar panels contain valuable materials like silicon, glass, aluminum, and rare earth elements. 
                  Proper recycling processes enable the recovery and reuse of these materials, fostering a circular economy 
                  where recycled materials feed back into the production cycle, reducing the need for virgin resources.
                </p>
              </div>
              <div className="accordion-arrow">→</div>
            </div>
            <div className="accordion-item">
              <div className="accordion-icon">💡</div>
              <div className="accordion-content">
                <h4>Innovation and Technological Advancements</h4>
                <p>
                  The need for efficient recycling methods has spurred innovation in the field of PV waste management. 
                  Companies investing in research and development to improve recycling technologies create opportunities 
                  for breakthroughs, fostering technological advancements that benefit both the industry and the environment.
                </p>
              </div>
              <div className="accordion-arrow">→</div>
            </div>
            <div className="accordion-item">
              <div className="accordion-icon">👥</div>
              <div className="accordion-content">
                <h4>Job Creation and Economic Growth</h4>
                <p>
                  The solar panel recycling industry generates employment opportunities across various sectors, including 
                  recycling facilities, research and development, logistics, and more. This sector's growth contributes 
                  to economic development, supporting local and global economies.
                </p>
              </div>
              <div className="accordion-arrow">→</div>
            </div>
            <div className="accordion-item">
              <div className="accordion-icon">📈</div>
              <div className="accordion-content">
                <h4>Market Expansion and Sustainability Services</h4>
                <p>
                  With an increasing focus on sustainability, businesses and governments seek services that align with 
                  responsible waste management and recycling. Companies like Regain Energies Pvt. Ltd. offering specialized 
                  solar panel recycling services cater to this growing market demand.
                </p>
              </div>
              <div className="accordion-arrow">→</div>
            </div>
            <div className="accordion-item">
              <div className="accordion-icon">🤝</div>
              <div className="accordion-content">
                <h4>Value Chain Integration and Collaboration</h4>
                <p>
                  Solar panel recycling necessitates collaboration across the entire value chain, from manufacturers to 
                  recyclers and policymakers. This collaboration fosters partnerships, alliances, and knowledge-sharing 
                  initiatives that contribute to a more integrated and sustainable solar industry.
                </p>
              </div>
              <div className="accordion-arrow">→</div>
            </div>
            <div className="accordion-item">
              <div className="accordion-icon">🔄</div>
              <div className="accordion-content">
                <h4>Waste-to-Resource Transformation</h4>
                <p>
                  Recycling PV waste transforms what was once considered waste into valuable resources. Recovering materials 
                  from end-of-life solar panels not only mitigates environmental impacts but also adds value by creating 
                  secondary raw materials for various industries.
                </p>
              </div>
              <div className="accordion-arrow">→</div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Approach Section */}
      <section id="approach" className="section approach">
        <div className="container">
          <h2>Our Approach</h2>
          <p className="approach-subtitle">What we do with existing panels, including premature breakage</p>
          <div className="approach-image">
            <img 
              src="https://images.unsplash.com/photo-1509391366360-2e959784a276?w=1000&q=80" 
              alt="Solar panel recycling process"
            />
          </div>
          <div className="approach-timeline">
            <div className="approach-step">
              <div className="step-number">1</div>
              <div className="step-content">
                <img src="https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=400&q=80" alt="Collection" />
                <h4>Collection and Assessment</h4>
                <p>
                  We collect end-of-life or damaged solar panels from various sources, including manufacturers and 
                  Developers. The company conducts an assessment to determine the condition and level of damage.
                </p>
              </div>
            </div>
            <div className="approach-step">
              <div className="step-number">2</div>
              <div className="step-content">
                <img src="https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=400&q=80" alt="Sorting" />
                <h4>Sorting and Segregation</h4>
                <p>
                  Panels are sorted based on their condition and damage severity. Panels with premature breakage, 
                  defects, or irreparable damage are segregated for appropriate processing.
                </p>
              </div>
            </div>
            <div className="approach-step">
              <div className="step-number">3</div>
              <div className="step-content">
                <img src="https://images.unsplash.com/photo-1581092160607-ee22621dd758?w=400&q=80" alt="Recovery" />
                <h4>Material Recovery and Recycling</h4>
                <p>
                  We employ specialized recycling processes to recover valuable materials from these damaged or 
                  end-of-life panels. This includes Material Extraction, Resource Reclamation & Environmental Compliance.
                </p>
              </div>
            </div>
            <div className="approach-step">
              <div className="step-number">4</div>
              <div className="step-content">
                <img src="https://images.unsplash.com/photo-1532996122724-e3c354a0b15b?w=400&q=80" alt="Reuse" />
                <h4>Reuse and Repurposing</h4>
                <p>
                  Salvageable components or materials are often refurbished or repurposed for use in various industries, 
                  reducing the demand for virgin resources and promoting a circular economy.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Offerings Section */}
      <section id="plan" className="section offerings">
        <div className="container">
          <h2>Our Offerings</h2>
          <div className="offerings-grid">
            <div className="offering-card">
              <div className="offering-icon">🚚</div>
              <div className="offering-number">01</div>
              <h3>Collection & Logistics</h3>
              <ul className="offering-list">
                <li>On-site pickup of solar panels & cells (manufacturing defects, damaged, EOL, warranty returns, rejects, project scrap)</li>
                <li>Nationwide logistics network with safe & compliant transport</li>
                <li>Packaging, loading, and secure handling of fragile modules</li>
                <li>Reverse logistics planning for EPCs, developers & O&M teams</li>
              </ul>
            </div>
            <div className="offering-card">
              <div className="offering-icon">⚗️</div>
              <div className="offering-number">02</div>
              <h3>Advanced Material Recovery</h3>
              <ul className="offering-list">
                <li>Thermal treatment for EVA, backsheet and encapsulant removal</li>
                <li>High-purity recovery of: Silicon, Silver, Copper, Aluminum, Glass cullet</li>
                <li>Ability to recover significantly more minerals compared to unorganised scrap handlers</li>
              </ul>
              <div className="materials-recovered">
                <span>Si</span><span>Ag</span><span>Cu</span><span>Al</span><span>Glass</span>
              </div>
            </div>
            <div className="offering-card">
              <div className="offering-icon">📋</div>
              <div className="offering-number">03</div>
              <h3>Compliance, Documentation & EPR Support</h3>
              <ul className="offering-list">
                <li>Complete EPR (Extended Producer Responsibility) fulfillment under E-Waste Management Rules</li>
                <li>Legally compliant recycling certificates</li>
                <li>Pollution-control-board-approved recycling processes</li>
                <li>Quarterly/annual compliance reporting for manufacturers and importers</li>
              </ul>
            </div>
            <div className="offering-card">
              <div className="offering-icon">💰</div>
              <div className="offering-number">04</div>
              <h3>Buy Back, Asset Recovery & Revenue Sharing</h3>
              <ul className="offering-list">
                <li>Buy-back programs for EPCs, distributors, and O&M operators</li>
                <li>Revenue-sharing model based on recovered materials</li>
                <li>Transparent scrap value benchmarking</li>
                <li>Support in auctioning and liquidation of large EOL inventories</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Collaborations Section */}
      <section id="collaborations" className="section collaborations">
        <div className="container">
          <h2>Our Collaborations</h2>
          <p className="collab-subtitle">Building partnerships for a sustainable future</p>
          <div className="collab-grid">
            <div className="collab-card">
              <div className="collab-icon-wrapper">
                <img src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=400&q=80" alt="Manufacturers" />
                <div className="collab-overlay">
                  <span className="collab-icon">🏭</span>
                </div>
              </div>
              <h3>Manufacturers</h3>
              <p>Partnering with solar panel manufacturers to ensure responsible end-of-life management of their products.</p>
              <div className="collab-hover-content">
                <span>Learn More →</span>
              </div>
            </div>
            <div className="collab-card">
              <div className="collab-icon-wrapper">
                <img src="https://images.unsplash.com/photo-1532094349884-543bc11b234d?w=400&q=80" alt="R&D" />
                <div className="collab-overlay">
                  <span className="collab-icon">🔬</span>
                </div>
              </div>
              <h3>Research & Development Institutions</h3>
              <p>Collaborating with leading research institutions to develop cutting-edge recycling technologies.</p>
              <div className="collab-hover-content">
                <span>Learn More →</span>
              </div>
            </div>
            <div className="collab-card">
              <div className="collab-icon-wrapper">
                <img src="https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=400&q=80" alt="Supply Chain" />
                <div className="collab-overlay">
                  <span className="collab-icon">🔗</span>
                </div>
              </div>
              <h3>Supply Chain Collaborations</h3>
              <p>Working with logistics partners, EPCs, and distributors to create an efficient reverse supply chain.</p>
              <div className="collab-hover-content">
                <span>Learn More →</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="section contact">
        <div className="container">
          <h2>Contact Us</h2>
          <div className="contact-wrapper">
            <div className="contact-info">
              <div className="contact-info-card">
                <div className="contact-info-icon">📍</div>
                <h3>Address</h3>
                <p>Tapi, Gujarat, India</p>
              </div>
              <div className="contact-info-card">
                <div className="contact-info-icon">📧</div>
                <h3>Email</h3>
                <p><a href="mailto:info@reterragreensol.com">info@reterragreensol.com</a></p>
              </div>
              <div className="contact-info-card">
                <div className="contact-info-icon">📞</div>
                <h3>Phone</h3>
                <p><a href="tel:+919510931087">+91-9510931087</a></p>
              </div>
            </div>
            <form className="contact-form" onSubmit={handleSubmit}>
              <div className="form-group">
                <label htmlFor="name">Name</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  placeholder="Your Name"
                />
              </div>
              <div className="form-group">
                <label htmlFor="email">Email</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  placeholder="your@email.com"
                />
              </div>
              <div className="form-group">
                <label htmlFor="phone">Phone</label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  placeholder="Your Phone Number"
                />
              </div>
              <div className="form-group">
                <label htmlFor="message">Message</label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  placeholder="Your message..."
                  rows="5"
                />
              </div>
              <button type="submit" className="submit-button">Send Message</button>
            </form>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="footer">
        <div className="container">
          <p>© 2025 ReTerra Green Solutions – All Rights Reserved</p>
        </div>
      </footer>
    </div>
  )
}

export default App
