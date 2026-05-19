'use client';
import Image from 'next/image';
import Link from 'next/link';
import { usePathname, useRouter } from 'next/navigation';
import React from 'react';
import ThemeToggle from './ThemeToggle';
import { useShowDropDownMenu } from '@/hookes/ShowDropDownMenu';
import { authClient } from '@/app/lib/auth-client';

const user = true;

const Navbar = () => {
    const router = useRouter()
    const currentPath = usePathname();
    const { showDropdown, setShowDropdown } = useShowDropDownMenu();
    // user login or not
    const {
        data: session,
        isPending,
        error
    } = authClient.useSession();

    if (isPending) {
        return <p>Loading...</p>;
    }

    // user signout
    const handleSingOut = async () => {
        await authClient.signOut({
            fetchOptions: {
                onSuccess: () => {
                    router.push("/public/login"); // redirect to login page
                },
            },
        });
    }


    return (
        <nav className='flex justify-between w-full p-4 items-center mx-auto border-b sticky top-0 bg-white dark:bg-black z-10'>
            <div className='flex items-center'>
                <span><Image src="/icon.png" alt="Paw Home Icon" width={32} height={32} /></span>
                <span className='font-bold text-xl ml-1'>Paw</span>
                <span className='font-bold text-xl primary-text ml-2'>Home</span>
            </div>

            <div className="nav-links hidden md:flex gap-6">
                {
                    [["/", "Home"], ["/public/all-pets", "All Pets"]].map(([p, l]) => (
                        <Link key={p} className={`nav-link ${currentPath === p ? "active primary-text" : ""}`} href={p}>
                            {l}
                        </Link>
                    ))
                }
                {
                    session && (
                        <Link className={`nav-link ${currentPath === "/dashboard/my-requests" ? "active primary-text" : ""}`} href="/dashboard/my-requests">
                            My Requests
                        </Link>
                    )
                }
                {
                    session && (
                        <Link className={`nav-link ${currentPath === "/dashboard/add-pet" ? "active primary-text" : ""}`} href="/dashboard/add-pet">
                            Add Pet
                        </Link>
                    )
                }
            </div>

            <div className='flex items-center gap-5'>
                <div className='primary-border rounded-xl p-2 flex items-center gap-1'>
                    <ThemeToggle />
                </div>

                {
                    session ? (
                        <div>
                            <div className="profile-btn cursor-pointer" onClick={() => setShowDropdown(d => !d)}>
                                <h1>Profile</h1>
                            </div>
                            {showDropdown && (
                                <div className="dropdown absolute right-0 top-16 w-48 bg-white dark:bg-black border rounded-lg shadow-lg p-4 z-10">
                                    <div className='border-b mb-2 pb-2'>
                                        <div className='font-bold'>Nazmus Shakib</div>
                                        <div className='truncate secondary-text'>nazmus.shakib@example.com</div>
                                    </div>
                                    <Link href="/dashboard" className="dropdown-item" onClick={() => setShowDropdown(false)}>📊 Dashboard</Link>
                                    <Link href="/dashboard/my-listings" className="dropdown-item" onClick={() => setShowDropdown(false)}>📋 My Listings</Link>
                                    <button onClick={session ? handleSingOut : ""} className="dropdown-item" >{session ? "Logout" : "Login"}</button>
                                </div>
                            )}
                        </div>
                    ) : (
                        <Link className="btn primary-btn btn-sm" href="/public/login">Login</Link>
                    )
                }
            </div>
        </nav>
    );
};

export default Navbar;