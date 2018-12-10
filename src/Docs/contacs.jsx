import React, { Component } from 'react'
import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardHeader from '@material-ui/core/CardHeader'
import req from "../img/docs/req.png"

class ContactInfo extends Component {
    render() {
        return (
            <Grid container>
                <Card>
                    <CardHeader title="Реквезиты" />
                    <CardContent>
                        <img src={req} alt="" />
                    </CardContent>
                </Card>
            </Grid>
        )
    }
}

export default (ContactInfo);