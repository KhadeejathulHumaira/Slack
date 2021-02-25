import React from 'react'
import styled from 'styled-components'
import SendIcon from '@material-ui/icons/Send';

function ChatInput() {
    return (
        <Container>
           <InputContainer>
           <form>
               <input type="text" placeholder="Message here..."></input>
               <SendButton>
                    <Send/>
               </SendButton>
           </form>
           </InputContainer>
        </Container>
    )
}

export default ChatInput

const Container=styled.div`
    padding-left:20px;
    padding-right:20px;
    padding-bottom:24px;
`

const InputContainer=styled.div`
   border :1px solid #a53860;
   border-radius:4px;

   form{
       display:flex;
       height:42px;
       align-items:center;
       padding-left:10px;
       input{
           flex:1;
           border:none;
           font-size:13px;
           background:#f9dbbd;
       }
       input:focus{
           outline:none;
         
       }
   }
`

const SendButton=styled.div`
    background:#450920;
    border-radius:2px;
    width:38px;
    height:32px;
    display:flex;
    justify-content:center;
    align-items:center;
    margin-right:5px;
    cursor:pointer;

    .MuiSvgIcon-root{
        width:18px;
    }
    :hover{
        background:#a53860;
    }
`
const Send=styled(SendIcon)`
    color:#f9dbbd;
    
`