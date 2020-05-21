import React, {Component} from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import { connect } from 'react-redux';
import * as actions from '../actions';

import Navigation from './Navigation';
import Header from './Header';
import LiliAttr from "./LiliAttr";
// import Landing from "./Landing";
const Dashboard = () => <h2>Dashboard</h2>;
const SurveyNew = () => <h2>SurveyNew</h2>;

class App extends Component {
    componentDidMount() {
        this.props.fetchUser();
    }

    render () {
        return (
            <div>
                <BrowserRouter>
                    <div>
                        <Navigation/>
                        <Header/>
                        <LiliAttr title={"Costo mensual que hace sentido"} image={"01.jpg"} photoSide={"left"}/>
                        <LiliAttr title={"Guía, cuando la requieras"} image={"02.jpg"} photoSide={"right"}/>
                        <LiliAttr title={"Rankings médicos y asistenciales"} image={"03.jpg"} photoSide={"left"}/>
                        <LiliAttr title={"Beneficios reales"} image={"01.jpg"} photoSide={"right"}/>
                        <LiliAttr title={"Centros de excelencia"} image={"02.jpg"} photoSide={"left"}/>
                        <LiliAttr title={"Partners"} image={"03.jpg"} photoSide={"right"}/>
                        <LiliAttr title={"Tu información"} image={"01.jpg"} photoSide={"left"}/>
                    </div>
                </BrowserRouter>
            </div>
        );
    }
}

export default connect(null, actions)(App);