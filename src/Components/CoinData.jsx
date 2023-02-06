import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import axios from 'axios';
function CoinData() {
  // Use State
  const [coin, setCoin] = useState([]);
  // Use Effect
  let paramsData = useParams();
  console.log(paramsData)
  let url = `https://api.coingecko.com/api/v3/coins/${paramsData.coindata}`
  useEffect(() => {
    axios.get(url).then((res) => {
      console.log(res.data)
      setCoin(res.data);
    }).then((err) => {
      console.log(err);
    })
  }, [url]);

  return (
    <>
      <h1 className='fw-bold text-center mt-4'>Coin Detail</h1>
      <table className='table container mt-3 border  text-center'>
        <tr>
          <td className='h3'>Symbol : </td>
          <td><h1 className='fw-bold'>{coin.image ? <img className='me-3 rounded ' style={{ width: '35px' }} src={coin.image.small} alt="img" /> :
            <img src={coin.image} alt="img" />}{coin.symbol}</h1></td>
        </tr>
        <tr>
          <td className='h3'>ID : </td>
          <td> <h1 className='fw-bold'>{coin.id}</h1> </td>
        </tr>
        <tr>
          <td className='h3'>Name : </td>
          <td> <h1 className='fw-bold'>{coin.name}</h1> </td>
        </tr>
        {/* <tr>
          <td className='h3'> URL : </td>
          <td> <a className='fw-bold btn btn-outline-dark' href={coin.links ? coin.links.blockchain_site[0] : coin.links.blockchain_site} target={'_blank'}>Web URL</a> </td>
        </tr> */}
        {/* <tr>
          <td className='h3'>Price : </td>
          <td> <h1 className='fw-bold'>{coin.market_data.current_price.usd}</h1> </td>
        </tr> */}
        {/* <tr>
          <td className='h3'>Price Change '1d': </td>
          <td> <h1 className='fw-bold'>{coin.market_data.price_change_percentage_24h}</h1> </td>
        </tr> */}
        {/* <tr>
          <td className='h3'>Price Change '7d': </td>
          <td> <h1 className='fw-bold'>{coin.market_data.price_change_percentage_7d}</h1> </td>
        </tr>
        <tr>
          <td className='h3'>Price Change '1y' : </td>
          <td> <h1 className='fw-bold'>{coin.market_data.price_change_percentage_1y}</h1> </td>
        </tr> */}
      </table>
    </>
  )
}

export default CoinData