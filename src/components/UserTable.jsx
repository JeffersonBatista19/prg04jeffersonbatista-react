import { useState } from 'react';

const usuariosIniciais = [
  { id: 1, nome: 'Jefferson Batista', email: 'jefferson@blabla.br', status: 'Ativo' },
  { id: 2, nome: 'Neymar da Silva', email: 'ney.santos@blabla.com', status: 'Ativo' },
  { id: 3, nome: 'Junin Ruindade Pura', email: 'junin.malvadao@blabla.com', status: 'Inativo' },
  { id: 4, nome: 'Bob Esponja', email: 'calça.quadrada@blabla.com', status: 'Ativo' },
  { id: 5, nome: 'Goku Santana', email: 'kame.hameha@blabla.com', status: 'Pendente' },
  { id: 6, nome: 'Jonatas Flamenguista', email: 'mengo.palmeirashorrivel@blabla.com', status: 'Ativo' },
];

const statusColors = {
  Ativo: '#16a34a',
  Inativo: '#dc2626',
  Pendente: '#d97706',
};

export default function UserTable() {
  const [usuarios, setUsuarios] = useState(usuariosIniciais);

  function editar(id) {
    alert(`Editar usuário ID ${id} — funcionalidade a ser implementada.`);
  }

  function excluir(id) {
    const confirmar = window.confirm(`Deseja realmente excluir o usuário ID ${id}?`);
    if (confirmar) {
      setUsuarios(prev => prev.filter(u => u.id !== id));
    }
  }

  return (
    <div style={{ overflowX: 'auto' }}>
      <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: '0.95rem' }}>
        <thead>
          <tr style={{ backgroundColor: '#7c3aed', color: '#fff' }}>
            <th style={th}>ID</th>
            <th style={th}>Nome</th>
            <th style={th}>E-mail</th>
            <th style={th}>Status</th>
            <th style={th}>Ações</th>
          </tr>
        </thead>
        <tbody>
          {usuarios.map((u, i) => (
            <tr key={u.id} style={{ backgroundColor: i % 2 === 0 ? '#0f172a' : '#111827' }}
              onMouseEnter={e => e.currentTarget.style.backgroundColor = '#1e293b'}
              onMouseLeave={e => e.currentTarget.style.backgroundColor = i % 2 === 0 ? '#0f172a' : '#111827'}
            >
              <td style={td}>{u.id}</td>
              <td style={td}>{u.nome}</td>
              <td style={td}>{u.email}</td>
              <td style={td}>
                <span style={{
                  backgroundColor: statusColors[u.status],
                  color: '#fff',
                  padding: '2px 10px',
                  borderRadius: '12px',
                  fontSize: '0.8rem',
                  fontWeight: 'bold',
                }}>
                  {u.status}
                </span>
              </td>
              <td style={td}>
                <button onClick={() => editar(u.id)} style={btnEdit}>Editar</button>
                <button onClick={() => excluir(u.id)} style={btnDel}>Excluir</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

const th = { padding: '10px 14px', textAlign: 'left', borderBottom: '1px solid #1e293b' };
const td = { padding: '10px 14px', color: '#cbd5e1', borderBottom: '1px solid #1e293b' };
const btnEdit = { backgroundColor: '#d97706', color: '#fff', border: 'none', padding: '4px 10px', borderRadius: '4px', cursor: 'pointer', fontWeight: 'bold', marginRight: '6px' };
const btnDel = { backgroundColor: '#dc2626', color: '#fff', border: 'none', padding: '4px 10px', borderRadius: '4px', cursor: 'pointer', fontWeight: 'bold' };
