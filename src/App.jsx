import logo from './logo.svg';
import './App.css';
import Saludo from './components/Saludo';
import Footer from './components/Footer';



function App() {
    const boton = <button>botón</button>
    const nombre = 'Mauricio'

    const estilos = {
      color: 'red',
      backgroundColor: 'yellow',
      padding: 20
    }

    const mensaje = () => {
      console.log('Mensaje en la consola desde app');
    }
    return (
      <>
        <div className="App">
          <h1>¡Hola mundo { nombre }!</h1>  
          <strong style= { estilos }>Este es un mensaje</strong>
          { boton }

          <Saludo name='Gabriel' lastname='Lerda' age={31} action= {mensaje}/>
          <Saludo name='Ana' lastname='Lopez' age={25}/>

          <li>fresa</li>
          <li>melón</li>
          <li>sandia</li>
          <li>berrys</li>
          <li>banano</li>
          <footer>
            <strong>Enlace 1</strong>
            <strong>Enlace 2</strong>
          </footer>
        </div>
        
        
      </>
  );
}

export default App;
