import './App.css';
import Navbar from './Navbar';
import Home  from './Home';
import Footer from './Copywrite';


function App() {
  return (
    <div className="App">
      <Navbar />
      <div className="body">
        <Home />
      </div>
      <Footer/>
    </div>
  );
}

export default App;
