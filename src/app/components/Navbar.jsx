import Image from "next/image";
import Link from "next/link";

const Navbar = () => {
    return (
        <div>
            <nav className="sticky top-0 z-40 w-full bg-background/70 backdrop-blur-lg lg:p-3 text-white ">
                <header className="flex h-16 items-center justify-between lg:px-6 ">
                    <div className="flex items-center gap-3">
                        <Link href='/'>
                            <Image width={300} height={0} src="/image/navbar-logo.png" alt="Logo of the website that is Boi kotha" loading="eager" className="cursor-pointer"></Image>
                        </Link>
                    </div>
                    <ul className="flex items-center gap-7">
                        <li><Link href="/">Home</Link></li>
                        <li><Link href="/all-books">All Books</Link></li>
                        <li><Link href="/my-profile">My Profile</Link></li>
                    </ul>
                    <div>
                        <button className="mr-10 btn font-bold ">Login</button>
                    </div>
                </header>
            </nav>
        </div>
    );
};

export default Navbar;