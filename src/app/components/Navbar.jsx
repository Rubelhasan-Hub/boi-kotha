"use client"
import { Book, BookA, BookCheckIcon, Menu, X } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { GiBookAura, GiBookmark } from "react-icons/gi";
import { IoBookSharp } from "react-icons/io5";

const Navbar = () => {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    return (
        <div>
            <nav className="sticky top-0 z-40 w-full bg-background/70 backdrop-blur-lg lg:p-3 text-white ">
                <header className="flex h-16 items-center justify-between px-3 lg:px-6">
                    <div className="flex items-center gap-3">
                        <Link href='/'>
                        <h1 className="text-2xl lg:text-4xl">BOI - <span className="text-green-500 font-bold">KOTHA</span></h1>
                        </Link>
                         <GiBookAura className="text-4xl" />
                    </div>
                    <div className="hidden lg:flex gap-160">
                        <ul className="flex items-center gap-7">
                            <li><Link href="/">Home</Link></li>
                            <li><Link href="/all-books">All Books</Link></li>
                            <li><Link href="/my-profile">My Profile</Link></li>
                        </ul>
                        <div>
                            <button className="mr-10 btn font-bold ">Login</button>
                        </div>
                    </div>
                    <div className="md:hidden">
                        <button onClick={() => setIsMobileMenuOpen((currentValue) => !currentValue)} className="md:hidden p-2 text-foreground">
                            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
                        </button>
                    </div>
                </header>
            </nav>
            {isMobileMenuOpen && (<div className="md:hidden">
                <div className="">
                    <ul className="flex items-center justify-between p-5">
                        <li><Link href="/">Home</Link></li>
                        <li><Link href="/all-books">All Books</Link></li>
                        <li><Link href="/my-profile">My Profile</Link></li>
                        <button className="btn font-bold ">Login</button>
                    </ul>
                </div>
            </div>)}
        </div>
    );
};

export default Navbar;