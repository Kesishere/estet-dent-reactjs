import React, { Component } from 'react'
import Table from '../Table';


const data =
    [
        { name: "Удаление постоянного зуба, простое", price: 3000 },
        { name: "Удаление постоянного зуба, сложное", price: 5000 }, 
        { name: "Удаление ретенированного, дистопированного зуба", price: 7500 },
        { name: "Удаление подвижного зуба", price: 2500},
        { name: "Лечение альвеолита 1 посещение", price: 2300},
        { name: "Хирургическое лечение перикоронарита", price: 3500}
        
    ]


class Surgery extends Component {
    render() {
        return (
            <Table data={data} title="Хирургия" />
        )
    }
}
export default Surgery;