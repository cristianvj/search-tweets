import {
  DESCARGA_TWEETS_EXITO,
  DESCARGA_TWEETS_ERROR,
  OBTENER_PALABRA_BUSCAR,
} from '../types'
import clienteAxios from '../config/axios'

export function obtenerTweetsAction() {
  return async (dispatch) => {
    dispatch(descargarTweets())
    try {
      const respuesta = await clienteAxios.get('https://606d05d1603ded0017502e69.mockapi.io/vecindario/tweets')
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

//Seleccionar los tweets que coinciden con la palabra
export function buscarPalabraAction(palabra){
  return async(dispatch)=>{
    dispatch(obtenerPalabraBuscar(palabra))
  }
}

const obtenerPalabraBuscar = palabra =>({
  type: OBTENER_PALABRA_BUSCAR,
  payload: palabra
})