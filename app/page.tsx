import Image from "next/image";
import Link from "next/link";
import Navbar from "@/components/navBar/navbar";

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-b from-cyan-800 to-cyan-950 opacity-85 text-purple-50">
      
     
      <header className=" w-full py-10 flex justify-center">
        <h1 className="text-8xl font-bold tracking-wider text-pink-300 hover:text-purple-300">
            Nabiha Choudhury
        </h1>
      </header>
      
      
      <section className="bg-pink-300 w-11/12 md:w-8/12 lg:w-6/12 p-8 mt-8 rounded-lg shadow-md text-center hover:bg-purple-300 transition ease-in-out duration-200">
              <Navbar/>
      </section>
        <div className="mt-8">
            <Link href="/projects">
                <button className="px-6 py-3 text-lg font-medium text-black bg-pink-300 rounded-full shadow-md hover:bg-purple-300 transition ease-in-out duration-200">
                    Projects
                </button>
            </Link>
        </div>
        <footer className="mt-20 w-full py-6 text-center bg-cyan-900 text-purple-200">
            <p>Nabiha Choudhury | Email: nabihanumachoudhury@gmail.com</p>
        </footer>
    </div>
  );
}
