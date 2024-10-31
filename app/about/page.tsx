import Image from "next/image";
import Link from "next/link";


export default function About() {
    return (
        <div className="about-page flex flex-col items-center py-10 min-h-screen bg-cyan-950 text-pink-300">
            <h1 className="text-5xl font-bold mb-8 text-pink-300">About Me</h1>

            <div className="about-card bg-cyan-950 p-8 max-w-3xl text-center">

                <div className="mb-6 flex justify-center">
                    <Image
                        src="/headshot.jpg"
                        alt="Image won't load"
                        width={350}
                        height={350}
                        className="rounded full"
                    />
                </div>
                <div className= 'bg-cyan-900 opacity-75 rounded-xl'>
                <p className="text-lg leading-relaxed mb-4 text-cyan-200">
                    Currently a Computer Science and Math major at the University of North Carolina at Chapel Hill.

                    Inspired by the community of CS student I found at UNC began by journey as a programmer. I want to contribute to the culture of building and development within the field of computer science. My current projects are focused on web development using React and Next.js.
                </p>
                <p className="text-lg leading-relaxed text-cyan-100">
                    Outside of coding, I do research in the image processing space, specifically image deblurring under UNC's Dr. Yifei Lou. In my free time I enjoy being outdoors and traveling.
                </p>

                    </div>
                <br/>
                <Link href="/">
                    <button className="px-6 py-3 text-lg font-medium text-black bg-pink-300 rounded-full shadow-md hover:bg-purple-300 transition ease-in-out duration-200">
                        Home
                    </button>
                </Link>
            </div>
        </div>
    );
}
