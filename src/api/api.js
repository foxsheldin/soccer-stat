import axios from "axios";
import {authToken} from "./authToken";

const instance = axios.create({
    baseURL: 'http://api.football-data.org/v2/',
    headers: {
        'X-Auth-Token': authToken,
    },
})

export const footballDataAPI = {
    getCompetitions() {
        /* List all available competitions. */
        return instance.get(`competitions`)??{response: {status: 504, message: "Gateway Timeout"}};
    },
    getMatches(competitionCode, dateFrom=null, dateTo=null) {
        /* List one particular competition. */
        if (dateFrom && dateTo)
            return instance.get(`competitions/${competitionCode}/matches?dateFrom=${dateFrom}&dateTo=${dateTo}`);
        else
            return instance.get(`competitions/${competitionCode}/matches`);
    },
    getTeams(competitionCode) {
        /* List all teams for a particular competition. */
        if (competitionCode)
            return instance.get(`competitions/${competitionCode}/teams`);
        else 
            return instance.get(`teams`)
    },
    getOneTeam(teamid) {
        /* Show one particular team. */
        return instance.get(`teams/${teamid}`);
    },
    getTeamMatches(teamid, dateFrom=null, dateTo=null) {
        /* Show all matches for a particular team. */
        if (dateFrom && dateTo)
            return instance.get(`teams/${teamid}/matches?dateFrom=${dateFrom}&dateTo=${dateTo}`);
        else
            return instance.get(`teams/${teamid}/matches`);
    }
}