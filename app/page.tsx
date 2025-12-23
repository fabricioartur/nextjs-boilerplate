export default function Home() {
  return (
    <main
      style={{
        minHeight: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "#000",
        color: "#fff",
        fontFamily:
          '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif',
      }}
    >
      <section
        style={{
          textAlign: "center",
          maxWidth: "900px",
          padding: "0 24px",
        }}
      >
        <h1
          style={{
            fontSize: "2.5rem",
            fontWeight: 500,
            marginBottom: "16px",
          }}
        >
          Fabricio Artur
        </h1>

        <p
          style={{
            fontSize: "1.05rem",
            opacity: 0.85,
            marginBottom: "10px",
          }}
        >
          Senior Pre-Sales Engineer | Solutions Architect | Cloud & Edge Platforms
          | Distributed & Real-Time Systems | Secure Connectivity | AI-Ready
          Solutions
        </p>

        <p
          style={{
            fontSize: "0.9rem",
            opacity: 0.6,
            marginBottom: "28px",
          }}
        >
          Portfolio coming soon ✨
        </p>

        <a
          href="https://www.linkedin.com/in/fartur/"
          target="_blank"
          rel="noopener noreferrer"
          style={{
            display: "inline-block",
            padding: "10px 18px",
            border: "1px solid #fff",
            borderRadius: "6px",
            fontSize: "0.9rem",
            color: "#fff",
            textDecoration: "none",
            opacity: 0.85,
            transition: "opacity 0.2s ease",
          }}
          onMouseEnter={(e) => (e.currentTarget.style.opacity = "1")}
          onMouseLeave={(e) => (e.currentTarget.style.opacity = "0.85")}
        >
          Connect on LinkedIn
        </a>
      </section>
    </main>
  );
}
