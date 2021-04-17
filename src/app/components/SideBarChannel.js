import React from 'react'
import styled from 'styled-components'
import { setChannelInfo } from '../../features/appSlice'
import {useDispatch} from 'react-redux'

function SideBarChannel({id, channelName}) {

    const dispatch = useDispatch()

    return (
        <Container onClick={() => dispatch(setChannelInfo({
            channelId: id, 
            channelName2: channelName,
        }))}>
            <h4><span>#</span>{channelName}</h4>
            
        </Container>
    )
}

export default SideBarChannel

const Container = styled.div`
    h4:hover{
        color: white;
        background-color: #40464b;
    }

    h4{
        display:flex;
        padding-left: 15px;
        align-items: center;
        background-color: #2f3135;
        color: gray;
        cursor: pointer;
    }
    span{
        font-size: 30px;
        padding: 8px;
    }
`