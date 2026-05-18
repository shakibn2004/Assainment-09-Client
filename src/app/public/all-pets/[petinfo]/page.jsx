import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

const PetInfo = async ({ params }) => {
    const petObj = await params;
    const { petinfo } = petObj;

    const petPromised = await fetch(`https://api.thecatapi.com/v1/images/search?limit=10/${petinfo}`);
    const pet = await petPromised.json();
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
                            src={pet[0].url}
                            width={0}
                            height={0}
                            sizes='100vw'
                            style={{width: '100%', height: '50%'}}
                            alt={'Luna'}
                            className="w-full h-96 rounded-2xl shadow-md"
                        />
                        <div>
                            <h3 className="font-serif text-xl font-semibold mb-3">
                                About {pet.name}
                            </h3>
                            <p className="text-gray-600 leading-5 text-sm md:text-base">
                                Mango whistles tunes and loves sitting on shoulders. Very sociable and easy to train.
                            </p>
                        </div>
                    </div>

                
                    <div className="space-y-6">
                        <div>
                            <h1 className="text-3xl  font-bold">{'Luna'}</h1>
                            <p className="text-lg text-gray-500 mt-1">{'breed'} · {'species'}</p>
                        </div>

                
                     
                            {/* <div className="bg-red-50 text-red-700 border border-red-200 px-4 py-3 rounded-xl font-semibold text-sm">
                                 This pet has already been adopted.
                            </div> */}
                
                       
                        <div className="grid grid-cols-2 gap-4  p-4 rounded-xl border border-gray-50/30">
                            {[
                                ["Age", `${2} year${2 > 1 ? "s" : ""}`],
                                ["Gender", 'Male'],
                                ["Health", 'Good'],
                                ["Vaccinated", 'YES' ? "Yes ✓" : "No"],
                                ["Location", 'Khulna'],
                                ["Adoption Fee", `৳500}`],
                            ].map(([idxone, idxtwo]) => (
                                <div key={idxone} className="p-2">
                                    <div className="text-xs font-medium  text-gray-400 uppercase tracking-wider">{idxone}</div>
                                    <div className="text-base font-semibold  mt-0.5">{idxtwo}</div>
                                </div>
                            ))}
                        </div>

                  
                      
                            <div className="border border-white/30  shadow-sm rounded-2xl p-6">
                                <h2 className="text-lg font-bold  flex items-center gap-2 mb-4">
                                     Submit Adoption Request
                                </h2>

                               
                                    <div className="text-center py-4">
                                        <p className="mb-4 text-sm">Please log in to submit an adoption request.</p>
                                        <Link
                                            href={'/public/login'}
                                            className="w-full primary-btn sm:w-auto px-6 py-2.5  font-medium rounded-xl shadow-sm text-sm"
                                            
                                        >
                                            Login to Adopt
                                        </Link>
                                    </div>
                            
                                    <div className="text-sm border border-blue-100 rounded-xl p-3">
                                        You cannot adopt your own pet.
                                    </div>
                                
                                    <div className="border border-emerald-500 p-4 rounded-xl font-medium text-sm">
                                        ✓ You have already submitted a request for {pet.name}.
                                    </div>
                              
                                    <div className="space-y-4">
                                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                            <div>
                                                <label className="block text-xs font-semibold text-gray-600 uppercase mb-1">Pet Name</label>
                                                <input className="w-full text-gray-500 border border-gray-200/30 rounded-lg px-3 py-2 text-sm cursor-not-allowed" value={'Luna'} readOnly />
                                            </div>
                                            <div>
                                                <label className="block text-xs font-semibold text-gray-600 uppercase mb-1">Your Name</label>
                                                <input className="w-full text-gray-500 border border-gray-200/30 rounded-lg px-3 py-2 text-sm cursor-not-allowed" value={'shakib'} readOnly />
                                            </div>
                                        </div>

                                        <div>
                                            <label className="block text-xs font-semibold text-gray-600 uppercase mb-1">Your Email</label>
                                            <input className="w-full text-gray-500 border border-gray-200/30 rounded-lg px-3 py-2 text-sm cursor-not-allowed" value={'shakibn2002@gmail.com'} readOnly />
                                        </div>

                                        <div>
                                            <label className="block text-xs font-semibold text-gray-600 uppercase mb-1">Preferred Pickup Date *</label>
                                            <input
                                                className="w-full border border-gray-300/30 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 focus:outline-none rounded-lg px-3 py-2 text-sm transition-all"
                                                type="date"
                                                value={'pickupDate'}
                                            
                                                min={new Date().toISOString().split("T")[0]}
                                            />
                                        </div>

                                        <div>
                                            <label className="block text-xs font-semibold text-gray-600 uppercase mb-1">Message to Owner</label>
                                            <textarea
                                                className="w-full border border-gray-300 focus:ring-2 focus:ring-indigo-200 focus:outline-none rounded-lg px-3 py-2 text-sm transition-all min-h-[80px] resize-y"
                                                placeholder="Tell the owner a bit about yourself and why you want to adopt..."
                                                value={'message'}
                                           
                                            />
                                        </div>

                                        <button
                                            className="w-full primary-btn flex justify-center items-center gap-2 px-4 py-3 bg-indigo-600 hover:bg-indigo-700 text-white font-semibold rounded-xl shadow-sm transition-colors mt-2"
                                            
                                        >
                                            Adopt {'Luna'}
                                        </button>
                                    </div>
                             
                            </div>
                       
                    </div>
                </div>
            </div>
        </div>
    );
};

export default PetInfo;