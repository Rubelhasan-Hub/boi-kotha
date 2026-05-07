"use client";
import { Button,FieldError, Form, Input, Label, TextField } from "@heroui/react";
import { authClient } from "../../../lib/auth-client";
import { GrUpdate } from "react-icons/gr";

const UpdateProfile = () => {

    const handleSubmit = async (e) => {
        e.preventDefault();
        const name = e.target.name.value
        const image = e.target.image.value;


        await authClient.updateUser({
            name: name,
            image: image,
        })
    }
    return (
        <div className="flex items-center justify-center m-20">
            <Form onSubmit={handleSubmit} className="flex w-96 flex-col gap-4 border-4 border-gray-400 p-10 rounded-2xl">
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
                    <Input placeholder="Enter your Updated name" />
                    <FieldError />
                </TextField>
                <TextField
                    isRequired
                    name="image">
                    <Label className="text-white">Image URl</Label>
                    <Input placeholder="Enter image URL" />
                    <FieldError />
                </TextField>
                <div className="flex gap-2">
                    <Button type="submit" className="font-bold btn btn-info">
                        <GrUpdate className="mr-2" />
                        Update Profile
                    </Button>
                    <Button type="reset" variant="secondary" className="font-bold btn">
                        Reset
                    </Button>
                </div>
            </Form>
        </div>
    );
};

export default UpdateProfile;