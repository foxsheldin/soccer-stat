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
    getMatches(competitionCode) {
        /* List one particular competition. */
        return instance.get(`competitions/${competitionCode}/matches`);
    },
    getTeams(competitionCode) {
        /* List all teams for a particular competition. */
        return instance.get(`competitions/${competitionCode}/teams`);
    },
    getOneTeam(teamid) {
        /* Show one particular team. */
        return instance.get(`teams/${teamid}`);
    },
    getTeamMatches(teamid) {
        /* Show all matches for a particular team. */
        return instance.get(`teams/${teamid}/matches`);
    }
}