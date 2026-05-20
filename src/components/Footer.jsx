export default function Footer() {
  return (
    <footer style={{
      backgroundColor: '#1e293b',
      borderTop: '3px solid #7c3aed',
      color: '#94a3b8',
      fontSize: '0.9rem',
      textAlign: 'center',
      padding: '16px',
      marginTop: '32px',
    }}>
      <p style={{ margin: 0 }}>
        Projeto desenvolvido por <strong style={{ color: '#fff' }}>Jefferson Batista</strong> — IFBA Campus Irecê
      </p>
      <p style={{ margin: 0 }}>
        Disciplina: Programação Web | Professor: Jonatas Bastos
      </p>
    </footer>
  );
}
