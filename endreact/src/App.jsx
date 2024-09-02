
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from "./Home"
import Blogs from "./Blogs"
import NewBlogs from "./NewBlogs"
import Header from './components/Header'
import SingleBlog from './SingleBlog'
function App() {
  // const {
  //   isPending: blogsPending,
  //   data: blogs,
  //   error: blogsError
  // } = useAPIRequest("http://localhost:3000/blogs", 3)

  // const {
  //   isPending: oldestBlogsIsPending,
  //   data: oldestBlogs,
  //   error: oldestBlogsError
  // } = useFetch("http://localhost:3000/oldestBlogs", 6)

  // const [id, setId] = useState()
  // const [title, setTitle] = useState()
  // const [details, setDetails] = useState()
  // const [author, setAuthor] = useState()

  // const [newBlogs, setNewBlogs] = useState([])

  // const updateid = (e) => {
  //   setId(e.target.value)
  // }
  // const updatetitle = (e) => {
  //   setTitle(e.target.value)
  // }
  // const updatedetails = (e) => {
  //   setDetails(e.target.value)
  // }
  // const updateauthor = (e) => {
  //   setAuthor(e.target.value)
  // }

  // const handleFormSubmit = (e) => {
  //   e.preventDefault();
  //   console.log("submit");

  //   console.log(id, title, details, author);
  //   fetch("http://localhost:3000/blogs",
  //     {
  //       method: "Post",
  //       headers: {
  //         "content-type": "application-json"
  //       },
  //       body: JSON.stringify({
  //         id,
  //         title,
  //         details,
  //         author
  //       })
  //     }
  //   )
  //     .then((res) => { return res.json() })
  //     .then((data) => { setNewBlogs([...newBlogs, data]) })

  // }
  return (
    <>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/home" element={<Home />} />
          <Route path="/blogs" element={<Blogs />} />
          <Route path="/blogs/:url" element={<SingleBlog />} />
          <Route path="/addblog" element={<NewBlogs />} />
          <Route path="*" element={<h1>404 : Not Found</h1>} />
        </Routes>
      </BrowserRouter>
    </>
  )
}
export default App;