import { Link } from 'react-router-dom';
import Card from '../components/Card';

export default function Home() {
  const habilidades = [
    {
      titulo: '🎯 Precisão de Mira',
      texto: 'Assim como um bom jogador mira com precisão, os seletores CSS avançados permitem atingir exatamente o elemento certo — por posição, hierarquia ou atributo.',
    },
    {
      titulo: '✨ Buffs e Efeitos Visuais',
      texto: 'Pseudo-classes como :hover funcionam como buffs: ativam efeitos quando o jogador interage. Pseudo-elementos como ::before e ::after adicionam detalhes sem poluir o HTML.',
    },
    {
      titulo: '🗺️ Construindo o Mapa',
      texto: 'Todo elemento HTML é uma caixa — como os blocos de um mapa. Cada camada (content, padding, border, margin) define o espaço que aquele bloco ocupa no mundo.',
    },
  ];

  return (
    <main style={{ maxWidth: '1100px', margin: '0 auto', padding: '24px 16px' }}>

      {/* Seção sobre o projeto */}
      <section style={{ marginBottom: '32px' }}>
        <h2 style={{ marginBottom: '16px' }}>Sobre o Projeto</h2>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: '16px' }}>
          <Card title="Olá, Mundo!">
            <p>Aqui nasce meu projeto de Web. Este projeto foi desenvolvido ao longo das aulas de PRG04 - Desenvolvimento Web.</p>
            <p>Ao longo das atividades, aprendi sobre HTML semântico, CSS, seletores avançados, pseudo-classes, pseudo-elementos e o modelo de caixas.</p>
          </Card>
          <Card title="Atividades" titleColor="#f59e0b" borderColor="#f59e0b">
            <p>Acesse as atividades desenvolvidas:</p>
            <ul style={{ listStyle: 'none', padding: 0 }}>
              <li><Link to="/atividade-03" style={{ color: '#f59e0b' }}>→ Atividade 03</Link></li>
              <li><Link to="/sandbox" style={{ color: '#f59e0b' }}>→ Atividade 04 - Sandbox</Link></li>
              <li><Link to="/paleta-de-cores" style={{ color: '#f59e0b' }}>→ Atividade 05 - Paleta de Cores</Link></li>
            </ul>
          </Card>
        </div>
      </section>

      {/* Habilidades */}
      <section>
        <h2 style={{ marginBottom: '16px' }}>Habilidades Desbloqueadas</h2>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: '16px' }}>
          {habilidades.map((h, i) => (
            <Card key={i} title={h.titulo}>
              <p style={{ margin: 0 }}>{h.texto}</p>
            </Card>
          ))}
        </div>
      </section>

    </main>
  );
}
