import "./ElectronicProducts.css";
import PageWrapper from "../../components/PageWrapper";
import AnimatedSection from "../../components/AnimatedSection";

const ElectronicProducts = () => {
  const stats = [
    { value: "500+", label: "Products Supplied" },
    { value: "200+", label: "Institutions Served" },
    { value: "15+",  label: "Years of Experience" },
    { value: "98%",  label: "Client Satisfaction" },
  ];

  const capabilities = [
    {
      icon: "🖥️",
      title: "Computers & Desktops",
      desc: "High-performance workstations and desktop systems for classrooms, labs, and enterprise offices.",
    },
    {
      icon: "💾",
      title: "Servers & Storage",
      desc: "Scalable rack servers, NAS, and SAN solutions designed for reliability and data security.",
    },
    {
      icon: "🌐",
      title: "Networking Equipment",
      desc: "Switches, routers, firewalls, and structured cabling for robust wired and wireless networks.",
    },
    {
      icon: "💻",
      title: "Laptops & Peripherals",
      desc: "Business and education-grade laptops, monitors, keyboards, and input devices from top brands.",
    },
    {
      icon: "🧩",
      title: "IT Accessories & Components",
      desc: "RAM, SSDs, UPS systems, cables, and every component needed to complete your IT setup.",
    },
    {
      icon: "🛠️",
      title: "Installation & Support",
      desc: "End-to-end setup, configuration, AMC, and on-call technical support to keep your systems running.",
    },
  ];

  const solutions = [
    {
      img: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=900&q=80",
      tag: "IT Equipment",
      title: "Computers, laptops & devices for modern digital environments",
      desc: "Authorized supply of desktops, notebooks, and workstations sourced directly from leading OEM partners.",
    },
    {
      img: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&w=900&q=80",
      tag: "Network & Servers",
      title: "Reliable server infrastructure for seamless connectivity",
      desc: "From SMB switches to enterprise-grade core routers and blade servers, we cover the full stack.",
    },
    {
      img: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&w=900&q=80",
      tag: "Support & Maintenance",
      title: "Continuous care for long-term performance",
      desc: "AMC contracts, remote diagnostics, spare parts supply, and on-site technician visits as you need them.",
    },
  ];

  const steps = [
    { num: "01", title: "Consultation",   desc: "We assess your requirements and recommend the right products and infrastructure." },
    { num: "02", title: "Procurement",    desc: "Direct sourcing from authorized distributors ensures genuine products at competitive pricing." },
    { num: "03", title: "Installation",   desc: "Our certified engineers handle delivery, rack mounting, cabling, and full system setup." },
    { num: "04", title: "Ongoing Support",desc: "AMC packages and priority helpdesk keep your infrastructure running at peak performance." },
  ];

  return (
    <PageWrapper>
      {/* ── 1. HERO ── */}
      <section className="ep-hero">
        <div className="ep-hero__overlay" />
        <AnimatedSection type="fade" duration={0.8} className="ep-hero__body">
          <h1 className="ep-hero__heading">
            Advanced Digital Infrastructure
            for Institutions &amp; Enterprises
          </h1>
          <p className="ep-hero__sub">
            Authorized supply of computers, servers, networking gear, IoT kits, and lab
            equipment — complete with installation, integration, and lifetime support.
          </p>
        </AnimatedSection>

        {/* Stat bar pinned to hero bottom */}
        <div className="ep-hero__stats">
          {stats.map(({ value, label }, index) => (
            <AnimatedSection type="scale" delay={index * 0.05} className="ep-stat" key={label}>
              <span className="ep-stat__val">{value}</span>
              <span className="ep-stat__lbl">{label}</span>
            </AnimatedSection>
          ))}
        </div>
      </section>

      {/* ── 2. SPLIT — image + text ── */}
      <section className="ep-split">
        <AnimatedSection type="slideRight" className="ep-split__img-wrap" duration={0.7}>
          <img
            src="/Electric-transport.png"
            alt="Electronic Products"
            onError={e => { e.target.src = "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=900&q=80"; }}
          />
          <div className="ep-split__badge">Authorized Dealer</div>
        </AnimatedSection>
        <AnimatedSection type="slideLeft" className="ep-split__text" duration={0.7}>
          <span className="ep-eyebrow ep-eyebrow--dark">Who We Are</span>
          <h2>Smart IT Equipment<br />for Modern Institutions</h2>
          <p>
            We are an authorized IT hardware distributor serving educational institutions,
            government bodies, and enterprises across the region. Every product we supply
            comes backed by OEM warranty, certified installation, and post-sale support —
            so your infrastructure investment is protected from day one.
          </p>
          <ul className="ep-split__checklist">
            <li>OEM-authorized supply chain</li>
            <li>Certified installation engineers</li>
            <li>Annual Maintenance Contracts (AMC)</li>
            <li>Bulk & institutional pricing available</li>
          </ul>
        </AnimatedSection>
      </section>

      {/* ── 3. CAPABILITIES GRID ── */}
      <section className="ep-caps">
        <AnimatedSection type="fade" className="ep-caps__head">
          <span className="ep-eyebrow">What We Offer</span>
          <h2>Complete IT Supply &amp; Support Services</h2>
          <p>
            From individual workstations to full campus-wide network deployments —
            we handle procurement, setup, and maintenance under one roof.
          </p>
        </AnimatedSection>
        <div className="ep-caps__grid">
          {capabilities.map(({ icon, title, desc }, idx) => (
            <AnimatedSection type="scale" delay={idx * 0.05} className="ep-cap-card" key={title}>
              <div className="ep-cap-card__icon">{icon}</div>
              <h3>{title}</h3>
              <p>{desc}</p>
            </AnimatedSection>
          ))}
        </div>
      </section>

      {/* ── 4. SOLUTION CARDS ── */}
      <section className="ep-solutions">
        <AnimatedSection type="fade" className="ep-solutions__head">
          <span className="ep-eyebrow">Our Solutions</span>
          <h2>Digital Infrastructure, End to End</h2>
        </AnimatedSection>
        <div className="ep-solutions__grid">
          {solutions.map(({ img, tag, title, desc }, idx) => (
            <AnimatedSection type="slideUp" delay={idx * 0.1} className="ep-sol-card" key={tag}>
              <div className="ep-sol-card__img-wrap">
                <img src={img} alt={tag} />
                <span className="ep-sol-card__tag">{tag}</span>
              </div>
              <div className="ep-sol-card__body">
                <h3>{title}</h3>
                <p>{desc}</p>
                <a className="ep-sol-card__link" href="#">Learn more →</a>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </section>

      {/* ── 5. HOW WE WORK ── */}
      <section className="ep-process">
        <AnimatedSection type="fade" className="ep-process__head">
          <span className="ep-eyebrow">How We Work</span>
          <h2>From Requirement to Running System</h2>
          <p>A simple, transparent process designed to get your infrastructure live — on time and on budget.</p>
        </AnimatedSection>
        <div className="ep-process__steps">
          {steps.map(({ num, title, desc }, i) => (
            <AnimatedSection type="scale" delay={i * 0.08} className="ep-step" key={num}>
              <div className="ep-step__num">{num}</div>
              {i < steps.length - 1 && <div className="ep-step__line" />}
              <h3>{title}</h3>
              <p>{desc}</p>
            </AnimatedSection>
          ))}
        </div>
      </section>

      {/* ── 6. CTA BANNER ── */}
      <section className="ep-cta">
        <AnimatedSection type="scale" className="ep-cta__inner">
          <span className="ep-eyebrow ep-eyebrow--light">Get Started Today</span>
          <h2>Your Trusted Partner for IT Hardware &amp; Digital Solutions</h2>
          <p>
            Whether you need a single workstation or a full campus network, our team
            is ready to help you plan, procure, and deploy.
          </p>
          <div className="ep-cta__btns">
            <button className="ep-btn ep-btn--white">Contact Sales</button>
            <button className="ep-btn ep-btn--ghost-light">View All Services</button>
          </div>
        </AnimatedSection>
      </section>
    </PageWrapper>
  );
};

export default ElectronicProducts;