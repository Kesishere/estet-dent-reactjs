import React, { Component } from 'react'
import Card from '@material-ui/core/Card';

import CardContent from '@material-ui/core/CardContent';
import CardHeader from '@material-ui/core/CardHeader'

import Grid from '@material-ui/core/Grid';

import { withStyles } from '@material-ui/core/styles';

import lic_1 from "../img/docs/lic_1.png"
import lic_2 from "../img/docs/lic_2.png"
import lic_3 from "../img/docs/lic_3.png"
import egrn from "../img/docs/egrn.png"



import "./style.css"


const styles = {
    card: {
        maxWidth: 345,
    },
    media: {
        height: 140,
    },

    root: {
        flexGrow: 1
    }
};

class Docs extends Component {

    render() {
        const { classes } = this.props;
        return (
            <Grid container className={classes.root} spacing={16}>
                <Grid item xs={6}><Card>
                    <CardHeader title="Лицензия №1" />
                    <CardContent><img src={lic_1} alt="" className="image"/></CardContent>
                </Card></Grid>
                <Grid item xs={6}><Card>
                    <CardHeader title="Лицензия №2" />
                    <CardContent><img src={lic_2} alt="" className="image"/></CardContent>
                </Card></Grid>
                <Grid item xs={6}><Card>
                    <CardHeader title="Лицензия №3" />
                    <CardContent><img src={lic_3} alt=""  className="image"/></CardContent>
                </Card></Grid>
                <Grid item xs={6}><Card>
                    <CardHeader title="ЕГРН" />
                    <CardContent><img src={egrn} alt="" className="image"/></CardContent>
                </Card></Grid>
            </Grid>
        )
    }
}

export default withStyles(styles)(Docs);