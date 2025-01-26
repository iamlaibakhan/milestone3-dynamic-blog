import React from 'react';
import BlogCard from '../components/BlogCard';


export default function Mega() {
  const Posts= [

    {
      id: '1',
      title: 'Latest AI Technology',
      description: 'Revolutionizing the World Latest Advancements in AI Technology As AI becomes more pervasive ethical concerns about bias privacy and accountability have come to the forefront The latest AI frameworks prioritize fairness and transparency ensuring algorithms are unbiased and respect user data privacy Governments and organizations are also formulating policies to regulate AI responsibly',
      
      date: '2025-3-1',
      image:'../images/AI blog.webp',
    },

   {
      id: '2',
      title: 'Daily Lifestyle',
      description: 'Crafting a Balanced Daily Lifestyle Tips for Modern Living In today’s fast-paced world maintaining a balanced lifestyle is more important than ever With countless demands on our time and energy finding harmony between work health and personal happiness can feel challenging This blog explores effective strategies to design a daily routine that nurtures your mind body and soul',
      
      date: '2025-3-1',
      image:'../images/life style.jpg',
    },

    {
      id: '3',
      title: 'Pakistan’s Economic Conditions',
      description: 'Analyzing Pakistan’s Economic Conditions Challenges and Prospects Pakistan’s economy one of the most dynamic yet challenging in South Asia has witnessed significant turbulence in recent years From navigating global economic pressures to addressing domestic structural issues the country’s economic journey is a complex narrative This blog explores the current state of Pakistan’s economy its key challenges and the prospects for recovery',
      
      date: '2025-3-1',
      image:'../images/pak economic.jpg',
    },
  ];


  return (
    <div className='my-8'>
      <h1 className='text-7xl font-bold text-center my-8 text-cyan-600 animate-color-change'>
         {''}
         The World Of Blogs
         </h1>

         <div className='grid grid-col-1 sm:-grid-col-1 lg:grid-cols-3 gap-6'>
          {Posts.map((Post, index) => (
            <div className='fade-in' key = {Post.id}>
              <div className='Blog-Card '>
                <BlogCard Post={Post} isDarkBackground={index % 2 === 0}/>
            </div>
               </div>
          ))}

         </div>
          

    </div>
  );
}
