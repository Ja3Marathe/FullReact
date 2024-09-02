import { useState } from "react"
function NewBlogs() {

    const [id, setId] = useState()
    const [title, setTitle] = useState()
    const [details, setDetails] = useState()
    const [author, setAuthor] = useState()

    // const [newBlogs, setNewBlogs] = useState([])

    const updateid = (e) => {
        setId(e.target.value)
    }
    const updatetitle = (e) => {
        setTitle(e.target.value)
    }
    const updatedetails = (e) => {
        setDetails(e.target.value)
    }
    const updateauthor = (e) => {
        setAuthor(e.target.value)
    }

    const handleFormSubmit = (e) => {
        // e.preventDefault();
        console.log("submit");

        console.log(id, title, details, author);
        fetch("http://localhost:3000/blogs",
            {
                method: "Post",
                headers: {
                    "content-type": "application-json"
                },
                body: JSON.stringify({
                    id,
                    title,
                    details,
                    author
                })
            }
        )
        // .then((res) => { return res.json() })
        // .then((data) => { setNewBlogs([...newBlogs, data]) })

    }
    return (
        <>
            <form action="" onSubmit={handleFormSubmit}>
                <div className="formWrapper">
                    <div className="inputWrapper">
                        <label htmlFor="id">Enter Your Id :- </label>
                        <input type="number" name="number" onChange={updateid} />
                    </div>
                    <div className="inputWrapper">
                        <label htmlFor="title">Enter Your Title :- </label>
                        <input type="text" name="title" onChange={updatetitle} />
                    </div>
                    <div className="inputWrapper">
                        <label htmlFor="detaile">Enter Your Details :- </label>
                        <input type="text" name="details" onChange={updatedetails} />
                    </div>
                    <div className="inputWrapper">
                        <label htmlFor="author">Enter Author :- </label>
                        <input type="text" name="author" onChange={updateauthor} />
                    </div>
                    <div>
                        <input type="submit" className="btn" />
                    </div>
                </div>
            </form>

        </>
    )
}
export default NewBlogs