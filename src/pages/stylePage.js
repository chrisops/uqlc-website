import styled from 'styled-components'

export const NewPostBtn = styled.button`
    border-radius: 2px;
    background: transparent;
    &:hover {
        background-color:aquamarine ;
    }
`

export const PlayerName = styled.h4`
    margin-left: 30%;
`

export const Playerinfo = styled.p`
    margin-left: 30%;
`

export const PostContainer = styled.div`
    border: 1px solid gold;
    box-shadow: 0 3px 10px -3px rgba(0, 0, 0, 0.25);
    margin-top: 10px;
    margin-bottom: 10px;
    margin-left: 20px;
    margin-right: 20px;
    background-color: seashell;
`

export const PostImg = styled.img`
    //margin: 20px 0 0px 20%;
    order: 1;
    transition: transform .2s;
    &:hover {
        transform: scale(1.5)
    }
`