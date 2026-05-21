"use client";

import { Rocket } from "@gravity-ui/icons";
import { Button, Modal } from "@heroui/react";


const DeleteListingModal = ({ handleDeletePet, petName }) => {
    return (

        <Modal>
            <Button variant="secondary" className="primary-btn">Delete</Button>
            <Modal.Backdrop>
                <Modal.Container>
                    <Modal.Dialog className="sm:max-w-90">
                        <Modal.CloseTrigger />
                        <Modal.Header className="flex flex-row items-center">
                            Do you want to delete<span className="text-xl font-bold">{petName}</span>?
                        </Modal.Header>

                        <Modal.Footer>
                            <Button className="bg-white text-black secondary-border rounded" slot="close">
                                Cancel
                            </Button>
                            <button
                                onClick={handleDeletePet}
                                className="px-3 py-1.5 primary-btn font-bold"
                            >
                                Conform Delete
                            </button>
                        </Modal.Footer>
                    </Modal.Dialog>
                </Modal.Container>
            </Modal.Backdrop>
        </Modal>

    );
};

export default DeleteListingModal;