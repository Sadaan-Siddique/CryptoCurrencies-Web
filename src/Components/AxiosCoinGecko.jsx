import React from 'react'
import { useState, useEffect } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom';
function AxiosCoinGecko() {
  const [coinData, setCoinData] = useState([]);
  useEffect(() => {
    axios.get('https://api.coingecko.com/api/v3/coins').then((res) => {
      setCoinData(res.data);
      // console.log(res.data[0].id);
    }).catch((err) => {
      console.log(err)
    })
  }, []);
  return (
    <>
      <h4 className='my-3 fw-bold text-center'><span className='display-2 fw-bold' style={{ color: 'red' }}>C</span><span style={{ position: 'relative', bottom: '14px' }}>RYPTO</span><span className='display-2 fw-bold ms-1' style={{ color: 'red' }}>C</span><span style={{ position: 'relative', bottom: '13.7px' }}>URRENCIES</span></h4>
      <table className='table'>
        <thead>
          <tr className=' h5'>
            <th style={{ marginLeft: '30px' }} className=''>#</th>
            <th style={{ marginRight: '10px' }} className=''>C<span>oin</span></th>
            <th>P<span>rice</span></th>
            <th>1<span>d</span></th>
            <th>7<span>d</span></th>
            <th>1<span>y</span></th>
            <th>2<span>4h Volume</span></th>
            <th>M<span>kt Cap</span></th>
            <th>L<span>ast 7 Days</span></th>
          </tr>
        </thead>
        <tbody>
          {coinData.map((item, index) => {
            return (<>
              <tr>
                <td>{index + 1}</td>
                <td className='fw-bold'><Link to={`/coinmain`} className='text-decoration-none text-dark fw-bold' style={{marginTop:'20px'}}><img className='me-2' style={{ width: '25px' }} src={item.image.thumb} alt="coinImg" />{item.id}</Link></td>
                <td>${item.market_data.current_price.usd}</td>
                <td>{item.market_data.price_change_percentage_24h}</td>
                <td>{item.market_data.price_change_percentage_7d}</td>
                <td>{item.market_data.price_change_percentage_1y}</td>
                <td>{item.market_data.total_volume.usd}</td>
                <td>${item.market_data.market_cap_change_percentage_24h_in_currency.usd}</td>
                <td><img src={`https://www.coingecko.com/coins/${index + 1}/sparkline`} alt="graph" /></td>
              </tr>
            </>)
          })}
        </tbody>
      </table>

    </>
  )
}

export default AxiosCoinGecko 