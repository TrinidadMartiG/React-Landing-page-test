import React from 'react';

export function Navbar() {
    return (
        <nav className="navbar navbar-light bg-secondary">
            <div className="container-fluid">
                <a className="navbar-brand fs-2 text-white" href="/">Start bootstrap</a>
                
                <div className="d-flex list-unstyled" id='collapseNavBar'>
                    <li className="nav-item m-2 text-white">
                        <a className="nav-link active" aria-current="page" href="#">Home</a>
                    </li>
                    <li className="nav-item m-2 text-white">
                        <a className="nav-link" href="#">About</a>
                    </li>
                    <li className="nav-item m-2 text-white">
                        <a className="nav-link" href="#">Services</a>
                    </li>
                    <li className="nav-item m-2 text-white">
                        <a className="nav-link" href="#">Contact</a>
                    </li>
                </div>
            </div>
        </nav>
    )
}

export default Navbar;