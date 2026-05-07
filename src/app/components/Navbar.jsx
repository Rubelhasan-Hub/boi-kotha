"use client"
import { Menu, X } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { GiBookAura } from "react-icons/gi";
import { authClient } from "../../../lib/auth-client";
import Image from "next/image";


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
            <nav className="w-full backdrop-blur-lg lg:p-3 text-white bg-transparent relative z-50">
                <header className="flex h-16 items-center justify-between px-3 lg:px-6">
                    <div>
                        <Link href='/'>
                            <div className="flex items-center gap-3">
                                <h1 className="text-2xl lg:text-4xl">BOI - <span className="text-green-500 font-bold">KOTHA</span></h1>
                                <GiBookAura className="text-4xl" />
                            </div>
                        </Link>
                    </div>

                    <div className="hidden md:flex">
                        <ul className="flex items-center gap-7">
                            <li><Link href="/" className={pathName === "/" ? "border-b-2 text-green-500" : ""}>Home</Link></li>
                            <li><Link href="/all-books" className={pathName === "/all-books" ? "border-b-2 text-green-500" : ""}>All Books</Link></li>
                            <li><Link href="/my-profile" className={pathName === "/my-profile" ? "border-b-2 text-green-500" : ""}>My Profile</Link></li>
                        </ul>
                    </div>
                    <div className="hidden md:block">
                        {!user && <div className="flex gap-4"><Link href="/login">
                            <button className="btn font-bold ">Login</button>
                        </Link> <Link href="/register">
                                <button className="btn font-bold">SignUp</button>
                            </Link></div>}
                        {user && <div className="flex gap-4 items-center">
                            <h1 className="text-2xl font-semibold bg-amber-400 text-black px-2 rounded-sm">{user.name}</h1>
                            {user?.image ? (
                                <Image
                                    src={user.image}
                                    alt={user.name || "user"}
                                    width={40}
                                    height={40}
                                    className="w-10 h-10 rounded-full object-cover border-2 border-cyan-400"
                                />
                            ) : (
                                <div className="w-10 h-10 rounded-full bg-amber-400 text-black flex items-center justify-center font-bold">
                                    {user?.name?.charAt(0)?.toUpperCase()}
                                </div>
                            )}
                            <button onClick={handleSignOut} className="btn font-bold text-xl">Logout</button>
                        </div>}
                    </div>

                    <div className="md:hidden">
                        <button onClick={() => setIsMobileMenuOpen((currentValue) => !currentValue)} className="md:hidden p-2 text-white">
                            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
                        </button>
                    </div>
                </header>
                
                {isMobileMenuOpen && (<div className="flex justify-end md:hidden absolute top-13 left-10 right-0 z-100">
                    <div className="bg-gray-700 p-3 rounded-2xl">
                        <ul className="p-5 space-y-4">
                            <li><Link href="/" className={pathName === "/" ? "border-b-2 text-green-500" : ""}>Home</Link></li>
                            <li><Link href="/all-books" className={pathName === "/all-books" ? "border-b-2 text-green-500" : ""}>All Books</Link></li>
                            <li><Link href="/my-profile" className={pathName === "/my-profile" ? "border-b-4 text-green-500" : ""}>My Profile</Link></li>

                            <div className="">
                                <div>
                                    {!user && <div className="flex gap-1"><Link href="/login">
                                        <button className="btn font-bold ">Login</button>
                                    </Link> <Link href="/register">
                                            <button className="btn font-bold">SignUp</button>
                                        </Link></div>}
                                </div>
                                <div>
                                    {user && <div className="flex gap-4 items-center">
                                        <h1 className="text-sm font-semibold bg-amber-400 text-black px-2 rounded-sm">{user.name}</h1>
                                        {user?.image ? (
                                            <Image
                                                src={user.image}
                                                alt={user.name || "user"}
                                                width={40}
                                                height={40}
                                                className="w-10 h-10 rounded-full object-cover border-2 border-cyan-400"
                                            />
                                        ) : (
                                            <div className="w-10 h-10 rounded-full bg-amber-400 text-black flex items-center justify-center font-bold">
                                                {user.name?.charAt(0)?.toUpperCase()}
                                            </div>
                                        )}
                                        <button onClick={handleSignOut} className="btn font-bold text-sm">Logout</button>
                                    </div>}
                                </div>
                            </div>
                        </ul>
                    </div>
                </div>)}
            </nav>
        </div>
    );
};

export default Navbar;