import React from 'react'
import styled from 'styled-components'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTwitter } from '@fortawesome/free-brands-svg-icons'


const Header = styled.header`
    padding: 12px 0;
    @media (min-width: 767px){
        padding-top: 25px;
    }
`
const Titulo = styled.h1`
    font-family: 'Pacifico', cursive;
    font-size: 2.5rem;
    text-align: center;
    color: var(--clr-primary-blue);
`
const TituloSpan = styled.span`
    font-family: 'Pacifico', cursive;
    color: var(--clr-primary-blue-dark);
`
const TitleIcon = styled(FontAwesomeIcon)`
    color: var(--clr-primary-blue);
    width: 40px;
    padding: 0px;
    margin-top: -13px;
`

function header() {
    return (
        <Header>
            <Titulo>
                Twitter <TitleIcon className='icon-title' icon={faTwitter} /> <TituloSpan>Search</TituloSpan>
            </Titulo>
        </Header>
    )
}

export default header
