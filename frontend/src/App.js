import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Homepage from './Pages/Homepage';
import Blog from './Pages/Blog';
import Signup from './Pages/Signup';
import Login from './Pages/Login';

function App() {
  return (
    <div className='App'>
      <Router>
        <Routes>
          <Route index path='' element={<Homepage />}></Route>
          <Route path='/blog' element={<Blog />}></Route>
          <Route path='/login' element={<Login />}></Route>
          <Route path='/signup' element={<Signup />}></Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
