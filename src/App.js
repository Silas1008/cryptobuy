import './App.css';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Exchanges from './components/Exchanges/Exchanges';
import Coins from './components/Coins/Coins';
import CoinDatails from './components/CoinsDetails/CoinDatails';

function App() {
  return (
   <BrowserRouter>
   <Routes>
   <Route path='/' element={<Exchanges/>}/>
   <Route path='/coins' element={<Coins/>}/>
   <Route path='/coins/:id' element={<CoinDatails/>}/>
   </Routes>
   </BrowserRouter>
  );
}

export default App;
