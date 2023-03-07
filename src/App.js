import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import CardComponent from './components/Cards';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Routes>
        <Route path='/' element={<CardComponent />} />
      </Routes>
      </BrowserRouter>
      
    </div>
  );
}

export default App;
