import React from 'react';

const categories = [
  { icon: 'bi-basket2', title: 'Kirana & Groceries', desc: 'Everyday pantry essentials and household needs.', tone: 'blue' },
  { icon: 'bi-stars', title: 'Fancy Accessories', desc: 'Thoughtful little finds to add colour to your day.', tone: 'pink' },
  { icon: 'bi-droplet-half', title: 'Personal Care', desc: 'Daily care and grooming essentials for the family.', tone: 'green' },
  { icon: 'bi-gift', title: 'Gifts & More', desc: 'Small gifts, useful items and everyday surprises.', tone: 'orange' },
];

const features = [
  { icon: 'bi-bag-check', title: 'Everyday convenience', text: 'Your daily essentials and fancy finds in one friendly neighbourhood store.' },
  { icon: 'bi-heart', title: 'Friendly service', text: 'A welcoming local shopping experience with helpful, personal attention.' },
  { icon: 'bi-grid', title: 'A little bit of everything', text: 'Browse useful household items, personal care products and colourful accessories.' },
];

function App() {
  const [menuOpen, setMenuOpen] = React.useState(false);

  return (
    <div>
      <div className="top-strip">
        <div className="container d-flex justify-content-between align-items-center flex-wrap gap-2">
          <span><i className="bi bi-geo-alt me-2"></i>Your neighbourhood store for everyday needs</span>
          <span className="top-telugu">మీ రోజువారీ అవసరాలకు మీ దగ్గరి షాప్</span>
        </div>
      </div>

      <nav className="navbar navbar-expand-lg navbar-light site-nav sticky-top">
        <div className="container">
          <a className="navbar-brand d-flex align-items-center gap-2" href="#home" aria-label="Sudheer Kirana and Fancy Store home">
            <img src="/images/sudheer-logo.png" alt="Sudheer Kirana and Fancy Store logo" className="brand-logo" />
            <span className="brand-copy"><strong>Sudheer</strong><small>Kirana & Fancy Store</small></span>
          </a>
          <button className="navbar-toggler" type="button" aria-label="Toggle navigation" aria-expanded={menuOpen} onClick={() => setMenuOpen(!menuOpen)}>
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className={`collapse navbar-collapse ${menuOpen ? 'show' : ''}`}>
            <ul className="navbar-nav ms-auto align-items-lg-center gap-lg-3">
              <li className="nav-item"><a className="nav-link" href="#home" onClick={() => setMenuOpen(false)}>Home</a></li>
              <li className="nav-item"><a className="nav-link" href="#categories" onClick={() => setMenuOpen(false)}>Our Categories</a></li>
              <li className="nav-item"><a className="nav-link" href="#about" onClick={() => setMenuOpen(false)}>About Us</a></li>
              <li className="nav-item"><a className="nav-link" href="#contact" onClick={() => setMenuOpen(false)}>Contact</a></li>
              <li className="nav-item"><a className="btn btn-primary nav-cta" href="#contact">Visit Our Store <i className="bi bi-arrow-up-right ms-1"></i></a></li>
            </ul>
          </div>
        </div>
      </nav>

      <main>
        <section className="hero-section" id="home">
          <div className="hero-orb orb-one"></div><div className="hero-orb orb-two"></div>
          <div className="container hero-content">
            <div className="row align-items-center g-5">
              <div className="col-lg-7">
                <div className="eyebrow"><span className="eyebrow-dot"></span> YOUR FRIENDLY NEIGHBOURHOOD STORE</div>
                <h1>Everyday essentials.<br /><span>Little things you love.</span></h1>
                <p className="hero-lead">From kirana basics to fancy accessories, find useful everyday items and colourful little discoveries—all in one convenient place.</p>
                <p className="telugu-line">మీ రోజువారీ అవసరాలు — ఒకే చోట</p>
                <div className="d-flex flex-wrap gap-3 hero-actions">
                  <a className="btn btn-primary btn-lg" href="#categories">Explore Our Store <i className="bi bi-arrow-down-right ms-2"></i></a>
                  <a className="btn btn-outline-primary btn-lg" href="#contact">Find Us <i className="bi bi-geo-alt ms-2"></i></a>
                </div>
                <div className="hero-note"><i className="bi bi-check-circle-fill"></i> Daily needs <span>•</span> Fancy finds <span>•</span> Friendly service</div>
              </div>
              <div className="col-lg-5">
                <div className="hero-card">
                  <div className="hero-card-glow"></div>
                  <div className="hero-logo-wrap"><img src="/images/sudheer-logo.png" alt="Sudheer Kirana and Fancy Store emblem" /></div>
                  <div className="hero-card-caption">
                    <span className="caption-icon"><i className="bi bi-bag-heart"></i></span>
                    <div><strong>Daily Needs • Fancy Items</strong><small>Always happy to help you shop</small></div>
                  </div>
                  <span className="floating-chip chip-top"><i className="bi bi-basket2-fill"></i> Kirana</span>
                  <span className="floating-chip chip-bottom"><i className="bi bi-stars"></i> Fancy finds</span>
                </div>
              </div>
            </div>
          </div>
          <div className="hero-bottom-line"></div>
        </section>

        <section className="trust-section">
          <div className="container">
            <div className="trust-row">
              <div className="trust-item"><span><i className="bi bi-basket"></i></span><div><strong>Daily Essentials</strong><small>For your home</small></div></div>
              <div className="trust-item"><span><i className="bi bi-stars"></i></span><div><strong>Fancy Collection</strong><small>Colourful little finds</small></div></div>
              <div className="trust-item"><span><i className="bi bi-house-heart"></i></span><div><strong>Neighbourhood Care</strong><small>Friendly local service</small></div></div>
            </div>
          </div>
        </section>

        <section className="section-pad categories-section" id="categories">
          <div className="container">
            <div className="section-heading text-center">
              <span className="section-kicker">WHAT YOU'LL FIND</span>
              <h2>Everything for your <span>everyday.</span></h2>
              <p>Browse the essentials you need and the little extras that make a day brighter.</p>
            </div>
            <div className="row g-4 mt-2">
              {categories.map((item) => (
                <div className="col-sm-6 col-lg-3" key={item.title}>
                  <article className="category-card h-100">
                    <div className={`category-icon ${item.tone}`}><i className={`bi ${item.icon}`}></i></div>
                    <h3>{item.title}</h3>
                    <p>{item.desc}</p>
                    <a href="#contact" className="category-link">Ask in store <i className="bi bi-arrow-up-right"></i></a>
                  </article>
                </div>
              ))}
            </div>
            <div className="category-footnote"><i className="bi bi-info-circle me-2"></i>Product availability may vary. Please contact or visit the store for current stock.</div>
          </div>
        </section>

        <section className="about-section section-pad" id="about">
          <div className="container">
            <div className="row align-items-center g-5">
              <div className="col-lg-5">
                <div className="about-visual">
                  <div className="about-pattern"></div>
                  <div className="about-logo-card"><img src="/images/sudheer-logo.png" alt="Sudheer Kirana and Fancy Store logo" /></div>
                  <div className="about-sticker"><i className="bi bi-heart-fill"></i><span>Local store.<br />Personal care.</span></div>
                </div>
              </div>
              <div className="col-lg-7">
                <span className="section-kicker">A LITTLE ABOUT US</span>
                <h2 className="about-title">Your local stop for <span>daily needs</span> and delightful finds.</h2>
                <p className="about-copy">Sudheer Kirana & Fancy Store brings everyday shopping together in one convenient neighbourhood destination. Whether you're picking up household essentials or looking for fancy accessories, we're here to make your shopping simple and welcoming.</p>
                <div className="feature-list">
                  {features.map((feature) => <div className="feature-item" key={feature.title}><span className="feature-icon"><i className={`bi ${feature.icon}`}></i></span><div><h3>{feature.title}</h3><p>{feature.text}</p></div></div>)}
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="cta-section">
          <div className="container">
            <div className="cta-card">
              <div className="cta-decoration"><i className="bi bi-bag-heart-fill"></i></div>
              <div><span className="section-kicker">COME SAY HELLO</span><h2>Your next everyday essential is close by.</h2><p>Visit Sudheer Kirana & Fancy Store. We'd be happy to help you find what you need.</p></div>
              <a href="#contact" className="btn btn-light btn-lg">Store details <i className="bi bi-arrow-right ms-2"></i></a>
            </div>
          </div>
        </section>

        <section className="section-pad contact-section" id="contact">
          <div className="container">
            <div className="section-heading text-center">
              <span className="section-kicker">GET IN TOUCH</span>
              <h2>We'd love to <span>see you.</span></h2>
              <p>Visit us in store or update the details below so customers can reach you.</p>
            </div>
            <div className="row g-4 mt-2 justify-content-center">
              <div className="col-md-4"><div className="contact-card"><span className="contact-icon"><i className="bi bi-geo-alt"></i></span><h3>Store Location</h3><p>rentapally Village Pullacheruvu Mandal<br />Prakasam Dt 523326</p><span className="edit-note">SC Colony</span></div></div>
              <div className="col-md-4"><div className="contact-card"><span className="contact-icon pink"><i className="bi bi-telephone"></i></span><h3>Call Us</h3><p></p><span className="edit-note">9603410248</span></div></div>
              <div className="col-md-4"><div className="contact-card"><span className="contact-icon green"><i className="bi bi-clock"></i></span><h3>Store Hours</h3><p></p><span className="edit-note"> Mon–Sun, 6 AM–10 PM</span></div></div>
            </div>
          </div>
        </section>
      </main>

      <footer className="site-footer">
        <div className="container footer-main">
          <a href="#home" className="footer-brand"><img src="/images/sudheer-logo.png" alt="" /><span><strong>Sudheer</strong><small>Kirana & Fancy Store</small></span></a>
          <p>Everyday essentials. Little things you love.</p>
          <div className="footer-links"><a href="#categories">Categories</a><a href="#about">About</a><a href="#contact">Contact</a></div>
        </div>
        <div className="container footer-bottom"><span>© {new Date().getFullYear()} Sudheer Kirana & Fancy Store. All rights reserved.</span><a href="#home">Back to top ↑</a></div>
      </footer>
    </div>
  );
}

export default App;