import Image from "next/image";
import Marquee from "react-fast-marquee";
import BooksCard from "./BooksCard";

const HomePage = async () => {
    const res = await fetch("https://boi-kotha.vercel.app/data.json")
    const data1 = await res.json()
    const data = data1.slice(0,4)

    return (
        <div className="container mx-auto space-y-6 mb-20">
            <div className="lg:flex justify-between items-center mt-15">
                <div className="space-y-5">
                    <h1 className="text-3xl lg:text-8xl font-semibold animate__animated animate__zoomIn">Find Your Next Read</h1>
                    <button className="btn p-7 text-2xl animate__animated animate__slideInUp">Browse Now</button>
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
                <br />
                <h1 className="text-4xl font-bold">Top 4🚩</h1>
            </div>
            

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-7">
                {
                    data.map(d => <BooksCard key={d.id} data={d}></BooksCard>)
                }
            </div>
        </div>
    );
};

export default HomePage;