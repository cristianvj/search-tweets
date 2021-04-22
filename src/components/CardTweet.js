import React, { useState, useEffect } from 'react'
import styled from 'styled-components'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTwitter } from '@fortawesome/free-brands-svg-icons'
import { faRetweet, faReply, faStar } from '@fortawesome/free-solid-svg-icons'
import TweetInfo from './TweetInfo'

const Card = styled.div`
    margin: 20px 30px 40px 30px;
`
const CardTweetContainer = styled.div`
    border-radius: 10px;
    box-shadow: 0 -4px 8px 0 rgba(0, 0, 0, 0.2), 0 -6px 20px 0 rgba(0, 0, 0, 0.19);
    padding: 20px 20px 60px 20px;
    position: relative;
    width: 200px;
`
const CardHead = styled.div`
    align-items: center;
    box-shadow: 0 2px 1px 0 rgba(0, 0, 0, 0.1);
    display: flex;
    justify-content: space-around;
    padding-bottom: 15px;
`
const UserTweet = styled.img`
    border-radius: 50%;
    width: 60px;
    height: 60px;
`
const InfoUserHeader = styled.div`
    padding: 0 5px;
`

const TitleUserHeader = styled.h1`
    color: var(--clr-primary-gray);
    font-weight: 500;
    font-size: 1.1em;
`

const UserHeader = styled.h3`
    color: var(--clr-primary-gray-light);
    font-weight: 300;
    font-size: 0.8em;
`
  
const CardBody = styled.div`
    box-shadow: 0 2px 1px 0 rgba(0, 0, 0, 0.1);
    padding: 20px 0;
`

const ParagraphCardBody = styled.p`
    color: var(--clr-primary-gray-light);
    text-align: justify;
`
const CardActionsIcons = styled.div`
    display: flex;
    justify-content: space-around;
    margin-top: 20px;
    color: var(--clr-primary-gray-light);
    .like{
        color: GoldenRod;
    }
`
const CardCircle = styled.div`
    background-color: var(--clr-primary-blue);
    clip-path: circle(60.0% at 50% 100%);
    height: 60px;
    margin: auto;
    width: 100px;
    position: absolute;
    bottom: -10px;
    right: 0%;
    left: 0%;
`
const CardIconTwitter = styled.div`
    bottom: -18px;
    font-size: 40px;
    left: 0%;
    margin: auto;
    position: absolute;
    right: 0%;
    text-align: center;
    z-index: 100;
    `
const CardMoreInformation = styled.div`
    border-radius: 0 0 10px 10px;
    margin: 0px 20px;
    width: 180px;
    position: absolute;
    background-color: var(--clr-primary-blue);
    padding: 10px;
    text-align: right;
    opacity: 1;
    z-index: 50;
`
const IconTwitterCard = styled(FontAwesomeIcon)`
    color: white;
    ${CardMoreInformation}:hover & {
        text-decoration-line: underline;
        text-decoration-color: white;
        cursor: pointer;
    }
`

function CardTweet({tweet}) {
    
    const {name, nikname, mensajeTweet, imgURL, date, like} = tweet
    
    const [open, setOpen] = useState(false)
    const [stateLike, setLike] = useState(like)

    useEffect(() => {

    }, [open])
    
    const handleOpen = e => {
        e.preventDefault()
        open ? setOpen(false) : setOpen(true)
    }

    const handleLike = () => {
        stateLike ? setLike(false) : setLike(true)
    }


    return (
        <Card>
            <CardTweetContainer>
                <CardHead>
                    <UserTweet src={imgURL} alt="user-tweet" />
                    <InfoUserHeader>
                        <TitleUserHeader>{name}</TitleUserHeader>
                        <UserHeader>{nikname}</UserHeader>
                    </InfoUserHeader>
                </CardHead>
                <CardBody>
                    <ParagraphCardBody>
                        {`${mensajeTweet.substring(20,-1)}...`}
                    </ParagraphCardBody>
                </CardBody>
                <CardActionsIcons>
                    <FontAwesomeIcon icon={faReply} />
                    <FontAwesomeIcon icon={faRetweet} />
                    <FontAwesomeIcon 
                        onClick={handleLike}
                        icon={faStar} 
                        className={ `${stateLike ? "like" : null}` } 
                    />
                </CardActionsIcons>
                <CardIconTwitter>
                    <IconTwitterCard icon={faTwitter} />
                </CardIconTwitter>
                <CardCircle >
                </CardCircle>
            </CardTweetContainer>
            <CardMoreInformation onClick={handleOpen}>
                <TweetInfo 
                    open={open} 
                    mensajeTweet={mensajeTweet} 
                    date={date}
                    handleOpen={handleOpen}
                />
            </CardMoreInformation>
        </Card>
    )
}

export default CardTweet
