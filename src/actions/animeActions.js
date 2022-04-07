import axios from 'axios';

export const FETCH_ANIME_QUOTE = "FETCH_ANIME_QUOTE"
export const FETCH_ANIME_SUCCESS = "FETCH_ANIME_SUCCESS"
export const FETCH_ANIME_FAIL = "FETCH_POKEMON_FAIL"


export const getQuote = () => dispatch => {
    dispatch({ type: FETCH_ANIME_SUCCESS })
    axios
        .get('https://animechan.vercel.app/api/random')
        .then(res =>
            dispatch({ type: FETCH_ANIME_QUOTE, payload: res.data })
        )
        .catch(err => dispatch({ type: FETCH_ANIME_FAIL, payload: err }))
}