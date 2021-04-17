import { Avatar } from '@material-ui/core'
import { AddCircle, CardGiftcard, EmojiEmotions, Gif } from '@material-ui/icons'
import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import styled from 'styled-components'
import ChatHeader from './ChatHeader'
import Message from './Message'
import {selectChannelId, selectChannelName2} from '../../features/appSlice'
import { selectUser } from '../../features/userSlice'
import db from './firebase'
import firebase from 'firebase'

function Chat() {
    const channelid = useSelector(selectChannelId)
    const user = useSelector(selectUser)
    const channelName = useSelector(selectChannelName2)
    const [input, setInput] = useState('')
    const [messages, setMessages] = useState([])

    useEffect(() => {
        if(channelid){
        db.collection("channels").doc(channelid).collection("messages").orderBy("timestamp", "desc").onSnapshot((snapshot) =>
            setMessages(snapshot.docs.map((doc) => doc.data()))
        )

        }
    }, [channelid])

    const sendMessage = e => {
        e.preventDefault();

        db.collection("channels").doc(channelid).collection('messages').add({
            message: input,
            user: user,
            timestamp: firebase.firestore.FieldValue.serverTimestamp(),
        })
        setInput("")
    }
    return(
        <Container>
            <ChatHeader channelName={channelName} />
            <ChatMessage>
                {
                    messages.map((message) => (
                        <Message  
                            timestamp={message.timestamp}
                            message={message.message}
                            user={message.user}
                        />
                    ))
                }

            </ChatMessage>
            <ChatInput>
                <AddCircle fontSize="large" />
                <form>
                    <input
                        disabled={!channelid}

                        value={input}  onChange={e => setInput(e.target.value)} placeholder={`Message ${channelName}`} 
                    />
                    <button onClick={sendMessage} disabled={!channelid} type="submit">Send Message</button>
                </form>
                <ChatInputIcons>
                    <CardGiftcard  fontSize="large"/>
                    <Gif fontSize="large" />
                    <EmojiEmotions fontSize="large"/>
                </ChatInputIcons>

            </ChatInput>
        </Container>
        
    )
}

export default Chat

const Container = styled.div`
    display: flex;
    flex-direction: column;
    flex: 0.75;
    background-color: #363a3f;
    height: 100vh;
`
const ChatMessage = styled.div`
    flex: 1;
`
const ChatInput = styled.div`
    color: lightgray;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 15px;
    border-radius: 5px;
    margin: 20px;
    border-top: 1px solid gray;
    background-color: #474b53;

    form{
        flex: 1;

        input{
            padding: 15px;
            background: transparent;
            border: none;
            outline-width: 0;
            color: white;
            width: 100%;
            font-size: large;
        }

        button{
            display: none;
        }
    }

    .MuiSvgIcxon-root {
        padding: 5px;
    }

`
const ChatInputIcons = styled.div``