import React from "react"
import Layout from '../components/Layout'
import Form from '../components/Form'
import styled from 'styled-components'
import ListTweets from "../components/ListTweets"

import { Provider } from "react-redux"
import store from "../store"


const ContainerBody = styled.div`
  margin: 10px 10%;
`

export default function Home() {
  return (
    <Provider store={store}>
      <Layout>
        <ContainerBody>
          <Form/>
          <ListTweets/>
        </ContainerBody>
      </Layout>
    </Provider>
  )
}
