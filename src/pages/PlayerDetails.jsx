


import {useParams} from 'react-router-dom';
import {playersData} from './Players';
import Header from '../componants/Header';
import Footer from '../componants/Footer';




const PlayerDetails = () => {

  const paramsObject = useParams();

  const playerData = playersData.find((player) => Number(paramsObject.playerId) === player.id) 

  return(
    <div>
      <Header/>

      <section className='container mt-3 mb-3'>
        <h2>{playerData.name}</h2>
        <ul className='list-group'>
          <li className='list-group-item'><p><strong>Name: </strong>{playerData.name}</p></li>
           <li className='list-group-item'><p><strong>Position: </strong>{playerData.position}</p></li>
          <li className='list-group-item'><p><strong>Team: </strong>{playerData.team}</p></li>

        </ul>
      </section>

      <Footer/>
    </div>
  )
}

export default PlayerDetails