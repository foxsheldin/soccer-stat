import React from "react";

const MathcesItem = (props) => {
    let date = new Date(props.utcDate);
    let awayTeamScore = null, awayTeamPenalty = null, homeTeamScore = null, homeTeamPenalty = null;
    let matchStatus = props.status;

    if (props.score.extraTime.homeTeam !== null && props.score.extraTime.awayTeam !== null) {
        awayTeamScore = props.score.extraTime.awayTeam;
        homeTeamScore = props.score.extraTime.homeTeam;
    }
    if (props.score.fullTime.homeTeam !== null && props.score.fullTime.awayTeam !== null) {
        awayTeamScore = props.score.fullTime.awayTeam;
        homeTeamScore = props.score.fullTime.homeTeam;
    }
    if (props.score.halfTime.homeTeam !== null && props.score.halfTime.awayTeam !== null) {
        awayTeamScore = props.score.halfTime.awayTeam;
        homeTeamScore = props.score.halfTime.homeTeam;
    }

    if (props.score.penalties.homeTeam !== null && props.score.penalties.awayTeam !== null) {
        awayTeamPenalty = props.score.penalties.awayTeam;
        homeTeamPenalty = props.score.penalties.homeTeam;
    }

    switch (matchStatus) {
        case 'IN_PLAY':
            matchStatus = 'В игре';
            break;
        case 'FINISHED':
            matchStatus = "Завершен";
            break;
        case 'SCHEDULED':
            matchStatus = "Планируется";
            break;
        case 'POSTPONED':
            matchStatus = "Отложен";
            break;

        default:
            matchStatus = "N/A status: "+props.status;
    }

    return (
        <tr>
            <td> {date.toLocaleDateString()+" "+date.toLocaleTimeString()} </td>
            <td>{props.homeTeam.name} : {props.awayTeam.name}</td>
            <td>{(homeTeamScore !== null && awayTeamScore !== null) ?
                <>{homeTeamScore} : {awayTeamScore}</>
                :null}</td>
            <td>{(homeTeamPenalty !== null && awayTeamPenalty !== null) ?
                <>{homeTeamScore} : {awayTeamScore}</>
                :null}</td>
            <td>{matchStatus}</td>
        </tr>
    );
}

export default MathcesItem;