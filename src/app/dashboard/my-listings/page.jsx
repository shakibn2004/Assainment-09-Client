import React from 'react';

const MyListings = () => {
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
               
                    <div className="rounded-xl border border-dashed border-zinc-200 p-12 text-center">
                        <div className="text-4xl mb-3">🐾</div>
                        <h4 className="text-base font-semibold">No listings yet</h4>
                        <p className="text-sm text-zinc-500 mt-1 mb-5">Ready to find a forever home for a pet?</p>
                        <button
                            
                            className="inline-flex items-center justify-center rounded-lg  px-4 py-2 text-sm font-medium text-white shadow-sm transition-colors hover:bg-indigo-700 active:bg-indigo-800"
                        >
                            Add Your First Pet
                        </button>
                    </div>
            
                    <div className="flex flex-col gap-4">


                        
                        <div
                            key={'pet.id'}
                            className="flex flex-col sm:flex-row gap-4 border border-zinc-200  p-4 shadow-sm rounded-xl transition-all hover:border-zinc-300"
                        >
                            {/* Pet Image Thumbnail */}
                            <img
                                src={'pet.image'}
                                alt={'pet.name'}
                                className="h-24 w-full sm:w-24 rounded-lg object-cover  shrink-0"
                            />

                            {/* Content & Action Controls */}
                            <div className="flex flex-col sm:flex-row sm:items-center justify-between flex-1 gap-4 min-w-0">
                                <div>
                                    <h3 className="font-semibold  text-base leading-tight">
                                        {'pet.name'}
                                    </h3>
                                    <p className="text-xs mt-1">
                                        {'pet.breed} &middot; ৳{pet.fee'}
                                    </p>

                                    <span className={`inline-block rounded-md px-2 py-0.5 text-[10px] font-bold uppercase tracking-wider shadow-sm border mt-2
          `}
                                    >
                                        {'pet.status'}
                                    </span>
                                </div>

                                {/* Operational Group Buttons */}
                                <div className="flex flex-wrap items-center gap-2 sm:justify-end">
                                    <button
                                        className="px-3 py-1.5 text-xs font-medium text-zinc-700  hover:bg-zinc-200 rounded-md transition-colors"
                                    >
                                        📩 Requests ({'petRequests.length'})
                                    </button>

                                    <button
                                        className="px-3 py-1.5 text-xs font-medium text-zinc-600 hover:bg-zinc-50 border rounded-md transition-colors"
                                    >
                                        👁 View
                                    </button>

                                    <button
                                        className="px-3 py-1.5 text-xs font-medium  hover:bg-amber-100 border border-amber-200 rounded-md transition-colors"
                                    >
                                        ✏️ Edit
                                    </button>

                                    <button

                                        className="px-3 py-1.5 text-xs font-medium hover:bg-rose-100 border border-rose-200 rounded-md transition-colors"
                                    >
                                        🗑 Delete
                                    </button>
                                </div>
                            </div>
                        </div>
                      
                    </div>
            

                {/* Target injection element for modal setups */}
                <div id="modalContainer" />
            </div>
        </div>
    );
};

export default MyListings;