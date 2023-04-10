import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'
import HomeStore from '../stores/HomeStore'
import TrendingCoins from './TrendingCoins'

export default function Discover() {
    const store = HomeStore()

    useEffect(() => {
        store.fetchCoins()

    })
  return (
    <div>
      {/* <input type="text" value={store.query} onChange={store.setQuery}/> */}

      <div className='trending-coins'>
        <h2>Trending Coins</h2>
        <div className='line'></div>
      {store.coins.map(coin => {
        return (
          <TrendingCoins key={coin.id} coin={coin} />
        )
      })}
      </div>
    </div>
  )
}
