import { auth } from '@/app/lib/auth';
import DeleteListing from '@/components/common/DeleteListing';
import EditKisting from '@/components/common/EditKisting';
import { headers } from 'next/headers';
import Image from 'next/image';
import Link from 'next/link';


const MyListings = async () => {
    const session = await auth.api.getSession({
        headers: await headers()
    });

    const petPromised = await fetch('http://localhost:8000')
    const petsData = await petPromised.json()
    const myListedPets = petsData.filter(pet => session.user.email === pet.owneremail)


    return (
        <div className='flex flex-col flex-1'>
            <div className="mx-auto max-w-5xl px-4 py-6 ">

                {/* Overview Metrics Cards */}
                <div className="mb-8 grid grid-cols-2 gap-4 sm:grid-cols-4">

                    <div

                        className="flex items-center gap-4 rounded-xl border border-zinc-200  p-5 shadow-sm"
                    >
                        <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-lg text-2xl">
                            {'stat.icon'}
                        </div>
                        <div>
                            <div className="text-xl font-bold tracking-tight ">{'stat.num'}</div>
                            <div className="text-xs font-medium uppercase tracking-wider ">{'stat.label'}</div>
                        </div>
                    </div>

                </div>

                {/* Main Listings Body */}
                {
                    !myListedPets.length ? (
                        <div className="rounded-xl border border-dashed border-zinc-200 p-12 text-center">
                            <div className="text-4xl mb-3">🐾</div>
                            <h4 className="text-base font-semibold">No listings yet</h4>
                            <p className="text-sm text-zinc-500 mt-1 mb-5">Ready to find a forever home for a pet?</p>
                            <Link
                                href={'/dashboard/add-pet'}
                                className="inline-flex items-center justify-center rounded-lg  px-4 py-2 primary-btn"
                            >
                                Add Your First Pet
                            </Link>
                        </div>

                    ) : (
                        myListedPets.map(pet => {
                            return (
                                <div key={pet.name} className="flex flex-col gap-4">
                                    <div
                                        key={'pet.id'}
                                        className="flex flex-col items-center sm:flex-row gap-4 border border-zinc-200  p-4 shadow-sm rounded-xl transition-all hover:border-zinc-300"
                                    >
                                        {/* Pet Image Thumbnail */}
                                        {
                                            pet.image !== "" ? (
                                                <Image
                                                    src={pet.image}
                                                    alt={pet.name}
                                                    width={0} height={0} sizes='100vw' style={{width: '50px', height: '50px'}}
                                                    className="h-24 w-full sm:w-24 rounded-lg object-cover  shrink-0"
                                                />

                                            ) : (
                                                <h1>😩</h1>
                                            )
                                        }

                                        {/* Content & Action Controls */}
                                        <div className="flex flex-col sm:flex-row sm:items-center justify-between flex-1 gap-4 min-w-0">
                                            <div>
                                                <h3 className="font-semibold uppercase  text-base leading-tight">
                                                    {pet.name}
                                                </h3>
                                                <p className="text-xs mt-1">
                                                    {pet.breed} <span className='font-bold ml-1'>${pet.adoptionfee}</span>
                                                </p>

                                                <span className={`inline-block rounded-full ${pet.isavailable?'bg-green-400/30 text-green-700':'bg-red-400/30 text-red-600'} px-2 py-0.5 text-[10px] font-bold uppercase tracking-wider border mt-2
          `}
                                                >
                                                    {pet.isavailable?"AVAILABE":"NOT AVAILABE"}
                                                </span>
                                            </div>

                                            {/* Operational Group Buttons */}
                                            <div className="flex flex-wrap items-center gap-2 sm:justify-end">
                                                <button
                                                    className="px-3 py-1.5 font-bold secondary-border rounded-md transition-colors"
                                                >
                                                    Requests
                                                </button>

                                                <Link
                                                href={`/public/all-pets/${pet._id}`}
                                                    className="px-3 py-1.5 font-bold secondary-border rounded-md transition-colors"
                                                >
                                                    View
                                                </Link>

                                                <EditKisting id={pet._id} />
                                                <DeleteListing id={pet._id} petName={pet.name} />
                                                
                                            </div>
                                        </div>
                                    </div>

                                </div>

                            )
                        })

                    )
                }



                {/* Target injection element for modal setups */}
                <div id="modalContainer" />
            </div>
        </div>
    );
};

export default MyListings;