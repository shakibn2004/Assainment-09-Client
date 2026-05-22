import { auth } from "@/app/lib/auth";
import Search from "@/components/common/Search";
import { headers } from "next/headers";
import Image from "next/image";
import Link from "next/link";

const AllPets = async () => {

    const petPromised = await fetch(`${process.env.NEXT_PUBLIC_LOCAL_URI}`);
    const pets = await petPromised.json();


    return (
        <div className="max-w-300 w-[90%] lg:w-[75%] mx-auto py-20 ">
            <div className="space-y-2">
                <p className="uppercase primary-text font-semibold">Adoption center</p>
                <h1 style={{ fontFamily: "'Fraunces', serif" }} className='text-[2.5rem] font-bold'>All Available Pets</h1>
                <p className="secondary-text font-semibold">Browse, search, and filter to find your perfect companion.</p>
            </div>

            <Search pets={pets} />

        </div>
    );
};

export default AllPets;