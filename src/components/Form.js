import React from 'react'
import styled from 'styled-components'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch } from '@fortawesome/free-solid-svg-icons'
import {useDispatch} from 'react-redux'
import {buscarPalabraAction, obtenerTweetsAction} from '../actions/tweetActions'

const FormSearch = styled.form`
    text-align: center;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;
    font-family: 'Roboto';
    color: var(--clr-primary-gray);

    input[type="search"] {
        border: 1px solid;
        border-radius: 50px;
        font-family: 'Roboto';
        outline: none;
        padding: 7px 10px 7px 40px;
        margin-left: 10px;
        max-width: 120px;
    }

    @media (min-width: 767px){
        text-align: left;
        padding-top: 15px;
        padding-bottom: 15px;
        padding-left: 5%;
    }
`
const SearchIcon = styled(FontAwesomeIcon)`
    margin-left: 1.2rem;
    margin-top: 6px;
    position: absolute;
    color: var(--clr-primary-gray);
    font-size: 17px;
`

function Form() {

    const dispatch = useDispatch()
    
    const handleForm = e => {
        e.preventDefault()
    }

    const handleChange = async event => {
        //console.log(event.target.value)
        await dispatch(obtenerTweetsAction())
        await dispatch(buscarPalabraAction(event.target.value))
    }

    return (
        <FormSearch onSubmit={handleForm}>
            <label>Tweet Search: </label>
                <div>
                    <SearchIcon icon={faSearch} />
                    <input 
                        type="search"
                        placeholder="Search"
                        onChange={handleChange}
                    />
                </div>
        </FormSearch>
    )
}

export default Form
