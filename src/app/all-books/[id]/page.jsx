
const BookDetailsPage = async ({ params }) => {
    const { id } = await params

    const res = await fetch("https://boi-kotha.vercel.app/data.json")
    const data = await res.json()

    const detailsData = data.find((d) => d.id == id);

    console.log(detailsData);
    return (
        <div>
            <h1>{detailsData.title}</h1>
        </div>
    );
};

export default BookDetailsPage;