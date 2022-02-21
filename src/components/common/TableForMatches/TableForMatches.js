import React from 'react'
import MathcesItem from './MatchesItem'

const matchesElements = (matches) => {
    return matches.map((each) => <MathcesItem {...each} />)
}

const TableForMatches = (props) => {
    return <table>
    <thead>
        <tr>
            <th>Дата игры</th>
            <th>Время игры</th>
            <th>Cтатус игры</th>
            <th>Команда А</th>
            <th>-</th>
            <th>Команда Б</th>
            <th>Счет</th>
        </tr>
    </thead>
    <tbody>
        {matchesElements(props.matches)}
    </tbody>
</table>
}

export default TableForMatches