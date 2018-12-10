import React, { Component } from 'react'
import Table from '../Table';

const data =
    [
        { name: "Трейнер", price: 4500 },
        { name: "Починка ортодонтического аппарата", price: 1500 }, 
        { name: "Стандартная керамическая брекет-система", price: 10000 },
        { name: "Стандартная металлическая брекет-система", price: 8000},
        
    ]

class Orthodontics extends Component {
    render() {
        return (
            <Table data={data} title="Ортодонтия"/>
        )
    }
}

export default Orthodontics;