import Header from './components/1-header/Header';
import Hero from './components/2-hero/Hero';
import Main from './components/3-main/Main';
import Contact from './components/4-contact/Contact';
import Footer from './components/5-footer/Footer';



export default function App() {
    return (
      <div id='up' className='container'>
        <Header />
        <div className='diveder' />
        <Hero />
        <div className='diveder' />
        <Main />
        <div className='diveder' />
        <Contact />
        <div className='diveder' />
        <Footer />
        
        <a href="#up">
        <button className='icon-keyboard_arrow_up scroll2up'></button>
        </a>
      </div>
    );
  }
  
  