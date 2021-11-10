import './App.css';

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

//Components
import Nav from './components/Nav/Nav';
import Home from './pages/Home/Home';
import Footer from './components/Footer/Footer';
import About from './pages/About/About';
import Portfolio from './pages/Portfolio/Portfolio';
import Contact from './pages/Contact/Contact';

function App() {
  return (
    <main className='main__container'>
      <div className='container'>

         <Router>
            <Nav/>
            <Routes>
                <Route exact path='/' element={<Home/>} />
                <Route path='portfolio' element={<Portfolio/>} />
                <Route path='about' element={<About/>} />
              <Route path='contact' element={<Contact/>} />
            </Routes>
            <Footer/>
         </Router>
            
      </div>
    </main>
  );
}

export default App;
