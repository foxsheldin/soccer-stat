import { footballDataAPI } from "../api/api";
import {availableCompetitions} from "../api/avalibaleCometitions";

const SET_COMPETITIONS = 'competitions/SET_COMPETITIONS';
const SET_MATCHES = 'competitions/SET_MATCHES';

const initialState = {
    name: null,
    competitions: [],
    matches: [],
    countCompetitions: null,
    countMatches: null,
}

const competitionsReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_COMPETITIONS:
            return {...state, competitions: action.competitions, countCompetitions: action.count};
        case SET_MATCHES:
            return {...state, name: action.name, matches: action.matches, countMatches: action.count};

        default:
            return state;
    }
}

const setCompetitions = (competitions, count) => ({type: SET_COMPETITIONS, competitions, count})
const setMatches = (name, matches, count) => ({type: SET_MATCHES, name, matches, count})

export const getCompetitions = () => {
    return async (dispatch) => {
        dispatch(setCompetitions([], null));
        const response = await footballDataAPI.getCompetitions();
        let data = [...response.data.competitions];
        data = data.filter(value => (
            availableCompetitions.find(competition => competition.code === value.code)
        ));
        dispatch(setCompetitions(data, data.length));
    }
}

export const getMatches = (competitionCode, dateFrom = null, dateTo = null) => {
    return async (dispatch) => {
        dispatch(setMatches([], null))
        const response = await footballDataAPI.getMatches(competitionCode, dateFrom, dateTo);
        dispatch(setMatches(response.data.competition.name, response.data.matches, response.data.count))
    }
}

export default competitionsReducer;