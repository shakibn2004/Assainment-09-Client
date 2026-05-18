import Image from "next/image";
import Link from "next/link";

const petPromised = await fetch("https://api.thecatapi.com/v1/images/search?limit=10")
const pets = await petPromised.json();
const AllPets = async () => {

    return (
        <div className="max-w-300 w-[75%] mx-auto py-20 ">
            <div className="space-y-2">
                <p className="uppercase primary-text font-semibold">Adoption center</p>
                <h1 style={{ fontFamily: "'Fraunces', serif" }} className='text-[2.5rem] font-bold'>All Available Pets</h1>
                <p className="secondary-text font-semibold">Browse, search, and filter to find your perfect companion.</p>
            </div>

            <div className="flex gap-4 mt-12 justify-between items-center">
                <input type="search" placeholder="Search pets by name" className="secondary-border grow-4 rounded p-2 focus:outline-1 outline-[#e8622a]" />
                <select name="" className="secondary-border grow-1 rounded py-2.5 px-2 focus:outline-1 outline-[#e8622a]" id="">
                    <option value="">All</option>
                    <option value="">Dogs</option>
                    <option value="">Cats</option>
                    <option value="">Birds</option>
                    <option value="">Rabbits</option>
                </select>
                <div className="total-found secondary-text">founds{pets.length}</div>
            </div>

            <div className="pets-container grid grid-cols-3 gap-6">
                {
                    pets.map((pet, idx) => {
                        return (
                            <div key={idx} className="pet-card mt-12 secondary-border rounded-2xl">
                                <div className="pet-card h-50 relative overflow-hidden">
                                    <Image width={0} height={0} src={pet.url} sizes="100vw" style={{ width: '100%', height: '100%' }}  className='rounded-t-2xl' alt={pet.id} />
                                    <span className={`pet-status-badge absolute top-3 right-5 uppercase text-[#166534] font-semibold bg-[#d1f4e0] px-2 py-1 rounded-full text-[12px]`}>
                                        Availabe
                                    </span>
                                </div>
                                <div className="pet-card-body p-3">
                                    <div style={{ fontFamily: "'Fraunces', serif" }} className="pet-card-name font-bold text-[1.25rem]">Luna</div>
                                    <div className="pet-card-breed">Golden Retriever · Dog</div>
                                    <div className="pet-card-tags my-2">
                                        <span className="tag">🎂 2 years</span>
                                        <span className="tag">Male</span>
                                        <span className="tag">📍 Dhaka</span>
                                    </div>
                                    <div className="pet-card-footer flex justify-between items-center">
                                        <div style={{ fontFamily: "'Fraunces', serif" }} className="pet-price primary-text text-[1.5rem] font-bold flex items-center gap-1">৳500 <span className="text-[12px] font-medium secondary-text">adoption fee</span></div>
                                        <Link className="btn primary-btn btn-sm" href={`/public/all-pets/${pet.id}`}>
                                            View Details
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        )
                    })
                }
            </div>
        </div>
    );
};

export default AllPets;