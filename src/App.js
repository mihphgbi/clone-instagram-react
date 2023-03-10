import logo from './logo.svg';
import './App.css';
import {Fragment} from "react";
import {Route, Routes} from "react-router-dom";
import {connect} from "react-redux";
import {Grid} from "@mui/material";
import Login from "./pages/LoginPage/Login"

function App() {

    return (
        <div className={'content'}>
            <Routes>
                <Route path={"/login"} element={Login}/>
            </Routes>
        </div>
        // <div className="App">
        //   <header className="App-header">
        //     <img src={logo} className="App-logo" alt="logo" />
        //     <p>
        //       Edit <code>src/App.js</code> and save to reload.
        //     </p>
        //     <a
        //       className="App-link"
        //       href="https://reactjs.org"
        //       target="_blank"
        //       rel="noopener noreferrer"
        //     >
        //       Learn React
        //     </a>
        //   </header>
        // </div>
    );
}

export default connect ()(App);
