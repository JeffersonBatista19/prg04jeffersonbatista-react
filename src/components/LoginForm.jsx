import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

export default function LoginForm() {
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');
  const [erros, setErros] = useState({});
  const navigate = useNavigate();

  function fazerLogin() {
    const novosErros = {};
    const regexEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!email.trim()) {
      novosErros.email = 'O e-mail é obrigatório.';
    } else if (!regexEmail.test(email.trim())) {
      novosErros.email = 'Informe um e-mail válido.';
    }

    if (!senha.trim()) {
      novosErros.senha = 'A senha é obrigatória.';
    }

    setErros(novosErros);
    if (Object.keys(novosErros).length === 0) {
      navigate('/admin');
    }
  }

  const inputStyle = (campo) => ({
    width: '100%',
    padding: '8px 12px',
    backgroundColor: '#0f172a',
    color: '#fff',
    border: erros[campo] ? '1px solid #ef4444' : '1px solid #475569',
    borderRadius: '6px',
    fontSize: '1rem',
    boxSizing: 'border-box',
    outline: 'none',
  });

  return (
    <div style={{ backgroundColor: '#1e293b', borderTop: '4px solid #7c3aed', borderRadius: '8px', padding: '32px', maxWidth: '420px', margin: '0 auto' }}>
      <h2 style={{ color: '#7c3aed', marginTop: 0 }}>Acessar o Sistema</h2>
      <p style={{ color: '#94a3b8', fontSize: '0.9rem', marginBottom: '24px' }}>
        Informe suas credenciais para continuar.
      </p>

      <div style={{ marginBottom: '16px' }}>
        <label style={{ color: '#fff', fontWeight: 'bold', display: 'block', marginBottom: '6px' }}>E-mail</label>
        <input
          type="email"
          value={email}
          onChange={e => setEmail(e.target.value)}
          placeholder="seuemail@exemplo.com"
          style={inputStyle('email')}
        />
        {erros.email && <span style={{ color: '#ef4444', fontSize: '0.8rem' }}>{erros.email}</span>}
      </div>

      <div style={{ marginBottom: '20px' }}>
        <label style={{ color: '#fff', fontWeight: 'bold', display: 'block', marginBottom: '6px' }}>Senha</label>
        <input
          type="password"
          value={senha}
          onChange={e => setSenha(e.target.value)}
          placeholder="Digite sua senha"
          style={inputStyle('senha')}
        />
        {erros.senha && <span style={{ color: '#ef4444', fontSize: '0.8rem' }}>{erros.senha}</span>}
      </div>

      <button
        onClick={fazerLogin}
        style={{ width: '100%', padding: '10px', backgroundColor: '#7c3aed', color: '#fff', border: 'none', borderRadius: '6px', fontWeight: 'bold', fontSize: '1rem', cursor: 'pointer' }}
      >
        Entrar
      </button>

      <div style={{ textAlign: 'center', marginTop: '16px' }}>
        <a href="/" style={{ color: '#f59e0b', fontSize: '0.85rem', textDecoration: 'none' }}>← Voltar para o início</a>
      </div>
    </div>
  );
}
