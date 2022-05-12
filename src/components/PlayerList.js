import React from 'react'
import Player from './Player.js'


function PlayerList(props) {
  const players = props.playerData.map((player) => {
    return (
      <Player 
        key={player.gamerTag}
        firstName={player.firstName}
        lastName={player.lastName}
        wins={player.wins}
      />
    )
  })

  return(
    <section className="PlayerList">
    <h1>Current participating players</h1>
    {players}
  </section>
  )
}

export default PlayerList;