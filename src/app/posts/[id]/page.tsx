'use client';
import React from 'react';
import CommentSection from '@/components/CommentSection';
import AuthorCard from '@/components/AuthorCard';

const post = [

  {
      id: '1',
      title: 'Latest AI Technology',
      description: 'Revolutionizing the World Latest Advancements in AI Technology As AI becomes more pervasive ethical concerns about bias privacy and accountability have come to the forefront The latest AI frameworks prioritize fairness and transparency ensuring algorithms are unbiased and respect user data privacy Governments and organizations are also formulating policies to regulate AI responsibly',
      
      image:'../images/AI blog.webp',
    },

{
      id: '2',
      title: 'Daily Lifestyle',
      description: 'Crafting a Balanced Daily Lifestyle Tips for Modern Living In today’s fast-paced world maintaining a balanced lifestyle is more important than ever With countless demands on our time and energy finding harmony between work health and personal happiness can feel challenging This blog explores effective strategies to design a daily routine that nurtures your mind body and soul',
      
      image:'../images/life style.jpg',
    },

    {
      id: '3',
      title: 'Pakistan’s Economic Conditions',
      description: 'Analyzing Pakistan’s Economic Conditions Challenges and Prospects Pakistan’s economy one of the most dynamic yet challenging in South Asia has witnessed significant turbulence in recent years From navigating global economic pressures to addressing domestic structural issues the country’s economic journey is a complex narrative This blog explores the current state of Pakistan’s economy its key challenges and the prospects for recovery',
      
      image:'../images/pak economic.jpg',
    },


  ];


export default function Post ({params}:{params: {id: string}}) {
 const {id} = params;
 const Post = post.find((p) => p.id = id);
 if (!Post) {
  return (
    <h2 className='text-2xl font-bold text-center mt-10'>POST NOT FOUND</h2>
  );
 } 

 const renderParagraphs = (description: string) => {
    return description.split('/n').map((para, index)=> (
      <p key={index} className='mt-4 text-justify'>
        {para.trim()} 
        </p>

    ));
  };

  return (
    <div>
      <div className='max-w-3xl mx-auto p-5'>
      <h1 className='md:text-4xl text-3xl font-bold text-cyan-700 text-center'>
        {Post.title}
      </h1>

 
        <img 
        src={Post.image}
        alt={Post.title}
        className='w-full h-auto rounded-md mt-4'/>
      
      <div className='mt-6 text-lg text-slate-700'>
        {renderParagraphs(Post.description)}
         </div>
      <CommentSection postId={Post.id}/>
      <AuthorCard/>
    </div>
    </div>
  );
}
