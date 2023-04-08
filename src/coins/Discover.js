import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'
import HomeStore from '../stores/HomeStore'

export default function Discover() {
    const store = HomeStore()

    useEffect(() => {
        store.fetchCoins()

    })
  return (
    <div>
      <input type="text" value={store.query} onChange={store.setQuery}/>
      {store.coins.map(coin => {
        return (
          <div key={coin.id}>
            <Link to={`/${coin.id}`}>
              {coin.name}
            </Link>

          </div>
        )
      })}
    </div>
  )
}
