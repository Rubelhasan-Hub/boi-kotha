import Image from "next/image";
import Marquee from "react-fast-marquee";
import BooksCard from "./BooksCard";
import { MoreHorizontal } from "lucide-react";
import { BsFacebook } from "react-icons/bs";
import Link from "next/link";

const HomePage = async () => {
    const res = await fetch("https://boi-kotha.vercel.app/data.json")
    const data1 = await res.json()
    const data = data1.slice(0, 4)

    return (
        <div className="container mx-auto space-y-6 mb-20">
            <div className="lg:flex justify-between items-center mt-15 lg:min-h-162.5">
                <div className="space-y-5">
                    <h1 className="text-3xl lg:text-8xl font-semibold animate__animated animate__zoomIn">Find Your Next Read</h1>
                    <button className="btn p-7 text-2xl animate__animated animate__slideInUp">Browse Now</button>
                </div>
                <div>
                    <Image src="/image/person.png" width={1000} height={1000} alt="a person Who reading the book" className="bg-[#b5b6b5] rounded-[100%_0%]" priority ></Image>
                </div>
            </div>

            <div className="flex bg-gray-300 mt-20 p-3 rounded-2xl text-black">
                <button className="btn btn-accent">New Arrivals:</button>
                <Marquee pauseOnHover={true} speed={50}>
                    {
                        data.map(d => <div key={d.id} className="mx-10">
                            <h1> {d.title} | Special Discount on Memberships...</h1>
                        </div>)
                    }

                </Marquee>
            </div>

            <div>
                <h1 className="text-4xl font-bold">Featured Books:</h1>
                <br />
                <h1 className="text-4xl font-bold">Top 4🚩</h1>
            </div>


            <div className="grid grid-cols-2 gap-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 lg:gap-7">
                {
                    data.map(d => <BooksCard key={d.id} data={d}></BooksCard>)
                }
            </div>
            <div className="mt-30 flex flex-col items-center text-center space-y-5 bg-gray-800 p-5 lg:p-20 rounded-2xl text-white hover:bg-gray-700 transition duration-300">
                <h1 className="text-3xl lg:text-6xl font-bold text-orange-500">Discover Stories That Stay With You</h1>
                <p className="">Explore thousands of books, discover timeless stories,
                    and grow your imagination through reading.We believe every book has the power to transport you to another world.This is the place where stories come alive.</p>
                <Link href="/login"><button className="btn btn-outline mt-5 p-7 px-20 cursor-pointer">Explore More <MoreHorizontal/></button></Link>

                <div className="text-4xl mt-5" ><BsFacebook/></div>
            </div>
        </div>
    );
};

export default HomePage;