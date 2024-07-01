import { fetchMediumPosts } from '@/utils/fetchMediumPosts';
import BlogSlider from './BlogSlider';





  


const Blogs=async () => {
const posts:any=await fetchMediumPosts();



  return (
    <>
    
    
    <section className="">

  <div className="py-8 px-4 mx-auto max-w-screen-xl lg:py-16 lg:px-6">
    <div className="mx-auto max-w-screen-sm text-center lg:mb-16 mb-8">
      <h2 className="mb-4 text-3xl lg:text-4xl tracking-tight font-extrabold text-white dark:text-white">My Blog</h2>
      <p className="font-light text-gray-500 sm:text-xl dark:text-gray-400">We use an agile approach to test assumptions and connect with the needs of your audience early and often.</p>
    </div> 

    <BlogSlider posts={posts} />

      
  </div>
</section>
</>
  )
}

export default Blogs;



// export default Home;
