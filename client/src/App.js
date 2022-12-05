// import './App.css';
import {BrowserRouter, Routes, Route, Link} from "react-router-dom";
import Header from "./components/Header";
import Body from './components/Body';
import { Provider } from 'react-redux';
import { store } from './app/store';
import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from './components/firebase';
import Login from './components/Login';
import styles from "./App.module.css";
import Spinner from "react-spinkit";

function App() {

  const [user, loading] = useAuthState(auth);

  if(loading){
    return(
      <div className={styles.appLoading}>
        <div className={styles.appLoading_contents}>
          <img src='https://upload.wikimedia.org/wikipedia/commons/thumb/b/b9/Slack_Technologies_Logo.svg/2560px-Slack_Technologies_Logo.svg.png' alt='' />
          <Spinner name="ball-spin-fade-loader" color="purple" fadeIn="none" />
        </div>
      </div>
    )
  }

  return (
    <Provider store = {store}>
    <div className="App">
      {
        !user ? (
          <Login />
        ) : (
          <>
            <Header />
            <div className={styles.app_body}>
            <BrowserRouter>
              <Routes>
                <Route path='/' element = {<Body />} />
              </Routes>
            </BrowserRouter>
            </div>
          </>
        )
      }
      </div>
    </Provider>
  );
}

export default App;
