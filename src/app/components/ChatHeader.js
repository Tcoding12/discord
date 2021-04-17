import {  EditLocationRounded, HelpRounded, Notifications, PeopleAltRounded, SearchRounded, SendRounded } from '@material-ui/icons'
import React from 'react'
import styled from 'styled-components'

function ChatHeader({channelName}) {
    return (
        <Container>
            <ChatHeaderLeft>
                <h3>
                    <span>#</span>
                    {channelName}
                </h3>
            </ChatHeaderLeft>
            <ChatHeaderRight>
                <Notifications />
                <EditLocationRounded />
                <PeopleAltRounded />

                <ChatHeaderSearch >
                    <input placeholder="Search" />
                    <SearchRounded />
                </ChatHeaderSearch>
                <SendRounded />
                <HelpRounded />
            </ChatHeaderRight>
        </Container>
    )
}

export default ChatHeader

const Container = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    color: gray;
    padding: 10px;
`
const ChatHeaderLeft = styled.div`
    h3{

        display: flex;
        align-items: center;
        color: white;

        span{
            color: gray;
            font-size: 30px;
            padding: 10px;
        }
    }
`
const ChatHeaderRight = styled.div`
    display: flex;
    align-items: center;
    flex: 0.5;
    justify-content: space-between;

    .MuiSvgIcon-root {
        padding: 5px;
        cursor: pointer;

        :hover{
          color:  white;
        }
    }
`
const ChatHeaderSearch = styled.div`
    display: flex;
    align-items: center;
    color: gray;
    background-color: #2f3135;
    border-radius: 3px;
    padding: 3px;

    input {
        background: transparent;
        outline-width: 0;
        color: white;
        border: none;
    }
`