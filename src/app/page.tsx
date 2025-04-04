import AboutMe from "@/components/AboutMe";
import Banner from "@/components/Banner";
import Education from "@/components/Education";
import Skills from "@/components/Skills";

export default function Home() {

  return (
    <main className="md:w-4/6 mx-auto px-3 md:px-0">
      <Banner></Banner>
      <AboutMe></AboutMe>
      <Skills></Skills>
      <Education></Education>
    </main>
  );
}
