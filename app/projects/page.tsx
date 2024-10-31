import Link from "next/link";
import Navbar from "@/components/navBar/navbar";
export default function Projects() {
    return (
            <div className='flex flex-col items-center justify-center min-h-screen bg-gradient-to-b from-cyan-800 to-cyan-950 opacity-85 text-purple-50'>
                <div className=" justify-center p-6 bg-cyan-800 rounded-lg shadow-lg hover:shadow-xl transition duration-200 ease-in-out transform hover:-translate-y-1">
                    <h3 className="text-2xl text-center font-semibold text-pink-300">Featured Project</h3>
                    <Link href = 'https://github.com/chnabi/PearlHacks2024-SproutScript' >
                    <div className='flex justify-center'>
                    <img
                    src='/SproutScriptTitleCard.jpg'
                    width={400}
                    height={400}
                    className='rounded-xl'
                    ></img>
                    </div>
                    </Link>
                    <p className="text-purple-200 text-center mt-2">An educational game that teaches coding logic in a fun and engaging way.</p>
                </div>
                <footer>
                    <br/>
                    <Link href = '/'>
                       <p className= 'text-pink-300'>
                           Return Home
                       </p>
                    </Link>
                </footer>
            </div>
    );
}