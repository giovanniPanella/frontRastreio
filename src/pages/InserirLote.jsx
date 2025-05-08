import { useState } from 'react';
import axios from 'axios';

const InserirLote = () => {
  const [form, setForm] = useState({ lote_fazenda: '', lote_final: '' });

  const handleChange = e => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async e => {
    e.preventDefault();
    await axios.post('https://rastreabilidade.onrender.com/api/inserir-lote-final', form);
    alert('Lote final registrado com sucesso!');
    setForm({ lote_fazenda: '', lote_final: '' });
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Inserir Lote Final</h2>
      <input name="lote_fazenda" value={form.lote_fazenda} onChange={handleChange} placeholder="Lote da Fazenda" required />
      <input name="lote_final" value={form.lote_final} onChange={handleChange} placeholder="Lote Final" required />
      <button type="submit">Inserir</button>
    </form>
  );
};

export default InserirLote;
