import React from 'react'
import styled from 'styled-components'
import ErrorOutlineIcon from '@material-ui/icons/ErrorOutline';
function Chat() {
    return (
        <Container>
            <Header>
            <ChannelName>
                # Channel 1
             
            </ChannelName>
            <DetailsRight>
                <Detail>
                    Detail
                </Detail> 
                <ErrorOutlineIcon/>
            </DetailsRight>
           
            </Header>
        </Container>
 
    )
}

export default Chat


const Container = styled.div`
    background:#f9dbbd;
 
`


const Header = styled.div`
    width:100%;
    height:64px;
    display:flex;
    justify-content:space-between;
    align-items:center;
    border-bottom:1px solid  #a53860;

`
const ChannelName= styled.div `
        padding-left:16px;
        font-weight:bolder;
    
`
const Detail = styled.div `
        padding-right:16px;
`

const DetailsRight = styled.div `
    display:flex;
    padding-right:16px;

`