import BlogsInfo from "./components/BlogsInfo"
import useAPIRequest from "./setHooks/useAPIRequest"
function Blogs() {

    const loading = <svg className="Svg" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M304 48a48 48 0 1 0 -96 0 48 48 0 1 0 96 0zm0 416a48 48 0 1 0 -96 0 48 48 0 1 0 96 0zM48 304a48 48 0 1 0 0-96 48 48 0 1 0 0 96zm464-48a48 48 0 1 0 -96 0 48 48 0 1 0 96 0zM142.9 437A48 48 0 1 0 75 369.1 48 48 0 1 0 142.9 437zm0-294.2A48 48 0 1 0 75 75a48 48 0 1 0 67.9 67.9zM369.1 437A48 48 0 1 0 437 369.1 48 48 0 1 0 369.1 437z" /></svg>

    const {
        isPending: blogsPending,
        data: blogs,
        error: blogsError
    } = useAPIRequest("http://localhost:3000/blogs", 0)

    const {
        isPending: oldestBlogsIsPending,
        data: oldestBlogs,
        error: oldestBlogsError
    } = useAPIRequest("http://localhost:3000/oldestBlogs", 0)

    return (
        <>
            <div className="body">
                {
                    blogsError ? (<span>{blogsError}</span>) : blogsPending ? <span>{loading}</span> : <BlogsInfo blogs={blogs} title={"Recent Blogs"} />
                }
                <h1>=======================================================================</h1>
                {
                    oldestBlogsError ? (<span>{oldestBlogsError}</span>) : oldestBlogsIsPending ? <span>{loading}</span> : <BlogsInfo blogs={oldestBlogs} title={"Oldest Blogs"} />
                }
            </div >
        </>
    )
}
export default Blogs