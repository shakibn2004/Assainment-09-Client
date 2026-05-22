'use client'
import { Button, Modal } from '@heroui/react';

const EditModal = ({ handleEdit }) => {
    return (
        <div>
            <Modal>
                <Button variant="secondary" className={'primary-border primary-text rounded-md'}>Update</Button>
                <Modal.Backdrop>
                    <Modal.Container >
                        <Modal.Dialog className="sm:max-w-300">
                            <Modal.CloseTrigger />
                            <div className='flex flex-col flex-1'>
                                <div className="py-12 px-10 w-full mx-auto">
                                    <div className="mb-8 pl-0.5">
                                        <h1 className="text-3xl font-serif font-bold tracking-tight">Update pet information</h1>
                                        <p className="secondary-text text-sm mt-1">Fill in the details below to list a pet for adoption.</p>
                                    </div>

                                    <div className="p-6 sm:p-8 rounded-xl secondary-border shadow-sm">
                                        <form onSubmit={handleEdit}>

                                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-4">

                                                <div className="flex flex-col gap-1">
                                                    <label htmlFor="ap_name" className="text-xs font-semibold uppercase tracking-wide text-zinc-500">Pet Name</label>
                                                    <input type="text" name="name" id="ap_name" placeholder="e.g. Biscuit" className="px-3 py-2 text-sm rounded-md border border-zinc-300 focus:outline-none focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 bg-white" required />
                                                </div>

                                                <div className="flex flex-col gap-1">
                                                    <label htmlFor="ap_species" className="text-xs font-semibold uppercase tracking-wide text-zinc-500">Species</label>
                                                    <select id="ap_species" name="species" className="px-3 py-2 text-sm rounded-md border border-zinc-300 focus:outline-none focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 bg-white">
                                                        <option value="dog">Dog</option>
                                                        <option value="cat">Cat</option>
                                                        <option value="bird">Bird</option>
                                                        <option value="rabbit">Rabbit</option>
                                                        <option value="other">Other</option>
                                                    </select>
                                                </div>

                                                <div className="flex flex-col gap-1">
                                                    <label htmlFor="ap_breed" className="text-xs font-semibold uppercase tracking-wide text-zinc-500">Breed / Type</label>
                                                    <input type="text" id="ap_breed" name="breed" placeholder="e.g. Golden Retriever" className="px-3 py-2 text-sm rounded-md border border-zinc-300 focus:outline-none focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 bg-white" />
                                                </div>

                                                <div className="flex flex-col gap-1">
                                                    <label htmlFor="ap_age" className="text-xs font-semibold uppercase tracking-wide text-zinc-500">Age (years)</label>
                                                    <input type="number" id="ap_age" name="age" placeholder="2" className="px-3 py-2 text-sm rounded-md border border-zinc-300 focus:outline-none focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 bg-white" />
                                                </div>

                                                <div className="flex flex-col gap-1">
                                                    <label htmlFor="ap_gender" className="text-xs font-semibold uppercase tracking-wide text-zinc-500">Gender</label>
                                                    <select id="ap_gender" name="gender" className="px-3 py-2 text-sm rounded-md border border-zinc-300 focus:outline-none focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 bg-white">
                                                        <option value="male">Male</option>
                                                        <option value="female">Female</option>
                                                    </select>
                                                </div>

                                                <div className="flex flex-col gap-1">
                                                    <label htmlFor="ap_health" className="text-xs font-semibold uppercase tracking-wide text-zinc-500">Health Status</label>
                                                    <select id="ap_health" name="healthstatus" className="px-3 py-2 text-sm rounded-md border border-zinc-300 focus:outline-none focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 bg-white">
                                                        <option value="excellent">Excellent</option>
                                                        <option value="good">Good</option>
                                                        <option value="fair">Fair</option>
                                                    </select>
                                                </div>

                                                <div className="flex flex-col gap-1">
                                                    <label htmlFor="ap_image" className="text-xs font-semibold uppercase tracking-wide text-zinc-500">Pet Image URL</label>
                                                    <input type="url" id="ap_image" name="image" placeholder="https://..." className="px-3 py-2 text-sm rounded-md border border-zinc-300 focus:outline-none focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 bg-white" />
                                                </div>

                                                <div className="flex flex-col gap-1">
                                                    <label htmlFor="ap_fee" className="text-xs font-semibold uppercase tracking-wide text-zinc-500">Adoption Fee (৳)</label>
                                                    <input type="number" id="ap_fee" name="adoptionfee" placeholder="500" className="px-3 py-2 text-sm rounded-md border border-zinc-300 focus:outline-none focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 bg-white" />
                                                </div>

                                                <div className="flex flex-col gap-1">
                                                    <label htmlFor="ap_location" className="text-xs font-semibold uppercase tracking-wide text-zinc-500">Current Location</label>
                                                    <input type="text" id="ap_location" name="loaction" placeholder="e.g. Dhaka" className="px-3 py-2 text-sm rounded-md border border-zinc-300 focus:outline-none focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 bg-white" />
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

                                            </div>
                                            <Modal.Footer className='space-x-3 mt-6'>
                                                <Button className="w-fit secondary-border bg-white text-black" slot="close">
                                                    Calcel
                                                </Button>
                                                <Button type='submit' className="w-fit secondary-border bg-white text-black primary-btn">
                                                    Save Changes
                                                </Button>
                                            </Modal.Footer>
                                        </form>
                                    </div>
                                </div>
                            </div>
                        </Modal.Dialog>
                    </Modal.Container>
                </Modal.Backdrop>
            </Modal>
        </div>
    );
};

export default EditModal;