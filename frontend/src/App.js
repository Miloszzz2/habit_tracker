import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Main from './Pages/Main';
import Blog from './Pages/Blog';
import Signup from './Pages/Signup';
import Login from './Pages/Login';
import Demo from './Pages/Demo';
import Nav from './components/Nav';
import NotFound from './components/NotFound';
function App() {
  return (
    <div className='App'>
      <Router>
        <Routes>
          <Route path='/' element={<Nav />}>
            <Route index element={<Main />}></Route>
            <Route path='demo' element={<Demo />}></Route>
          </Route>
          <Route path='blog' element={<Blog />}></Route>
          <Route path='login' element={<Login />}></Route>
          <Route path='signup' element={<Signup />}></Route>
          <Route path='*' element={<NotFound />}></Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
