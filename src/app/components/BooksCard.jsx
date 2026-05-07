import Image from "next/image";
import Link from "next/link";

const BooksCard = ({ data }) => {

    return (
        <div className="card bg-[#071117] p-2 overflow-hidden shadow-md hover:shadow-green-300/20 transition-all duration-300">
            <figure className="h-90 w-full overflow-hidden">
                <Image src={data.image_url} width={250} height={250} alt={data.title} loading="eager" className="w-full object-cover hover:scale-110 transition-transform duration-500"></Image>
            </figure>
            <div className="card-body p-6 space-y-4">
                <h2 className="card-title text-3xl">{data.title}</h2>
                <div className="card-actions justify-start items-center">
                    <h1 className="font-semibold text-xl ">⭐⭐⭐⭐⭐ <span className="opacity-65">({data.available_quantity})</span></h1>
                </div>
            </div>
            <Link href={`/all-books/${data.id}`}><button className="btn btn-outline w-full">View Details</button></Link>
        </div>
    );
};

export default BooksCard;