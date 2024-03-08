import './App.css';
import { BrowserRouter, Routes, Route} from "react-router-dom";

//Secciones
import LandingPageBody from './Components/LandingContainer/LandingPageBody/LandingPageBody';

//Componentes
import NavBar from './Components/NavBar/NavBar';

function App() {

  return (
    <div className="App">
      <BrowserRouter>
      <div id='navBarContainerApp'>
      <NavBar/>
      </div>
      
      <Routes>
      <Route path='/' element={<LandingPageBody/>}/>
      </Routes>
      </BrowserRouter>
      
    </div>
  );
}

export default App;
