import { Avatar } from '@material-ui/core'
import React from 'react'
import styled from 'styled-components'

function Message({timestamp, message, user}) {
    return (
        <Wrapper>
            <Avatar src={user.photo}/>
            <MessageInfo>
                <h4>
                    {user.displayName}
                    <span> {new Date(timestamp?.toDate()).toUTCString()}</span>
                </h4>
                <p> {message}</p>

            </MessageInfo>
            
        </Wrapper>
    )
}

export default Message


const Wrapper = styled.div`
    display: flex;
    align-items: center;
    padding: 20px;
    color: white;
`
const MessageInfo = styled.div`
    margin-left: 20px;

    span{
        color: gray;
        margin-left: 20px;
        font-size: x-small;
    }
`