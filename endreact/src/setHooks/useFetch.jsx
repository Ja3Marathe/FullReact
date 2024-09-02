import { useEffect, useState } from "react"

function useFetch(url, time) {

    const [isPending, setIsPending] = useState(false)
    const [data, setData] = useState(null)
    const [error, setError] = useState(null)
    useEffect(() => {
        setIsPending(true)
        setTimeout(() => {
            fetch(url)
                .then((res) => { return res.json() })
                .then((data) => {
                    setIsPending(false)
                    setData(data)
                })
                .catch((err) => { setError(err.message) })
        }, 1000 * time)
    }, [])

    return {
        isPending,
        data,
        error
    }
}
export default useFetch