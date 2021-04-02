import React from 'react'
import styled from 'styled-components'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronDown, faChevronUp } from '@fortawesome/free-solid-svg-icons'

const TitleFooterMoreInformation = styled.h4`
  border-bottom: 1px solid white;
  border-top: 1px solid white;
  color: white;
  font-size: 0.9rem;
  font-weight: 500;
  margin: 8px 0;
  padding: 5px;
  text-align: left;
`
const TwitterIconFooterCard = styled(FontAwesomeIcon)`
    color: white;
    font-size: 0.8em;
`
const ParagraphFooterCard = styled.p`
  color: white;
  font-size: 0.8em;
`
  
  const ParagraphFooterMoreInformation = styled.p`
    color: white;
    text-align: justify;
    font-size: 0.9rem;
`


function TweetInfo({open, mensajeTweet, date, handleOpen}) {

  if(open){
    return (
      <>
        <TitleFooterMoreInformation>
          {date}
        </TitleFooterMoreInformation>
        <ParagraphFooterMoreInformation>
          {mensajeTweet}
        </ParagraphFooterMoreInformation>
        <TwitterIconFooterCard 
          icon={faChevronUp} 
          onClick={handleOpen} 
        /> 
      </>
    )
  }else{
    return (
      <>
        <ParagraphFooterCard>...mas <TwitterIconFooterCard icon={faChevronDown} /></ParagraphFooterCard>
      </>
    )
  }
    

}

export default TweetInfo
