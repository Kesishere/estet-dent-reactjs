import React, { Component } from 'react'
import { Paper, Tabs, Tab, Switch } from '@material-ui/core';
import { withStyles } from '@material-ui/core/styles';
import { Nav, Navbar, NavItem, NavDropdown, MenuItem } from "react-bootstrap"
import { Link } from "react-router-dom"
import "./style.css"
import 'bootstrap/dist/css/bootstrap.min.css'

const styles = {
    root: {
        backgroundColor: "#f2f2f2",
        border: "1px solid #e5e5e5"
    }
}

class NavBar extends Component {

    render() {
        const { classes } = this.props;
        return (
            <div>
                <Navbar>
                    <Nav>
                        <NavItem eventKey={1} href="/">
                            Главная
                         </NavItem>
                        <NavDropdown eventKey={2} title="Услуги" id="basic-nav-dropdown">
                            <MenuItem eventKey={2.1} href="/terapy">Терапия</MenuItem>
                            <MenuItem eventKey={2.2} href="/endodont">Эндодонтия</MenuItem>
                            <MenuItem eventKey={2.3} href="/surgery">Хирургия</MenuItem>
                            <MenuItem eventKey={2.4} href="/orthodontics">Ортодонтия</MenuItem>
                            <MenuItem eventKey={2.5} href="/hygiene">Гигиена</MenuItem>
                            <MenuItem eventKey={2.6} href="/orthopedics">Ортопедия</MenuItem>
                        </NavDropdown>
                        <NavDropdown eventKey={3} title="Для клиентов" id="basic-nav-dropdown">
                            <MenuItem eventKey={3.1} href="/docs">Нормативные документы</MenuItem>
                            <MenuItem eventKey={3.2} href="/politics">Политика конфедициальности</MenuItem>
                            <MenuItem eventKey={3.3} href="/req">Реквизиты</MenuItem>
                            <MenuItem divider />
                            <MenuItem eventKey={3.4}>Separated link</MenuItem>
                        </NavDropdown>
                        <NavItem eventKey={4} href="/specs">
                            Специалисты
                         </NavItem>
                    </Nav>
                </Navbar>

            </div>
        )
    }
}
export default withStyles(styles)(NavBar)