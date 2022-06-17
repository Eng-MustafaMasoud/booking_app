import './guests.scss'
import {data} from '../guestData.js'
const Guests = (prop) => {
  return (
    <div className='guests'>
      <h1>Homes Guests Love</h1>
      <div className="guests-container">
    
      
         {
           data.map(place=>(
             <div className="city">
               <img src={place.image} alt={place.title} />
              <div className="city-text">
                <p>{place.city}</p>
                <span>{place.title}</span>
                <span className="rate"><span>{place.rating}</span> Excellent</span>
              </div>
             </div>
           ))
         }
   
       
      </div>


    </div>
  )
}

export default Guests