import Link from "next/link";

export default function Navbar() {
    return(
        <div className="flex justify-center">
            <div className="x-6">
                <Link
                    href= 'https://www.linkedin.com/in/nabiha-choudhury-535571291/'
                >
                    <img
                        className="w-10 h-10 hover:scale-110 transition-transform duration-150"
                        src = '/linkedin-icon.png'
                    ></img>
                </Link>
            </div>
            <Link href = 'https://github.com/chnabi'>
                <img
                    className="w-10 h-10 hover:scale-110 transition-transform duration-150"
                    src = '/github-icon.png'
                ></img>
            </Link>
            <Link href = '/about'>
                <img
                    className="w-10 h-10 hover:scale-110 transition-transform duration-150"
                    src = '/person-icon.png'
                ></img>
            </Link>
        </div>
    );
}