'use client'

import { useRouter } from "next/navigation";
import EditModal from "./EditModal";

const EditKisting = ({ id }) => {
    const router = useRouter()
    const handleEdit = async (e) => {
        e.preventDefault()
        const formData = new FormData(e.currentTarget);
        const userData = Object.fromEntries(formData.entries());

        try {
            const response = await fetch(`http://localhost:8000/dashboard/my-listings/${id}`, {
                method: 'PATCH',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(userData),
            });

            const data = await response.json();

            if (data.modifiedCount > 0) {
                router.refresh()
            } else {
                console.log('server error');
            }
        } catch (error) {
            console.error("Error updating data:", error);
        }
    };

    return (
        <div>
            <EditModal handleEdit={handleEdit} />
        </div>
    );
};

export default EditKisting;