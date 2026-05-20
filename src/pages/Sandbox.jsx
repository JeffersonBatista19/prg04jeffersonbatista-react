import { Link } from 'react-router-dom';

export default function Sandbox() {
  return (
    <main style={{ maxWidth: '900px', margin: '0 auto', padding: '24px 16px', color: '#cbd5e1' }}>
      <h1 style={{ color: '#f59e0b' }}>Sandbox - Atividade 04</h1>

      <h2 style={{ color: '#7c3aed' }}>Áudio</h2>
      <audio controls>
        <source src="/the-strokes.mp3" type="audio/mpeg" />
        Seu navegador não suporta áudio.
      </audio>

      <h2 style={{ color: '#7c3aed', marginTop: '24px' }}>Vídeo</h2>
      <iframe
        width="560"
        height="315"
        src="https://www.youtube.com/embed/bCB6NGS-GUs?si=R83QqsuYvLkX47X_"
        title="YouTube video player"
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        referrerPolicy="strict-origin-when-cross-origin"
        allowFullScreen
        style={{ maxWidth: '100%' }}
      />

      <br /><br />
      <Link to="/" style={{ color: '#f59e0b' }}>← Voltar</Link>
    </main>
  );
}
