import { NavLink } from 'react-router-dom';
import { useState } from 'react';

export default function Navbar() {
  const [open, setOpen] = useState(false);

  const linkStyle = ({ isActive }) => ({
    color: isActive ? '#fff' : '#f59e0b',
    fontWeight: 'bold',
    textDecoration: 'none',
    padding: '6px 10px',
    borderRadius: '4px',
    backgroundColor: isActive ? '#7c3aed' : 'transparent',
  });

  return (
    <nav style={{ backgroundColor: '#1e293b', borderBottom: '3px solid #f59e0b', padding: '10px 0' }}>
      <div style={{ maxWidth: '1100px', margin: '0 auto', padding: '0 16px', display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: '8px' }}>
        <NavLink to="/" style={{ color: '#f59e0b', fontWeight: 'bold', fontSize: '1.1rem', textDecoration: 'none' }}>
          Meu Projeto de Web
        </NavLink>

        <button
          onClick={() => setOpen(!open)}
          style={{ display: 'none', background: 'none', border: '1px solid #f59e0b', color: '#f59e0b', padding: '4px 10px', borderRadius: '4px', cursor: 'pointer' }}
          className="nav-toggler"
        >
          ☰
        </button>

        <div style={{ display: 'flex', gap: '6px', flexWrap: 'wrap', alignItems: 'center' }}>
          <NavLink to="/" end style={linkStyle}>Início</NavLink>
          <NavLink to="/atividade-03" style={linkStyle}>Atividade 03</NavLink>
          <NavLink to="/sandbox" style={linkStyle}>Sandbox</NavLink>
          <NavLink to="/paleta-de-cores" style={linkStyle}>Paleta de Cores</NavLink>
          <NavLink to="/login" style={{ color: '#fff', fontWeight: 'bold', textDecoration: 'none', padding: '6px 14px', borderRadius: '4px', backgroundColor: '#7c3aed' }}>
            Login
          </NavLink>
        </div>
      </div>
    </nav>
  );
}
