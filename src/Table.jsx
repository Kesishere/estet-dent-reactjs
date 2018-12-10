import React, { Component } from 'react'
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardHeader from '@material-ui/core/CardHeader'
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import { Typography } from '@material-ui/core';

class CustomTable extends Component {
    render() {
        const {data, title} = this.props;
        return (
            <Card>
                <CardHeader title={title} />
                <CardContent>
                    <Table>
                        <TableHead>
                            <TableRow>
                                <TableCell><Typography variant="h4">Наименование услуги</Typography></TableCell>
                                <TableCell><Typography variant="h4">Цена</Typography></TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {data.map((item) => (
                                <TableRow>
                                    <TableCell>
                                        <Typography variant="h5">{item.name}</Typography>
                                    </TableCell>
                                    <TableCell>
                                        <Typography variant="h5">{item.price}</Typography>
                                    </TableCell>
                                </TableRow>
                            ))}
                        </TableBody>
                    </Table>
                </CardContent>
            </Card>
        )
    }
}
export default CustomTable;