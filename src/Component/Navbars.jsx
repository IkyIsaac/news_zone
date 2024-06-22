import React from 'react';


const Navbars = ({setCategory}) => {
  return (
    <nav className="navbar navbar-expand-md bg-body-tertiary p-1 custom-navbar fs-1"  data-bs-theme="dark">
      <div className="container-fluid">
        <a className="navbar-brand" href="#"><span className='badge bg-light text-dark fs-4'>NewsZone</span></a>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNavDropdown">
          <ul className="navbar-nav">
            <li className="nav-item">
              <a className="nav-link active" aria-current="page" href="#">Home</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" onClick={()=>setCategory("technology")} href="#">Technology</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" onClick={()=>setCategory("business")} href="#">Business</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" onClick={()=>setCategory("health")} href="#">Health</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" onClick={()=>setCategory("sports")} href="#">Sports</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" onClick={()=>setCategory("entertainment")} href="#">Entertainment</a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbars;
