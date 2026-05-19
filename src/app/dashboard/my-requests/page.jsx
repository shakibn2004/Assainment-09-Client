import React from 'react';

const MyRequests = () => {
    return (
        <div className='flex flex-col flex-1'>
            <div className="mx-auto max-w-5xl px-4 py-8 text-slate-800">

                {/* View Header Info */}
                <header className="mb-8 pl-0.5">
                    <h1 className="font-serif text-3xl font-bold tracking-tight ">
                        My Requests
                    </h1>
                    <p className="mt-1 text-sm">{'subtext'}</p>
                </header>

                {/* Main Condition Check */}
             
                    <div className="rounded-xl border border-dashed border-zinc-200 bg-zinc-50/50 p-12 text-center">
                        <div className="text-4xl mb-3">📩</div>
                        <h4 className="text-base font-semibold text-zinc-800">No requests yet</h4>
                        <p className="text-sm text-zinc-500 mt-1 mb-5">Explore available pets looking for a loving home.</p>
                        <button
                       
                            className="inline-flex items-center justify-center rounded-lg bg-indigo-600 px-4 py-2 text-sm font-medium text-white shadow-sm transition-colors hover:bg-indigo-700 active:bg-indigo-800"
                        >
                            Browse Pets
                        </button>
                    </div>
       
                 
                    <div className="w-full overflow-x-auto rounded-xl border border-zinc-200 bg-white shadow-sm">
                        <table className="w-full min-w-[600px] text-left border-collapse">
                            <thead>
                                <tr className="border-b border-zinc-200  text-xs font-semibold uppercase tracking-wider text-zinc-500">
                                    <th className="p-4">Pet</th>
                                    <th className="p-4">Request Date</th>
                                    <th className="p-4">Pickup Date</th>
                                    <th className="p-4">Status</th>
                                    <th className="p-4 text-right">Actions</th>
                                </tr>
                            </thead>
                            <tbody className="divide-y divide-zinc-100 text-sm">
                               
                                    

                                        <tr
                                      
                                            className="hover:bg-zinc-50/50 transition-colors"
                                        >
                                            {/* Pet thumbnail and main name cell */}
                                            <td className="p-4 whitespace-nowrap">
                                                <div className="flex items-center gap-3">
                                                    <img
                                                        src={'request.petImage'}
                                                        alt=""
                                                        className="h-10 w-10 shrink-0 rounded-lg object-cover bg-zinc-100"
                                                    />
                                                    <span className="font-semibold text-zinc-900">
                                                        {'request.petName'}
                                                    </span>
                                                </div>
                                            </td>

                                            {/* Metadata cell dates */}
                                            <td className="p-4 whitespace-nowrap text-zinc-500">
                                                {'request.requestDate'}
                                            </td>
                                            <td className="p-4 whitespace-nowrap text-zinc-500">
                                                {'request.pickupDate'}
                                            </td>

                                            {/* Badge column conditional matching */}
                                            <td className="p-4 whitespace-nowrap">
                                                <span className={`inline-flex items-center rounded-md px-2.5 py-0.5 text-xs font-medium border
        
                      `}>
                                                    {'request.status'}
                                                </span>
                                            </td>

                                            {/* Row interactive action buttons */}
                                            <td className="p-4 whitespace-nowrap text-right">
                                                <div className="inline-flex items-center gap-2">
                                                    <button
                                                     
                                                        className="rounded-md border border-zinc-200 px-2.5 py-1.5 text-xs font-medium text-zinc-600 shadow-sm hover:bg-zinc-50 transition-colors"
                                                    >
                                                        👁 View
                                                    </button>

                                                        <button
                                                         
                                                            className="rounded-md bg-rose-50 border border-rose-200 px-2.5 py-1.5 text-xs font-medium text-rose-700 hover:bg-rose-100 transition-colors"
                                                        >
                                                            ✕ Cancel
                                                        </button>
                                              
                                                </div>
                                            </td>
                                        </tr>
             
                          
                            </tbody>
                        </table>
                    </div>

            </div>
        </div>
    );
};

export default MyRequests;