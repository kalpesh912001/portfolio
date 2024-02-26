import Image from "next/image";
import Dashboard from '../components/main/Dashboard';
import Skills from '../components/main/Skills.tsx';
import Encryption from '../components/main/Encryption';
import Projects from '../components/main/Projects';
import Experience from '../components/main/Experiance';

export default function Home() {
  return (
    <main className="w-full h-full">
      <div className="flex flex-col gap-28 w-fit items-center">
        <Dashboard />
        <Experience />
        <Skills />
        {/* <Encryption /> */}
        {/* <Projects /> */}
      </div>
    </main>
  );
}
