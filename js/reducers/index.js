var actions = require('../actions/index');

var initialState = {
    violenceRating: null,
    languageRating: null,
    sensualityRating: null,
    seeRating: false
};

var queryReducer = function(state, action) {
    state = state || initialState;
    if (action.type === actions.IMDB_QUERY) {
        var guessArray = state.guessArray.slice();
        guessArray.push(action.number);
        return Object.assign({}, state, {guessArray: guessArray});
    }
    else if (action.type === actions.VALIDATE_NUMBER) {
        return state.concat({
            type: action.type,
            number: action.number
        });
    }
    else if (action.type === actions.RATING_VISIBLE) {
        return Object.assign({}, state, {seeRating: !state.seeRating});
    }
    else if (action.type === actions.MODAL_VISIBLE) {
        return Object.assign({}, state, {seeModal: !state.seeModal});
    }
    else if (action.type === actions.UPDATE_FEWEST_GUESSES) {
        return Object.assign({}, state, {fewestGuess: action.fewest});
    }
    else if (action.type === actions.FETCH_GUESSES_SUCCESS) {
        return Object.assign({}, state, {fewestGuess: action.fewest, guessid: action.guessid});
    }

    return state;
};

exports.queryReducer = queryReducer;
