import Image from "next/image";
import React from "react"
import MenuSuperior from './components/MenuSuperior';
import Categorias from './components/Categorias';
import '@fortawesome/fontawesome-free/css/all.min.css';

const Home = () => {

  return (
    <div>

      <MenuSuperior />
      <Categorias />
     
    </div>
  );
};

export default Home;
