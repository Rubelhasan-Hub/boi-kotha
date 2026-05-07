"use client";
import { Check } from "@gravity-ui/icons";
import { Button, Description, FieldError, Form, Input, Label, TextField } from "@heroui/react";
import { authClient } from "../../../lib/auth-client";
import { GrGoogle } from "react-icons/gr";
import toast from "react-hot-toast";
import { useRouter } from "next/navigation";

const Register = () => {
    const router = useRouter()

    const handleRegister = async (e) => {
        e.preventDefault();
        const name = e.target.name.value
        const email = e.target.email.value
        const password = e.target.password.value
        const image = e.target.image.value;



        const {error } = await authClient.signUp.email({

            name: name,
            email: email,
            image: image,
            password: password,
            callbackURL: "/"
        })

        if (error) {
            toast.error(error.message || "Login failed!");
            return;
        }

        toast.success("Registration successful!");
        router.push("/login")

    }

    const handleGoogleSignUp = async () => {
        await authClient.signIn.social({
            provider: "google",
        });
    }
    return (
        <div className="flex items-center justify-center m-20">
            <Form className="flex w-96 flex-col gap-4 border-4 border-gray-400 p-10 rounded-2xl" onSubmit={handleRegister}>
                <TextField
                    isRequired
                    name="name"
                    validate={(value) => {
                        if (value.length < 3) {
                            return "Name must be at least 3 characters";
                        }
                        return null;
                    }}
                >
                    <Label className="text-white">Name</Label>
                    <Input placeholder="John Doe" />
                    <FieldError />
                </TextField>
                <TextField
                    isRequired
                    name="email"
                    type="email"
                    validate={(value) => {
                        if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(value)) {
                            return "Please enter a valid email address";
                        }
                        return null;
                    }}
                >
                    <Label className="text-white">Email</Label>
                    <Input placeholder="john@example.com" />
                    <FieldError />
                </TextField>
                <TextField
                    isRequired
                    name="image">
                    <Label className="text-white">Image URl</Label>
                    <Input placeholder="Enter image URL" />
                    <FieldError />
                </TextField>
                <TextField
                    isRequired
                    minLength={8}
                    name="password"
                    type="password"
                    validate={(value) => {
                        if (value.length < 8) {
                            return "Password must be at least 8 characters";
                        }
                        if (!/[A-Z]/.test(value)) {
                            return "Password must contain at least one uppercase letter";
                        }
                        if (!/[0-9]/.test(value)) {
                            return "Password must contain at least one number";
                        }
                        return null;
                    }}
                >
                    <Label className="text-white">Password</Label>
                    <Input placeholder="Enter your password" />
                    <Description>Must be at least 8 characters with 1 uppercase and 1 number</Description>
                    <FieldError />
                </TextField>
                <div className="flex gap-2">
                    <Button type="submit" className="font-bold btn btn-info">
                        <Check />
                        SignUp
                    </Button>
                    <Button type="reset" variant="secondary" className="font-bold btn">
                        Reset
                    </Button>
                </div>
                <p className="text-center">or</p>
                <button onClick={handleGoogleSignUp} className="btn btn-outline w-full font-bold"><GrGoogle />Register With Google</button>
            </Form>
        </div>
    );
};

export default Register;