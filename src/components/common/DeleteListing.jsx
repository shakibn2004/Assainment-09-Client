'use client'

import { useRouter } from "next/navigation";

const DeleteListing = ({ id }) => {
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

            <button
                onClick={handleDeletePet}
                className="px-3 py-1.5 text-xs font-medium hover:bg-rose-100 border border-rose-200 rounded-md transition-colors"
            >
                Delete
            </button>
        </div>
    );
};

export default DeleteListing;