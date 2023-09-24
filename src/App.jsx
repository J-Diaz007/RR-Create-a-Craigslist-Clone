// Import data

// Import components
import './App.css';
import SearchBar from './Components/SearchBar'
import Directory from './Components/Directory'
import Gallery from './Components/Gallery'
import Sidebar from './Components/Sidebar'

//Double curly brace {{}} means we are adding some javascript AND an object
function App(){
  return (
      <div className="App" style={{"display": "flex"}}>
        <Sidebar />
        <div>  
          <SearchBar />
          <Directory />
          <Gallery />    
        </div>  
      </div>
  );
}

export default App;
