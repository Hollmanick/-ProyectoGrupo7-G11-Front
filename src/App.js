// import logo from './logo.svg';
import './App.css';
import { Rutas } from './routes/cliente';
import LoginButton from './components/Login';
import LogoutButton from './components/Logout';
import Profile from './components/Perfil';
import { useAuth0 } from '@auth0/auth0-react';

function App() {
  const {isAuthenticated} = useAuth0();
  return (
    <div className="App">      
      <header className="">         
        <Rutas />
        <div>
        {
          isAuthenticated ?(
            <>
            <Profile/>
            <LogoutButton/>
            </>
          ):(
            <LoginButton/>
          )
        }
        </div>
      </header>
    </div>
  );
}

export default App;