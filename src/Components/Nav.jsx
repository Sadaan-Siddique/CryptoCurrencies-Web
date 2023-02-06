import React from 'react'
import { Link } from 'react-router-dom'
import '../App.css'
function Nav() {
    return (
        <>
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
                <div className="container-fluid">
                    <Link className="lnk navbar-brand" to="/"><span className='display-5 fw-bold' style={{ color: 'red' }}>C</span><span className='h5'>RYPTOS</span></Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <Link className="nav-link active" aria-current="page" to="/">H<span>ome</span></Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="coins">C<span>ryptoCoins</span></Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="services">S<span>ervices</span></Link>
                            </li>
                            <li className="nav-item dropdown">
                                <Link className="nav-link dropdown-toggle" to="/" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                    D<span>ropdown</span>
                                </Link>
                                <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                                    <li><Link className="dropdown-item" to="/products">Action</Link></li>
                                    <li><Link className="dropdown-item" to="/products">Another action</Link></li>
                                    <li><hr className="dropdown-divider" /></li>
                                    <li><Link className="dropdown-item" to="/products">Something else here</Link></li>
                                </ul>
                            </li>
                        </ul>
                        <form className="d-flex">
                            <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
                            <Link className="nav-btn btn " to="/">Search</Link>
                        </form>
                    </div>
                </div>
            </nav>
        </>
    )
}

export default Nav