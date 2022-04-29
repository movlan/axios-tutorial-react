import axios from 'axios'

const authFetch = axios.create({
	baseURL: 'https://course-api.com',
})

authFetch.interceptors.request.use(
	(req) => {
		req.headers.common['Accept'] = 'application/json'
		console.log('request sent')
		return req
	},
	(err) => {
		return Promise.reject(err)
	}
)
authFetch.interceptors.response.use(
	(res) => {
		console.log('got response')
		return res
	},
	(err) => {
		console.log(err)
	}
)

export default authFetch
