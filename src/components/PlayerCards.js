import React from 'react';
import env from 'react-dotenv'

export default function PlayerCards() {

  const [cards,setCards] = React.useState([])

  const divStyle = {
    textAlign: 'left',
    width: '200px',
    height: '110px',
    backgroundColor: '#F0F0F0'
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
        <h4>The Team:</h4>

        {
          cards.map((val,ind) => {
            return (
            <>
              <div key={ind} style={divStyle}>
                <img align='left' src='avatar.png' alt='blank avatar' height='40'/>
                <h4 style={{marginBottom: '0'}}>{val.name}</h4>
                <p style={{marginBottom: '0'}}>Number: {val.number}</p>
                <p style={{marginBottom: '0'}}>Position: {val.position}</p>
                <p style={{marginBottom: '0'}}>Seasons: {val.seasons}</p>
              </div>
            </>
            )
          })
        }
      </div>
    </>
  );
}
