export default function Home() {
  return (
    <main
      style={{
        minHeight: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        padding: "24px",
        backgroundColor: "#000",
        color: "#fff",
      }}
    >
      <section
        style={{
          textAlign: "center",
          maxWidth: "960px",
          width: "100%",
        }}
      >
        <h1
          style={{
            fontSize: "clamp(2.2rem, 5vw, 3rem)",
            fontWeight: 600,
            marginBottom: "12px",
            lineHeight: 1.2,
          }}
        >
          Fabricio Puliafico Artur
        </h1>

        <p
          style={{
            fontSize: "clamp(1rem, 2.5vw, 1.2rem)",
            opacity: 0.85,
            marginBottom: "10px",
          }}
        >
          Senior Pre-Sales Engineer & Solutions Architect
        </p>

        <p
          style={{
            fontSize: "clamp(0.95rem, 2.3vw, 1.05rem)",
            opacity: 0.65,
            marginBottom: "22px",
            lineHeight: 1.6,
          }}
        >
          Cloud & Edge Platforms · Distributed & Real-Time Systems · Secure
          Connectivity · AI-Ready Solutions
        </p>

        <p
          style={{
            fontSize: "clamp(0.9rem, 2vw, 1rem)",
            opacity: 0.75,
            marginBottom: "32px",
            fontStyle: "italic",
          }}
        >
          Building applied AI & systems experiments
        </p>

        <a
          href="https://www.linkedin.com/in/fartur/"
          target="_blank"
          rel="noopener noreferrer"
          style={{
            display: "inline-block",
            padding: "12px 22px",
            border: "1px solid #fff",
            borderRadius: "6px",
            fontSize: "0.9rem",
            color: "#fff",
            textDecoration: "none",
            opacity: 0.85,
          }}
        >
          Connect on LinkedIn
        </a>
      </section>
    </main>
  );
}
