import axios from 'axios'
export const SEARCH = 'SEARCH'
export const SEARCH_SUCCESS = 'SEARCH_SUCCESS'
export const SEARCH_SUCCESS_NO_RESULT = 'SEARCH_SUCCESS_NO_RESULT'
export const SEARCH_FAIL = 'SEARCH_FAIL'

export const UPDATE_INPUT = 'UPDATE_INPUT'
export const CLEAR_INPUT = 'CLEAR_INPUT'

export const CLEAR_MESSAGE = 'CLEAR_MESSAGE'

export const API = 'https://api.github.com/search/repositories'

export const getRepo = (query) => dispatch => {
  dispatch({ type: SEARCH })
  return axios.get(API, { params: { q: `${query}` } })
    .then(res => {
      console.log('success')
      if (res.data.total_count === 0) {
        dispatch({ type: SEARCH_SUCCESS_NO_RESULT, payload: `No result found for ${query}` })
      } else {
        dispatch({ type: SEARCH_SUCCESS, payload: res.data.items })
        dispatch({ type: CLEAR_INPUT })
      }
    })
    .catch(err => {
      console.log('fail')
      dispatch({ type: SEARCH_FAIL, payload: 'Unknown error occured, please try again' })
    })
}

export const updateInput = (value) => dispatch => {
  dispatch({ type: UPDATE_INPUT, payload: value })
}

export const clearMessage = () => dispatch => {
  dispatch({ type: CLEAR_MESSAGE })
}
