import { useForm } from "react-hook-form"
import * as yup from "yup"
import { yupResolver } from "@hookform/resolvers/yup"
import axios from "axios"

const CreateBlog = () => {

    const sendData = (data) => {axios.post("https://blogs-backend-t1i9.onrender.com/createBlog", data, {
        headers: {
            "Content-Type": "application/json",
            "Access-Control-Allow-Origin": "*"
        }
    })
    .then((res) => {
        console.log(res);
    })}

    const schema = yup.object().shape({
        title: yup.string().required("Title is a required field"),
        author: yup.string().required("Author is a required field"),
        domain: yup.string().required("Domain is a required field"),
        data: yup.string().required("Content is a required field"),
        date: yup.date().required("Date is a required field")
    })

    const { register, handleSubmit, formState:{errors} } = useForm({resolver: yupResolver(schema)})

    const onSubmit = (data) => {
        sendData(data);
    };

    return (
        <div className="">
            <div className="py-16">
                <form onSubmit={handleSubmit(onSubmit)} className="bg-blue-100 flex flex-col w-4/5 md:w-[30%] justify-start mx-auto border-2 border-black p-6 rounded-lg">
                    
                    <label className="text-blue-700 text-md my-2 font-semibold">Enter Title</label>
                    <input className="border-1 border-gray-400 rounded-md hover:border-2 hover:border-blue-600 pl-4" {...register("title")}/>
                    {errors.title && <p className="text-red-800">{errors.title.message}</p>}

                    <label className="text-blue-700 text-md my-2 font-semibold">Enter Author Name</label>
                    <input className="border-1 border-gray-400 rounded-md hover:border-2 hover:border-blue-600 pl-4" {...register("author")}/>
                    {errors.author && <p className="text-red-800">{errors.author.message}</p>}

                    <label className="text-blue-700 text-md my-2 font-semibold">Enter Domain</label>
                    <input className="border-1 border-gray-400 rounded-md hover:border-2 hover:border-blue-600 pl-4" {...register("domain")}/>
                    {errors.domain && <p className="text-red-800">{errors.domain.message}</p>}

                    <label className="text-blue-700 text-md my-2 font-semibold">Write Content</label>
                    <textarea className="border-1 border-gray-400 rounded-md hover:border-2 hover:border-blue-600 pl-4" {...register("data")} type="text" rows={5} placeholder='Enter content...' maxLength='1000' minLength='10'></textarea>
                    {errors.data && <p className="text-red-800">{errors.data.message}</p>}

                    <label className="text-blue-700 text-md my-2 font-semibold">Enter Date</label>
                    <input className="border-1 border-gray-400 rounded-md hover:border-2 hover:border-blue-600 pl-4" {...register("date")} type="date"/>
                    {errors.date && <p className="text-red-800">{errors.date.message}</p>}

                    <input className="mt-8 mx-auto border-2 py-2 px-6 border-blue-800 font-semibold text-blue-800 rounded-md hover:font-bold hover:text-white hover:bg-pastal hover:border-light" type="submit"/>
                </form>
            </div>

        </div>
    )
}
export default CreateBlog