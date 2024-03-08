import { useEffect, useState } from "react";
import Card from "../components/Card";
import axios from "axios";

const Blogs = () => {

    const [blog, setBlog] = useState([])

    const fetchData = () => {axios.get("https://blogs-backend-t1i9.onrender.com/getAllBlogs", {
        headers: {
            "Content-Type": "application/json",
            "Access-Control-Allow-Origin": "*"
        }
    })
    .then((res) => {
        setBlog(res.data.blog)
        console.log(res.data.blog);
    })}

    useEffect(()=>{
        fetchData();
    },[])

    return (
    <div className="flex justify-around bg-blue-200 h-full ">
        <div className="md:grid md:grid-cols-3 md:gap-16 py-9 ">
            {blog && blog.map((b, index) => (
                <Card key={index} blog={b} />
            ))}
        </div>
    </div>
  )
}
export default Blogs