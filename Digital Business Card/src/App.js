
import Introduction from './Components/Introduction';
import About from './Components/About';
import Footer from './Components/Footer';
import Interests from './Components/Interest';

import './App.css'



function App() {
    return (
           <div>
                <Introduction />
                <About />
                <Interests/>
                <Footer/>
           </div>
    )
};
export default App;

// <div className="contact-card">
// <img src="./images/felix.png"/>
// <h3>Felix</h3>
// <div className="info-group">
//     <img src="./images/phone-icon.png" />
//     <p>(212) 555-4567</p>
// </div>
// <div className="info-group">
//     <img src="./images/mail-icon.png" />
//     <p>thecat@hotmail.com</p>
// </div>
// </div>

// <div className="contact-card">
// <img src="./images/pumpkin.png"/>
// <h3>Pumpkin</h3>
// <div className="info-group">
//     <img src="./images/phone-icon.png" />
//     <p>(0800) CAT KING</p>
// </div>
// <div className="info-group">
//     <img src="./images/mail-icon.png" />
//     <p>pumpkin@scrimba.com</p>
// </div>
// </div>

// <div className='contacts'>        
// <Contacts 
// img= {image}
// name= 'Fluffykins'
// phone='(212) 555-2345' 
// email='fluff@me.com'
// ispun= {true}
// upvote = {100} />

// <Contacts 
// img= {image1}
// name= 'Felix'
// phone='(212) 555-4567' 
// email='thecat@hotmail.com'/>

// <Contacts 
// img= {image2}
// name= 'Pumpkin'
// phone='(0800) CAT KING' 
// email='pumpkin@scrimba.com'/>

// <Contacts 
// img= {image3}
// name= 'Fluffykins'
// phone='(212) 555-2345' 
// email='fluff@me.com'/>
// </div>
