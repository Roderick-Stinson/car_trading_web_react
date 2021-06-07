import React from 'react'

import CarInfo from "./views/CarInfo";
import HomePage from "./views/HomePage";
import NaviMenu from "./components/NaviMenu";

import {
    BrowserRouter as Router,
    Route,
} from "react-router-dom"
import OrderList from "./views/OrderSystem";
import ManageSystemLogin from "./views/ManageSystemLogin";
import SellCar from "./views/SellCar";

const App = () => {
    return (
        <Router>
            <NaviMenu />
            <Route component={HomePage} exact={true} path={'/'}/>
            <Route component={CarInfo} exact={true} path={'/carInfo/:id'}/>
            <Route component={SellCar} exact={true} path={'/sell'} />
            <Route component={OrderList} exact={true} path={'/order'} />
            <Route component={ManageSystemLogin} exact={true} path={'/management/login'} />
        </Router>
    )
}

export default App
