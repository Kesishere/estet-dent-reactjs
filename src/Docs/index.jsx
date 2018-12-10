import React, { Component } from 'react'
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardHeader from '@material-ui/core/CardHeader'
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';

import { withStyles } from '@material-ui/core/styles';
import { Document, Page } from "react-pdf";
import lic_1 from "../img/docs/lic_1_small.png"
import lic_2 from "../img/docs/lic_2_small.png"
import lic_3 from "../img/docs/lic_3_small.png"
import egrn from "../img/docs/egrn_small.png"
import req from "../img/docs/req_small.png"



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
            <Grid container spacing={16}>
                <Grid item xs={4}><Card>
                    <CardHeader title="Лицензия №1" />
                    <CardContent><img src={lic_1} alt="" /></CardContent>
                </Card></Grid>
                <Grid item xs={4}><Card>
                    <CardHeader title="Лицензия №2" />
                    <CardContent><img src={lic_2} alt="" /></CardContent>
                </Card></Grid>
                <Grid item xs={4}><Card>
                    <CardHeader title="Лицензия №3" />
                    <CardContent><img src={lic_3} alt="" /></CardContent>
                </Card></Grid>
                <Grid item xs={4}><Card>
                    <CardHeader title="ЕГРН" />
                    <CardContent><img src={egrn} alt="" /></CardContent>
                </Card></Grid>
            </Grid>
        )
    }
}

export default withStyles(styles)(Docs);