import './App.css';
import Player from './components/Player.js';
import PlayerList from './components/PlayerList.js';
import Match from './components/Match.js';
import MatchList from './components/MatchList.js';
import matchData from './data/matchData.js';
import playerData from './data/playerData.js';
import { preparePlayerData, addWinsToPlayers } from './helpers/playerHelpers.js'



function App() {

  const playerDataArray = preparePlayerData(playerData)
  const parsedPlayerData = addWinsToPlayers(playerDataArray, matchData)


  return (
    <div className='App'>
      <h1>
        Tourney Matches {" "}
        <span>Where Coding and Tournaents found their Match!</span>
      </h1>
      <PlayerList playerData={parsedPlayerData}></PlayerList>
      <MatchList matchData={matchData}></MatchList>
    </div>
  );
}

export default App;
