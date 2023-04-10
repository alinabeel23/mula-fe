import React, { useEffect } from 'react'
import { useParams } from 'react-router-dom'
import ShowStore from '../stores/ShowStore'
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip } from 'recharts';



export default function Coin() {
  const store = ShowStore()
  const params = useParams()

  console.log(store.dataRes);

  useEffect(() => {
    store.fetchData(params.id)
  }, [])

  // if (!store.dataRes)
  // return <></>

  if (!store.dataRes.market_data)
  return <></>

  return (
    <div>
      <header>

        {/* <img src={store.dataRes.image.large} ></img> */}
        <h2 className='heading'>{store.dataRes.name} [{store.dataRes.symbol}]</h2>
      </header>

      <AreaChart
      className='chart'
          width={1300}
          height={500}
          data={store.graphData}
          margin={{
            top: 10,
            right: 30,
            left: 0,
            bottom: 0,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="Date" />
          <YAxis />
          <Tooltip />
          <Area type="monotone" dataKey="Price" stroke="#58ad21" fill="#8bbf6a" />
        </AreaChart>
        <div>
          <h4>Market Cap Rank</h4>
          <span>{store.dataRes.market_cap_rank}</span>
        </div>
        <div>
          <h4>24Hour High</h4>
          <p> <span>BHD</span> {store.dataRes.market_data.high_24h.bhd}</p> 
        </div>
        <div>
          <h4>24Hour Low</h4>
          <p> <span>BHD</span> {store.dataRes.market_data.low_24h.bhd}</p> 
        </div>
        <div>
          <h4>Circulating Supply</h4>
          <span>{store.dataRes.market_data.circulating_supply}</span>
        </div>
        <div>
          <h4>Current Price</h4>
          <span>BHD {store.dataRes.market_data.current_price.bhd}</span>
        </div>

    </div>




  )
}
