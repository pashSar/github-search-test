import { Route, Routes } from 'react-router-dom';
import './App.css';
import { ListOfRepo } from './components/ListOfRepo';
import { AddingInfo } from './components/AddingInfo';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<ListOfRepo/> }/>
        <Route path='/:id' element={<AddingInfo/>}/>
      </Routes>
      
    </div>
  );
}

export default App;
