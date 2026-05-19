import Link from 'next/link';
import React from 'react';

const TopFooter = () => {
    return (
        <section className="primary-bg dark:bg-black py-16 px-4 sm:px-6 lg:px-8 text-center text-white">
            <div className="max-w-xl mx-auto space-y-6">
                <h2 className="text-3xl sm:text-4xl font-bold font-serif tracking-tight">
                    Ready to Give a Pet a Forever Home?
                </h2>
                <p className="text-amber-100 text-base sm:text-lg leading-relaxed">
                    Join thousands of families who have found their perfect companion through PawHome.
                </p>
                <Link
                href={'/public/all-pets'}
                    className="bg-white hover:bg-amber-50 text-amber-700 font-bold px-8 py-3.5 rounded-xl shadow-md transform hover:-translate-y-0.5 transition-all duration-200"
                >
                    Browse All Pets 🐾
                </Link>
            </div>
        </section> 
    );
};

export default TopFooter;