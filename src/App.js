import './App.css';
import Rutas from './Rutas';
import LoginButton from './componentes/Login';
import LogoutButton from './componentes/Logout';
import Profile from './componentes/Profile';
import Carrusel from "./componentes/Carrusel";
import MenuLogin from './componentes/MenuLogin';
import MenuLogout from './componentes/MenuLogout';
import { useAuth0 } from '@auth0/auth0-react';
import CabezaPagina from './componentes/CabezaPagina';
import PiePagina from './componentes/PiePagina';

function App() {
  const { isAuthenticated } = useAuth0();
  return (
    <div className="App">
      <header className="">
        <div>
          {
            isAuthenticated ? (
              <>
                <MenuLogin />,
                <header className="container">
                  <div>
                    <Profile />
                    <Rutas />
                  </div>
                  <div>                    
                    <br /><br /><br />
                    <PiePagina/>
                    <br /><br /><br />
                  </div>
                </header>
              </>
            ) : (
              <>
                <MenuLogout />
                <header className="container">
                  <CabezaPagina />
                  <div>
                    <br /><br /><br />
                    <Carrusel />
                    <br /><br /><br />
                    <PiePagina/>
                    <br /><br /><br />
                  </div>
                </header>
              </>
            )
          }
        </div>
      </header>
    </div>
  );
}

export default App;
