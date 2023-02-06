import React from 'react'
import { Link } from "react-router-dom";
import '../App.css'
function Main() {
    return (
        <>
            <div>
                <div className="div1 text-light">
                    <div className='w-50 pb-2'>
                        <h4 className='ms-4'><span className='display-2 fw-bold' style={{ color: 'red' }}>C</span><span>RYPTO</span><span className='display-2 fw-bold ms-1' style={{ color: 'red' }}>C</span><span>URRENCY</span></h4>
                        <p className='fw-light h6'>Click Button for see Pages without the Reloading of Page</p>
                        <Link className="nav-btn btn ms-5" to="coins">Coins</Link>
                        <Link className="nav-btn btn ms-1" to="services">Services</Link>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Main