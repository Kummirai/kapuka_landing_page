"use client"

const DARK = "#01312D"
const GREEN = "#3A7717"
const LIME = "#bff202"
const LIGHT_GREEN = "#72bf00"
const MINT = "#eafde7"

const styles = {
  page: {
    minHeight: "100vh",
    background: MINT,
    position: "relative" as const,
    overflow: "hidden",
    display: "flex",
    flexDirection: "column" as const,
    fontFamily: "-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif",
  },
  nav: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    padding: "20px 32px",
    maxWidth: 1200,
    margin: "0 auto",
    width: "100%",
    boxSizing: "border-box" as const,
  },
  navLinks: {
    display: "flex",
    gap: 28,
    alignItems: "center",
  },
  navLink: {
    fontSize: 13,
    fontWeight: 500,
    color: "#4a4a4a",
    textDecoration: "none",
    letterSpacing: "0.02em",
  },
  navBtn: {
    fontSize: 13,
    fontWeight: 600,
    color: "#fff",
    background: `linear-gradient(135deg, ${DARK}, ${GREEN})`,
    padding: "8px 20px",
    borderRadius: 20,
    textDecoration: "none",
  },
  phoneSection: {
    flex: 1,
    padding: "40px 24px",
    width: "100%",
    boxSizing: "border-box" as const,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    position: "relative" as const,
    zIndex: 1,
  },
  phoneLayout: {
    display: "flex",
    alignItems: "center",
    gap: 60,
    justifyContent: "center",
    flexWrap: "wrap" as const,
  },
  phoneFrame: {
    width: 280,
    height: 570,
    background: "#1a1a1a",
    borderRadius: 40,
    padding: "12px 8px",
    boxShadow: "0 20px 60px rgba(0,0,0,0.15), 0 0 0 1px rgba(0,0,0,0.1)",
    position: "relative" as const,
    flexShrink: 0,
  },
  phoneNotch: {
    position: "absolute" as const,
    top: 0,
    left: "50%",
    marginLeft: -60,
    width: 120,
    height: 24,
    background: "#1a1a1a",
    borderRadius: "0 0 16px 16px",
    zIndex: 2,
  },
  phoneScreen: {
    width: "100%",
    height: "100%",
    background: MINT,
    borderRadius: 32,
    overflow: "hidden" as const,
    display: "flex",
    flexDirection: "column" as const,
  },
  phoneStatusBar: {
    display: "flex",
    justifyContent: "space-between",
    padding: "10px 20px 6px",
    fontSize: 11,
    fontWeight: 600,
    color: DARK,
  },
  phoneText: {
    maxWidth: 420,
    display: "flex",
    flexDirection: "column" as const,
    alignItems: "center",
    textAlign: "center" as const,
  },
  phoneTitle: {
    fontSize: 48,
    fontWeight: 300,
    color: DARK,
    margin: 0,
    marginBottom: 16,
    letterSpacing: "-0.02em",
  },
  phoneDesc: {
    fontSize: 15,
    color: "#5B6770",
    lineHeight: 1.7,
    margin: 0,
    marginBottom: 32,
  },
  phoneBtn: {
    display: "inline-flex",
    alignItems: "center",
    gap: 8,
    background: `linear-gradient(135deg, ${DARK}, ${GREEN})`,
    color: "#fff",
    padding: "14px 32px",
    borderRadius: 999,
    fontSize: 14,
    fontWeight: 600,
    textDecoration: "none",
  },
  phoneMeta: {
    fontSize: 13,
    color: "#9CA3AF",
    marginTop: 16,
  },
  phoneBottomNav: {
    display: "flex",
    justifyContent: "space-around",
    padding: "8px 0 4px",
    borderTop: "1px solid #e8eceb",
    background: "#fff",
  },
  phoneNavItem: {
    display: "flex",
    flexDirection: "column" as const,
    alignItems: "center",
    gap: 2,
    fontSize: 9,
    color: "#999",
  },
  phoneNavItemActive: {
    display: "flex",
    flexDirection: "column" as const,
    alignItems: "center",
    gap: 2,
    fontSize: 9,
    color: DARK,
    fontWeight: 600,
  },
  section: {
    padding: "80px 24px",
    maxWidth: 1100,
    margin: "0 auto",
    width: "100%",
    boxSizing: "border-box" as const,
    position: "relative" as const,
    zIndex: 1,
  },
  sectionTitle: {
    fontSize: 28,
    fontWeight: 300,
    color: DARK,
    margin: 0,
    marginBottom: 48,
    textAlign: "center" as const,
    letterSpacing: "-0.01em",
  },
  grid: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))",
    gap: 24,
  },
  card: {
    background: "linear-gradient(135deg, #ffffff 0%, #f8faf9 100%)",
    borderRadius: 16,
    padding: "40px 32px",
    border: "1px solid #e8eceb",
  },
  cardIcon: {
    marginBottom: 20,
    display: "block",
  },
  cardTitle: {
    fontSize: 17,
    fontWeight: 700,
    color: DARK,
    marginBottom: 10,
    letterSpacing: "-0.01em",
  },
  cardDesc: {
    fontSize: 14,
    color: "#5B6770",
    lineHeight: 1.7,
    margin: 0,
  },
  footer: {
    borderTop: "1px solid #f0f0f0",
    padding: "48px 24px 32px",
    maxWidth: 1100,
    margin: "0 auto",
    width: "100%",
    boxSizing: "border-box" as const,
    position: "relative" as const,
    zIndex: 1,
  },
  footerGrid: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(160px, 1fr))",
    gap: 40,
    marginBottom: 48,
  },
  footerCol: {
    display: "flex",
    flexDirection: "column" as const,
    gap: 12,
  },
  footerLabel: {
    fontSize: 12,
    fontWeight: 700,
    color: DARK,
    textTransform: "uppercase" as const,
    letterSpacing: "0.08em",
    marginBottom: 4,
  },
  footerLink: {
    fontSize: 14,
    color: "#6B7280",
    textDecoration: "none",
  },
  footerBottom: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    flexWrap: "wrap" as const,
    gap: 16,
    paddingTop: 24,
    borderTop: "1px solid #f0f0f0",
    fontSize: 13,
    color: "#9CA3AF",
  },
}

