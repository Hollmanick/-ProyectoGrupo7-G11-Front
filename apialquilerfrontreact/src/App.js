import './assets/css/App.css';
import { Rutas } from "./routes/cliente.jsx";

function App() {
  return (
    <div className="App">
      <Rutas/>
      <button className='btn btn-warning'>Enviar</button>
    </div>
  );
}

export default App;
