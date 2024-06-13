import './App.css';
import {grid} from './css/grid.css';
import { BrowserRouter} from 'react-router-dom';

import Footer from './components/footer';
import Header from './components/header';
import {AppRouter} from './router/approuter';


function App() {
  return (
    <BrowserRouter>
      <Header/>
      <AppRouter/>   
      <Footer/>
    </BrowserRouter>
    );
}

export default App;
