import './destination.scss'

const Destination = () => {
  return (
    <div className='hotels'>
        <div className="hotels-wrapper">
        <img src="https://images.pexels.com/photos/2086676/pexels-photo-2086676.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="hotel-room" />
            <div className="hotel">
                <div className="htop">
                   <h2 className="htitle">Tower Street Apartment</h2>
                    <span>Excellent</span>
                    <span className="rate">8.8</span>

                </div>
                <p>500m from center</p>
                <span className="free">free from airport</span>
                <div className="hbottom">
                    <h4>Studio Apartment with Air conditioning</h4>
                    <div className="pay">
                        <div className="left">
                            <p>Entries Studio . 1 bathroom . 21m² 1 full bed </p>
                            
                            <span className='cancel'>Free cancellation</span>
                            <span className="later">You can cancel later, so lock in this great price today!</span>

                        </div>
                        <div className="right">
                            <span className="mony">123 $</span>
                            <span className="opaci">includes taxes and fees</span>
                            <button>See availavility</button>
                
                        </div>
                        
                        
                    </div>

                </div>
            </div>
        </div>
    </div>
  )
}

export default Destination