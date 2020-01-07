import React, {useState} from 'react'

//Import necissary items to use fontAwesome
import { library } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
library.add(faSearch);

//import necissary items for updating redux store
import { useDispatch } from 'react-redux'
import { updateTerm } from '../../redux/Term/term.actions'
import {useRouter} from 'next/router'
import {Container, Input, SubmitButton} from './SearchBar.styles'


// TODO: Build and style the search bar
/*
    For this component use hooks to manage state, and update the redux store.

    Container:
        * Should house the Input and Button

    The Input:
        * Should be a controlled component
        * Placeholder should read "Search for Online Course"
        * Submit the term to the redux store if the user presses enter
    
    The Button:
        * Should contain the font awesome icon faSearch
        * The color of the icon should be #FFF
        * Submit the term to the redux store if clicked by the user
*/



const SearchBar = () => {

    const router = useRouter()
    const [text, setText] = useState('')
    const dispatch = useDispatch()

    const submit = () => {
        dispatch(updateTerm(text))
        router.back()
    }

    return(
        <Container>
            <Input
                value={text}
                onChange={(e)=>{setText(e.target.value)}}
                placeholder="Search for Online Course"
                onKeyPress={(e)=>{e.key === "Enter" && submit()}}
            />
            <SubmitButton onClick={()=>{submit()}}>        
                <FontAwesomeIcon
                    style={{ color: "#FFF" }}
                    icon={["fas", "search"]}
                    />
            </SubmitButton>
        </Container>
    )
}

export default SearchBar