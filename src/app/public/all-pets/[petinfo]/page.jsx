
import { auth } from '@/app/lib/auth';
import { revalidatePath } from 'next/cache';
import { headers } from 'next/headers';
import Image from 'next/image';
import Link from 'next/link';
import { toast } from 'react-toastify';


const PetInfo = async ({ params }) => {
    const session = await auth.api.getSession({
        headers: await headers()
    });

    const petObj = await params;
    const { petinfo } = petObj;

    const petPromised = await fetch(`${process.env.NEXT_PUBLIC_LOCAL_URI}/public/all-pets/${petinfo}`, {
        cache: 'no-store'
    });
    const pet = await petPromised.json();


    // Get Form data
    const pickupData = async (formData) => {
        'use server'
        const today = new Date().toISOString().split("T")[0];
        const data = Object.fromEntries(formData.entries());
        const allData = { ...data, ...pet, requeststatus: "Pending", requestdate: today }
        // send data to server
        try {


            //  POST adoption request


            const res = await fetch(
                `${process.env.NEXT_PUBLIC_LOCAL_URI}/public/all-pets/${petinfo}`,
                {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify(allData),
                }
            );


            if (!res.ok) {

            }
            

            const result = await res.json();




            // UPDATE pet availability


            const { _id, ...restPet } = pet;

            const updatedPet = {
                ...restPet,
                isavailable: false,
            };


            const response = await fetch(
                `${process.env.NEXT_PUBLIC_LOCAL_URI}/dashboard/my-listings/${petinfo}`,
                {
                    method: 'PATCH',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify(updatedPet),
                }
            );

            if (!response.ok) {
                throw new Error('Failed to update pet');
            }


            // Sccess
            revalidatePath(`/public/all-pets/${[petinfo]}`)
            

        } catch (error) {

            console.error("Error:", error);

        }


    }

    return (
        <div className='flex flex-col flex-1'>
            <div className="max-w-7xl mx-auto px-4 py-8">

                <Link
                    href={'/public/all-pets'}
                    className="inline-flex primary-btn items-center gap-2 px-3 py-1.5 text-sm font-medium  rounded-md mb-6"
                >
                    ← Back to All Pets
                </Link>


                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">


                    <div className="space-y-6">
                        <Image
                            src={pet.image}
                            width={0}
                            height={0}
                            sizes='100vw'
                            style={{ width: '100%', height: '50%' }}
                            alt={pet.name}
                            className="w-full h-96 rounded-2xl shadow-md"
                        />
                        <div>
                            <h3 className="font-serif text-xl font-semibold mb-3">
                                About {pet.name}
                            </h3>
                            <p className="text-gray-600 leading-5 text-sm md:text-base">
                                {pet.description}
                            </p>
                        </div>
                    </div>


                    <div className="space-y-6 ">
                        <div>
                            <h1 className="text-3xl  font-bold">{pet.name}</h1>
                            <p className="text-lg text-gray-500 mt-1">{'breed'} · {pet.species}</p>
                        </div>



                        <div className={`${pet.isavailable ? 'hidden' : 'block'} bg-red-50 text-red-700 border border-red-200 px-4 py-3 rounded-xl font-semibold text-sm`}>
                            This pet has already been adopted.
                        </div>


                        <div className="grid grid-cols-2 gap-4  p-4 rounded-xl border border-gray-50/30">
                            {[
                                ["Age", `${pet.name}`],
                                ["Gender", `${pet.gender}`],
                                ["Health", `${pet.healthstatus}`],
                                ["Vaccinated", `${pet.vaccinated ? "YES" : "NO"}`],
                                ["Location", `${pet.loaction}`],
                                ["Adoption Fee", `${pet.adoptionfee}`],
                            ].map(([idxone, idxtwo]) => (
                                <div key={idxone} className="p-2">
                                    <div className="text-xs font-medium  text-gray-400 uppercase tracking-wider">{idxone}</div>
                                    <div className="text-base font-semibold  mt-0.5">{idxtwo}</div>
                                </div>
                            ))}
                        </div>



                        <div className={`${pet.isavailable ? 'block' : 'hidden'} border border-white/30  shadow-sm rounded-2xl p-6`}>
                            <h2 className="text-lg font-bold  flex items-center gap-2 mb-4">
                                Submit Adoption Request
                            </h2>

                            {
                                !session ? (
                                    <div className={`${'text-center py-4'}`}>
                                        <p className="mb-4 text-sm">Please log in to submit an adoption request.</p>
                                        <Link
                                            href={'/public/login'}
                                            className="w-full primary-btn sm:w-auto px-6 py-2.5  font-medium rounded-xl shadow-sm text-sm"

                                        >
                                            Login to Adopt
                                        </Link>
                                    </div>

                                ) : ("")
                            }
                            {
                                pet.owneremail === session?.user?.email ? (
                                    <div className="text-xl text-red-600 border border-red-600 rounded-xl p-3">
                                        You cannot adopt your own pet.
                                    </div>

                                ) : ('')
                            }

                            {
                                pet.isavailable ? ('') : (
                                    <div className={`${pet.owneremail === session?.user?.email || !session?.user?.email ? 'hidden' : 'block'} border border-emerald-500 p-4 rounded-xl font-medium text-sm`}>
                                        ✓ You have already submitted a request for {pet.name}.
                                    </div>

                                )
                            }

                            {
                                pet?.isavailable ? (
                                    <form className={`space-y-4 ${pet.owneremail === session?.user?.email || !session?.user?.email ? 'hidden' : 'block'}`} action={pickupData}>
                                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                            <div>
                                                <label className="block text-xs font-semibold text-gray-600 uppercase mb-1">Pet Name</label>
                                                <input name='name' className="w-full text-gray-500 border border-gray-200/30 rounded-lg px-3 py-2 text-sm cursor-not-allowed" value={pet.name} readOnly />
                                            </div>
                                            <div>
                                                <label className="block text-xs font-semibold text-gray-600 uppercase mb-1">Your Name</label>
                                                <input name='buyername' className="w-full text-gray-500 border border-gray-200/30 rounded-lg px-3 py-2 text-sm cursor-not-allowed" value={session?.user?.name} readOnly />
                                            </div>
                                        </div>

                                        <div>
                                            <label className="block text-xs font-semibold text-gray-600 uppercase mb-1">Your Email</label>
                                            <input name="buyeremail" className="w-full text-gray-500 border border-gray-200/30 rounded-lg px-3 py-2 text-sm cursor-not-allowed" value={session?.user?.email} readOnly />
                                        </div>

                                        <div>
                                            <label className="block text-xs font-semibold text-gray-600 uppercase mb-1">Preferred Pickup Date *</label>
                                            <input
                                                className="w-full border border-gray-300/30 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 focus:outline-none rounded-lg px-3 py-2 text-sm transition-all"
                                                type="date"
                                                name='pickupdate'
                                                min={new Date().toISOString().split("T")[0]}
                                                required
                                            />
                                        </div>

                                        <div>
                                            <label className="block text-xs font-semibold text-gray-600 uppercase mb-1">Message to Owner</label>
                                            <textarea
                                                className="w-full border border-gray-300 focus:ring-2 focus:ring-indigo-200 focus:outline-none rounded-lg px-3 py-2 text-sm transition-all min-h-20 resize-y"
                                                placeholder="Tell the owner a bit about yourself and why you want to adopt..."
                                                name="message"
                                            />
                                        </div>

                                        <button
                                            type='submit'
                                            className="w-full primary-btn flex justify-center items-center gap-2 px-4 py-3 bg-indigo-600 hover:bg-indigo-700 text-white font-semibold rounded-xl shadow-sm transition-colors mt-2"

                                        >
                                            Adopt {pet.name}
                                        </button>
                                    </form>

                                ) : ('')
                            }


                        </div>

                    </div>
                </div>
            </div>
        </div>
    );
};

export default PetInfo;