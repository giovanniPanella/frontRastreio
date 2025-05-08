import React, { useState } from "react";
import axios from "axios";
import styles from './Rastreio.module.css';
import logo from '../assets/logoAgraria.png';
import trator from '../assets/trator.png';
import milho from '../assets/milho.png';
import funcionario from '../assets/funcionario.png';
import fundo1 from '../assets/fundo1.png'
import fundo2 from '../assets/fundo2.png'
import fundo from '../assets/fundo.png'

export default function Rastreio() {
  const [lote, setLote] = useState("");
  const [dados, setDados] = useState(null);
  const [erro, setErro] = useState("");

  const handleBuscar = async () => {
    try {
      const response = await axios.get(`https://rastreabilidade.onrender.com/api/rastreio/${lote}`);
      if (response.data) {
        setDados(response.data);
        setErro("");
      } else {
        setErro("Nenhum dado encontrado.");
        setDados(null);
      }
    } catch (err) {
      console.error(err);
      setErro("Erro ao buscar dados.");
      setDados(null);
    }
  };

  return (
    <>
    <header className={styles.header}>

      <img src={logo} alt="Logo da Empresa" className={styles.logo} />
    </header>
    <div className={styles.corpo}>
      <div className={styles.buscar}>
      <h2 className="text-xl font-bold">Do Campo Para Você</h2>
      <p>Digite o número do Lote de Fabricação</p>
      <p>Para saber mais sobre a origem Sustentável do seu produto</p>

      <container className={styles.buscarEClicar}>
        <input
          type="text"
          placeholder="Digite o número do lote final"
          value={lote}
          onChange={(e) => setLote(e.target.value)}
          className="p-2 border rounded"
        />
        <button onClick={handleBuscar} className="bg-blue-600 text-white px-4 py-2 rounded">
          Buscar
        </button>
      </container>
      </div>
      <div className={styles.container}>
      <div className={styles.sobreComImagem}>  
      <div className={styles.sobre}>
        <h2 className="text-xl font-bold">Sobre Nós</h2>
        <p>Na Agraria, acreditamos que a transparência é fundamental para a confiança do consumidor. Por isso, desenvolvemos um sistema de rastreabilidade que permite o consumidor ver de onde vem seu alimento, aqui ele encontrará informações sobre qual fazenda plantou e qual unidade industrial da Agraria armazenou e processou o produto.</p>

      </div>
      <div className={styles.containerImg}>
      <img src={fundo1} alt="" srcset="" />
      <img src={fundo2} alt="" srcset="" />
      <img src={fundo} alt="" srcset="" />
      </div>
      </div>
      {erro && <p className="text-red-500">{erro}</p>}

      {dados && (
        <div className={styles.infoContainer}>
          <h3 >Informações Sobre o Produto</h3>
          <h4>Sobre a Unidade Industrial</h4>
          <p><strong>Onde Armazenamos:</strong> {dados.nomeFilial}</p>
          <p><strong>Data de Processamento:</strong> {new Date(dados.dataProcessamento).toLocaleDateString('pt-BR')}</p>
          <h4>Sobre a Fazenda</h4>
          <p><strong>Qual Fazenda Plantou:</strong> {dados.nomeFazenda}</p>
          <p><strong>Onde a Fazenda Fica:</strong> {dados.localizacao}</p>
          <p><strong>O Que Foi Plantado:</strong> {dados.produto}</p>
          <p><strong>Quantidade:</strong> {dados.quantidade} Ton</p>
          <p><strong>Data da Colheita:</strong> {new Date(dados.dataColheita).toLocaleDateString('pt-BR')}</p>
          <p><strong>Número de Funcionários:</strong> {dados.numeroFuncionarios} Contratados</p> 
            <p><strong>Agricultura Regenerativa:</strong> {dados.agriculturaRegenerativa ? "Sim" : "Não"}</p>
            <p><strong>Energia Renovável:</strong> {dados.usoEnergiaRenovavel ? "Sim" : "Não"}</p>
            <p><strong>Gestão de Água e Solo:</strong> {dados.gestaoAguaSolo ? "Sim" : "Não"}</p>
            <p><strong>Redução de Agrotóxicos:</strong> {dados.reducaoAgrotoxicos ? "Sim" : "Não"}</p>
            <p><strong>Preservação da Biodiversidade:</strong> {dados.preservacaoBiodiversidade ? "Sim" : "Não"}</p>
         
        </div>
      
      )}
      </div>  
    </div>
    <footer className={styles.footer}>
      <div className={styles.footerContent}>
        <p>© 2025 Agraria. Todos os direitos reservados.</p>
        <p>Desenvolvido por TAGG - Giovanni Gilles Panella</p>
      </div>
    </footer>
    </>
  );
}
