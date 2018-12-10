import React, { Component } from 'react'
import Table from '../Table';

const data =
    [
        { name: "Анестезия", price: 1000 },
        { name: "Удаление старой пломбы", price: 500 }, 
        { name: "Рентген снимок", price: 500 },
        { name: "Лечение среднего кариеса", price: 3000},
        { name: "Лечение глубокого кариеса", price: 4000},
        {name: "Пломба депульпированного зуба", price: 5000}
    ]

class Terapy extends Component {
    render() {
        return (
            <Table data={data} title="Терапия"/>
        )
    }
}
export default Terapy;