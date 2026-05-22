'use client'

import { useRouter } from "next/navigation";
import DeleteListingModal from "./DeleteListingModal";
import { Slide, toast } from "react-toastify";

const DeleteListing = ({ id, petName }) => {
    const router = useRouter()

    // delete mylisted pets
    const handleDeletePet = async () => {
        try {

            const response = await fetch(`${process.env.NEXT_PUBLIC_LOCAL_URI}/dashboard/my-listings/${id}`, {
                method: 'DELETE',
            });

            const data = await response.json();


            if (data.deletedCount > 0) {

                toast.success('you have deleted an item', {
                    position: "top-center",
                    autoClose: 5000,
                    hideProgressBar: false,
                    closeOnClick: false,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                    theme: "dark",
                    transition: Slide,
                });
                router.refresh()
            }
        } catch (error) {
            console.error(error);
        }
    };

    return (
        <div>
            <DeleteListingModal handleDeletePet={handleDeletePet} petName={petName} />
        </div>
    );
};

export default DeleteListing;