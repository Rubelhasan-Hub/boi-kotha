"use client";
import { Check } from "@gravity-ui/icons";
import { Button, Description, FieldError, Form, Input, Label, TextField } from "@heroui/react";
import Link from "next/link";

const Login = () => {
    return (
        <div className="flex items-center justify-center m-20">
            <Form className="flex w-96 flex-col gap-4 border-4 border-gray-400 p-10 rounded-2xl">
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
                    <Button type="submit" className="font-bold btn btn-accent">
                        <Check />
                        LOGIN
                    </Button>
                    <Button type="reset" variant="secondary" className="font-bold btn">
                        Reset
                    </Button>
                </div>
                <h1>Do not have Account ? <Link href="/register"><button className="text-secondary cursor-pointer">Registration</button></Link></h1>
            </Form>
        </div>
    );
};

export default Login;