
import logo from "./logo.svg";
import './App.css';
import NavBar from './components/navbar/NavBar';
import ItemListContainer from './components/container/ItemListContainer';

function App() {
  return (
    <div className="App">
      <NavBar/>
      <ItemListContainer greeting="¡Hola a todos!" logo={logo}/>
    </div>
  );
}

export default App;
