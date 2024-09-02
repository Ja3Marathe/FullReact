import { Link } from "react-router-dom"

function BlogsInfo({ blogs, title }) {

    return (
        <>
            <div className="blogsContainer">
                <h2>{title}</h2>
                {
                    blogs && blogs.length && blogs.map((blog) => {
                        return (
                            <div key={blog.id} className="blogsWrapper">
                                <Link to={`/blogs/${blog.url}`}>
                                    <div>
                                        <h1>{blog.title}</h1>
                                    </div>
                                </Link>
                                {
                                    blog.details ? (
                                        <div>
                                            <p>{blog.details}</p>
                                        </div>) : <></>
                                }
                                {
                                    blog.author ? (
                                        <div>-{blog.author}</div>) : <></>
                                }
                                {
                                    blog.date ? (
                                        <div>{blog.date}</div>
                                    ) : <></>
                                }
                                {
                                    blog.name ? (
                                        <div>{blog.name}</div>
                                    ) : <></>
                                }
                                {
                                    blog.age ? (
                                        <div>{blog.age}</div>
                                    ) : <></>
                                }
                                {
                                    blog.college ? (
                                        <div>{blog.college}</div>
                                    ) : <></>
                                }
                                {
                                    blog.branch ? (
                                        <div>{blog.branch}</div>
                                    ) : <></>
                                }

                            </div>
                        )
                    })}
            </div>

        </>
    )
}
export default BlogsInfo