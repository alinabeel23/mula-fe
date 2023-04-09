import axios from 'axios'
import { create } from 'zustand'

const ShowStore = create((set) => ({

    graphData: [],
    
    fetchData: async (id) => {

        // const [graphRes, dataRes] = await Promise.all({
        //     axios.get()
        // })

        const res = await axios.get(`https://api.coingecko.com/api/v3/coins/${id}/market_chart?vs_currency=usd&days=180`)
        
        const graphData = res.data.prices.map((price) => {
            const [timestamp, p] = price
            const date = new Date(timestamp).toLocaleDateString('en-us')

            return {
                Date: date,
                Price: p,
            }

        })

        set({graphData: graphData})

        console.log(res.data);
    },
}))

export default  ShowStore