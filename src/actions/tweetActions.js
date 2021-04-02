import {
  INICIAR_DESCARGA_TWEETS,
  DESCARGA_TWEETS_EXITO,
  DESCARGA_TWEETS_ERROR,
} from '../types'
import clienteAxios from '../config/axios'

export function obtenerTweetsAction() {
  return async (dispatch) => {
    dispatch(descargarTweets())
    try {
      const respuesta = await clienteAxios.get('/tweets')
      dispatch(descargaTweetsExitosa(respuesta.data))
    } catch (error) {
        console.log(error)
        dispatch(descargaTweetsError())
    }
  }
}

const descargarTweets = () => ({
  type: 'INICIAR_DESCARGA_TWEETS',
  payload: true
})

const descargaTweetsExitosa = tweets => ({
  type: DESCARGA_TWEETS_EXITO,
  payload: tweets
})

const descargaTweetsError = () => ({
  type: DESCARGA_TWEETS_ERROR,
  payload: true
})