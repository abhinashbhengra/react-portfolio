import React from "react";

function Footer() {
   return(
    <footer>
       <div className="container-fluid text-center" style={{backgroundColor:"black"}}>
            <div className="py-5">
                 <h2 className="text-light">Intrested in working with me?</h2>
                 <button className="btn btn-outline-light btn-lg">Let's talk</button>
            </div>
            <div className="row">
                <div className="col-12 col-md-4 py-3">
                      <h5 className="text-info pd-3">More links</h5>
                      <a href="/" className="text-light d-block">Blogs</a>
                      <a href="/" className="text-light d-block">Home</a>
                      <a href="/" className="text-light d-block">Projects</a>
                      <a href="/" className="text-light d-block">Contact me</a>
                      <a href="/" className="text-light d-block">Write a recommendation <i className="fas fa-heart"></i></a>
                </div>
                <div className="col-12 col-md-4 text-light text-justify py-3">
                     <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. 
                          Minima provident dolorum vero, 
                         quidem eligendi repellat magni facilis vitae 
                         culpa quis eveniet, cumque asperiores, earum 
                         laudantium a aliquam ratione aspernatur aliquid.
                         Lorem ipsum dolor, sit amet consectetur adipisicing elit. 
                         Praesentium, aspernatur sequi. Consectetur hic vero
                         dicta labore omnis facilis ratione distinctio.
                     </p>
                </div>
                <div className="col-12 col-md-4 py-3">
                      <h5 className="text-info pd-3">Social</h5>
                      <a href="/"><i className="fab fa-linkedin text-light h1 d-block"></i></a>
                      <a href="/"><i className="fab fa-github-square text-light h1 d-block"></i></a>
                      <a href="/"><i className="fas fa-envelope text-light h1 d-block"></i></a>
                </div>
            </div>
            <div className="text-muted py-3">
                 <p>Copyright &copy; Abhinash Bhengra 2020</p>
            </div>  
       </div>
    </footer>
   );
}
export default Footer;