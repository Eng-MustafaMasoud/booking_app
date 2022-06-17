import './App.css'
import {Routes,Route} from 'react-router-dom'
import Home from './pages/home/Home'
import List from './pages/list/List';
import Resort from './pages/resort/Resort';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/hotels" element={<List/>}/>
        <Route path="/hotels/:id" element={<Resort/>}/>

      </Routes>
      
    </div>
  );
}

export default App;
