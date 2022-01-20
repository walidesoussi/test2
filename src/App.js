import logo from './logo.svg';
import './App.css';
import { ProfilePhoto } from './Component/Profile/ProfilePhoto';
import { FullName } from './Component/FullName';
import { Adress } from './Component/Profile/Adress';

function App() {
  return (
    <div className="App">
     <ProfilePhoto/>
     <FullName/>
     <Adress/>
    </div>
  );
}

export default App;
