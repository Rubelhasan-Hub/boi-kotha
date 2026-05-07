"use client";
import { BookUser } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import toast from "react-hot-toast";
import { BiLeftArrow } from "react-icons/bi";
import { authClient } from "../../../lib/auth-client";


const BookDetails = ({ detailsData }) => {

    const router = useRouter();
    const {data} = authClient.useSession();
    const user = data?.user;

    const BorrowBtn = () => {

        if (!user) {
            toast.error("You need to be logged in to borrow a book!");
            router.push("/login");
            return;
        }
        toast.success("Borrow request submitted successfully!");
    }
    return (
        <div>
            <div className="card bg-[#071117] md:p-20 overflow-hidden shadow-md hover:shadow-green-300/20 transition-all duration-300">
                <figure className="overflow-hidden">
                    <Image src={detailsData.image_url} width={200} height={500} alt={detailsData.title} loading="eager" className="object-cover hover:scale-110 transition-transform duration-500"></Image>
                </figure>
                <div className="card-body md:p-6 space-y-4">
                    <h2 className="card-title text-2xl md:text-3xl"><BookUser />{detailsData.title}</h2>
                    <h2 className="card-title text-2xl md:text-3xl">{detailsData.description}</h2>
                    <div className="space-y-4">
                        <h1 className="font-semibold text-3xl ">⭐⭐⭐⭐⭐</h1>
                        <h1 className="font-semibold text-3xl">Available Quantity: <span className="text-amber-600">({detailsData.available_quantity})</span></h1>
                        <div className="flex items-center gap-5">
                            <Link href={`/all-books`}><button className="btn btn-outline"><BiLeftArrow /> Go Back</button></Link>
                            <button className="btn btn-outline" onClick={BorrowBtn}>
                                Borrow This Book
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default BookDetails;