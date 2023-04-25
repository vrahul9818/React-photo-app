import './App.css';
import Bookmark from './components/bookmark';
// import { DataProvider } from './components/context';
import Loadimages from './components/front';
import Header from './components/header';

import { BrowserRouter, Route, Routes } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Routes>
        <Route path="/" element={<Header/>}/>
        <Route path="/bookmark" element={<Bookmark/>}/>
      </Routes>
      </BrowserRouter>
      <Loadimages/>
    
      
    </div>
  );
}

export default App;
