import './list.scss'
import {useState} from 'react'
import Navbar from '../../components/navbar/Navbar'
import Header from '../../components/header/Header'
import { useLocation } from 'react-router-dom'
import Destination from '../../components/destination/Destination'

import {format} from 'date-fns'
import {DateRange} from 'react-date-range'
import 'react-date-range/dist/styles.css'; // main style file
import 'react-date-range/dist/theme/default.css'; // theme css file

const List = () => {

  const [open,setOpen]=useState(false)
  const [dateRange, setDateRange] = useState([
    {
      startDate: new Date(),
      endDate: new Date(),
      key: 'selection'
    }
  ]);
  const location=useLocation()
  const destination=location.state.destination;
  const date = location.state.dateRange;
  const options=location.state.counter;

  return (
    <div className="list">
      
      <Navbar/>
      <Header type={"type"}/>

      <div className="hlist-container">
        <div className="hlist-wrapper">
          <div className="hlist-search">
            <h1 className="hlist-title">Search</h1>
            <div className="dist">
              <label>
                Destination
              </label>
              <input type="text" placeholder={destination}/>
            </div>
            <div className="date">
              <p onClick={()=>setOpen(!open)}>
                From {format(date[0].startDate,'dd/MM/yyyy')  } To {format(date[0].endDate,'dd/MM/yyyy')}
               
              </p>
           

              
              {open &&
                            <DateRange className="calender" editableDateInputs={true}
                     
                            onChange={item => setDateRange([item.selection])}
                            moveRangeOnFirstSelection={false}
                            ranges={dateRange}
                            />
                        }
         
            </div>

            <div className="options">
              <h4>Options</h4>

              <div className="option">
               <small>Min price per night</small> 
               <input type="number"  className='option-item'/>
              </div>
              <div className="option">
               <small>Max price per night</small> 
               <input type="number"  className='option-item'/>
              </div>
              <div className="option">
               <small>adult</small> 
               <input type="number" min={1} className='option-item' placeholder={options.adult}/>
              </div>
              <div className="option">
               <small>children</small> 
               <input type="number" min={0} className='option-item'  placeholder={options.children}/>
              </div>
              <div className="option">
               <small>Room</small> 
               <input type="number" min={1} className='option-item'  placeholder={options.room}/>
              </div>
              
            </div>
            <button>Search</button>

          </div>
          <div className="hlist-result">
            <Destination/>
            <Destination/>
            <Destination/>
            <Destination/>
            <Destination/>
            <Destination/>
            <Destination/>
          </div>
        </div>
      </div>
    </div>
  )
}

export default List