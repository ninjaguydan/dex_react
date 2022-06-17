import { useEffect, useState } from "react"

const useTypes = () => {
	const [data, setData] = useState([])
	const [isLoading, setIsLoading] = useState(true)

	useEffect(() => {
		fetch(`http://localhost:8000/api/types/`)
			.then((response) => {
				if (!response.ok) {
					throw Error("Could not fetch Type data")
				}
				return response.json()
			})
			.then((json) => {
				setData(json)
				setIsLoading(false)
			})
			.catch((error) => {
				console.error(error)
				setIsLoading(false)
			})
	}, [])

	return { data, isLoading }
}
export default useTypes
