import React from 'react';
import './style.css';
import PreLoader from "../common/PreLoader/PreLoader";
import {Link} from "react-router-dom";
import MathcesItem from "../common/MatchesItem/MatchesItem";

const TeamsItem = (props) => {
    return <Link to={'/teams/'+props.id} className='team-list-item'>{props.name}</Link>
}

const CompetitionCalendar = (props) => {
    const matchesElements = (matches) => {
        return matches.map((each) => <MathcesItem {...each} />)
    }

    const teamsElements = (teams) => {
        return teams.map((each) => <TeamsItem {...each} />)
    }

    return <main className='main-competition-calendar'>
        <div className='main-competition-calendar__wrapper'>
            <div className='teams-list'>
                <h4>Список команд лиги</h4>
                {props.countTeams !== null ?
                    props.countTeams ?
                        <>{teamsElements(props.teams)}</>

                        : 'Список команд не определен'

                    : <PreLoader />}
            </div>
            <div className='calendar-list-table'>
                <h4>Календарь лиги</h4>
                {props.countMatches !== null ?
                    props.countMatches ? <table>
                        <thead>
                        <tr>
                            <th>Дата игры</th>
                            <th>Команды</th>
                            <th>Счет</th>
                            <th>Пенальти</th>
                            <th>Cтатус игры</th>
                        </tr>
                        </thead>
                        <tbody>
                        {matchesElements(props.matches)}
                        </tbody>
                    </table>

                    : 'Нет существующих игр'

                : <PreLoader />}
            </div>
        </div>
    </main>;
};

export default CompetitionCalendar;
