import { Link } from "react-router-dom"

function Header() {
    return (
        <>
            <div className="Header">
                <div>
                    <h2>Skilled Coders</h2>
                </div>
                <div>
                    <ul className="nav">
                        <li className="Nav-Bar-Link">
                            <Link to={"/"}>Home</Link>
                        </li>
                        <li className="Nav-Bar-Link">
                            <Link to={"/Blogs"}>Blogs</Link>
                        </li>
                        <li className="Nav-Bar-Link">
                            <Link to={"/addBlog"}>Add Blogs</Link>
                        </li>
                    </ul>
                </div>
            </div>
        </>
    )
}
export default Header