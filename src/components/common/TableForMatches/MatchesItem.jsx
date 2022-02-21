import React from "react";

const MathcesItem = (props) => {
    let date = new Date(props.utcDate);
    let awayTeamScore = null, awayTeamPenalty = null, homeTeamScore = null, homeTeamPenalty = null;
    let matchStatus = props.status;

    if (props.score.extraTime.homeTeam !== null && props.score.extraTime.awayTeam !== null) {
        awayTeamScore = props.score.extraTime.awayTeam;
        homeTeamScore = props.score.extraTime.homeTeam;
    } else if (props.score.fullTime.homeTeam !== null && props.score.fullTime.awayTeam !== null) {
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
    debugger
    return (
        <tr>
            <td> {date.toLocaleDateString()}</td>
            <td> {date.toLocaleTimeString()}</td>
            <td>{matchStatus}</td>
            <td>{props.homeTeam.name}</td>
            <td>-</td>
            <td>{props.awayTeam.name}</td>
            <td>{(homeTeamScore!==null && awayTeamScore!==null) ?
                <>{homeTeamScore} : {awayTeamScore} 
                    {(homeTeamPenalty!==null && awayTeamPenalty!==null) ?<> ({homeTeamPenalty} : {awayTeamPenalty}) </> : null}</>
                : null}
                </td>
        </tr>
    );
}

export default MathcesItem;