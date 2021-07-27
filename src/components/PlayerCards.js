import React from 'react';
import env from 'react-dotenv'
import styled from 'styled-components';
import {PlayerName, Playerinfo} from '../pages/stylePage'

export default function PlayerCards() {

  const [cards,setCards] = React.useState([])

  const divStyle = {
    textAlign: 'left',
    width: '200px',
    height: '110px',
    backgroundColor: 'lightblue',
    marginTop: '2px'
  }

  async function getCards(){
    let response = await fetch(`${env.API_URL}/api/v1/players/showcase`)
    if (response){
      let data = await response.json()
      if (response.status === 200){
        setCards(data)
      }
      else{
        console.log(data.error)
      }
    }
  }

  React.useEffect(()=>getCards(),[])

  return (
    <>
      <div style={{position: 'absolute'}}>
        <h4 style={{color: 'aliceblue', background:'maroon'}}>The Team:</h4>

        {
          cards.map((val,ind) => {
            return (
              <div key={ind} style={divStyle}>
                {(val.imageurl !== '' && val.imageurl) ? <img align='left' src={val.imageurl} alt='blank avatar' height='40'/>
                : <img align='left' src='avatar.png' alt='blank avatar' height='40'/>}
                <PlayerName style={{marginBottom: '0'}}>{val.name}</PlayerName>
                <Playerinfo style={{marginBottom: '0'}}>Number: {val.number}</Playerinfo>
                <p style={{marginBottom: '0'}}>Position: {val.position}</p>
                <p style={{marginBottom: '0'}}>Seasons: {val.seasons}</p>
              </div>
            )
          })
        }
      </div>
    </>
  );
}
