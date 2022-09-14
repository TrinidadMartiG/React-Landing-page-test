import './App.css';
import Heading from './components/heading';
import Navbar from './components/navbar';
import Footer from './components/footer';
import Card from './components/card';

function App() {
  return (
    <div className="Container-fluid">
      <Navbar />
      <div className='Container m-4'>
        <Heading />
      </div>
      <div className="row">
        <div className='col'>
          <Card />
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default App;
