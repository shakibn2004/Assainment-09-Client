'use client'
import { authClient } from "@/app/lib/auth-client";
import { redirect } from "next/navigation";

const AddPet = () => {
    const addPet = async (e) => {
        e.preventDefault();
        const formData = new FormData(e.currentTarget);
        const userData = Object.fromEntries(formData.entries());
        // send data to server
        try {
            const res = await fetch('http://localhost:8000/dashboard/add-pet', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(userData),
            });
            if (!res.ok) {
                throw new Error('Failed to add user');
            }
    
            return true;
        } catch (error) {
            console.error('Error adding user:', error);
            return false;
        }
    }


    const {
        data: session,
        isPending,
        error
    } = authClient.useSession();

    if (isPending) {
        return <p>Loading...</p>;
    }

    return (
        <div className='flex flex-col flex-1'>
            <div className="py-12 px-10 w-full mx-auto">
                <div className="mb-8 pl-0.5">
                    <h1 className="text-3xl font-serif font-bold tracking-tight">Add a Pet</h1>
                    <p className="secondary-text text-sm mt-1">Fill in the details below to list a pet for adoption.</p>
                </div>

                <div className="p-6 sm:p-8 rounded-xl secondary-border shadow-sm">
                    <form onSubmit={addPet}>

                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-4">

                            <div className="flex flex-col gap-1">
                                <label htmlFor="ap_name" className="text-xs font-semibold uppercase tracking-wide text-zinc-500">Pet Name</label>
                                <input type="text" name="name" id="ap_name" placeholder="e.g. Biscuit" className="px-3 py-2 text-sm rounded-md border border-zinc-300 focus:outline-none focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 bg-white" required/>
                            </div>

                            <div className="flex flex-col gap-1">
                                <label htmlFor="ap_species" className="text-xs font-semibold uppercase tracking-wide text-zinc-500">Species</label>
                                <select id="ap_species" name="species" className="px-3 py-2 text-sm rounded-md border border-zinc-300 focus:outline-none focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 bg-white" required>
                                    <option value="dog">Dog</option>
                                    <option value="cat">Cat</option>
                                    <option value="bird">Bird</option>
                                    <option value="rabbit">Rabbit</option>
                                    <option value="other">Other</option>
                                </select>
                            </div>

                            <div className="flex flex-col gap-1">
                                <label htmlFor="ap_breed" className="text-xs font-semibold uppercase tracking-wide text-zinc-500">Breed / Type</label>
                                <input type="text" id="ap_breed" name="breed" placeholder="e.g. Golden Retriever" className="px-3 py-2 text-sm rounded-md border border-zinc-300 focus:outline-none focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 bg-white" required/>
                            </div>

                            <div className="flex flex-col gap-1">
                                <label htmlFor="ap_age" className="text-xs font-semibold uppercase tracking-wide text-zinc-500">Age (years)</label>
                                <input type="number" id="ap_age" name="age" placeholder="2" className="px-3 py-2 text-sm rounded-md border border-zinc-300 focus:outline-none focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 bg-white" required/>
                            </div>

                            <div className="flex flex-col gap-1">
                                <label htmlFor="ap_gender" className="text-xs font-semibold uppercase tracking-wide text-zinc-500">Gender</label>
                                <select id="ap_gender" name="gender" className="px-3 py-2 text-sm rounded-md border border-zinc-300 focus:outline-none focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 bg-white" required>
                                    <option value="male">Male</option>
                                    <option value="female">Female</option>
                                </select>
                            </div>

                            <div className="flex flex-col gap-1">
                                <label htmlFor="ap_health" className="text-xs font-semibold uppercase tracking-wide text-zinc-500">Health Status</label>
                                <select id="ap_health" name="healthstatus" className="px-3 py-2 text-sm rounded-md border border-zinc-300 focus:outline-none focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 bg-white" required>
                                    <option value="excellent">Excellent</option>
                                    <option value="good">Good</option>
                                    <option value="fair">Fair</option>
                                </select>
                            </div>

                            <div className="flex flex-col gap-1">
                                <label htmlFor="ap_image" className="text-xs font-semibold uppercase tracking-wide text-zinc-500">Pet Image URL</label>
                                <input type="url" id="ap_image" name="image" placeholder="https://..." className="px-3 py-2 text-sm rounded-md border border-zinc-300 focus:outline-none focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 bg-white"/>
                            </div>

                            <div className="flex flex-col gap-1">
                                <label htmlFor="ap_fee" className="text-xs font-semibold uppercase tracking-wide text-zinc-500">Adoption Fee (৳)</label>
                                <input type="number" id="ap_fee" name="adoptionfee" placeholder="500" className="px-3 py-2 text-sm rounded-md border border-zinc-300 focus:outline-none focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 bg-white" required/>
                            </div>

                            <div className="flex flex-col gap-1">
                                <label htmlFor="ap_location" className="text-xs font-semibold uppercase tracking-wide text-zinc-500">Current Location</label>
                                <input type="text" id="ap_location" name="loaction" placeholder="e.g. Dhaka" className="px-3 py-2 text-sm rounded-md border border-zinc-300 focus:outline-none focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 bg-white" />
                            </div>
                            <div className="flex flex-col gap-1">
                                <label htmlFor="ap_location" className="text-xs font-semibold uppercase tracking-wide text-zinc-500">AVAILABILITY</label>
                                <input type="text" id="ap_location" name="isavailable" placeholder="e.g. Dhaka" className="px-3 py-2 focus:outline-none bg-white" value="AVAILABLE" readOnly/>
                            </div>

                            <div className="flex flex-col gap-1">
                                <label htmlFor="ap_vaccinated" className="text-xs font-semibold uppercase tracking-wide text-zinc-500">Is Vaccinated?</label>
                                <select id="ap_vaccinated" name="vaccinated" className="px-3 py-2 text-sm rounded-md border border-zinc-300 focus:outline-none focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 bg-white">
                                    <option value="yes">Yes</option>
                                    <option value="no">No</option>
                                </select>
                            </div>

                            <div className="flex flex-col gap-1 sm:col-span-2 mt-2">
                                <label htmlFor="ap_description" className="text-xs font-semibold uppercase tracking-wide text-zinc-500">About the Pet (Description)</label>
                                <textarea id="ap_description" name="description" rows="4" placeholder="Tell potential adopters about this pet's personality, habits, and needs..." className="px-3 py-2 text-sm rounded-md border border-zinc-300 focus:outline-none focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 bg-white resize-y"></textarea>
                            </div>

                            <div className="flex flex-col gap-1 sm:col-span-2 mt-2">
                                <label className="text-xs font-semibold uppercase tracking-wide text-zinc-400">Listing Owner Email</label>
                                <input type="email" name="owneremail" value={session.user.email} readOnly className="px-3 py-2 text-sm rounded-md border border-zinc-200 bg-zinc-50 text-zinc-400 select-none cursor-not-allowed focus:outline-none" />
                            </div>

                        </div>

                        <div className="flex items-center justify-end gap-3 border-t border-zinc-100 pt-6 mt-8">
                            <button type="button" onClick={() => redirect('/dashboard/my-requests')} className="px-4 py-2 secondary-border rounded-md transition-colors">
                                Cancel
                            </button>
                            <button type="submit" className="primary-btn transition-colors">
                                Add Pet
                            </button>
                        </div>

                    </form>
                </div>
            </div>
        </div>
    );
};

export default AddPet;