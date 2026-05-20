import { Link } from 'react-router-dom';

export default function Atividade03() {
  return (
    <main style={{ maxWidth: '900px', margin: '0 auto', padding: '24px 16px', color: '#cbd5e1' }}>
      <h1 style={{ color: '#f59e0b' }}>Atividade 03</h1>

      <h2 style={{ color: '#7c3aed' }}>Lista de organização</h2>
      <ul>
        <li>Estudar HTML</li>
        <li>Praticar HTML</li>
        <li>Organizar o repositório</li>
        <li>Me demitir do emprego</li>
        <li>Fim da escala 6x1</li>
      </ul>

      <h2 style={{ color: '#7c3aed' }}>Imagem dinâmica</h2>
      <picture>
        <source media="(min-width: 1000px)" srcSet="/img-din-grande.jpg" />
        <source media="(min-width: 600px)" srcSet="/img-din-media.jpg" />
        <img src="/img-din-pequena.jpg" alt="Imagem dinâmica" style={{ width: '100%', maxWidth: '800px' }} />
      </picture>

      <br />
      <Link to="/" style={{ color: '#f59e0b' }}>← Voltar</Link>
    </main>
  );
}