function FuelIconPhone() {
  return (
    <svg viewBox="0 0 24 24" width={16} height={16} fill="none" stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M3 22h12"/><path d="M9 22V8"/><path d="M3 8h12"/><path d="M3 8c0-2 1.5-4 6-4s6 2 6 4"/>
    </svg>
  )
}

function CarIconPhone() {
  return (
    <svg viewBox="0 0 24 24" width={16} height={16} fill="none" stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M5 17h14"/><path d="M6 10l1-5h10l1 5"/><path d="M4 17v3"/><path d="M20 17v3"/>
    </svg>
  )
}

function CashIconPhone() {
  return (
    <svg viewBox="0 0 24 24" width={16} height={16} fill="none" stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <rect x="1" y="5" width="22" height="14" rx="2"/><circle cx="12" cy="12" r="3"/>
    </svg>
  )
}

function FlashIcon() {
  return (
    <svg viewBox="0 0 24 24" width={16} height={16} fill={LIME} stroke="none">
      <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z"/>
    </svg>
  )
}

function ShieldCheckIcon() {
  return (
    <svg viewBox="0 0 24 24" width={14} height={14} fill="none" stroke={LIME} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/><path d="M9 12l2 2 4-4"/>
    </svg>
  )
}

const FEATURES = [
  {
    icon: <FuelIconPhone />,
    title: "Fuel Delivery",
    desc: "Order petrol or diesel delivered to your location. Fast, reliable, and no queues.",
    bg: "linear-gradient(135deg, #f0faf5 0%, #ffffff 100%)",
  },
  {
    icon: <CarIconPhone />,
    title: "Car Wash",
    desc: "Premium car wash services at your doorstep. Professional cleaning, convenience always.",
    bg: "linear-gradient(135deg, #fffbeb 0%, #ffffff 100%)",
  },
  {
    icon: <CashIconPhone />,
    title: "Cash Loans",
    desc: "Quick and transparent cash loans when you need them. Simple application, instant approval.",
    bg: "linear-gradient(135deg, #eef2ff 0%, #ffffff 100%)",
  },
  {
    icon: <ShieldCheckIcon />,
    title: "Secure & Trusted",
    desc: "Role-based access, real-time tracking, and 24/7 support. Your safety is our priority.",
    bg: "linear-gradient(135deg, #fdf2f8 0%, #ffffff 100%)",
  },
]

