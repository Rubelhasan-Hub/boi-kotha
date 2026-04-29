import Link from "next/link";
import { MdOutlineWifiTetheringErrorRounded } from "react-icons/md";

const NotFound = () => {
    return (
        <div className="mt-50 flex flex-col items-center">
            <div>
                <h1 className="lg:text-9xl">404?😵</h1>
            </div>
            <div>
                <h1 className="lg:text-9xl"><MdOutlineWifiTetheringErrorRounded /></h1>
                <br></br>
                <br></br>
                <Link href="/"><button className="btn btn-accent text-3xl text-white">GO HOME</button></Link>
            </div>
        </div>
    );
};

export default NotFound;