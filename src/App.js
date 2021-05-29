import React from 'react'

import CarInfo from "./views/CarInfo";
import HomePage from "./views/HomePage";
import NaviMenu from "./components/NaviMenu";
import ManageSystemLogin from "./views/ManageSystemLogin";

import {
    BrowserRouter as Router,
    Route,
} from "react-router-dom"

const App = () => {
    return (
        <Router>
            <NaviMenu />
            <Route component={HomePage} exact={true} path={'/'}/>
            <Route component={CarInfo} exact={true} path={'/carInfo/:id'}/>
            <Route component={ManageSystemLogin} exact={true} path={'/management'} />
        </Router>
    )
}

export default App
