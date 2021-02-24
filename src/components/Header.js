import React from 'react'
import styled from 'styled-components'
import AccessTimeIcon from '@material-ui/icons/AccessTime';
import HelpOutlineIcon from '@material-ui/icons/HelpOutline';
function Header() {
    return (
        <Container>
            <Main>
                <AccessTimeIcon /> 
                <SearchContainer>
                    <Search>
                        <input type="text" placeholder="Search...">
                        </input>
                    </Search>
                </SearchContainer>
                <HelpOutlineIcon />

            </Main>
            <UserContainer>
                <Name>
                    Humaira
                </Name>
                <UserImage>
                <img src=" https://i.imgur.com/6VBx3io.png
"></img>
                </UserImage>
            </UserContainer>
        </Container>
    )
}

export default Header


const Container =styled.div`
    background:#450920;
    color:#f9dbbd;
    display:flex;
    justify-content:center;
    align-item:center;
    position:relative;
    z-index:10;
    box-shadow:inset 0 0 0 1px #a53860;
`

const Main =styled.div`
    display:flex;
    margin-right:16px;
    margin-left:16px;
    align-items:center;
`

const SearchContainer=styled.div`
    min-width:400px;
    margin-left:16px;
    margin-right:16px;
   

`
const Search = styled.div`
    box-shadow:inset 0 0 0 1px #a53860;
    width:100%;
    border-radius:6px;

    

    input{
        background-color:transparent;
        border:none;
        padding-left:8px;
        padding-right:8px;
        color:#f9dbbd;
        padding-top:4px;
        padding-bottom:4px;
    }
    
    input:focus{
        outline:none;
    }

`

const UserContainer=styled.div`
    display:flex;
    align-items:center;
    padding-right:16px;
    margin-top:4px;
    position:absolute;
    right:0;

`

const Name= styled.div`
    padding-right:16px;

`
const UserImage=styled.div`
        
        width:28px;
        height:28px;
        border:2px solid #f9dbbd;
        border-radius:3px;

        img{
            width:100%;
        }

`