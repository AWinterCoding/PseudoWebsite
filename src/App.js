import './App.css';
import Navbar from './Navbar';

function App() {
  const websiteTitle = "Example Website";
  return (
    <div className="App">
      <Navbar />
      <div className="body">
        <h1>{websiteTitle}</h1>
      </div>
    </div>
  );
}

export default App;
