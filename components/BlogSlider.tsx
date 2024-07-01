'use client'

import React, { useEffect, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';


// import required modules

import Image from 'next/image';
import { HashNavigation, Navigation, Pagination } from 'swiper/modules';



type Post = {
    title: string;
    link: string;
    guid: string;
    pubDate:string;
    contentSnippet:string;
    author:string
  };
  
  type Props = {
    posts: Post[];
  };
  

const BlogSlider: React.FC <Props>= ({posts}) => {


  const [isClient, setIsClient] = useState(false);

  useEffect(() =>{
    setIsClient(true)
  },[]);

  if(!isClient){
    return null;
  }

  return (
    <div className="relative w-full overflow-hidden">
       <Swiper
        slidesPerView={1}
        spaceBetween={30}
        pagination={{
          clickable: true,
        }}
        autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}     
             loop={true}

             modules={[Pagination, Navigation, HashNavigation]}
             navigation={true}

        breakpoints={{
            640: {
              slidesPerView: 1,
              spaceBetween: 20,
            },
            768: {
              slidesPerView: 2,
              spaceBetween: 40,
            },
            1024: {
              slidesPerView: 3,
              spaceBetween: 50,
            },
          }}
        className="mySwiper"
      >
    <div className="grid gap-8 lg:grid-cols-2">


        {

(posts||[]).map((post) => (
    <SwiperSlide   key={post.guid} className="p-6 bg-white rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700">
          <article className="p-6 bg-white rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700">
                <div className="flex justify-between items-center mb-5 text-gray-500">
                  <span className="bg-primary-100 text-primary-800 text-xs font-medium inline-flex items-center px-2.5 py-0.5 rounded dark:bg-primary-200 dark:text-primary-800">
                    <svg
                      className="mr-1 w-3 h-3"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fillRule="evenodd"
                        d="M2 5a2 2 0 012-2h8a2 2 0 012 2v10a2 2 0 002 2H4a2 2 0 01-2-2V5zm3 1h6v4H5V6zm6 6H5v2h6v-2z"
                        clipRule="evenodd"
                      />
                      <path d="M15 7h1a2 2 0 012 2v5.5a1.5 1.5 0 01-3 0V7z" />
                    </svg>
                    Article
                  </span>
                  <span className="text-sm">{new Date(post?.pubDate as string).toLocaleDateString()}</span>
                </div>
                <h2 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                  <a href={post.link}>{post.title}</a>
                </h2>
                <p className="mb-5 font-light text-gray-500 dark:text-gray-400">{post.contentSnippet}</p>
                <div className="flex justify-between items-center">
                  <div className="flex items-center space-x-4">
                    <Image
                      className="w-7 h-7 rounded-full"
                      src="https://avatars.githubusercontent.com/u/86967865?v=4"
                      alt="Author's avatar"
                      width={100}
                      height={100}
                    />
                    <span className="font-medium dark:text-white">{post.author}</span>
                  </div>
                  <a
              target='_blank'
                    href={post.link}
                    className="inline-flex items-center font-medium text-primary-600 dark:text-primary-500 hover:underline"
                  >
                    Read more
                    <svg
                      className="ml-2 w-4 h-4"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fillRule="evenodd"
                        d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </a>
                </div>
              </article>
    </SwiperSlide>
  ))
        }
        </div>
      </Swiper>
    </div>
  );
};

export default BlogSlider;
