import './App.css';
import {Route, Routes} from "react-router-dom";
import {connect} from "react-redux";
import Login from "./pages/LoginPage/Login"
import MainPage from "./pages/main-page";
import ErrorPage from "./error-page";
import {Fragment} from "react";
import Layout from "./pages/Layout/layout";

function App() {

    return (
        <Fragment>
            <Routes>
                <Route path={'/login'} element={<Login/>}/>
                <Route path={''} element={Layout(MainPage)}/>
                <Route path={'*'} element={<ErrorPage/>}/>
            </Routes>
        </Fragment>
    );
}

export default connect ()(App);
