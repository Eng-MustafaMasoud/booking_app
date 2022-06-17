import './property.scss'

const Property = () => {
  return (
    <div className="property">
        <h1 className="property-title">Browse By Property Type</h1>
        <div className="property-container">
        <div className="property-list">
            <img src="https://images.pexels.com/photos/258154/pexels-photo-258154.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="hotel" />
            <h3>Hotels</h3>
            <p>2312 hotels</p>
        </div>
        <div className="property-list">
            <img src="https://images.pexels.com/photos/87223/pexels-photo-87223.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="appartment" />
            <h3>Apartments</h3>
            <p>2312 Apartment</p>
        </div>
        <div className="property-list">
            <img src="https://images.pexels.com/photos/189296/pexels-photo-189296.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="resort" />
            <h3>Resorts</h3>
            <p>2312 Resort</p>
        </div>
        <div className="property-list">
            <img src="https://images.pexels.com/photos/32870/pexels-photo.jpg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="villas" />
            <h3>Villas</h3>
            <p>2312 Villas</p>
        </div>
        <div className="property-list">
            <img src="https://images.pexels.com/photos/803975/pexels-photo-803975.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="cabin" />
            <h3>Cabins</h3>
            <p>2312 Cabins</p>
        </div>
        
        </div>
    </div>
  )
}

export default Property