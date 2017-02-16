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
    else if (action.type === actions.RATING_VISIBLE) {
        return Object.assign({}, state, {seeRating: !state.seeRating});
    }
    else if (action.type === actions.MODAL_VISIBLE) {
        return Object.assign({}, state, {seeModal: !state.seeModal});
    }
    else if (action.type === actions.VIOLENCE_RATING) {
        return Object.assign({}, state, {violenceRating: action.rating});
    }
    else if (action.type === actions.LANGUAGE_RATING) {
        return Object.assign({}, state, {languageRating: action.rating});
    }
    else if (action.type === actions.SENSUALITY_RATING) {
        return Object.assign({}, state, {sensualityRating: action.rating});
    }

    return state;
};

exports.queryReducer = queryReducer;
