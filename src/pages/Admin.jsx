import { useNavigate } from 'react-router-dom';
import UserTable from '../components/UserTable';

export default function Admin() {
  const navigate = useNavigate();

  return (
    <main style={{ maxWidth: '1100px', margin: '0 auto', padding: '24px 16px' }}>
      <section style={{ backgroundColor: '#1e293b', borderRadius: '8px', padding: '24px' }}>

        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '12px', marginBottom: '16px' }}>
          <h2 style={{ color: '#7c3aed', margin: 0 }}>Painel Administrativo</h2>
          <button
            onClick={() => navigate('/login')}
            style={{ backgroundColor: '#dc2626', color: '#fff', border: 'none', padding: '6px 16px', borderRadius: '4px', fontWeight: 'bold', cursor: 'pointer', textTransform: 'uppercase', fontSize: '0.85rem' }}
          >
            Sair
          </button>
        </div>

        <div style={{ backgroundColor: '#0f172a', borderLeft: '4px solid #7c3aed', padding: '12px 16px', borderRadius: '4px', marginBottom: '20px', color: '#cbd5e1', fontSize: '0.9rem' }}>
          <strong style={{ color: '#f59e0b' }}>Autenticação simulada.</strong> Esta é uma demonstração client-side sem integração com banco de dados.
        </div>

        <UserTable />

      </section>
    </main>
  );
}
