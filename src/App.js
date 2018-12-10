import React, { Component } from 'react';
import Header from './Header';
import NavBar from './NavBar';
import baner from "./img/main2.jpg"
import {Route} from "react-router-dom";

import Main from './Main';
import Spec from "./Specs/1"
import 'typeface-roboto';

import "./App.css"
import Docs from './Docs';
import contacts from './Docs/contacs'
import politics from './Docs/politic'
import terapy from './Services/terapy'
import Endodont from './Services/endodont';
import Surgery from './Services/surgery';
import Orthodontics from "./Services/orthodontics"
import Hygiene from "./Services/hygiene"
import Orthopedics from "./Services/orthopedics"

class App extends Component {
  render() {
    return (
      <div>
        <Header />
        <NavBar />
        <img src={baner} alt="Nature" className="responsive"/>
        <div className="main__content">
          <Route path="/" exact component={Main} />
          <Route path="/specs" component={Spec} />
          <Route path="/docs" component={Docs} />
          <Route path="/req" component={contacts} />
          <Route path="/politics" component={politics} />
          <Route path="/terapy" component={terapy} />
          <Route path="/endodont" component={Endodont}/>
          <Route path="/surgery" component={Surgery}/>
          <Route path="/orthodontics" component={Orthodontics}/>
          <Route path="/hygiene" component={Hygiene} />
          <Route path="/orthopedics" component={Orthopedics}/>
          

        </div>
        <div className="footer"></div>
      </div>
    );
  }
}

export default App;
