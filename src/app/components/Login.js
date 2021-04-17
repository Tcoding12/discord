import { Button } from '@material-ui/core'
import React from 'react'
import styled from 'styled-components'
import {auth, provider} from './firebase'

function Login() {

    const signIn = () => {

        auth.signInWithPopup(provider).catch((error) => alert(error.message))        

    }

    return (
        <Wrapper>
            <LoginLogo>
                <img src="https://1000logos.net/wp-content/uploads/2020/10/Discord-logo.jpg" alt=""/>
               
            </LoginLogo>
            <Button onClick={signIn}>Sign In</Button>
            
        </Wrapper>
    )
}

export default Login

const LoginLogo = styled.div`
    img{
        object-fit: contain;
        height: 150px;
    }
`
const Wrapper = styled.div`
    display: grid;
    place-items: center;
    height: 100vh;
    width: 100%;
    background: white;

    button{
        width: 300px;
        background-color: #738adb;
        color: #eff2f5;
        font-weight: 800;

        :hover {
            background-color: black;
            color: #738adb;
        }
    }
`