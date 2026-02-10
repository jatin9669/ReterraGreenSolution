import { useState, useEffect } from 'react'
import './App.css'

function App() {
  const [formData, setFormData] = useState({
    name: '',
    materialType: '',
    quantity: '',
    phone: ''
  })
  const [formErrors, setFormErrors] = useState({})
  const [menuOpen, setMenuOpen] = useState(false)
  const [isSubmitting, setIsSubmitting] = useState(false)

  // Clear hash and scroll to top on page load/refresh
  useEffect(() => {
    if (window.location.hash) {
      window.history.replaceState(null, '', window.location.pathname)
    }
    window.scrollTo(0, 0)
  }, [])

  // Close menu when clicking a nav link
  const handleNavClick = () => {
    setMenuOpen(false)
  }

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    
    // Validate all fields
    const errors = {}
    if (!formData.name.trim()) errors.name = 'Name is required'
    if (!formData.materialType.trim()) errors.materialType = 'Material type is required'
    if (!formData.quantity.trim()) errors.quantity = 'Quantity is required'
    if (!formData.phone.trim()) errors.phone = 'Contact number is required'
    
    setFormErrors(errors)
    
    if (Object.keys(errors).length > 0) {
      return
    }
    
    setIsSubmitting(true)
    
    // Send to Formspree
    try {
      const response = await fetch('https://formspree.io/f/mdadrejq', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        body: JSON.stringify({
          name: formData.name,
          materialType: formData.materialType,
          quantity: formData.quantity,
          phone: formData.phone
        })
      })
      
      if (response.ok) {
        alert('Thank you for your submission! We will get back to you soon.')
        setFormData({ name: '', materialType: '', quantity: '', phone: '' })
      } else {
        alert('Something went wrong. Please try again.')
      }
    } catch (error) {
      alert('Something went wrong. Please try again.')
    } finally {
      setIsSubmitting(false)
    }
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
          <button className={`hamburger ${menuOpen ? 'active' : ''}`} onClick={() => setMenuOpen(!menuOpen)}>
            <span></span>
            <span></span>
            <span></span>
          </button>
          <nav className={`nav ${menuOpen ? 'open' : ''}`}>
            <div className="nav-header">
              <img src="/images/image-removebg-preview.png" alt="ReTerra Logo" className="nav-logo" />
              <span className="nav-company-name">ReTerra Green Solutions</span>
            </div>
            <div className="nav-links">
              <a href="#about" onClick={handleNavClick}>About Us</a>
              <a href="#team" onClick={handleNavClick}>Our Team</a>
              <a href="#offerings" onClick={handleNavClick}>Our Offerings</a>
              <a href="#contact" onClick={handleNavClick}>Sell Your Panels</a>
            </div>
          </nav>
        </div>
      </header>

      {/* Hero Section */}
      <section className="hero">
        <div className="hero-overlay"></div>
        <div className="hero-content">
          <p className="hero-welcome">Welcome to</p>
          <h1>ReTerra Green Solutions</h1>
          <h2 className="hero-headline">Revolutionizing Solar Panel Recycling for a Sustainable Future & Circular Economy</h2>
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
            <div className="flowchart-linear">
              <div className="flowchart-item problem">
                <div className="flowchart-number">1</div>
                <div className="flowchart-icon">📋</div>
                <h4>Current Framework</h4>
                <p>Partial Extraction of Aluminium, Glass & Junction Box being done</p>
              </div>
              <div className="flowchart-arrow-linear">→</div>
              <div className="flowchart-item problem">
                <div className="flowchart-number">2</div>
                <div className="flowchart-icon">⚠️</div>
                <h4>Current Impact to Society</h4>
                <p>Loss of prospective value which can be recovered from Solar Cells & waste dumped into landfills harming our planet.</p>
              </div>
              <div className="flowchart-arrow-linear">→</div>
              <div className="flowchart-item solution">
                <div className="flowchart-number">3</div>
                <div className="flowchart-icon">⚙️</div>
                <h4>Our Process</h4>
                <p>With all certifications & world class technology in place, we recover highest value from solar panel compared to all other traditional methods.</p>
              </div>
              <div className="flowchart-arrow-linear">→</div>
              <div className="flowchart-item solution">
                <div className="flowchart-number">4</div>
                <div className="flowchart-icon">🌍</div>
                <h4>Impact we leave to Earth</h4>
                <p>With Proper Recycling, we aim to Create a truly circular economy and recovering crucial metals and minerals which are not recovered in traditional methods.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section id="team" className="section team">
        <div className="container">
          <h2>Our Team</h2>
          <p className="team-subtitle">Meet the passionate minds driving sustainable innovation</p>
          <div className="team-grid">
            <div className="team-card">
              <div className="team-photo">
                <img src="/images/Parv.png" alt="Parv Jain" />
              </div>
              <div className="team-info">
                <h3>Parv Jain</h3>
                <span className="team-title">CA (AIR 16)</span>
                <ul className="team-details">
                  <li>Gold medal in Direct Taxation.</li>
                  <li>Leading a RA model portfolios division with ₹2,000+ crore AUA.</li>
                  <li>National runner-up in data analytics & visualization.</li>
                  <li>Did extensive ground research on e-waste recyclers.</li>
                </ul>
              </div>
            </div>
            <div className="team-card">
              <div className="team-photo">
                <img src="/images/Harsheel.jpg" alt="Harsheel H. Shah" />
              </div>
              <div className="team-info">
                <h3>Harsheel H. Shah</h3>
                <span className="team-title">Entrepreneur</span>
                <ul className="team-details">
                  <li>Global finance exposure from an audit internship in Dubai.</li>
                  <li>Built a quick commerce platform – HS MART in 10th grade, enabling 3-hour grocery delivery within Surat.</li>
                  <li>Focused on building sustainable, value-added solutions that convert waste into resources.</li>
                </ul>
              </div>
            </div>
            <div className="team-card">
              <div className="team-photo">
                <img src="/images/Daksh.png" alt="Daksh Patel" />
              </div>
              <div className="team-info">
                <h3>Daksh Patel</h3>
                <span className="team-title">Entrepreneur</span>
                <ul className="team-details">
                  <li>Founded IJO International after 12th, exporting fruit powders globally.</li>
                  <li>Actively manages family textile business, IJO FAB.</li>
                  <li>Growing focus on solar panel and Li-ion battery recycling, building sustainable, value-creating solutions.</li>
                </ul>
              </div>
            </div>
            <div className="team-card">
              <div className="team-photo">
                <img src="/images/Chirag.png" alt="Chirag Karnani" />
              </div>
              <div className="team-info">
                <h3>Chirag Karnani</h3>
                <span className="team-title">CA, B.com</span>
                <ul className="team-details">
                  <li>Led statutory audits for a ₹4 lakh crore treasury Conglomerate.</li>
                  <li>Over 3+ years of experience at Big 4s covering solar manufacturing, services & media sectors.</li>
                  <li>Expertise in analytical reviews and variance analysis of recycling yields and cost efficiencies.</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Offerings Section */}
      <section id="offerings" className="section offerings">
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

      {/* Sell Your Panels Section */}
      <section id="contact" className="section contact">
        <div className="container">
          <h2>Sell Your Panels</h2>
          <div className="contact-wrapper">
            <form className="contact-form" onSubmit={handleSubmit}>
              <div className={`form-group ${formErrors.name ? 'has-error' : ''}`}>
                <label htmlFor="name">Your Name / Organisation Name <span className="required">*</span></label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Your Name or Organisation"
                />
                {formErrors.name && <span className="error-message">{formErrors.name}</span>}
              </div>
              <div className={`form-group ${formErrors.materialType ? 'has-error' : ''}`}>
                <label htmlFor="materialType">Type of Material Available <span className="required">*</span></label>
                <input
                  type="text"
                  id="materialType"
                  name="materialType"
                  value={formData.materialType}
                  onChange={handleChange}
                  placeholder="e.g., Solar Panels, Cells, etc."
                />
                {formErrors.materialType && <span className="error-message">{formErrors.materialType}</span>}
              </div>
              <div className={`form-group ${formErrors.quantity ? 'has-error' : ''}`}>
                <label htmlFor="quantity">Quantity Available (in Pieces/Tonnes) <span className="required">*</span></label>
                <input
                  type="text"
                  id="quantity"
                  name="quantity"
                  value={formData.quantity}
                  onChange={handleChange}
                  placeholder="e.g., 500 pieces or 10 tonnes"
                />
                {formErrors.quantity && <span className="error-message">{formErrors.quantity}</span>}
              </div>
              <div className={`form-group ${formErrors.phone ? 'has-error' : ''}`}>
                <label htmlFor="phone">Your Contact Number <span className="required">*</span></label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  placeholder="Your Phone Number"
                />
                {formErrors.phone && <span className="error-message">{formErrors.phone}</span>}
              </div>
              <button type="submit" className="submit-button" disabled={isSubmitting}>
                {isSubmitting ? 'Submitting...' : 'Submit'}
              </button>
            </form>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="footer">
        <div className="container">
          <div className="footer-logo">
            <img src="/images/image-removebg-preview.png" alt="ReTerra Logo" />
            <span>ReTerra Green Solutions</span>
          </div>
          <div className="footer-grid">
            <div className="footer-column">
              <h4>MAIN MENU</h4>
              <ul>
                <li><a href="#">Home</a></li>
                <li><a href="#about">About Us</a></li>
                <li><a href="#team">Our Team</a></li>
                <li><a href="#contact">Sell Your Panels</a></li>
              </ul>
            </div>
            <div className="footer-column">
              <h4>QUICK LINKS</h4>
              <ul>
                <li><a href="#offerings">Our Offerings</a></li>
              </ul>
            </div>
            <div className="footer-column">
              <h4>CONTACT US</h4>
              <ul className="contact-list">
                <li>
                  <span className="contact-icon">📍</span>
                  <a href="https://maps.google.com/?q=4TH+FLOOR,+TAPI+VILLA,+34,+Vijay+Nagar,+Surat,+Gujarat+395001" target="_blank" rel="noopener noreferrer">4TH FLOOR, TAPI VILLA, 34, Vijay Nagar, Surat, Gujarat 395001</a>
                </li>
                <li>
                  <span className="contact-icon">📧</span>
                  <a href="mailto:info@reterragreensol.com">info@reterragreensol.com</a>
                </li>
                <li>
                  <span className="contact-icon">📞</span>
                  <a href="tel:+919510931087">Parv Jain: +91-9510931087</a>
                </li>
              </ul>
            </div>
            <div className="footer-column about-column">
              <h4>ABOUT RETERRA</h4>
              <p>
                ReTerra Green Solutions is India's leading solar panel recycler, 
                established in 2025. We provide compliant, convenient and credible 
                sustainability solutions for the solar industry.
              </p>
            </div>
          </div>
          <div className="footer-bottom">
            <p>© 2025 ReTerra Green Solutions Partnership Firm</p>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default App
