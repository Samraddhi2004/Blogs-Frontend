import { Button } from "@nextui-org/react"
import { useNavigate } from "react-router-dom"

const Home = () => {

  const navigate = useNavigate();

  return (
    <div>
      <div className="md:grid md:grid-cols-2">

        {/* Hero Section */}
        <div className="md:mx-auto md:mt-16 flex flex-col justify-center md:justify-normal text-justify">
          <h1 className="text-6xl font-bold mt-20 mx-8 md:ml-20 text-blue-600 text-center md:text-start" >Welcome to Blogs.</h1>
          <p className="md:text-start text-4xl font-bold mt-10 mx-16 md:ml-20 text-center text-black ">Create and share your blogs <br/>with the world</p>
          <p className="mt-5 md:ml-20 font-semibold text-xl text-center md:text-start mx-10 text-pastal">Discover a world of inspiration. Dive into captivating stories, unlock hidden insights, and explore limitless possibilities.</p>

          <div className="flex justify-center my-10 mx-40 gap-16">
            <Button variant="shadow" color="primary" onClick={()=>navigate('/blogs')}>Visit Blogs</Button>
            <Button variant="ghost" color="primary" onClick={()=>navigate('/create')}>Create Blog</Button>
          </div>

        </div>

        {/* Image */}
        <div className="mx-10 mb-16 md:mx-0 ">
          <img src="/public/home.png" className="md:w-[75%] md:ml-24 md:mt-10"/>
        </div>

      </div>
    </div>
  )
}
export default Home