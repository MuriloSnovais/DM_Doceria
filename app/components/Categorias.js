
// Componente Categorias
const Categorias = () => (
    <div className="Categorias">
      {['Brigadeiros', 'Cookies', 'Bolos', 'Pães de mel', 'Biscoitos', 'Tortas Doces', 'Bombons', 'Carolinas'].map(categoria => (
        <button key={categoria}>{categoria}</button>
      ))}
    </div>
  );
  export default Categorias;