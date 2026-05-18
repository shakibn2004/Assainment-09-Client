import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

const Hero = async() => {
    const petsPromised = await fetch('https://api.thecatapi.com/v1/images/search?limit=10')
    const pets = await petsPromised.json()
    return (
        <div>
            {/* Hero Section */}
            <section className="relative overflow-hidden bg-gradient-to-br from-amber-50 to-orange-100 py-16 px-4 sm:px-6 lg:px-8">
                <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">

                    {/* Hero Content */}
                    <div className="space-y-6 text-center lg:text-left">
                        <div className="inline-flex items-center gap-2 bg-amber-100 border border-amber-200 text-amber-800 text-sm font-semibold px-4 py-1.5 rounded-full shadow-sm">
                            🐾 Bangladesh's Trusted Pet Adoption Portal
                        </div>
                        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black text-gray-900 tracking-tight leading-tight">
                            Find Your <em className="text-amber-600 not-italic font-serif">Forever</em> Furry Friend
                        </h1>
                        <p className="text-lg text-gray-600 max-w-xl mx-auto lg:mx-0 leading-relaxed">
                            Thousands of loving pets are waiting for their forever home. Browse verified adoption listings and give a pet the life they deserve.
                        </p>
                        <div className="flex flex-wrap justify-center lg:justify-start gap-4 pt-2">
                            <Link
                            href={'/public'}
                                className="bg-amber-600 hover:bg-amber-700 text-white font-bold text-base px-7 py-3.5 rounded-xl shadow-lg transition-colors duration-200"
                                
                            >
                                🐾 Adopt Now
                            </Link>
                            <Link
                            href={'/public/all-pets'}
                                className="bg-transparent hover:bg-amber-50 text-amber-700 font-bold text-base px-7 py-3.5 border-2 border-amber-600 rounded-xl transition-colors duration-200"
                                
                            >
                                Browse Pets
                            </Link>
                        </div>
                    </div>

                    {/* Hero Floating Images */}
                    <div className="grid grid-cols-2 gap-4 max-w-md mx-auto lg:max-w-none w-full">
                        {pets.slice(0, 4).map((p) => (
                            <div key={p.id} className="aspect-square rounded-2xl overflow-hidden shadow-md border-4 border-white transform hover:scale-105 transition-transform duration-300">
                                <Image width={100} height={50} sizes='100vw' src={p.url} alt={p.id} className="w-full h-full object-cover" />
                            </div>
                        ))}
                    </div>

                </div>
            </section>

            {/* Stats Bar */}
            <div className="bg-amber-600 text-white py-8 px-4 shadow-inner">
                <div className="max-w-7xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
                    {[
                        ["500+", "Happy Adoptions"],
                        ["120+", "Pets Available"],
                        ["40+", "Partner Shelters"],
                        ["4.9★", "Avg. Rating"]
                    ].map(([n, l]) => (
                        <div key={l} className="space-y-1">
                            <div className="text-3xl sm:text-4xl font-extrabold tracking-tight">{n}</div>
                            <div className="text-xs sm:text-sm font-medium text-amber-100 uppercase tracking-wider">{l}</div>
                        </div>
                    ))}
                </div>
            </div>

            {/* Featured Pets */}
            <section className="max-w-7xl mx-auto py-16 px-4 sm:px-6 lg:px-8">
                <div className="text-center max-w-3xl mx-auto mb-12 space-y-2">
                    <span className="text-sm font-bold text-amber-600 uppercase tracking-widest">Featured Pets</span>
                    <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900">Pets Looking for a Home</h2>
                    <p className="text-gray-500 text-lg">Every pet here has been verified by our shelter partners.</p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                    {pets.map(pet => (
                        <h1 key={pet}>HELLO</h1>
                    ))}
                </div>

                <div className="text-center mt-10">
                    <Link
                        href={'/public/all-pets'}
                        className="inline-flex items-center justify-center border-2 border-gray-300 hover:border-amber-600 hover:text-amber-600 text-gray-700 font-bold px-8 py-3 rounded-xl transition-colors duration-200"
                    >
                        View All Pets →
                    </Link>
                </div>
            </section>
        </div>
    );
};

export default Hero;