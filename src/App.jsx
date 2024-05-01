import './App.css'
import Footer from './componants/Footer'
import Header from './componants/Header'
import {Link} from 'react-router-dom';

export default function App() {
  return (
    <>
      <Header/>
      <section className='container mt-5 mb-5'>
         <img src='https://placehold.co/400x300?text=Players+Smiling' className='img-fluid' />
       </section>

        <section className='container mb-5'>
          <h2>Our Players</h2>
          <p>Meet our talented team of players who work hard to achieve success on the field.</p>
          <Link to='/players' className='btn btn-primary'>View Players</Link>
        </section>

        <section className='container mb-3'>
          <h2>Team Performance</h2>
          <p>Explore our team's performance statistics to gain insights into our success on the field.</p>
          <Link to='/report' className='btn btn-primary'>View Performance</Link>
        </section>
      <Footer/>
    </>
  )
}
