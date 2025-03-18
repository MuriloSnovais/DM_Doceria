import Image from "next/image";
import React from "react"
import MenuSuperior from './components/MenuSuperior';
import Categorias from './components/Categorias';


const Home = () => {

  return (
    <div>

      <MenuSuperior />
      <Categorias />
     
    </div>
  );
};

export default Home;
