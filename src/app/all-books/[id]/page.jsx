import BookDetails from "../../components/BookDetails";


const BookDetailsPage = async ({ params }) => {
    const { id } = await params

    const res = await fetch("https://boi-kotha.vercel.app/data.json")
    const data = await res.json()

    const detailsData = data.find((d) => d.id == id);
    return (
        <div>
            <BookDetails detailsData={detailsData} />
        </div>
    );
};

export default BookDetailsPage;