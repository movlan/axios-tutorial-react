import axios from 'axios'
import { useEffect } from 'react'
import authFetch from '../custom-axios'

const randomUserUrl = 'https://randomuser.me/api'

const CustomInstance = () => {
	const fetchData = async () => {
		try {
			const resp1 = await authFetch('/react-store-products')
			const resp2 = await axios(randomUserUrl)
		} catch (error) {}
		console.log('custom axios instance')
	}

	useEffect(() => {
		fetchData()
	}, [])

	return <h2 className="text-center">custom instance</h2>
}
export default CustomInstance
