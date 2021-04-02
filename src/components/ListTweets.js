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

        if (!window.google) {
            const script = document.createElement(`script`)
            script.type = `text/javascript`
            script.src =
              `https://maps.google.com/maps/api/js?key=` +
              process.env.GATSBY_GOOGLE_MAPS_API_KEY
            const headScript = document.getElementsByTagName(`script`)[0]
            headScript.parentNode.insertBefore(script, headScript)
            script.addEventListener(`load`, 'onLoad')
            return () => script.removeEventListener(`load`, 'onLoad')
          } else alert('cargo')

    }, [])
    
    const tweets = useSelector(state => state.tweets.tweets)
    console.log(tweets);

    return (
        <ContainerTweets>
            {tweets.length === 0 ? 'No hay productos' : (
                tweets.map(tweet => (
                    <CardTweet key={tweet.id} tweet={tweet} />
                ))
            )}
        </ContainerTweets>
    )
}

export default ListTweets
