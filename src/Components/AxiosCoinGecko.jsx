import React from 'react'
import { useState, useEffect } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom';
function AxiosCoinGecko() {
  const [coinData, setCoinData] = useState([]);
  useEffect(() => {
    axios.get('https://api.coingecko.com/api/v3/coins/list').then((res) => {
      setCoinData(res.data);
      console.log(res.data);
    }).catch((err) => {
      console.log(err)
    })
  }, []);
  return (
    <>
      <h4 className='my-3 fw-bold text-center'><span className='display-2 fw-bold' style={{ color: 'red' }}>C</span><span>RYPTO</span><span className='display-2 fw-bold ms-1' style={{ color: 'red' }}>C</span><span>URRENCIES</span></h4>
      <table className='table'>
        <thead>
          <tr className=' h5'>
            <th style={{ marginLeft: '30px' }} className=''>#</th>
            <th style={{ marginRight: '10px' }} className=''>C<span>oin ID</span></th>
            <th>S<span>ymbol</span></th>
            <th>N<span>ame</span></th>
            {/* <th>G<span>raph</span></th> */}
          </tr>
        </thead>
        <tbody>
          {coinData.map((item, index) => {
            return (<>
              <tr>
                <td><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-dot" viewBox="0 0 16 16">
                  <path d="M8 9.5a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3z" />
                </svg>{index + 1}</td>
                <td className='fw-bold text-capitalize'><Link to={`/coinmain/${item.id}`} className='text-decoration-none text-dark fw-bold' style={{ marginTop: '20px' }}>{item.id}</Link></td>
                <td>${item.symbol}</td>
                <td>{item.name}</td>
                {/* <td><img src={`https://www.coingecko.com/coins/1/sparkline`} alt="graph" /></td> */}
              </tr>
            </>)
          })}
        </tbody>
      </table>

    </>
  )
}

export default AxiosCoinGecko 