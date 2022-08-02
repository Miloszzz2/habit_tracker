import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Homepage from './Homepage/Homepage';
import Blog from './Blog/Blog';

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route index path="" element={<Homepage />}></Route>
          <Route path="/blog" element={<Blog />}></Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
