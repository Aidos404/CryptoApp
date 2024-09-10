export async function fetchCoin(count) {
	const response = await fetch(`https://api.coinranking.com/v2/coins`)
	const data = await response.json()
	return data
}
export async function fetchStats() {
	const response = await fetch(`https://api.coinranking.com/v2/stats`)
	const data = await response.json()
	return data
}

export async function fetchNews() {
	const response =
		await fetch(`https://newsapi.org/v2/top-headlines?country=us&apiKey=5d93a203248d4bd8ac1165f3e331515f
`)
	const data = await response.json()
	return data
}
// import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

// const cryptoApiHeaders = {
// 	'x-rapidapi-key': '6d85fa7469mshb9458a41da92348p1828d6jsn2a32bb433af9',
// 	'x-rapidapi-host': 'coinranking1.p.rapidapi.com',
// }
// const baseUrl = 'https://api.coinranking.com/v2/coins'
// const createRequest = (url) => ({ url, headers: cryptoApiHeaders })
// export const cryptoApi = createApi({
// 	reducerPath: 'cryptoApi',
// 	baseQuery: fetchBaseQuery({ baseUrl }),
// 	endpoints: (builder) => ({
// 		getCryptos: builder.query({
// 			query: () => createRequest('/coins'),
// 		}),
// 	}),
// })

// export const { getCryptos } = cryptoApi
