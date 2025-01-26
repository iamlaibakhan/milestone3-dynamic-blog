import React from 'react'
import { Card,CardContent,CardTitle } from "../components/ui/card";

interface BlogCardProps {
  Post:{
     id:string;
     title:string;
     description:string;
     image:string
    };
  isDarkBackground:boolean;
}

export default function BlogCard({ Post}:BlogCardProps) {
  return (
 <Card className={'p-7 ${isDarkBackground? "bg-slate-800 text-white" : "text-slate-800"}rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-500 transform hover:scale-105'}>

<img 
src={Post.image}
alt={Post.title}
className='w-full h-60 object-cover rounded-t-lg'
/>
<CardTitle className='text-xl font-semibold mt-4 text-center'>{Post.title} </CardTitle>
<br />
<CardContent className='font-semibold text-center'>
  <p>{Post.description}</p></CardContent>

  <div className='flex flex-col items-center mt-4'>
       <a
       href= {"/posts/${Post.id}"}
       className={'py-1 px-7 text-white bg-cyan-600 rounded hover:bg-cyan-700 ${isDarkBackground ? "bg-black hover:bg-red-500":"bg-black hover:bg-red-500"}'} >
        Read More
       </a>
       

  </div>

</Card>
  );
};
