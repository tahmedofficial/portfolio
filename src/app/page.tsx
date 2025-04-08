import AboutMe from "@/components/AboutMe";
import Banner from "@/components/Banner";
import Contact from "@/components/Contact";
import Education from "@/components/Education";
import Projects from "@/components/Projects";
import Skills from "@/components/Skills";

export default function Home() {

  return (
    <div>
      <Banner></Banner>
      <Projects></Projects>
      <AboutMe></AboutMe>
      <Skills></Skills>
      <Education></Education>
      <Contact></Contact>
    </div>
  );
}
