import Card from "../components/Card";

const blogs = [
    {
        Title: "NextUI",
        Domain: "nextui.org",
        Data: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum ducimus quasi vitae reprehenderit et, totam enim nisi architecto, dicta quaerat eum culpa sunt ea minus voluptatem veritatis perspiciatis impedit a nam, repudiandae obcaecati ratione quia asperiores. Laudantium, iure sint, deleniti ad aliquid dolore, assumenda vel omnis ex quod hic necessitatibus.",
        Author: "nextui-org",
        Date: "2021-10-01"
    },
    {
        Title: "Dell",
        Domain: "HP.org",
        Data: "Make beautiful websites regardless of your design experience.",
        Author: "nextui-org",
        Date: "2021-10-01"
    },
    {
        Title: "NextUI",
        Domain: "nextui.org",
        Data: "Make beautiful websites regardless of your design experience.",
        Author: "nextui-org",
        Date: "2021-10-01"
    },

    {
        Title: "NextUI",
        Domain: "nextui.org",
        Data: "Make beautiful websites regardless of your design experience.",
        Author: "nextui-org",
        Date: "2021-10-01"
    },
    {
        Title: "NextUI",
        Domain: "nextui.org",
        Data: "Make beautiful websites regardless of your design experience.",
        Author: "nextui-org",
        Date: "2021-10-01"
    },
    {
        Title: "NextUI",
        Domain: "nextui.org",
        Data: "Make beautiful websites regardless of your design experience.",
        Author: "nextui-org",
        Date: "2021-10-01"
    },
    {
        Title: "NextUI",
        Domain: "nextui.org",
        Data: "Make beautiful websites regardless of your design experience.",
        Author: "nextui-org",
        Date: "2021-10-01"
    }
]

const Blogs = () => {
  return (
    <div className="flex justify-around bg-blue-200 h-full ">
        <div className="md:grid md:grid-cols-3 md:gap-16 py-9 ">
            {blogs && blogs.map((blog, index) => (
                <Card key={index} blog={blog} />
            ))}
        </div>
    </div>
  )
}
export default Blogs