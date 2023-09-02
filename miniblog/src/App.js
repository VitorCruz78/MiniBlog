import './App.css';
//hooks
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom"
//pages
import Home from './pages/Home/Home';
import About from './pages/About/About';
//components
import Navbar from './components/NavBar';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <div className="container">
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/about' element={<About />} />
          </Routes>
        </div>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;