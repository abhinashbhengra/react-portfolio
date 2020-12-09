import React from "react";
import Abhinash from "../assets/abhinash.jpg";

function Title() {
    const name = "Abhinash Bhengra";
    const leadText = "I am a freelancer from India";
    return(
        <div className="container">
          <div className="row text-center align-items-center my-5 py-5">
             <div className="col-12 col-md-6">
                <img className="img-fluid rounded-circle w-75" src={Abhinash} alt="Abhinash Bhengra"/>
             </div>
            <div className="col-12 col-md-6 pt-5">
                <div className="font-weight-light" style={{fontSize: "40px"}}>
                   Hi, I am <span className="text-info">{name}</span>
                </div>
                <div>
                   <h4 className="font-weight-light">{leadText}</h4>
                </div>
            </div>
        </div>
    </div>
    );
}
export default Title;