import axios from 'axios'
import { create } from 'zustand'
import debounce from '../helpers/debounce'

const HomeStore = create((set) => ({

    coins: [],
    trending: [],
    query: '',

    setQuery: (e) => {
        set({query: e.target.value})
        HomeStore.getState().searchCoins()
    },



    searchCoins: debounce( async () => {
        // use destructuring to shorten
        const {query, trending} = HomeStore.getState()

        //  get search api
    if (query.length > 2) {
        const res = await axios.get(`https://api.coingecko.com/api/v3/search?query=${query}`)
        
        const coins = res.data.coins.map(coin => {
            return {
                name: coin.name,
                image: coin.large,
                id: coin.id,
            }            
        })

        set({coins: coins})
    } else {
        set({coins: trending})      
    }
    }, 500),

    fetchCoins: async () => {
        const [res, btcRes] = await Promise.all([
            axios.get('https://api.coingecko.com/api/v3/search/trending'),
            axios.get('https://api.coingecko.com/api/v3/simple/price?ids=bitcoin&vs_currencies=bhd'),
        ])

        const btcPrice = btcRes.data.bitcoin.bhd
        console.log('hello there', btcPrice);

        // if (!btcRes.data)
        // return <></>

        
        const coins = res.data.coins.map(coin => {
            return{
                name: coin.item.name,
                image: coin.item.large,
                id: coin.item.id,
                priceBTC: coin.item.price_btc,
                priceBHD: coin.item.price_btc * btcPrice
            }
        })

        set({coins: coins, trending: coins})

    }
}))

export default  HomeStore