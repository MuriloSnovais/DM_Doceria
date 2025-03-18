import Head from "next/head";
import Image from "next/image";
import React from "react"
import MenuSuperior from './components/MenuSuperior';
import Categorias from './components/Categorias';


const Home = () => {

  return (
    <div>
      <Head>
        <meta charset="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>DM Doceria</title>
      </Head>

      <MenuSuperior />
      <Categorias />
     
    </div>
  );
};

export default Home;
