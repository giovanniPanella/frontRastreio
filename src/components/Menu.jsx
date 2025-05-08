import { Link } from 'react-router-dom';
import styles from './Menu.module.css';
import logo from '../assets/logoAgraria.png';
import React from 'react';

const Menu = () => (
  <header className={styles.header}>
    <img src={logo} alt="Logo da Empresa" />
    <nav style={ styles.nave }>
      <Link to="/cadastro" >Cadastrar Fazenda</Link>
      <Link to="/inserir-lote">Inserir Lote Final</Link>
    </nav>
  </header>
);

export default Menu;
