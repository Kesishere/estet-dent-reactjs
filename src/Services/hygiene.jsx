import React, { Component } from 'react'
import Table from '../Table';

const data =
    [
        { name: "Профессиональная гигиена, удаление зубного камня и налета", price: 5500 },
        { name: "Профессиональная гигиена, удаление зубного камня и налета(повторное посещение, ранее 6 месяцев после последнейпрофессиональной гигиены)", price: 3500 },
        { name: "Покрытие фторлаком 1 ед.", price: 100 },
        { name: "Отбеливание системой Xtra Boost", price: 10000 },
        { name: "Вектор 1 процедура", price: 12500 },
        { name: "Удаление зубных отложений в области одного зуба", price: 160 }

    ]

class Hygiene extends Component {
    render() {
        return (
            <Table data={data} title="Гигиена"/>
        )
    }
}

export default Hygiene;