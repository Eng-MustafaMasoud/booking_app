import {useState} from 'react';
import {useNavigate} from 'react-router-dom'
import  './header.scss'
import {FaBed,FaRegCalendarAlt} from 'react-icons/fa'
import {GiAirplaneDeparture} from 'react-icons/gi'
import {ImLocation} from 'react-icons/im'
import {AiFillCar} from 'react-icons/ai'
import {MdAttractions,MdTaxiAlert} from 'react-icons/md'
import {format} from 'date-fns'
import {DateRange} from 'react-date-range'

import 'react-date-range/dist/styles.css'; // main style file
import 'react-date-range/dist/theme/default.css'; // theme css file
import Counter from '../counter/Counter';
const Header = ({type}) => {
    const [destination ,setDistination]=useState('')
    const [open,setOpen]=useState(false)
    const[counter,setCounter]=useState({
        adult:1,
        children:0,
        rooms:1
      })
    const [dateRange, setDateRange] = useState([
        {
          startDate: new Date(),
          endDate: new Date(),
          key: 'selection'
        }
      ]);

      let navigate=useNavigate();

      const handleClick=()=>{
         navigate('/hotels',{state:{destination,counter,dateRange}})
      }
    
  return (
    <div className={type ==='type'? 'header list-container':'header'}>
        <div className="header-container">
            <div className="options">
                <div className="option active">
                    <div className="icon"><FaBed/></div>
                    <p>stay</p>
                </div>
                <div className="option">
                    <div className="icon"><GiAirplaneDeparture/></div>
                    <p>Flight</p>
                </div>
                <div className="option">
                    <div className="icon"><AiFillCar/></div>
                    <p>car Rental</p>
                </div>
                <div className="option">
                    <div className="icon"><MdAttractions/></div>
                    <p>Attractions</p>
                </div>
                <div className="option">
                    <div className="icon"><MdTaxiAlert/></div>
                    <p>Airport Taxi</p>
                </div>

            </div>
            
            {
                  !type &&  
                  <>
                  <div className="text">
                  <h2 className="head">
                      A lifetime of discounts? it's Genius. 
                  </h2>
                  <p className="text-desc">Get rewarded for your travels-unlock instant savings of 10% or more with a free Wonder.com account</p>
                  <button className="text-btn">Register / Login</button>
              </div>
              <div className="input-search" >
                  <div className="search-container" >

                     
                      <div className="input" >
                          <ImLocation className="icon"/>
                           <input type="text" placeholder='Where are you going?' onChange={(e)=>setDistination(e.target.value)}/>
                      </div>
                  <span className="calender-container">
                      <FaRegCalendarAlt/>
                      <p onClick={()=>setOpen(!open)}>From {format(dateRange[0].startDate,'dd/MM/yyyy')  } To {format(dateRange[0].endDate,'dd/MM/yyyy')}</p>
                        {open &&
                            <DateRange className="calender" editableDateInputs={true}
                     
                            onChange={item => setDateRange([item.selection])}
                            moveRangeOnFirstSelection={false}
                            ranges={dateRange}
                            />
                        }
                      </span>
                      <span>
                       
                          <Counter counter={counter} setCounter={setCounter}/>
                          
                      </span>
                      <button className="search-btn" onClick={handleClick}>Search</button>
              </div>
         
          </div>
               </>
              }

          </div>

          
            
        
              
         
          
    </div>
  )
}

export default Header