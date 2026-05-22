'use client'

import { useRouter } from "next/navigation";
import EditModal from "./EditModal";
import { Slide, toast } from "react-toastify";
import { useState } from "react";

const EditKisting = ({ id }) => {
    const router = useRouter()
    const [currentData, setCurrentData] = useState(null)
    const handleEdit = async (e) => {
        e.preventDefault()
        const formData = new FormData(e.currentTarget);
        const userData = Object.fromEntries(formData.entries());

        try {
            const response = await fetch(`${process.env.NEXT_PUBLIC_LOCAL_URI}/dashboard/my-listings/${id}`, {
                method: 'PATCH',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(userData),
            });

            const data = await response.json();
            
            
            if (data.modifiedCount > 0) {
                router.refresh()
                toast.success('Pet information updated', {
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
            } else {
                toast.success('error happend', {
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
            }
        } catch (error) {
            console.error("Error updating data:", error);
        }
    };


    return (
        <div>
            <EditModal handleEdit={handleEdit} currentData={currentData} />
        </div>
    );
};

export default EditKisting;