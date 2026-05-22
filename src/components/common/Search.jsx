'use client'

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

const Search = ({ pets }) => {

    const [searchData, setSearchData] = useState('');
    const [filterData, setFilterData] = useState('All');

    // Search Input
    const handleSearch = (e) => {
        setSearchData(e.target.value);
    }

    // Filter Select
    const handleFilter = (e) => {
        setFilterData(e.target.value);
    }

    // Search + Filter
    const filteredPets = pets.filter((pet) => {

        // Search by name
        const matchSearch = pet.name
            .toLowerCase()
            .includes(searchData.toLowerCase());

        // Filter by species
        const matchFilter =
            filterData === 'All'
                ? true
                : pet.species === pets;

        return matchSearch && matchFilter;
    });

    return (
        <div className='mb-3 h-fit justify-between gap-4'>

            {/* Search + Filter */}
            <div className="mt-4 gap-3 grid grid-cols-[2fr_1fr]">

                <input
                    onChange={handleSearch}
                    type="search"
                    placeholder="Search pets by name"
                    className="secondary-border rounded p-2 focus:outline-1 outline-[#e8622a]"
                />

                <select
                    onChange={handleFilter}
                    className="secondary-border grow rounded py-2.5 px-2 focus:outline-1 outline-[#e8622a]"
                >
                    <option value="All">All</option>
                    <option value="Dogs">Dogs</option>
                    <option value="Cats">Cats</option>
                    <option value="Birds">Birds</option>
                    <option value="Rabbits">Rabbits</option>
                </select>

                <div className="total-found secondary-text col-start-2 place-self-end px-2">
                    Founds {filteredPets.length}
                </div>
            </div>

            {/* Pets Card */}
            <div className="pets-container grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">

                {
                    filteredPets.map((pet, idx) => (
                        <div
                            key={idx}
                            className="pet-card mt-12 secondary-border rounded-2xl"
                        >

                            {/* Image */}
                            <div className="pet-card h-50 relative overflow-hidden">

                                <Image
                                    width={0}
                                    height={0}
                                    src={pet.image}
                                    sizes="100vw"
                                    style={{
                                        width: '100%',
                                        height: '100%'
                                    }}
                                    className='rounded-t-2xl'
                                    alt={pet.name}
                                />

                                {/* Status */}
                                <span
                                    className={`absolute top-3 right-5 uppercase font-semibold px-2 py-1 rounded-full text-[12px]
                                    ${pet.isavailable
                                            ? "text-[#166534] bg-[#d1f4e0]"
                                            : "text-white bg-red-500"
                                        }`}
                                >
                                    {pet.isavailable
                                        ? "AVAILABLE"
                                        : "NOT AVAILABLE"}
                                </span>
                            </div>

                            {/* Body */}
                            <div className="p-3">

                                <div className="font-bold text-[1.25rem]">
                                    {pet.name}
                                </div>

                                <div>{pet.breed}</div>

                                <div className="flex gap-3 my-2">

                                    <span className="secondary-border px-2 py-1 rounded-full">
                                        {pet.age}
                                    </span>

                                    <span className="secondary-border px-2 py-1 rounded-full">
                                        {pet.gender}
                                    </span>

                                </div>

                                <div className="my-3">
                                    {pet.loaction}
                                </div>

                                <div className="flex justify-between items-center">

                                    <div className="text-[1.3rem] font-bold">
                                        ৳{pet.adoptionfee}
                                    </div>

                                    <Link
                                        className="btn primary-btn btn-sm"
                                        href={`/public/all-pets/${pet._id}`}
                                    >
                                        View Details
                                    </Link>

                                </div>
                            </div>
                        </div>
                    ))
                }

            </div>
        </div>
    );
};

export default Search;