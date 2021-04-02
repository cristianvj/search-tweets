import {
  INICIAR_DESCARGA_TWEETS,
  DESCARGA_TWEETS_EXITO,
  DESCARGA_TWEETS_ERROR,
} from '../types'

const initialState = {
  tweets: [],
  error: null,
  loading: false,
}

export default function (state = initialState, action){
  switch(action.type){
    case INICIAR_DESCARGA_TWEETS:
      return {
        ...state,
        loading: action.payload
      }
    case DESCARGA_TWEETS_EXITO:
      return {
        ...state,
        error: null,
        loading: false,
        tweets: action.payload
      }
    case DESCARGA_TWEETS_ERROR:
      return {
        ...state,
        loading: false,
        error: action.payload,
      }
    default:
      return state
  }
}