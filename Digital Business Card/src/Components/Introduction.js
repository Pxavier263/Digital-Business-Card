
function Introduction () {
    return (
        <div className="info card">
            <img src="./Profile.jpg" alt="profile" />
                <div className="card--container">
                            <h1 className="info--name">Ogu Charles</h1>
                            <h3 className="info--title">Pharmacist and Developer</h3>
                            <a className="info--site" href="https://deft-sunflower-5b801e.netlify.app/">PxavierCorp.com</a>
                    <div className="info--btn-section">
                            <button className="info--btn-email">
                                   <a href="My Resume.pdf">
                                        <img className="info--btn-email-img" src="./icon.png" alt="Email link" /> Resume
                                   </a>
                            </button>
                            <button className="info--btn-linkedin">
                                <a href="https://www.linkedin.com/in/charles-alexavier-ogu-56299b10b">
                                    <img className="info--btn-linkedin-img" src="./Vector.png" alt="LinkedIn link" />LinkedIn
                                </a>
                            </button>
                    </div>
                </div>
        
        
        </div>
    )
};
export default Introduction;


