import './navbar.scss'

const Navbar = () => {
  return (
    <div className='navbar'>
        <div className="nav-container">
            <div className="logo">Wonders.com </div>
            <div className="nav-btns">
                <button className="reg">Register</button>
                <button className="log">Login</button>
            </div> 
        </div>
        
    </div>
  )
}

export default Navbar