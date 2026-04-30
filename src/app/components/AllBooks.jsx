"use client"
import { useState } from "react";
import BooksCard from "../components/BooksCard";

const AllBooks = ({ data }) => {

    const [selectedCategory, setSelectedCategory] = useState("All");
    const [searchText, setSearchText] = useState("");

    const filteredData = data.filter((book) => {
        const matchSearch = book.title.toLowerCase().includes(searchText.toLowerCase())
        const mathSelect = selectedCategory === "All" || book.category === selectedCategory;

        return matchSearch && mathSelect
    })

    return (
        <div className="container mx-auto m-20 flex gap-10">
            <div className="w-52 mt-20 bg-base-200 text-base-content p-5 rounded-xl space-y-4 shadow-lg">

                <h2 className="text-xl font-bold">Categories</h2>

                <div className="flex flex-col gap-3">
                    <button onClick={() => setSelectedCategory("All")} className={`w-full ${selectedCategory === "All" ? " btn-accent btn px-6" : "btn btn-outline"}`}>All</button>

                    <button onClick={() => setSelectedCategory("Story")} className={`w-full ${selectedCategory === "Story" ? " btn btn-accent" : " btn btn-outline"}`}>Story</button>

                    <button onClick={() => setSelectedCategory("Science")} className={`w-full ${selectedCategory === "Science" ? "btn btn-accent" : "btn btn-outline"}`}>Science</button>

                    <button onClick={() => setSelectedCategory("Tech")} className={`w-full ${selectedCategory === "Tech" ? "btn btn-accent" : "btn btn-outline"}`}>Tech</button>
                </div>
            </div>
            <div className="space-y-6">
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