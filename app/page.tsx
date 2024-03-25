import Encryption from "@/components/main/Encryption";
// import Experience from "@/components/main/Experiancce";
import Hero from "@/components/main/Hero";
import Projects from "@/components/main/Projects";
import Skills from "@/components/main/Skills";
// import WorkExperience from "@/components/main/WorkExperience";


export default function Home() {
  return (
    <main className="h-full w-full">
      <div className="flex flex-col gap-20">
        <Hero />
        <Skills />
        <Encryption />
        <Projects />
        {/* <Experience /> */}
        {/* <WorkExperience /> */}
      </div>
    </main>
  );
}
