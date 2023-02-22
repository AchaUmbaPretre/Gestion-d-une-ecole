import './App.css';
import './Font-Awesome-6.x/css/all.css'
import Home from './pages/home/Home';
import {BrowserRouter as Router,Routes,Route} from 'react-router-dom'
import ListeGlobal from './pages/listeGlobal/ListeGlobal';
function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path='/' exact element={<Home/>} />
          <Route path='/listeGlobal' exact element={<ListeGlobal/>} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
