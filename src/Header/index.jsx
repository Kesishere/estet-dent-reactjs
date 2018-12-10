import React, { Component, Fragment } from 'react';
import Typography from '@material-ui/core/Typography';
import logo from "../img/logo.png";


import "./style.css"

class Header extends Component {
    render() {
        return (
            <div className="header">
                <div className="logo_div">
                    <img src={logo} alt="" className="logo"/>
                </div>
                <div className="header_right">
                    <Typography variant="h5" >
                        <span className="first_phone">+7 (495) 997-99-50</span> <span className="second_phone">+7 (499) 167-09-42</span>
                    </Typography>
                    <Typography variant="h6" color="textSecondary">Москва, ул. Открытое шоссе, д.12c3</Typography>
                </div>
            </div>
        )
    } 
}

export default Header;