import Link from "next/link";
import { MdOutlineWifiTetheringErrorRounded } from "react-icons/md";

const NotFound = () => {
    return (
        <div className="mt-50 flex justify-center flex-col items-center">
            <div>
                <h1 className="text-9xl text-center">404?😵</h1>
            </div>
            <div>
                <br></br>
                <br></br>
                <Link href="/"><button className="btn btn-accent text-3xl text-white">GO HOME</button></Link>
            </div>
        </div>
    );
};

export default NotFound;