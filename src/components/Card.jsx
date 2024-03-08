/* eslint-disable react/prop-types */
import {Card, CardHeader, CardBody, CardFooter, Divider,Image} from "@nextui-org/react";
import Modal from "./Modal";

export default function App({blog}) {
  return (
    <Card className="max-w-[400px] md:my-0 my-5">
    <CardHeader className="flex gap-3">
        <Image
            alt="nextui logo"
            height={40}
            radius="sm"
            src="https://avatars.githubusercontent.com/u/86160567?s=200&v=4"
            width={80}
        />
        <div className="ml-4 flex flex-col">
            <p className="text-xl font-bold text-black">{blog.title}</p>
            <p className="font-semibold">Domain : <span className="text-pastal font-bold">{blog.domain}</span></p>
            <p className="font-semibold">Author : <span className="text-pastal font-bold">{blog.author}</span></p>
        </div>
    </CardHeader>
      <Divider/>
      <CardBody>
        <p>Date : <span className="text-blue-500">{blog.date}</span></p>
        <p className="mt-2">{blog.data.substring(0,150)}...</p>
      </CardBody>
      <Divider/>
      <CardFooter>
        <Modal blog={blog}/>
      </CardFooter>
    </Card>
  );
}
