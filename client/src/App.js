import './App.css';
import {BrowserRouter, Routes, Route, Link} from "react-router-dom";
import Header from "./components/Header";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path='/' element = {<Header />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
