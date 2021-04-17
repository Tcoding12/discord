import { Avatar } from '@material-ui/core'
import { Add, Call, ExpandMore, Headset, InfoOutlined, Mic, Settings, SignalCellularAlt } from '@material-ui/icons'
import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import styled from 'styled-components'
import { selectUser } from '../../features/userSlice'
import SideBarChannel from './SideBarChannel'
import db, {auth} from './firebase'
function Sidebar() {
    const user = useSelector(selectUser)
    const [channels, setChannels] = useState([]);
   
    useEffect(() => {
        db.collection("channels").onSnapshot(snapshot => (
            setChannels(snapshot.docs.map((doc) =>({
                id: doc.id,
                channel: doc.data(),

            })))
        ) )
    }, [])

    const handleAddChannel = () => {
        const  channelNames = prompt('Enter Channel name')

        if (channelNames) {
            db.collection("channels").add({
                name: channelNames 
            })
        }
    }
    return (
        <Container>
            <SideBarTop>
                <h3>Anthony Programmer</h3>
                <ExpandMore />
            </SideBarTop>
            <SidebarChannels>
                <SidebarChannelsHeader>
                    <SidebarHeader1>
                        <ExpandMore />
                        
                        <h4> Text Channels</h4>

                    </SidebarHeader1>
                    <Add onClick={handleAddChannel} />
                    
                </SidebarChannelsHeader>
                <ChannelList>
                    {channels.map(({id, channel}) => (
                        <SideBarChannel key={id} id={id} channelName={channel.name}/>
                    ))}
                    
                </ChannelList>


            </SidebarChannels>
            <SidebarVoice>
                <Signal  fontSize="Large"/>
                <SidebarVoiceInfo>
                    <h3>Voice Connected</h3>
                    <p>Stream</p>
                </SidebarVoiceInfo>
                <SidebarVoiceIcon>
                    <InfoOutlined />
                    <Call />
                </SidebarVoiceIcon>
            </SidebarVoice>
            <SidebarProfile>
                <Avatar2 onClick={() => auth.signOut()} src={user.photo}/>
                <SidebarProfileInfo>
                    <h3>{user.displayName}</h3>
                    <p> #{user.uid.substring(0, 6)}</p>
                </SidebarProfileInfo>
                <SidebarProfileIcons>
                    <Mic />
                    <Headset />
                    <Settings />

                </SidebarProfileIcons>
            </SidebarProfile>
        </Container>
    )
}

export default Sidebar

const SidebarProfileIcons = styled.div`
    .MuiSvgIcon-root {
        padding: 10px;
    }
`
const SidebarProfileInfo = styled.div`
    
    flex: 1;
    padding: 10px;
    h3{
        color: white;
    }
`


const SidebarVoiceIcon = styled.div`
`
const Signal = styled(SignalCellularAlt)`
    color: #4fb185;
`
const SidebarVoiceInfo = styled.div`
    flex: 1;
    padding: 10px;

    h3{
        color: #4fb185;
    }

    p{
        font-size: smaller;
    }
`
const SidebarVoice  = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    color: gray;
    background: #2f3135;
    padding: 10px;
    border-top: 1px solid gray;

    .MuiSvgIcon-root {
        padding: 10px;
    }
`
const SidebarProfile = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    color: gray;
    background: #2f3135;
    padding: 10px;
    border-top: 1px solid gray;
    :hover{
        
    }
    .MuiSvgIcon-root {
        padding: 10px;
    }
`
const ChannelList = styled.div`

`

const SidebarChannels = styled.div`
    flex: 1;
`
const SidebarChannelsHeader = styled.div`
    cursor: pointer;

    :hover{
        color: white;
    }
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 10px;
    background-color: #2f3135;
    color: gray;
`
const SidebarHeader1 = styled.div`
   display: flex;
   align-items: center;
`
const Container = styled.div`
    display: flex;
    flex-direction: column;
    flex: 0.25;
    height: 100vh;
    background-color: #2f3135;

    

`

const SideBarTop = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 20px;
    background-color: #2f3135;
    color: white;
    border-bottom: 3px solid #26282c;
`

const Avatar2 = styled(Avatar)`
    cursor: pointer;

    :hover {
        background-color: lightgray;
    }
    
`
