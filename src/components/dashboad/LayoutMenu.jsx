'use client';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import React from 'react';
import { FaThList } from 'react-icons/fa';
import { FaCodePullRequest } from 'react-icons/fa6';
import { GoHomeFill } from 'react-icons/go';
import { GrOverview } from 'react-icons/gr';
import { IoIosAddCircle } from 'react-icons/io';
import { IoWalletOutline } from 'react-icons/io5';

const LayoutMenu = () => {
    const links = [
        ["/dashboard", <GrOverview />, "Overview"],
        ["/dashboard/my-listings", <FaThList />, "My Listings"],
        ["/dashboard/add-pet", <IoIosAddCircle />, "Add Pet"],
        ["/dashboard/my-requests", <FaCodePullRequest />, "My Requests"],
    ];

    const [sidebarOpen, setSidebarOpen] = React.useState(false);
    const pathName = usePathname();
    return (
        <div className='max-w-60 w-[30%] secondary-bg h-screen hidden md:block z-50'>
            <aside className={`sidebar ml-7 space-y-3 py-7 ${sidebarOpen ? "open" : ""}`}>
                <div className='font-extrabold text-[1.15rem]'>Dashboard</div>
                <div className="sidebar-title uppercase font-semibold secondary-text">Navigation</div>
                <div className='flex flex-col gap-4'>
                    {links.map(([p, icon, label]) => (
                        <Link key={p} className={`sidebar-link flex gap-1 items-center ${pathName === p ? "active primary-text" : ""}`} href={p}>
                            <span>{icon}</span> {label}
                        </Link>
                    ))}
                </div>
                <div className="sidebar-title uppercase secondary-text font-semibold" style={{ marginTop: "2rem" }}>Other</div>
                <div className='flex flex-col gap-4'>
                    <Link className={`sidebar-link flex items-center gap-1 ${pathName === "/public/all-pets" ? "active" : ""}`} href="/public/all-pets"><IoWalletOutline />All Pets</Link>
                    <Link className={`sidebar-link flex items-center gap-1 ${pathName === "/" ? "active primary-text" : ""}`} href="/"><GoHomeFill />Home</Link>
                </div>
            </aside>
        </div>
    );
};

export default LayoutMenu;