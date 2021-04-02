import React, { useState, useEffect } from 'react'
import Header from "../components/Header"
import { createGlobalStyle } from "styled-components"
import { Helmet } from "react-helmet"
import Footer from './Footer'


const GlobalStyle = createGlobalStyle`
/** 
 I'm using mobile first
 **/

:root{
    --clr-primary-blue: #1da1f2;
    --clr-primary-blue-dark: #0e486b;
    --clr-primary-gray: #505252;
    --clr-primary-gray-light: #909292;
    font-family: 'Roboto';
}

*,
*::after{
    /** color: var(--clr-primary-gray); **/
    margin: 0;
    padding: 0;
    box-sizing: inherit;
    font-size: 62,5%;
}
`

function Layout({children}) {

    return (
        <>
            <Helmet>
                <meta charSet="utf-8" />
                <title>Twits Search</title>
                <link rel="preconnect" href="https://fonts.gstatic.com"></link>
                <link href="https://fonts.googleapis.com/css2?family=Pacifico&family=Roboto:ital,wght@0,300;0,400;0,500;0,700;0,900;1,300;1,400;1,500;1,700;1,900&display=swap" rel="stylesheet"></link>
            </Helmet>
            <GlobalStyle/>
            <Header/>
            {children}
            <Footer/>
        </>
    )
}

export default Layout
