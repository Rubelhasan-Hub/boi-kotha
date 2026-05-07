import AllBooks from "../components/AllBooks";



const AllBooksPage = async () => {
    const res = await fetch("https://boi-kotha.vercel.app/data.json")
    const data = await res.json()


    return (
        <AllBooks data={data}></AllBooks>
    );
};

export default AllBooksPage;