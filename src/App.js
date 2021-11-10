import './App.css';

//Components
import Nav from './components/Nav/Nav';
import Hero from './components/Hero/Hero';
import Welcome from './components/Welcome/Welcome';
import Ideas from './components/Ideas/Ideas';
import Featured from './components/Featured/Featured';
import Footer from './components/Footer/Footer';

function App() {
  return (
    <main className='main__container'>
      <div className='container'>

        <section className='nav'>
          <Nav/>
        </section>

        <section className='hero'>
          <Hero/>
        </section>

        <section className='welcome'>
          <Welcome/>
        </section>

        {/* <section className='ideas'>
          <Ideas/>
        </section>

        <section className='featured'>
          <Featured/>
        </section>

        <section className='footer'>
          <Footer/>
        </section> */}

      </div>
    </main>
  );
}

export default App;
