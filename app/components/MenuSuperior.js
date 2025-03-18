import Image from 'next/image';

import '@fortawesome/fontawesome-free/css/all.min.css';


 {import('next').NextConfig}

const MenuSuperior = () => (
    <div className="MenuSuperior">
      <div className="BotaoPesquisa">
        <button>
          <i className="fa-solid fa-magnifying-glass"></i>
        </button>
        <input placeholder="Pesquisar..." />
      </div>
  
      <Image src="/midia.png" alt="Logo" width={300} height={300} />
  
      <div className="MenuLateral">
        <button>
          <i className="fa-solid fa-circle-user"></i>
        </button>
        <button>
          <i className="fa-solid fa-cart-shopping"></i>
        </button>
      </div>
    </div>
  );
  export default MenuSuperior;