function PhoneMockup() {
  return (
    <div style={styles.phoneFrame}>
      <div style={styles.phoneNotch} />
      <div style={{ ...styles.phoneScreen, overflow: "hidden" }}>
        <div style={{ flex: 1, overflowY: "auto", scrollbarWidth: "none", msOverflowStyle: "none", background: MINT }}>
          <style>{`.phone-scroll::-webkit-scrollbar { display: none; }`}</style>

          {/* Status bar */}
          <div style={styles.phoneStatusBar}>
            <span>12:00</span>
            <span style={{ letterSpacing: 1 }}>◉ 􀊨􀊰</span>
          </div>

          {/* Decorative orbs */}
          <div style={{ position: "absolute", top: 80, right: -60, width: 200, height: 200, borderRadius: "50%", background: "rgba(191,242,2,0.08)", pointerEvents: "none" }} />
          <div style={{ position: "absolute", bottom: 80, left: -60, width: 200, height: 200, borderRadius: "50%", background: "rgba(58,119,23,0.04)", pointerEvents: "none" }} />

          {/* Header */}
          <div style={{ padding: "8px 16px 8px", display: "flex", justifyContent: "space-between", alignItems: "center", position: "relative", zIndex: 1 }}>
            <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
              <div style={{ width: 36, height: 36, borderRadius: 10, background: `linear-gradient(135deg, ${DARK}, ${GREEN})`, display: "flex", alignItems: "center", justifyContent: "center" }}>
                <FlashIcon />
              </div>
              <div>
                <div style={{ fontSize: 16, fontWeight: 800, color: DARK, lineHeight: "16px", letterSpacing: "-0.02em" }}>Kapuka</div>
                <div style={{ fontSize: 9, fontWeight: 700, color: LIGHT_GREEN, letterSpacing: "0.05em" }}>TRADINGS</div>
              </div>
            </div>
            <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
              <div style={{ padding: "3px 8px", borderRadius: 999, background: LIME, fontSize: 8, fontWeight: 700, color: DARK }}>Driver</div>
              <div style={{ width: 28, height: 28, borderRadius: "50%", background: MINT, border: "1px solid #d1d5db", display: "flex", alignItems: "center", justifyContent: "center" }}>
                <svg viewBox="0 0 24 24" width={12} height={12} fill="none" stroke="#999" strokeWidth="2"><circle cx="12" cy="8" r="4"/><path d="M4 21c0-5 4-8 8-8s8 3 8 8"/></svg>
              </div>
            </div>
          </div>

          {/* Hero Card */}
          <div style={{ margin: "4px 14px 14px", borderRadius: 20, padding: 20, background: `linear-gradient(135deg, ${DARK}, ${GREEN})`, color: "#fff", position: "relative", zIndex: 1 }}>
            <div style={{ display: "flex", alignItems: "center", gap: 4, marginBottom: 10 }}>
              <ShieldCheckIcon />
              <span style={{ fontSize: 9, fontWeight: 700, color: LIME, letterSpacing: 1 }}>JOIN US</span>
            </div>
            <div style={{ fontSize: 20, fontWeight: 800, lineHeight: "24px", marginBottom: 2 }}>
              Get Fuel / Car Wash{" "}
              <span style={{ color: LIME }}>Services</span>
            </div>
            <div style={{ fontSize: 10, color: "rgba(255,255,255,0.65)", marginBottom: 14, lineHeight: "14px" }}>
              with Kapuka Tradings
            </div>
            <div style={{ display: "inline-flex", alignItems: "center", gap: 4, background: "#fff", padding: "6px 12px", borderRadius: 7 }}>
              <span style={{ fontSize: 10, fontWeight: 700, color: DARK }}>Refuel, Work And Pay Later</span>
              <svg viewBox="0 0 24 24" width={10} height={10} fill="none" stroke={DARK} strokeWidth="2.5"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
            </div>
          </div>

          {/* Feature Pills */}
          <div style={{ padding: "0 14px", marginBottom: 16, position: "relative", zIndex: 1, display: "flex", flexWrap: "wrap", gap: 6, justifyContent: "center" }}>
            {["24/7 Support", "No Hidden Fees", "Instant Processing"].map(f => (
              <div key={f} style={{ display: "flex", alignItems: "center", gap: 4, background: "#fff", borderRadius: 999, padding: "4px 10px", border: "1px solid #e8eceb" }}>
                <div style={{ width: 5, height: 5, borderRadius: "50%", background: GREEN }} />
                <span style={{ fontSize: 8, fontWeight: 600, color: DARK }}>{f}</span>
              </div>
            ))}
          </div>

          {/* Get Started CTA */}
          <div style={{ padding: "0 14px", marginBottom: 18, position: "relative", zIndex: 1, display: "flex", justifyContent: "center" }}>
            <div style={{ display: "inline-flex", alignItems: "center", gap: 6, background: `linear-gradient(135deg, ${DARK}, ${GREEN})`, padding: "10px 20px", borderRadius: 30 }}>
              <span style={{ fontSize: 12, fontWeight: 700, color: "#fff" }}>Get Started</span>
              <svg viewBox="0 0 24 24" width={14} height={14} fill="none" stroke="#fff" strokeWidth="2.5"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
            </div>
          </div>

          {/* Available Services */}
          <div style={{ padding: "0 14px", marginBottom: 16, position: "relative", zIndex: 1 }}>
            <div style={{ fontSize: 11, fontWeight: 700, color: DARK, marginBottom: 8 }}>Available Services</div>
            <div style={{ display: "flex", flexWrap: "wrap", gap: 8, justifyContent: "center" }}>
              {[
                { label: "Fuel", icon: <FuelIconPhone />, grad: [GREEN, LIGHT_GREEN], sub: "Petrol • Diesel" },
                { label: "Car Wash", icon: <CarIconPhone />, grad: [DARK, GREEN], sub: "Premium cleaning" },
                { label: "Cash Loan", icon: <CashIconPhone />, grad: [LIME, LIGHT_GREEN], sub: "26% • 14 days" },
              ].map((s, i) => {
                const isThird = i === 2
                return (
                <div key={s.label} style={{ background: "#fff", borderRadius: 12, padding: 12, border: "1px solid #e8eceb", width: isThird ? "50%" : "calc(50% - 4px)" }}>
                  <div style={{ width: 32, height: 32, borderRadius: 10, background: `linear-gradient(135deg, ${s.grad[0]}, ${s.grad[1]})`, display: "flex", alignItems: "center", justifyContent: "center", marginBottom: 8 }}>
                    {s.icon}
                  </div>
                  <div style={{ fontSize: 11, fontWeight: 700, color: DARK, marginBottom: 2 }}>{s.label}</div>
                  <div style={{ fontSize: 8, color: "#9CA3AF", lineHeight: "10px", marginBottom: 6 }}>{s.sub}</div>
                  <div style={{ fontSize: 8, fontWeight: 700, color: GREEN }}>Request now →</div>
                </div>
                )
              })}
            </div>
          </div>

          {/* Why Choose Us */}
          <div style={{ padding: "0 14px", marginBottom: 16, position: "relative", zIndex: 1 }}>
            <div style={{ fontSize: 11, fontWeight: 700, color: DARK, marginBottom: 8 }}>Why Choose Us?</div>
            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr", gap: 6 }}>
              {[
                { title: "Fast Delivery", icon: <svg viewBox="0 0 24 24" width={14} height={14} fill="none" stroke={GREEN} strokeWidth="2"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg> },
                { title: "Secure", icon: <svg viewBox="0 0 24 24" width={14} height={14} fill="none" stroke={GREEN} strokeWidth="2"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg> },
                { title: "24/7 Support", icon: <svg viewBox="0 0 24 24" width={14} height={14} fill="none" stroke={GREEN} strokeWidth="2"><path d="M21 15a2 2 0 01-2 2H7l-4 4V5a2 2 0 012-2h14a2 2 0 012 2z"/></svg> },
              ].map(f => (
                <div key={f.title} style={{ background: "#fff", borderRadius: 10, padding: "10px 8px", border: "1px solid #e8eceb", textAlign: "center" }}>
                  <div style={{ marginBottom: 4 }}>{f.icon}</div>
                  <div style={{ fontSize: 9, fontWeight: 600, color: DARK }}>{f.title}</div>
                </div>
              ))}
            </div>
          </div>

          {/* New to Kapuka CTA */}
          <div style={{ margin: "0 14px 14px", borderRadius: 16, padding: 16, background: `linear-gradient(135deg, ${LIME}, ${LIGHT_GREEN})`, position: "relative", zIndex: 1 }}>
            <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
              <div style={{ width: 40, height: 40, borderRadius: 10, background: "rgba(255,255,255,0.25)", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
                <CarIconPhone />
              </div>
              <div style={{ flex: 1 }}>
                <div style={{ fontSize: 11, fontWeight: 700, color: DARK, marginBottom: 2 }}>New to Kapuka?</div>
                <div style={{ fontSize: 9, color: DARK, opacity: 0.7 }}>Sign up now & continue with your requests!</div>
              </div>
            </div>
          </div>

          <div style={{ height: 16 }} />
        </div>

        {/* Bottom Tab Nav */}
        <div style={styles.phoneBottomNav}>
          <span style={styles.phoneNavItemActive}>Home</span>
          <span style={styles.phoneNavItem}>Requests</span>
          <span style={styles.phoneNavItem}>History</span>
          <span style={styles.phoneNavItem}>Profile</span>
        </div>
      </div>
    </div>
  )
}

export default function LandingPage() {
  return (
    <div style={styles.page}>
      {/* Decorative blurred circles — refuel app style */}
      <div style={{ position: "absolute", top: 0, right: 0, width: 320, height: 320, background: `${LIME}1A`, borderRadius: "50%", filter: "blur(64px)", pointerEvents: "none" }} />
      <div style={{ position: "absolute", bottom: 0, left: 0, width: 320, height: 320, background: `${GREEN}0D`, borderRadius: "50%", filter: "blur(64px)", pointerEvents: "none" }} />
      <div style={{ position: "absolute", top: "50%", left: "50%", transform: "translate(-50%, -50%)", width: 384, height: 384, background: `${LIGHT_GREEN}0D`, borderRadius: "50%", filter: "blur(64px)", pointerEvents: "none" }} />
      <nav style={{ position: "relative", zIndex: 1, ...styles.nav }}>
        <a href="/" style={{ display: "flex", alignItems: "center", gap: 10, fontSize: 22, fontWeight: 800, letterSpacing: "-0.03em", textDecoration: "none", color: DARK }}>
          <div style={{ width: 32, height: 32, borderRadius: 8, background: `linear-gradient(135deg, ${DARK}, ${GREEN})`, display: "flex", alignItems: "center", justifyContent: "center" }}>
            <span style={{ fontSize: 16, fontWeight: 900, color: LIME }}>K</span>
          </div>
          <span style={{ color: DARK }}>Kapuka</span>
        </a>
        <div style={styles.navLinks}>
          <a href="#features" style={styles.navLink}>Services</a>
          <a href="https://kapuka.vercel.app" style={styles.navBtn} target="_blank" rel="noopener noreferrer">Open App</a>
        </div>
      </nav>

      <div style={styles.phoneSection}>
        <div style={styles.phoneLayout}>
          <PhoneMockup />
          <div style={styles.phoneText}>
            <h1 style={styles.phoneTitle}>Kapuka Tradings</h1>
            <p style={styles.phoneDesc}>
              <strong style={{ color: GREEN }}>Get fuel, cash &amp; car wash</strong> instantly.
              A driver services platform built for speed, reliability, and peace of mind.
            </p>
            <div style={{ display: "flex", gap: 12, flexWrap: "wrap", justifyContent: "center" }}>
              <a href="https://kapuka.vercel.app" target="_blank" rel="noopener noreferrer" style={styles.phoneBtn}>
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
                  <polyline points="7 10 12 15 17 10" />
                  <line x1="12" y1="15" x2="12" y2="3" />
                </svg>
                Get the App
              </a>
            </div>
            <p style={styles.phoneMeta}>Available on Android &amp; Web</p>
          </div>
        </div>
      </div>

      <div id="features" style={styles.section}>
        <h2 style={styles.sectionTitle}>Everything you need on the road</h2>
        <div style={styles.grid}>
          {FEATURES.map((f) => (
            <div key={f.title} className="feature-card" style={{ ...styles.card, background: f.bg }}>
              <div style={styles.cardIcon}>{f.icon}</div>
              <div style={styles.cardTitle}>{f.title}</div>
              <p style={styles.cardDesc}>{f.desc}</p>
            </div>
          ))}
        </div>
      </div>

      <footer style={styles.footer}>
        <div style={styles.footerGrid}>
          <div style={styles.footerCol}>
            <div style={styles.footerLabel}>Product</div>
            <a href="https://kapuka.vercel.app" style={styles.footerLink} target="_blank" rel="noopener noreferrer">Open App</a>
            <a href="#features" style={styles.footerLink}>Services</a>
          </div>
          <div style={styles.footerCol}>
            <div style={styles.footerLabel}>Support</div>
            <a href="mailto:support@Kapuka.com" style={styles.footerLink}>Contact</a>
          </div>
          <div style={styles.footerCol}>
            <div style={styles.footerLabel}>Legal</div>
            <a href="#" style={styles.footerLink}>Privacy Policy</a>
            <a href="#" style={styles.footerLink}>Terms of Service</a>
          </div>
        </div>
        <div style={styles.footerBottom}>
          <span>&copy; 2026 Kapuka Tradings. All rights reserved.</span>
          <span>South Africa</span>
        </div>
      </footer>
    </div>
  )
}
