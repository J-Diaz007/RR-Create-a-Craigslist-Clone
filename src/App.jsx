// Import data

// Import components
import './App.css';
import SearchBar from './Components/SearchBar'
import Directory from './Components/Directory'
import Gallery from './Components/Gallery'


function App(){
  return (
    <div>
      <h1>craigslist</h1>
      <div className="App">
        <SearchBar />
        <Directory />
        <Gallery />

      </div>
    </div>
  );
}

export default App;
