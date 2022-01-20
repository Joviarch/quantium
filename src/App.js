import './App.css';
import Perfil from './pages/Perfil';

let json = require('./data/techs.json')
console.log(json)

function App() {
  return (
    <div className="App">
      
      <Perfil/>

    </div>
  );
}

export default App;
