import Image from "next/image";

const BooksCard = ({ data }) => {

    return (
        <div className="card bg-[#071117] p-2 overflow-hidden shadow-md hover:shadow-green-300/20 transition-all duration-300">
            <figure className="h-90 w-full overflow-hidden">
                <Image src={data.image_url} width={350} height={350} alt={data.title} loading="eager" className="w-full h-full object-cover hover:scale-110 transition-transform duration-500"></Image>
            </figure>
            <div className="card-body p-6 space-y-4">
                <h2 className="card-title">{data.title}</h2>
                <p className="text-gray-300 line-clamp-2">{data.description}</p>
                <div className="card-actions justify-start items-center">
                    <h1 className="font-semibold text-xl ">⭐⭐⭐⭐⭐({data.available_quantity})</h1>
                </div>
            </div>
            <button className="btn btn-outline">View Details</button>
        </div>
    );
};

export default BooksCard;