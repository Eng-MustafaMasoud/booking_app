import './mail.scss';

const Mail =()=>{
    return(
        <div className="mail">
            <div className="mail-container">

                <h1>Save Time ,Save Money!</h1>
                <p>Sign up and we'll send the best deals to you</p>
                <div className="mail-input">
                    <input type="text" placeholder='Your email' />
                    <button className="mail">
                        Subscribe
                    </button>
                </div>
           </div>
        </div>
    )
}
export default Mail