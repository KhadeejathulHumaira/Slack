import React from 'react'
import styled from 'styled-components'

function Message() {
    return (
        <Container>
            <UserAvatar>
                <img src="https://randomuser.me/api/portraits/women/81.jpg"></img>
            </UserAvatar>
            <MessageContent>
                <Name>
                    Humaira
                    <span>23/2/2021 11:32:34 AM</span>
                </Name>
                <Text>
                    Hey Its interesting 
                </Text>
            </MessageContent>
        </Container>

    )
}

export default Message
const Container=styled.div`
   padding:8px 20px;
   display:flex;
   align-items:center;
   :hover{
    background:#ffa5ab;
}
`
const UserAvatar =styled.div`
    width:36px;
    height:36px;
    border-radius:2px;
    overflow:hidden;
    margin-right:8px;

    img{
        width:100%;
    }

`
const MessageContent=styled.div`
    display:flex;
    flex-direction:column;
`
const Name=styled.div`
        font-weight:900;
        font-size:15px;
        line-height:1.4;
        
        span{
            margin-left:8px;
            font-weight:400;
            color:rgb(97,97,87);
            font-size:13px;
        }
`
const Text=styled.div`


`
