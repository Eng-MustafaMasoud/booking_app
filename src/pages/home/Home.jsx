import './home.scss'

import Navbar from '../../components/navbar/Navbar'
import Header from '../../components/header/Header'
import Mail from '../../components/mail/Mail' 
import Featured from '../../components/featured/Featured'
import Property from '../../components/property/Property'
import Guests from '../../components/guests/Guests'
import Footer from '../../components/footer/Footer'
const Home = () => {
  return (
    <div className="home">
        <div className="home-head">
            <div className="head-container">

        <Navbar/>
        <Header/>
            </div>
          
        </div>

        <div className="home-content">
          <Featured/>
          <Property/>
          <Guests/>
        </div>
          <Mail/>
         <Footer/> 
        
    </div>
  )
}

export default Home