import './App.css';
import Form from './components/Form';
import Radio from './components/Radio';
import Nivel from './components/Nivel';
import CheckBox from './components/CheckBox';
import Area from './components/Area';
import Button from './components/Button';


function App() {
  return (
    <div className="App">
     
    <h1 id="titulo">Cadastro de DEVs</h1>
    <p id="subtitulo">Complete suas informações</p> <br></br>
    <Form />
    <Radio />
    <Nivel />
    <CheckBox />
    <Area />
    <Button />
    </div>
  );
}

export default App;
