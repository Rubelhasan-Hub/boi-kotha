import Image from "next/image";
import Marquee from "react-fast-marquee";
import BooksCard from "./BooksCard";

const HomePage = async () => {
    const res = await fetch("https://boi-kotha.vercel.app/data.json")
    const data = await res.json()

    return (
        <div className="container mx-auto space-y-6">
            <div className="lg:flex justify-between items-center mt-15">
                <div className="space-y-5">
                    <h1 className="text-3xl lg:text-8xl font-semibold">Find Your Next Read</h1>
                    <button className="btn p-7 text-2xl">Browse Now</button>
                </div>
                <div className="relative">
                    <Image src="/image/person.png" width={1000} height={1000} alt="a person Who reading the book" className="bg-[#b5b6b5] rounded-[100%_0%]"></Image>
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
            </div>

            <div className="grid grid-cols-4 gap-4">
                {
                    data.map(d => <BooksCard key={d.id} data={d}></BooksCard>)
                }
            </div>
        </div>
    );
};

export default HomePage;