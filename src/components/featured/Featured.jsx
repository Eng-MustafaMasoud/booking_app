import './featured.scss'

const Featured = () => {
  return (
    <div className="featured">
     
      <div className="featured-items">
        <img src="https://images.pexels.com/photos/71241/pexels-photo-71241.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="scene" className="featured-image"/>

        <div className="featured-title">
            <h1>Egypt</h1>
            <h2>GIZA</h2>
        </div>



      </div>
      <div className=" featured-items">
        <img src="https://dynamic-media-cdn.tripadvisor.com/media/photo-o/19/81/20/a6/the-grand-palace.jpg?w=900&h=600&s=1" alt="scene" className="featured-image"/>

        <div className="featured-title">
            <h1>Egypt</h1>
            <h2>Hurghada</h2>
        </div>



      </div>
      <div className=" featured-items">
        <img src="https://images.pexels.com/photos/3540318/pexels-photo-3540318.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="scene" className="featured-image"/>

        <div className="featured-title">
            <h1>Egypt</h1>
            <h2>Sharm el-Sheikh</h2>
        </div>



      </div>
   



      
    </div>
  )
}

export default Featured