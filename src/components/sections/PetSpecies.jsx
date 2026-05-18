import Link from 'next/link';
import React from 'react';
import { LiaCatSolid, LiaDogSolid, LiaKiwiBirdSolid } from 'react-icons/lia';
import { LuRabbit } from 'react-icons/lu';

const PetSpecies = () => {
    return (
        <div className='dark:bg-black'>
            <section className="max-w-7xl mx-auto py-16 px-4 sm:px-6 lg:px-8">
                <div className="text-center max-w-3xl mx-auto mb-10 space-y-2">
                    <span className="text-sm font-bold primary-text uppercase tracking">Browse by Species</span>
                    <h2 className="text-3xl sm:text-4xl font-extrabold dark:text-white text-gray-900">Find Your Species Match</h2>
                </div>

                <div className="flex flex-wrap justify-center gap-4">
                    {[
                        [<LiaDogSolid />, "Dogs", 3],
                        [<LiaCatSolid />, "Cats", 2],
                        [<LiaKiwiBirdSolid />, "Birds", 1],
                        [<LuRabbit />, "Rabbits", 2]
                    ].map(([e, s, c]) => (
                        <Link
                            key={s}
                            href={'/public/all-pets'}
                            className="inline-flex items-center gap-4 bg-white dark:bg-black border border-gray-200 hover:border-amber-500 hover:bg-amber-50/50 px-6 py-3.5 rounded-2xl shadow-sm transition-all duration-200"
                        >
                            <span className="text-3xl dark:text-white">{e}</span>
                            <div className="text-left">
                                <div className="font-bold text-gray-900 text-base dark:text-white">{s}</div>
                                <div className="text-xs text-gray-400">{c} available</div>
                            </div>
                        </Link>
                    ))}
                </div>
            </section>
        </div>
    );
};

export default PetSpecies;