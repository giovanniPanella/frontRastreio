import React, { useState } from "react";
import axios from "axios";

export default function Cadastro() {
  const [formData, setFormData] = useState({
    nomeFilial: "", nomeFazenda: "", localizacao: "", produto: "", quantidade: 0,
    dataColheita: "", dataProcessamento: "", numeroLoteFilial: "", numeroLoteProdutoFinal: "",
    numeroFuncionarios: 0, agriculturaRegenerativa: false, usoEnergiaRenovavel: false,
    gestaoAguaSolo: false, reducaoAgrotoxicos: false, preservacaoBiodiversidade: false
  });

  const handleChange = (e) => {
    const { name, type, checked, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post("https://rastreabilidade.onrender.com/api/cadastro", formData);
      alert("Cadastro realizado com sucesso!");
    } catch (err) {
      alert("Erro ao cadastrar.");
      console.error(err);
    }
  };

  return (
    <div className="p-4">
      <h2 className="text-xl mb-4 font-bold">Cadastro da Fazenda</h2>
      <form onSubmit={handleSubmit} className="flex flex-col gap-4">
        <input type="text" name="nomeFilial" value={formData.nomeFilial} onChange={handleChange} placeholder="Nome da Filial" required />
        <input type="text" name="nomeFazenda" value={formData.nomeFazenda} onChange={handleChange} placeholder="Nome da Fazenda" required />
        <input type="text" name="localizacao" value={formData.localizacao} onChange={handleChange} placeholder="Localização" required />
        <input type="text" name="produto" value={formData.produto} onChange={handleChange} placeholder="Produto" required />
        <input type="number" name="quantidade" value={formData.quantidade} onChange={handleChange} placeholder="Quantidade" required />
        <input type="date" name="dataColheita" value={formData.dataColheita} onChange={handleChange} placeholder="Data da Colheita" required />
        <input type="date" name="dataProcessamento" value={formData.dataProcessamento} onChange={handleChange} placeholder="Data do Processamento" required />
        <input type="text" name="numeroLoteFilial" value={formData.numeroLoteFilial} onChange={handleChange} placeholder="Número do Lote da Filial" required />
        <input type="text" name="numeroLoteProdutoFinal" value={formData.numeroLoteProdutoFinal} onChange={handleChange} placeholder="Número do Lote Final" required />
        <input type="number" name="numeroFuncionarios" value={formData.numeroFuncionarios} onChange={handleChange} placeholder="Número de Funcionários" required />

        <label><input type="checkbox" name="agriculturaRegenerativa" checked={formData.agriculturaRegenerativa} onChange={handleChange} /> Agricultura Regenerativa</label>
        <label><input type="checkbox" name="usoEnergiaRenovavel" checked={formData.usoEnergiaRenovavel} onChange={handleChange} /> Uso de Energia Renovável</label>
        <label><input type="checkbox" name="gestaoAguaSolo" checked={formData.gestaoAguaSolo} onChange={handleChange} /> Gestão de Água e Solo</label>
        <label><input type="checkbox" name="reducaoAgrotoxicos" checked={formData.reducaoAgrotoxicos} onChange={handleChange} /> Redução de Agrotóxicos</label>
        <label><input type="checkbox" name="preservacaoBiodiversidade" checked={formData.preservacaoBiodiversidade} onChange={handleChange} /> Preservação da Biodiversidade</label>

        <button type="submit" className="bg-green-600 text-white py-2 rounded hover:bg-green-700">
          Cadastrar Fazenda
        </button>
      </form>
    </div>
  );
}
