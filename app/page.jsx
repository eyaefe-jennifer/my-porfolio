import About from "./components/About";
import Experience from "./components/Experience";
import HerosPage from "./components/HerosPage";
import Navbar from "./components/Navbar";
import Project from "./components/Project";


export default function Home() {
  return (
    <main className="">
 <Navbar />
 <HerosPage />
 <About />
 <Experience />
 <Project />
    </main>
  );
}
