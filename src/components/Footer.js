import React from 'react'
import styled from 'styled-components'

const FooterContainer = styled.div`
  width: 100%;
  text-align: center;
  padding: 20px 0px 35px 0;
`
const FooterContent = styled.h5` 
  color: var(--clr-primary-gray-light);
  font-weight: 400;
  font-size: 1rem;
`

function Footer() {
  return (
    <FooterContainer>
      <FooterContent>By: Cristian David Villota Jacome @ 2021</FooterContent>
    </FooterContainer>
  )
}

export default Footer
