export default function Home() {
  return (
    <main style={{
      minHeight: '100vh',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: '#0b0b0b',
      color: '#ffffff',
      textAlign: 'center',
      padding: '2rem'
    }}>
      <h1 style={{ fontSize: '2.5rem', marginBottom: '1rem' }}>
        Fabricio Artur
      </h1>

      <p style={{ fontSize: '1.2rem', opacity: 0.85 }}>
        Sales Engineer • AI & Cloud Solutions
      </p>

      <p style={{ marginTop: '1.5rem', opacity: 0.7 }}>
        Portfolio coming soon 🚧
      </p>

      <a
        href="https://www.linkedin.com/in/fabricio-artur/"
        target="_blank"
        rel="noopener noreferrer"
        style={{
          marginTop: '2rem',
          color: '#ffffff',
          textDecoration: 'underline'
        }}
      >
        LinkedIn
      </a>
    </main>
  );
}
