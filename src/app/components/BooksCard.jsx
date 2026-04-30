import Image from "next/image";

const BooksCard = ({ data }) => {

    return (
        <div className="card shadow-sm">
            <figure>
                <Image src={data.image_url} width={200} height={200} alt={data.title} loading="eager"></Image>
            </figure>
            <div className="card-body">
                <h2 className="card-title">{data.title}</h2>
                <p>A card component has a figure, a body part, and inside body there are title and actions parts</p>
                <div className="card-actions justify-end">
                    <button className="btn btn-primary">Buy Now</button>
                </div>
            </div>
        </div>
    );
};

export default BooksCard;