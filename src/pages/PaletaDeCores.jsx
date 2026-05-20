import { Link } from 'react-router-dom';

const cores = [
  { hex: '#f59e0b', nome: 'Âmbar', descricao: 'Cor principal (títulos h1)' },
  { hex: '#0f172a', nome: 'Azul Noite', descricao: 'Fundo da página' },
  { hex: '#7c3aed', nome: 'Violeta', descricao: 'Destaque secundário (títulos h2)' },
  { hex: '#e2e8f0', nome: 'Cinza Claro', descricao: 'Texto principal' },
  { hex: '#2b4dab', nome: 'Azul', descricao: 'Links' },
];

export default function PaletaDeCores() {
  return (
    <main style={{ maxWidth: '900px', margin: '0 auto', padding: '24px 16px', color: '#cbd5e1' }}>
      <h1 style={{ color: '#f59e0b' }}>Atividade 04 - Paleta de Cores</h1>

      <h2 style={{ color: '#7c3aed' }}>Tipo de Paleta</h2>
      <p>A paleta adotada é do tipo <strong>Análoga</strong>, composta por cores vizinhas na roda cromática que criam harmonia visual e uma atmosfera tecnológica sofisticada.</p>

      <h2 style={{ color: '#7c3aed' }}>Cor Principal</h2>
      <p>A cor principal escolhida é o <strong>Âmbar (#f59e0b)</strong>. Essa cor foi escolhida por estar associada a recompensa, conquista e energia. Amplamente utilizada em jogos e sistemas de gamificação para representar moedas, troféus e pontuações, estimulando o senso de progresso e motivando o usuário a completar suas tarefas. Além disso, o âmbar transmite urgência sem agressividade, reforçando a ideia de metas a cumprir — sendo ideal para um sistema de gamificação de rotina.</p>

      <h2 style={{ color: '#7c3aed' }}>Cores da Paleta</h2>
      <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
        {cores.map((c) => (
          <div key={c.hex} style={{ display: 'flex', alignItems: 'center', gap: '16px', backgroundColor: '#1e293b', padding: '12px 16px', borderRadius: '8px' }}>
            <div style={{ width: '48px', height: '48px', backgroundColor: c.hex, borderRadius: '6px', border: '1px solid #334155', flexShrink: 0 }} />
            <div>
              <strong style={{ color: '#fff' }}>{c.nome}</strong>
              <span style={{ color: '#94a3b8', marginLeft: '8px' }}>{c.hex}</span>
              <p style={{ margin: '2px 0 0', fontSize: '0.85rem', color: '#94a3b8' }}>{c.descricao}</p>
            </div>
          </div>
        ))}
      </div>

      <br />
      <Link to="/" style={{ color: '#f59e0b' }}>← Voltar</Link>
    </main>
  );
}
