import { Button, Input, Label, Modal, Surface, TextField } from "@heroui/react";
import { GrUpdate } from "react-icons/gr";
import { authClient } from "../../../lib/auth-client";

const Modal2 = () => {

    const handleSubmit = async (e) => {
        e.preventDefault();
        const name = e.target.name.value

        await authClient.updateUser({
            name: name
        })
    }
    return (
        <div>

            <Modal>
                <Button className="btn btn-info font-bold text-2xl">Update Info</Button>
                <Modal.Backdrop>
                    <Modal.Container placement="auto">
                        <Modal.Dialog className="sm:max-w-md">
                            <Modal.CloseTrigger />
                            <Modal.Header>
                                <Modal.Icon className="bg-accent-soft text-accent-soft-foreground">
                                    <GrUpdate />
                                </Modal.Icon>
                            </Modal.Header>
                            <Modal.Body className="p-6">
                                <Surface variant="default">
                                    <form className="flex flex-col gap-4" onSubmit={handleSubmit}>
                                        <TextField className="w-full" name="name" type="text">
                                            <Label>Name</Label>
                                            <Input placeholder="Enter your name" />
                                        </TextField>
                                        <Modal.Footer>
                                            <Button slot="close" variant="secondary">
                                                Cancel
                                            </Button>
                                            <Button type="submit" slot="close">Update</Button>
                                        </Modal.Footer>
                                    </form>
                                </Surface>
                            </Modal.Body>

                        </Modal.Dialog>
                    </Modal.Container>
                </Modal.Backdrop>
            </Modal>
        </div>
    );
};

export default Modal2;