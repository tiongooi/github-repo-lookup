import {
  SEARCH,
  SEARCH_SUCCESS,
  SEARCH_FAIL,
  UPDATE_INPUT,
  CLEAR_INPUT,
} from '../actions/search'

const initialState = {
  isFetching: false,
  data: [],
  input: '',
  message: '',
}

const searchReducer = ( state = initialState, action ) => {
  switch(action.type) {
    case SEARCH:
      return { ...state, isFetching: true }

    case SEARCH_SUCCESS:
      return { ...state, isFetching: false, data: action.payload }

    case SEARCH_FAIL:
      return { ...state, isFetching: false, data: action.payload }

    case UPDATE_INPUT:
      return { ...state, input: action.payload }

    case CLEAR_INPUT:
      return { ...state, input: '' }

    default: return state
  }
}

export default searchReducer
