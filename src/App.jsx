// Import data

// Import components
import './App.css';
import SearchBar from './Components/SearchBar'
import Directory from './Components/Directory'
import Gallery from './Components/Gallery'
import Sidebar from './Components/Sidebar'


function App(){
  return (
    <div>
      <h1>craigslist</h1>
      <div className="App">
        <SearchBar />
        <Directory />
        <Gallery />
        <Sidebar />

      </div>
    </div>
  );
}

export default App;
