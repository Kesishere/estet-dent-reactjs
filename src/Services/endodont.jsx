import React, { Component } from 'react'
import Table from '../Table';

const data =
    [
        { name: "Медикаментозная обработка корневого канала", price: 500 },
        { name: "Пломбирование корневого канала методом латеральной конденсации", price: 1000 }, 
        { name: "Механическая обработка коревого канала эндонаконечником", price: 1500 },
        { name: "Временное пломбирование корневого канала кальций содержащей пастой", price: 500},
        
    ]

class Endodont extends Component {
    render() {
        return (
            <Table data={data} title="Эндодонтия" />
        )
    }
}

export default Endodont;