import './App.css';
import Url from './Components/Url/Url.jsx';
import {  Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1 className="title"> Links Shorts </h1>
      </header>

      <Routes>
        <Route path='/' element={<Url/>} />
      </Routes>

    </div>
  );
}

export default App;
