import React from 'react';
import { FaBitcoin } from 'react-icons/fa6';
import { MdHealthAndSafety } from 'react-icons/md';
import { RiHomeOfficeLine } from 'react-icons/ri';
import { TfiWorld } from 'react-icons/tfi';

const WhyAdopt = () => {
    return (
        <section className="secondary-bg py-20 px-4 sm:px-6 lg:px-8">
            <div className="max-w-7xl mx-auto">
                <div className="max-w-3xl mb-16 space-y-3">
                    <span className="text-sm font-bold text-amber-600 uppercase tracking-widest">Why Adopt</span>
                    <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900 dark:text-white">Adoption Changes Lives</h2>
                    <p className="secondary-text font-semibold text-sm">Adopting a pet is one of the most rewarding decisions you will ever make.</p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {[
                        { icon: <MdHealthAndSafety />, title: "Save a Life", text: "Every adoption frees up space in shelters and gives a pet a second chance at life." },
                        { icon: <FaBitcoin />, title: "Cost Effective", text: "Shelter pets often come vaccinated, microchipped and spayed at a fraction of breeder costs." },
                        { icon: <RiHomeOfficeLine />, title: "Perfect Match", text: "Shelter staff know each pet's personality, helping you find the ideal companion for your lifestyle." },
                        { icon: <TfiWorld />, title: "Community Impact", text: "Adopting helps reduce stray populations and supports local animal welfare organizations." },
                    ].map(w => (
                        <div key={w.title} className="bg-white dark:bg-black p-8 rounded-2xl shadow-sm border border-gray-100 flex flex-col items-center text-center space-y-4 hover:shadow-md transition-shadow duration-200">
                            <div className="text-4xl bg-amber-50 w-16 h-16 flex items-center justify-center rounded-2xl">{w.icon}</div>
                            <h3 className="text-xl font-bold text-gray-900 dark:text-white">{w.title}</h3>
                            <p className="text-sm text-gray-500 leading-relaxed">{w.text}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default WhyAdopt;