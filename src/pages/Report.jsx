import Footer from "../componants/Footer"
import Header from "../componants/Header"




const Report = () => {
  return(
        <div>
          <Header/>

          <section className='container mt-3'>
            <h1 className='mb-3'>Team Performance Report</h1>

            <div className='row'>
              <div className='col-md-4'>
                <h3>Top Scorer</h3>
                <p>Name: Lionel Messi</p>
                <p>Goals Scored: 20</p>
              </div>
              <div className='col-md-4'>
                <h3>Best Assister</h3>
                <p>Name: Neymar Jr</p>
                <p>Assists: 15</p>
              </div>
              <div className='col-md-4'>
                <h3>Most Valuable Player (MVP)</h3>
                <p>Name: Cristiano Ronaldo</p>
                <p>Overall Rating: 9.5</p>
              </div>
            </div>
          </section>

          <Footer/>
        </div>
  )
}

export default Report