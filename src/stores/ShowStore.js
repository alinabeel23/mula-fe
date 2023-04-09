import axios from 'axios'
import { create } from 'zustand'

const ShowStore = create((set) => ({
    graphData: [],
    dataRes: [], 
    fetchData: async (id) => {
        const [graphRes, dataRes] = await Promise.all([
            axios.get(`https://api.coingecko.com/api/v3/coins/${id}/market_chart?vs_currency=usd&days=180`),
            axios.get(`https://api.coingecko.com/api/v3/coins/${id}?localization=false&market_data=true`)
        ])
        
        const graphData = graphRes.data.prices.map((price) => {
            const [timestamp, p] = price
            const date = new Date(timestamp).toLocaleDateString('en-us')
            return {
                Date: date,
                Price: p,
            }
        })

        set({
            graphData: graphData,
            dataRes: dataRes.data, // update dataRes in the state
        })
    },
}))

export default  ShowStore
