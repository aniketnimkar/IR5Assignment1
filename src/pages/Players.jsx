
import { useState } from 'react';
import {Link} from 'react-router-dom';
import Footer from '../componants/Footer';
import Header from '../componants/Header';

export const playersData = [
  { id: 1, name: "Lionel Messi", position: "Forward", team: "Barcelona" },
  {
    id: 2,
    name: "Cristiano Ronaldo",
    position: "Forward",
    team: "Manchester United",
  },
  {
    id: 3,
    name: "Neymar Jr",
    position: "Forward",
    team: "Paris Saint-Germain",
  },
  {
    id: 4,
    name: "Kylian Mbappé",
    position: "Forward",
    team: "Paris Saint-Germain",
  },
  {
    id: 5,
    name: "Robert Lewandowski",
    position: "Forward",
    team: "Bayern Munich",
  },
];

const Players = () => {
  const [filterByTeam, setFilterByTeam] = useState('All');

  const filteredArray = filterByTeam === 'All' ?  playersData :  playersData.filter((player) => player.team === filterByTeam);
  
  return(
    <div>
      <Header/>

      <section className='container mt-3'>
        <h1 className='mb-3'>List of Players</h1>

        <label>Filter by Team: </label>
        <select onChange={(event) => setFilterByTeam(event.target.value)} className='form-select'>
          <option value="All">All Teams</option>
          <option value="Barcelona">Barcelona</option>
          <option value="Manchester United">Manchester United</option>
          <option value="Paris Saint-Germain">Paris Saint-Germain</option>
          <option value="Bayern Munich">Bayern Munich</option>
        </select>
      </section>

      <section className='container mt-4 mb-3'>
       { filteredArray.map((player) => (
        <ul className='list-group'>
          <li key={player.id} className='list-group-item'>
            <h3>{player.name}</h3>
            <p>Position: {player.position}</p>
            <p>Team: {player.team}</p>
            <Link to={`/playerDetails/${player.id}`} className='btn btn-primary'>View Details</Link>
          </li>
        </ul>
        ))}
      </section>

      <Footer/>
    </div>
  )
}

export default Players