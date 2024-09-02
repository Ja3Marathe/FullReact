import { useState, useEffect } from "react"
function useAPIRequest(url, timeout) {

    const [isPending, setisPending] = useState(false)
    const [data, setData] = useState([])
    const [error, setError] = useState(null)

    useEffect(() => {
        setisPending(true)
        setTimeout(() => {
            fetch(url)
                .then((res) => {
                    return res.json()
                })
                .then((data) => {
                    setisPending(false)
                    setData(data)
                })
                .catch((err) => {
                    setError(err.message)
                })
        }, 1000 * timeout)
    }, []);

    return {
        isPending,
        data,
        error
    }
}

export default useAPIRequest