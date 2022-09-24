import './App.css';
import Heading from './components/heading';
import Navbar from './components/navbar';
import Footer from './components/footer';
import Card from './components/card';

function App() {
  return (
    <>
      <Navbar />
      <div className="container">
        <Heading />
        <div className='row'>
          <div className="col-md-3">
            <Card />
          </div>
          <div className="col-md-3">
            <Card />
          </div>
          <div className="col-md-3">
            <Card />
          </div>
          <div className="col-md-3">
            <Card />
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default App;
