import Blogs from "@/components/Blogs";
// import Contact from "@/components/Contact";
import Encryption from "@/components/main/Encryption";
import Footer from "@/components/main/Footer";
// import Experience from "@/components/main/Experiancce";
import Hero from "@/components/main/Hero";
import Navbar from "@/components/main/Navbar";
import ProjectSlider from "@/components/main/ProjectSlider";
// import Projects from "@/components/main/Projects";
import Resume from "@/components/main/Resume";
import Skills from "@/components/main/Skills";


const Home: React.FC = () => {
  const promiseProjects = fetch(`https://portfolio-l47727dv4-anandas-projects-91b9a04e.vercel.app/api/projects`)
  return (
    <>
        <Navbar />
    
    <main className="h-full w-full">
      <div className="flex flex-col gap-20">
        <Hero />
        <Skills />
        <Encryption />
        {/* <Projects /> */}
        <Resume />
        <ProjectSlider  />
        {/* <Experience /> */}
        {/* <WorkExperience /> */}
        <Blogs />
      </div>
      <div className='relative z-0'>
          {/* <Contact /> */}
          {/* <StarsCanvas /> */}
        </div>
    </main>
    <Footer />

    </>
  );


}
  


export default Home
