"use client"
import Link from "next/link";
import { authClient } from "../../../lib/auth-client";
import Modal2 from "./Modal";

const Profile = () => {
    const { data } = authClient.useSession()
    const user = data?.user
    return (
        <div className="rounded-2xl p-2 lg:p-10 lg:w-6/12 mx-auto text-start bg-amber-400 text-black space-y-3">
            <h1 className="lg:text-4xl font-bold">My Name : {user?.name}</h1>
            <h1 className="lg:text-4xl font-bold">My Email : {user?.email}</h1>

            <Modal2 />
        </div >
    );
};

export default Profile;