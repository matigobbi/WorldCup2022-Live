import './App.css';
import { useEffect } from 'react';
import { useState } from 'react';
import allTeamsData from "./allTeams.json"

function App() {

  const [data, setData] = useState('');
  const [allTeams , setAllTeams] = useState(allTeamsData)

  // useEffect(() => {
  //   fetch(`http://localhost:5005/match`)
  //     .then((res) => {return res.json()})
  //    .then((response) => setData(response.data));
  //  }, []);
   console.log(allTeams)
  return (<>
    <h1>World cup 2022 Participants</h1>
      <div id='teamsContainer'> 
        {allTeams.map((one)=> (
      
        <p style={{"fontSize":"13px"}}>{one.name_en}
        <br />
        <img class="flag"src={one.flag} alt="" />
        </p>
      
    )
    )}
      </div>
    </>
  );
}

export default App;
