import React from 'react';
import env from 'react-dotenv'
import Alert from 'react-bootstrap/Alert'

export default function AdminPlayers() {

  const [cards,setCards] = React.useState([])
  const [error,setError] = React.useState('')

  async function updateProfile(index){
    console.log(JSON.stringify({
      approved: cards[index].approved
    }))
    let response = await fetch(`${env.API_URL}/api/v1/players/${cards[index].user_id}`,{
      headers: {
        'Content-Type': 'application/json'
      },
      method: 'PUT',
      body: JSON.stringify({
        approved: cards[index].approved
      })
    })
    console.log(response)
    if (response){
      let data = await response.json()
      if (response.status === 200){
        setError('Player card updated')
        getCards()
      }
      else{
        setError(`Failed to update - ${data.error}`)
      }
    }
  }


  async function getCards(){
      let response = await fetch(`${env.API_URL}/api/v1/players`)
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

  function checkboxUpdate(index,value){
    let newcards = cards
    newcards[index] = {...newcards[index], approved: value}
    setCards([...newcards])
    updateProfile(index)
  }

  React.useEffect(()=>getCards(),[])

  const divStyle = {
    textAlign: 'left',
    width: '250px',
    minHeight: '125px',
    margin: '8px',
    backgroundColor: '#F0F0F0'
  }

  return (
    <>
      <h2>Player cards</h2>
      {(error !== '') ?
        <Alert variant={error.match(/^Failed/) ? 'danger' : 'success'}>{error}</Alert>
      :
        null}
      <div style={{display: 'flex', alignItems: 'center', flexDirection: 'column'}}>
      {
        cards.map((val,ind) => {
          return (val.name) ? (
            <div key={ind} style={divStyle}>
              <img align='left' src='avatar.png' alt='blank avatar' height='40'/>
              <h4 style={{marginBottom: '0'}}>{val.name}</h4>
              <p style={{marginBottom: '0'}}>Number: {val.number}</p>
              <p style={{marginBottom: '0'}}>Position: {val.position}</p>
              <p style={{marginBottom: '0'}}>Seasons: {val.seasons}</p>
              <br />
              <label for={val.user_id} ><em>Show on front page: &nbsp;</em></label>
              <input key={ind} type="checkbox" id={val.user_id} onChange={(e)=>checkboxUpdate(ind,e.target.checked)} checked={cards[ind].approved}></input>
            </div>
          ) : null
        })
      }
      </div>
    </>
  );
}
