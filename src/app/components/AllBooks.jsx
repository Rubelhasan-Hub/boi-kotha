"use client"
import { useState } from "react";
import BooksCard from "../components/BooksCard";
import Link from "next/link";

const AllBooks = ({ data }) => {

    const [selectedCategory, setSelectedCategory] = useState("All");
    const [searchText, setSearchText] = useState("");

    const filteredData = data.filter((book) =>
        book.title.toLowerCase().includes(searchText.toLowerCase())
    )

    return (
        <div className="container mx-auto mt-20 flex gap-5">
            <div>
                bu
            </div>
            <div>
                <div className="flex justify-between">
                    <div>
                        <h1 className="lg:text-4xl font-bold">ALL BOOKS :</h1>
                    </div>
                    <div>
                        <label className="input">
                            <input value={searchText} onChange={(e) => setSearchText(e.target.value)} className="p-2 px-7 border" type="search" required placeholder="🔍 Search" />

                        </label>
                    </div>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-7">
                    {
                        filteredData.map(d => <BooksCard key={d.id} data={d}></BooksCard>)
                    }
                </div>
            </div>
        </div>
    );
};

export default AllBooks;