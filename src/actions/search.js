import axios from 'axios'
export const SEARCH = 'SEARCH'
export const SEARCH_SUCCESS = 'SEARCH_SUCCESS'
export const SEARCH_FAIL = 'SEARCH_FAIL'

export const UPDATE_INPUT = 'UPDATE_INPUT'
export const CLEAR_INPUT = 'CLEAR_INPUT'

export const API = 'https://api.github.com/search/repositories'

export const getRepo = (query) => dispatch => {
  dispatch({ type: SEARCH })
  return axios.get(API, { params: { q: `${query}` } })
    .then(res => {
      console.log('success')
      dispatch({ type: SEARCH_SUCCESS, payload: res.data.items })
      dispatch({ type: CLEAR_INPUT })
    })
    .catch(err => {
      console.log('fail')
      // dispatch({ type: SEARCH_FAIL, payload: 'an error occured' })
    })
}

export const updateInput = (value) => dispatch => {
  dispatch({ type: UPDATE_INPUT, payload: value })
}
