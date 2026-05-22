import React from 'react';

const AllPetsData = () => {
    
    const allPetFn = async () => {
        const allPetsPromised = await fetch('process.env.NEXT_PUBLIC_LOCAL_URI');
        const allPets = await allPetsPromised.json();
        console.log(allPets);

    }

    return (
        <div>

        </div>
    );
};

export default AllPetsData;