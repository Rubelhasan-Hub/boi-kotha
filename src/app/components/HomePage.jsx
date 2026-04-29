import Image from "next/image";

const HomePage = () => {
    return (
        <div className="max-w-10/12 mx-auto flex justify-between items-center mt-15">
            <div className="space-y-5">
                <h1 className="lg:text-8xl font-semibold">Find Your Next Read</h1>
                <button className="btn p-7 text-2xl">Browse Now</button>
            </div>
            <div className="relative">
                <Image src="/image/person.png" width={1000} height={1000} alt="a person Who reading the book" className="hidden md:block bg-[#b5b6b5] md:rounded-[100%_0%]"></Image>
            </div>
        </div>
    );
};

export default HomePage;