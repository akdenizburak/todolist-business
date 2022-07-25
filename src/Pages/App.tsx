import { BrowserRouter, Route, Routes } from 'react-router-dom';
import '../Styles/App.css';
import Dashboard from './Dashboard';
import Login from './Login';

const App = () => {
  return (
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<Login/>}/>
      <Route path='/login' element={<Login/>}/>
      <Route path='/dashboard' element={<Dashboard/>}/>
    </Routes>
    </BrowserRouter>
  );
}

export default App;
