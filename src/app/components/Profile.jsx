"use client"
import Link from "next/link";
import { authClient } from "../../../lib/auth-client";
import { GrUpdate } from "react-icons/gr";
import Image from "next/image";

const Profile = () => {
    const { data } = authClient.useSession()
    const user = data?.user
    return (
        <div className="rounded-2xl p-10 lg:p-10 lg:w-6/12 mx-auto flex flex-col items-center bg-gray-800 text-white space-y-3 hover:bg-gray-700 transition duration-300 backdrop-blur-xl">
            {user?.image ? (
                <Image
                    src={user.image}
                    alt={user.name || "user"}
                    width={200}
                    height={200}
                    className="w-[25%] h-[25%] rounded-full object-cover border-4 border-cyan-400"
                />
            ) : (
                <div className="w-10 h-10 rounded-full bg-amber-400 text-black flex items-center justify-center font-bold">
                    {user?.name?.charAt(0)?.toUpperCase()}
                </div>
            )}
            <h1 className="lg:text-4xl font-bold">My Name : {user?.name}</h1>
            <h1 className="lg:text-4xl font-bold">My Email : {user?.email}</h1>
            <Link href="/update-profile">
                <button className="font-bold btn btn-outline">
                    <GrUpdate className="mr-2" />
                    Update Profile
                </button>
            </Link>
        </div >
    );
};

export default Profile;