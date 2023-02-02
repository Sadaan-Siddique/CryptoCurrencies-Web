import React from 'react'
import { Link } from "react-router-dom";
import '../App.css'
function Main() {
    return (
        <>
            <div>
                <div className="div1 text-light">
                    <div className='w-50 pb-2'>
                        <h4 className='ms-4'><span className='display-2 fw-bold' style={{ color: 'red' }}>C</span><span style={{ position: 'relative', bottom: '14px' }}>RYPTO</span><span className='display-2 fw-bold ms-1' style={{ color: 'red' }}>C</span><span style={{ position: 'relative', bottom: '13.7px' }}>URRENCY</span></h4>
                        <p className='fw-light h6'>Click Button for see Pages without the Reloading of Page</p>
                        <Link className="ms-5 btn btn-outline-dark border-3 fw-bold text-light" to="products">Products</Link>
                        <Link className="btn btn-outline-dark border-3 ms-1 fw-bold text-light" to="services">Services</Link>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Main