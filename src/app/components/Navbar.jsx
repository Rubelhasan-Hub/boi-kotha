"use client"
import { Menu, X } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { GiBookAura } from "react-icons/gi";
import { authClient } from "../../../lib/auth-client";


const Navbar = () => {
    const { data } = authClient.useSession()
    const user = data?.user

    const pathName = usePathname()

    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    const handleSignOut = async () => {
        await authClient.signOut();
    }
    return (
        <div>
            <nav className="w-full backdrop-blur-lg lg:p-3 text-white bg-transparent">
                <header className="flex h-16 items-center justify-between px-3 lg:px-6">
                    <div className="flex items-center gap-3">
                        <Link href='/'>
                            <h1 className="text-2xl lg:text-4xl">BOI - <span className="text-green-500 font-bold">KOTHA</span></h1>
                        </Link>
                        <GiBookAura className="text-4xl" />
                    </div>

                    <div className="hidden lg:flex">
                        <ul className="flex items-center gap-7">
                            <li><Link href="/" className={pathName === "/" ? "border-b-2 text-green-500" : ""}>Home</Link></li>
                            <li><Link href="/all-books" className={pathName === "/all-books" ? "border-b-2 text-green-500" : ""}>All Books</Link></li>
                            <li><Link href="/my-profile" className={pathName === "/my-profile" ? "border-b-2 text-green-500" : ""}>My Profile</Link></li>
                        </ul>
                    </div>
                    <div>
                        {!user && <div className="flex gap-4"><Link href="/login">
                            <button className="btn font-bold ">SignIn</button>
                        </Link> <Link href="/register">
                                <button className="btn font-bold">SignUp</button>
                            </Link></div>}
                        {user && <div className="flex gap-4 items-center">
                            <h1 className="text-2xl font-semibold bg-amber-400 text-black px-2 rounded-sm">{user.name}</h1>
                            <button onClick={handleSignOut} className="btn font-bold text-xl">Sign Out</button>
                        </div>}
                    </div>

                    <div className="md:hidden">
                        <button onClick={() => setIsMobileMenuOpen((currentValue) => !currentValue)} className="md:hidden p-2 text-white">
                            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
                        </button>
                    </div>
                </header>


            </nav>
            {isMobileMenuOpen && (<div className="md:hidden">
                <div className="">
                    <ul className="flex items-center justify-between p-5">
                        <li><Link href="/" className={pathName === "/" ? "border-b-2 text-green-500" : ""}>Home</Link></li>
                        <li><Link href="/all-books" className={pathName === "/all-books" ? "border-b-2 text-green-500" : ""}>All Books</Link></li>
                        <li><Link href="/my-profile" className={pathName === "/my-profile" ? "border-b-4 text-green-500" : ""}>My Profile</Link></li>

                        {!user && <div><Link href="/login">
                            <button className="btn font-bold ">SignIn</button>
                        </Link> <Link href="/register">
                                <button className="btn font-bold">SignUP</button>
                            </Link></div>}
                    </ul>
                </div>
            </div>)}
        </div>
    );
};

export default Navbar;