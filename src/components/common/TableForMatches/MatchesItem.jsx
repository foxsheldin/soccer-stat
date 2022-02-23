import React from "react";

const MathcesItem = (props) => {
    let date = new Date(props.utcDate);
    let awayTeamScore = null, awayTeamExtraScore = null, awayTeamPenalty = null;
    let homeTeamScore = null, homeTeamExtraScore = null, homeTeamPenalty = null;
    let matchStatus = props.status;

    if (props.score.extraTime.homeTeam !== null && props.score.extraTime.awayTeam !== null) {
        awayTeamExtraScore = props.score.extraTime.awayTeam;
        homeTeamExtraScore = props.score.extraTime.homeTeam;
    } 
    if (props.score.fullTime.homeTeam !== null && props.score.fullTime.awayTeam !== null) {
        awayTeamScore = props.score.fullTime.awayTeam;
        homeTeamScore = props.score.fullTime.homeTeam;
    } else if (props.score.halfTime.homeTeam !== null && props.score.halfTime.awayTeam !== null) {
        awayTeamScore = props.score.halfTime.awayTeam;
        homeTeamScore = props.score.halfTime.homeTeam;
    }

    if (props.score.penalties.homeTeam !== null && props.score.penalties.awayTeam !== null) {
        awayTeamPenalty = props.score.penalties.awayTeam;
        homeTeamPenalty = props.score.penalties.homeTeam;
    }

    switch (matchStatus) {
        case 'LIVE':
            matchStatus = 'В прямом эфире';
            break;
        case 'IN_PLAY':
            matchStatus = 'В игре';
            break;
        case 'PAUSED':
            matchStatus = "Пауза";
            break;
        case 'FINISHED':
            matchStatus = "Завершен";
            break;
        case 'SCHEDULED':
            matchStatus = "Запланирован";
            break;
        case 'POSTPONED':
            matchStatus = "Отложен";
            break;
        case 'CANCELED':
            matchStatus = "Отменен";
            break;

        default:
            matchStatus = "N/A status: "+props.status;
    }

    return (
        <tr>
            <td> {date.toLocaleDateString()}</td>
            <td> {date.toLocaleTimeString(navigator.language, { hour: '2-digit', minute:'2-digit' })}</td>
            <td>{matchStatus}</td>
            <td>{props.homeTeam.name}</td>
            <td>-</td>
            <td>{props.awayTeam.name}</td>
            <td>{(homeTeamScore!==null && awayTeamScore!==null) ?
                <>{homeTeamScore} : {awayTeamScore} 
                    {(homeTeamExtraScore!==null && awayTeamExtraScore!==null) ?<> ({homeTeamExtraScore} : {awayTeamExtraScore}) </> : null}
                    {(homeTeamPenalty!==null && awayTeamPenalty!==null) ?<> ({homeTeamPenalty} : {awayTeamPenalty}) </> : null}</>
                : null}
                </td>
        </tr>
    );
}

export default MathcesItem;