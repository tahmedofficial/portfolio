import AboutMe from "@/components/AboutMe";
import Banner from "@/components/Banner";
import Contact from "@/components/Contact";
import Education from "@/components/Education";
import Skills from "@/components/Skills";
import { ToastContainer } from "react-toastify";

export default function Home() {

  return (
    <div>
      <Banner></Banner>
      <AboutMe></AboutMe>
      <Skills></Skills>
      <Education></Education>
      <Contact></Contact>
      <ToastContainer />
    </div>
  );
}
