export default function Card({ title, titleColor = '#7c3aed', borderColor = '#7c3aed', children }) {
  return (
    <div style={{
      backgroundColor: '#1e293b',
      borderLeft: `4px solid ${borderColor}`,
      borderRadius: '8px',
      padding: '20px',
      color: '#cbd5e1',
      height: '100%',
    }}>
      <h5 style={{ color: titleColor, marginTop: 0 }}>{title}</h5>
      {children}
    </div>
  );
}
