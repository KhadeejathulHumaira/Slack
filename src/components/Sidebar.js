import React from 'react'
import styled from 'styled-components'
import AddCircleOutlineIcon from '@material-ui/icons/AddCircleOutline';
import { SidebarItems } from '../data/Sidebardata'
import AddIcon from '@material-ui/icons/Add';
import db from '../firebase'
import { useHistory } from 'react-router-dom'


function Sidebar(props) {
    const history=useHistory();

    const addChannel=() =>{
        const promptName=prompt('Enter channel name')
        if(promptName){
            db.collection('rooms').add({
                name:promptName
            })
        }
    }

    const goToChannel=(id)=>{
        if(id){
            history.push(`/room/${id}`)
        }
    }

    return (
        <Container>
            <WorkSpaceContainer>
                <Name>
                    Humaira's Slack 
                </Name>

                <NewMessage>
                    <AddCircleOutlineIcon/>
                </NewMessage>
            </WorkSpaceContainer>
            <MainChannels>
                {
                    SidebarItems.map(item => (
                        <MainChannelItem>
                               {item.icon} 
                               {item.text}    
                        </MainChannelItem>
                        ))
                }
            </MainChannels>
            <ChannelsContainer>
                <NewChannelContainer>
                    <div>
                        Channels
                    </div>
                    <AddIcon onClick={addChannel} />
                </NewChannelContainer>
                <ChannelList>
                    { 
                        props.rooms.map(item => (
                            <Channel onClick={()=>goToChannel(item.id)}>
                                # {item.name}
                            </Channel>
                        ))
                    }
    
                </ChannelList>
            </ChannelsContainer>

        </Container>
     )
}
export default Sidebar

const Container = styled.div`
    background:#450920;

`
const WorkSpaceContainer= styled.div`
    color:#f9dbbd;
    height:64px;
    display:flex;
    align-items:center;
    padding-left:19px;
    justify-content:space-between;
    border-bottom: 1px solid #a53860;
`

const Name= styled.div`

`
const NewMessage= styled.div`
        width:36px;
        height:36px;
        background:#f9dbbd;
        color:#450920;
        fill:#450920;
        display:flex;
        justify-content:center;
        align-items:center;
        border-radius:50%;
        margin-right:20px;
        cursor:pointer;

`
const MainChannels = styled.div`
        padding-top:20px;
`
const MainChannelItem = styled.div`

    color:#f9dbbd;
    display:grid;
    grid-template-columns:15% auto;
    height:28px;
    align-items:center;
    padding-left:19px;
    cursor:pointer;
    :hover{
        background:#a53860;
    }
`

const ChannelsContainer= styled.div`
    color:#f9dbbd;
    margin-top:10px;
    


`
const NewChannelContainer= styled.div`
        display: flex;
        justify-content:space-between;
        align-items:center;
        height:28px;
        padding-left:19px;
        padding-right:12px;

`
const ChannelList =styled.div`


`

const Channel =styled.div`
    height:28px;
    display:flex;
    align-items:center;
    padding-left:19px;
    cursor:pointer;
    :hover{
        background:#a53860;
    }
`