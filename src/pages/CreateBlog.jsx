import { useForm } from "react-hook-form"
import * as yup from "yup"
import { yupResolver } from "@hookform/resolvers/yup"

const CreateBlog = () => {

    const schema = yup.object().shape({
        Title: yup.string().required("Title is a required field"),
        Author: yup.string().required("Author is a required field"),
        Domain: yup.string().required("Domain is a required field"),
        Data: yup.string().required("Content is a required field"),
        Date: yup.date().required("Date is a required field")
    })

    const { register, handleSubmit, formState:{errors} } = useForm({resolver: yupResolver(schema)})

    const onSubmit = (data) => {
        console.log(data);
    };

    return (
        <div className="">
            <div className="py-16">
                <form onSubmit={handleSubmit(onSubmit)} className="bg-blue-100 flex flex-col w-4/5 md:w-[30%] justify-start mx-auto border-2 border-black p-6 rounded-lg">
                    
                    <label className="text-blue-700 text-md my-2 font-semibold">Enter Title</label>
                    <input className="border-1 border-gray-400 rounded-md hover:border-2 hover:border-blue-600 pl-4" {...register("Title")}/>
                    {errors.Title && <p className="text-red-800">{errors.Title.message}</p>}

                    <label className="text-blue-700 text-md my-2 font-semibold">Enter Author Name</label>
                    <input className="border-1 border-gray-400 rounded-md hover:border-2 hover:border-blue-600 pl-4" {...register("Author")}/>
                    {errors.Author && <p className="text-red-800">{errors.Author.message}</p>}

                    <label className="text-blue-700 text-md my-2 font-semibold">Enter Domain</label>
                    <input className="border-1 border-gray-400 rounded-md hover:border-2 hover:border-blue-600 pl-4" {...register("Domain")}/>
                    {errors.Domain && <p className="text-red-800">{errors.Domain.message}</p>}

                    <label className="text-blue-700 text-md my-2 font-semibold">Write Content</label>
                    <textarea className="border-1 border-gray-400 rounded-md hover:border-2 hover:border-blue-600 pl-4" {...register("Data")} type="text" rows={5} placeholder='Enter content...' maxLength='1000' minLength='10'></textarea>
                    {errors.Data && <p className="text-red-800">{errors.Data.message}</p>}

                    <label className="text-blue-700 text-md my-2 font-semibold">Enter Date</label>
                    <input className="border-1 border-gray-400 rounded-md hover:border-2 hover:border-blue-600 pl-4" {...register("Date")} type="date"/>
                    {errors.Date && <p className="text-red-800">{errors.Date.message}</p>}

                    <input className="mt-8 mx-auto border-2 py-2 px-6 border-blue-800 font-semibold text-blue-800 rounded-md hover:font-bold hover:text-white hover:bg-pastal hover:border-light" type="submit"/>
                </form>
            </div>

        </div>
    )
}
export default CreateBlog