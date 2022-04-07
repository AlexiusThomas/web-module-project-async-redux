import { FETCH_ANIME_QUOTE, FETCH_ANIME_FAIL, FETCH_ANIME_SUCCESS } from "../actions/animeActions";

const initialState = {
    anime: " ",
    character: " ",
    quote: " ",
    error: " ",
    isFetching: false
};

const reducer = (state = initialState, action) => {
    console.log('reducer', action);
    switch(action.type) {
        case FETCH_ANIME_SUCCESS:
            return {
                ...state,
                isFetching: true,
                error: " "
            }
        case FETCH_ANIME_QUOTE:
            return {
                ...state,
                anime: action.payload.anime,
                character: action.payload.character,
                quote: action.payload.quote,
                isFetching: false,
                error: " "
            }
        case FETCH_ANIME_FAIL:
            return {
                ...state,
                error: action.payload
            }
        default:
            return state
    }
}

export default reducer