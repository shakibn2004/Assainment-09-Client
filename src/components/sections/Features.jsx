import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

const Features = ({ pets }) => {
    return (
        <div className='dark:bg-black dark:text-white py-10'>
            <div className='max-w-300 w-[90%] md:w-[75%] mx-auto'>
                <div className="space-y-2">
                    <p className="uppercase primary-text font-semibold">Featured Pets</p>
                    <h1 style={{ fontFamily: "'Fraunces', serif" }} className='text-[2.1rem] font-bold'>Pets Looking for a Home</h1>
                    <p className="secondary-text font-semibold">Every pet here has been verified by our shelter partners.</p>
                </div>
                <div className="pets-container grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {
                        pets.slice(0, 6).map((pet, idx) => {
                            return (

                                <div key={idx} className="pet-card mt-12 secondary-border rounded-2xl">
                                    <div className="pet-card h-50 relative overflow-hidden">
                                        <Image width={0} height={0} src={pet.image} sizes="100vw" style={{ width: '100%', height: '100%' }} className='rounded-t-2xl' alt={pet.name} loading='lazy' />
                                        <span className={`pet-status-badge absolute top-3 right-5 uppercase ${pet.isavailable ? "text-[#166534] bg-[#d1f4e0]" : "text-[#ffffff] bg-[#ff0000c2]"} font-semibold px-2 py-1 rounded-full text-[12px]`}>
                                            {pet.isavailable ? "AVAILABE" : "NOT AVAILABE"}
                                        </span>
                                    </div>
                                    <div className="pet-card-body p-3">
                                        <div style={{ fontFamily: "'Fraunces', serif" }} className="pet-card-name font-bold text-[1.25rem]">{pet.name}</div>
                                        <div className="pet-card-breed">{pet.breed}</div>
                                        <div className="pet-card-tags my-2 flex gap-3">
                                            <span className="tag secondary-border w-fit px-2 py-1 rounded-full flex items-center">{pet.age}</span>
                                            <span className="tag secondary-border w-fit px-2 py-1 rounded-full flex items-center">{pet.gender}</span>
                                        </div>
                                        <div className="tag my-4">{pet.loaction}</div>
                                        <div className="pet-card-footer flex justify-between items-center">
                                            <div style={{ fontFamily: "'Fraunces', serif" }} className="pet-price primary-text text-[1.5rem] font-bold flex items-center gap-1">৳{pet.adoptionfee} <span className="text-[12px] font-medium secondary-text">adoption fee</span></div>
                                            <Link className="btn primary-btn btn-sm" href={`/public/all-pets/${pet._id}`}>
                                                View Details
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                            )
                        })
                    }
                </div>
                <div className="text-center mt-10">
                    <Link
                        href={'/public/all-pets'}
                        className="inline-flex items-center justify-center border hover:border-gray-500 border-amber-600 text-amber-600 hover:text-gray-700 font-bold px-8 py-3 rounded-xl transition-colors duration-200"

                    >
                        View All Pets →
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default Features;