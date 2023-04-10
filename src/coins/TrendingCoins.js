import React from 'react'
import { Link } from 'react-router-dom'
// import bootstrap

export default function TrendingCoins({coin}) {
    return (
        <div>
            <Link to={`/${coin.id}`}>
                <div className='trending-single'>
                    <div className='trending-img'>
                        <img src={coin.image}></img>
                    </div>
                    <div className='trending-name'>
                        <h2>{coin.name}</h2> 
                    </div>
                    <div className='prices'>
                    <div className='trending-priceBHD'>
                        <span>{coin.priceBHD}</span> 
                    </div>
                    <div className='trending-priceBTC'>
                        <span>{coin.priceBTC}</span> 
                    </div>
                    </div>

                </div>
                <div className='line'></div>

            </Link>
            
        </div>
    )
}
