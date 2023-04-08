import axios from 'axios'
import { create } from 'zustand'

const HomeStore = create((set) => ({
    fetchCoins: aysnc () => {
        const res = await axios.get('https://api.coingecko.com/api/v3/search/trending')
    }
}))

export default  HomeStore