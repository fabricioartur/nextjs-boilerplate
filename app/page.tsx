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
          maxWidth: "800px",
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
            fontSize: "1.1rem",
            opacity: 0.85,
            marginBottom: "8px",
          }}
        >
          Senior Pre-Sales Engineer &amp; Solutions Architect
        </p>

        <p
          style={{
            fontSize: "0.95rem",
            opacity: 0.6,
            marginBottom: "24px",
          }}
        >
          Edge • Cloud • Security • AI-Ready Solutions
        </p>

        <p
          style={{
            fontSize: "0.9rem",
            opacity: 0.5,
            marginBottom: "32px",
          }}
        >
          Portfolio coming soon ✨
        </p>

        <a
          href="https://www.linkedin.com/in/fartur/"
          target="_blank"
          rel="noopener noreferrer"
          style={{
            fontSize: "0.9rem",
            color: "#fff",
            textDecoration: "underline",
            opacity: 0.8,
          }}
        >
          LinkedIn
        </a>
      </section>
    </main>
  );
}
