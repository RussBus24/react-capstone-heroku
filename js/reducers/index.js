var actions = require('../actions/index');

var initialState = {
    violenceRating: 0,
    languageRating: 0,
    sensualityRating: 0,
    seeRating: false,
    resultQuote: null,
    movie: null,
    result: null,
    movieTitle: null,
    movieYear: null,
    movieRating: null
};

var queryReducer = function(state, action) {
    state = state || initialState;
    if (action.type === actions.IMDB_QUERY) {
        return Object.assign({}, state, {movie: action.query});
    }
    else if (action.type === actions.RATE_RESULT) {
        return Object.assign({}, state, {result: action.query});
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
    else if (action.type === actions.RESULT_QUOTE) {
        return Object.assign({}, state, {resultQuote: action.quote});
    }
    else if (action.type === actions.MOVIE_INFO) {

        return Object.assign({}, state, {movieTitle: action.title, movieYear: action.year, movieRating: action.rating});

    }

  return state;
};

exports.queryReducer = queryReducer;
