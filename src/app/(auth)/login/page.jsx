import Link from "next/link";


const LoginPage = () => {
    return (
        <div>
            Login Page
            <br />
            <Link href='/register' className="btn ">Registration</Link>
        </div>
    );
};

export default LoginPage;