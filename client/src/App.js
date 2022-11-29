import './App.css';
import {BrowserRouter, Routes, Route, Link} from "react-router-dom";
import Header from "./components/Header";
import Body from './components/Body';

function App() {
  return (
    <div className="App">
      <Header />
      <BrowserRouter>
        <Routes>
          <Route path='/' element = {<Body />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
