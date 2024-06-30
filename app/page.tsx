import Blogs from "@/components/Blogs";
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
        <ProjectSlider />
        {/* <Experience /> */}
        {/* <WorkExperience /> */}
        <Blogs />
      </div>
    </main>
    <Footer />

    </>
  );


}
  


export default Home
