import './App.css';
import {BrowserRouter, Routes, Route, Link} from "react-router-dom";
import Header from "./components/Header";
import Body from './components/Body';
import { Provider } from 'react-redux';
import { store } from './app/store';

function App() {
  return (
    <Provider store = {store}>
    <div className="App">
      <Header />
      <BrowserRouter>
        <Routes>
          <Route path='/' element = {<Body />} />
        </Routes>
      </BrowserRouter>
    </div>
    </Provider>
  );
}

export default App;
