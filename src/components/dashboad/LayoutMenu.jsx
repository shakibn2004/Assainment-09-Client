'use client';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import React from 'react';

const LayoutMenu = () => {
    const links = [
        ["/dashboard", "📊", "Overview"],
        ["/dashboard/my-listings", "📋", "My Listings"],
        ["/dashboard/add-pet", "➕", "Add Pet"],
        ["/dashboard/my-requests", "📩", "My Requests"],
    ];

    const [sidebarOpen, setSidebarOpen] = React.useState(false);
    const pathName = usePathname();
    return (
        <div className='max-w-60 w-[30%] secondary-bg h-screen hidden md:block'>
            <aside className={`sidebar ml-7 space-y-3 py-7 ${sidebarOpen ? "open" : ""}`}>
                <div className='font-extrabold text-[1.15rem]'>Dashboard</div>
                <div className="sidebar-title uppercase font-semibold secondary-text">Navigation</div>
                <div className='flex flex-col gap-4'>
                    {links.map(([p, icon, label]) => (
                        <Link key={p} className={`sidebar-link ${pathName === p ? "active primary-text" : ""}`} href={p}>
                            <span>{icon}</span> {label}
                        </Link>
                    ))}
                </div>
                <div className="sidebar-title uppercase secondary-text font-semibold" style={{ marginTop: "2rem" }}>Other</div>
                <div className='flex flex-col gap-4'>
                    <Link className={`sidebar-link ${pathName === "/public/all-pets" ? "active" : ""}`} href="/public/all-pets">🐾 All Pets</Link>
                    <Link className={`sidebar-link ${pathName === "/" ? "active primary-text" : ""}`} href="/">🏠 Home</Link>
                </div>
            </aside>
        </div>
    );
};

export default LayoutMenu;