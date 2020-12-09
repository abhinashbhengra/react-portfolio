import React from "react";

function Navbar() {
    return(
        <nav className="navbar navbar-expand-sm fixed-top bg-white">
        <div className="container my-2">
            <a href="/" className="navbar-brand text-dark font-weight-bold">
            Abhinash Bhengra
            </a>
        <button className="btn btn-outline-info ml-auto mx-3">
            Contact me
        </button>
        <button 
         className="navbar-toggler"
         data-toggle="collapse"
         data-target="#collapsenav"
        >
        <i className="fas fa-bars"></i>
        </button>

        <div className="collapse navbar-collapse flex-grow-0" id="collapsenav" >
            <div className="navbar-nav">
            <a href="/" className="nav-items nav-links text-dark h6 mx-1 my-auto">
                    Projects
                </a>
                <a href="/" className="nav-items nav-links text-dark h6 mx-1 my-auto">
                    Blogs
                </a>
            </div>
        </div>
                
    </div>
    </nav>
    );
}
export default Navbar;