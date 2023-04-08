import axios from 'axios'
import { create } from 'zustand'

const HomeStore = create((set) => ({

    coins: [],
    query: '',

    setQuery: (e) => {
        set({query: e.target.value})
        HomeStore.getState().searchCoins()
    },


    searchCoins: () => {

    },

    fetchCoins: async () => {
        const res = await axios.get('https://api.coingecko.com/api/v3/search/trending')

        const coins = res.data.coins.map(coin => {
            return{
                name: coin.item.name,
                image: coin.item.large,
                id: coin.item.id,
                priceBTC: coin.item.price_btc
            }
        })

        set({coins: coins})

        // console.log(coins);
    }
}))

export default  HomeStore