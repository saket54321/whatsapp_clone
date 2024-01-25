
import './App.css';
import Messenger from './components/Messenger';
import { GoogleOAuthProvider } from '@react-oauth/google';

function App() {
  const clientId = '782055499171-uikf27f4g74t8f2rb88e3116b2tanbpj.apps.googleusercontent.com'
  return (
   <GoogleOAuthProvider clientId={clientId}>
    <Messenger/>
    
    </GoogleOAuthProvider>
  );
}

export default App;
