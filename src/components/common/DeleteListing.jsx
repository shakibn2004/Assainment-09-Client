'use client'

import { useRouter } from "next/navigation";
import DeleteListingModal from "./DeleteListingModal";

const DeleteListing = ({ id, petName }) => {
    const router = useRouter()

    // delete mylisted pets
    const handleDeletePet = async () => {
        try {

            const response = await fetch(`http://localhost:8000/dashboard/my-listings/${id}`, {
                method: 'DELETE',
            });

            const data = await response.json();


            if (data.deletedCount > 0) {

                // toast here
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