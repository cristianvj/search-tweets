import React, {useEffect} from 'react'
import styled from 'styled-components'
import CardTweet from '../components/CardTweet'

import { useSelector, useDispatch } from 'react-redux'
import { obtenerTweetsAction } from '../actions/tweetActions'

const ContainerTweets = styled.div`
display: flex;
flex-wrap: wrap;
justify-content: space-around;
margin: 20px 0;
width: 100%;
`

function ListTweets() {
    
    const dispatch = useDispatch()
    
    useEffect(()=>{
        const cargarTweets = () => dispatch(obtenerTweetsAction())
        cargarTweets()
    }, [])
    
    const {tweets, error, loading} = useSelector(state => state.tweets)

    return (
        
        <ContainerTweets>
            {
                error ? `Ocurrió un error con la conexión en la API, asegúrese que este corriendo en el puerto 4000. Ejecute >>
                json-server twitterdb.json --port 4000` :
                loading ? 'Cargando tweets' :
                tweets.length === 0 ? 'No se encontró tweets que coincidan con su búsqueda' :
                (
                    tweets.map(tweet => (
                        <CardTweet key={tweet.id} tweet={tweet} />
                    ))
                )
            }
        </ContainerTweets>
    )
}

export default ListTweets
