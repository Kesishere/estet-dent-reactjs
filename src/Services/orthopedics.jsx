import React, { Component } from 'react'
import Table from '../Table';


const data =
    [
        { name: "Снятие штампованной коронки", price: 500 },
        { name: "Вкладка однокоренная", price: 8000 },
        { name: "Металлокерамическая коронка", price: 14000 },
        { name: "Бюгельный протез шинирующий Quatrotti", price: 35000 },
        { name: "Починка съменого протеза, приварка зуба", price: 5000 },
        { name: "Полный съемный протез акрил", price: 25000 },
        { name: "Полный съемный протез Akry Free", price: 35000 }

    ]


class Orthopedics extends Component {
    render() {
        return (
            <Table data={data} title="Ортопедия" />
        )
    }
}
export default Orthopedics;