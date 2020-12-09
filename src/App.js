import './App.css';
import About from './components/About';
import Footer from './components/Footer';
import Navbar from './components/navbar';
import Title from './components/Title';

function App() {
  return (
    <div>
      <Navbar />
      <Title/>
      <About/>
      <Footer/>
    </div>
  );
}

export default App;
