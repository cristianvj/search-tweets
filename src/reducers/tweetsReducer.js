import {
  INICIAR_DESCARGA_TWEETS,
  DESCARGA_TWEETS_EXITO,
  DESCARGA_TWEETS_ERROR,
  OBTENER_PALABRA_BUSCAR,
} from '../types'

const initialState = {
  tweets: [],
  error: null,
  loading: true,
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
    case OBTENER_PALABRA_BUSCAR:
      return {
        ...state,
        tweets: state.tweets.filter(tweet=>tweet.mensajeTweet.toLowerCase().includes(action.payload.toLowerCase())
        )
      }
    default:
      return state
  }
}