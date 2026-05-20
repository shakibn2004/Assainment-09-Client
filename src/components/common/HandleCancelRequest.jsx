'use client'

import { useRouter } from "next/navigation";

const HandleCancelRequest = ({ myRequestedData, id }) => {
    const router = useRouter()
    const handleCancel = async () => {
        const filterMyRequest = myRequestedData.filter(r => r._id !== id);
        const petRes = await fetch('http://localhost:8000');
        const pet = await petRes.json();
        try {

            const response = await fetch(`http://localhost:8000/dashboard/my-requests/${id}`, {
                method: 'DELETE',
            });

            const data = await response.json();


            if (data.deletedCount > 0) {
                router.refresh()
                // toast here

            }
            // UPDATE pet availability


            const { _id, ...restPet } = pet;
            console.log(restPet);

            const updatedPet = {
                ...restPet,
                isavailable: true
            };


            const updateResponse = await fetch(
                `http://localhost:8000/dashboard/my-listings/${id}`,
                {
                    method: 'PATCH',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify(updatedPet),
                }
            );

            if (!response.ok) {
                throw new Error('Failed to update pet');
            }

            const updateResult = await response.json();


            // Sccess
          

        } catch (error) {

            console.error("Error:", error);

        }


    }
    return (
        <div>

            <button
                onClick={handleCancel}
                className="rounded-md bg-rose-50 border border-rose-200 px-2.5 py-1.5 text-xs font-medium text-rose-700 hover:bg-rose-100 transition-colors"
            >
                ✕ Cancel
            </button>
        </div>
    );
};

export default HandleCancelRequest;

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