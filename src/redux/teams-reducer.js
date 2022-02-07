import { footballDataAPI } from "../api/api";
import {availableCompetitions} from "../api/avalibaleCometitions";

const SET_TEAMS = 'teams/SET_TEAMS';
const SET_ONE_TEAM = 'teams/SET_ONE_TEAM';
const SET_MATCHES = 'teams/SET_MATCHES';

const initialState = {
    teams: [],
    team: {},
    matches: [],
    countTeams: null,
    countMatches: null,
}

const teamsReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_TEAMS:
            return {...state, teams: action.teams, countTeams: action.count};
        case SET_ONE_TEAM:
            return {...state, team: action.team};
        case SET_MATCHES:
            return {...state, matches: action.matches, countMatches: action.count};

        default:
            return state;
    }
}

const setTeams = (teams, count) => ({type: SET_TEAMS, teams, count})
const setOneTeam = (team) => ({type: SET_ONE_TEAM, team})
const setMatches = (matches, count) => ({type: SET_MATCHES, matches, count})

export const getTeams = (competitionCode) => {
    return async (dispatch) => {
        dispatch(setTeams([], null));
        const response = await footballDataAPI.getTeams(competitionCode);
        dispatch(setTeams(response.data.teams, response.data.count));
    }
}

export const getOneTeam = (teamid) => {
    return async (dispatch) => {
        dispatch(setOneTeam({}))
        const response = await footballDataAPI.getOneTeam(teamid);
        debugger
        dispatch(setOneTeam(response.data))
    }
}

export const getTeamMatches = (teamid) => {
    return async (dispatch) => {
        dispatch(setMatches([], null))
        const response = await footballDataAPI.getTeamMatches(teamid);
        debugger
        dispatch(setMatches(response.data.matches, response.data.count))
    }
}

export default teamsReducer;