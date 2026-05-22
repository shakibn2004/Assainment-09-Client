'use client'
import { redirect, useRouter } from 'next/navigation';
import { authClient } from '../lib/auth-client';
import Link from 'next/link';
import { useEffect, useState } from 'react';

const Dashboad = () => {
    const router = useRouter()
    const [allPets, setAllPets] = useState([])
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        async function allPetsFn() {
            try {
                const res = await fetch(
                    `${process.env.NEXT_PUBLIC_LOCAL_URI}/public/all-adopted-pets`
                )

                const data = await res.json()

                setAllPets(data)
            } catch (error) {
                console.error(error)
            } finally {
                setLoading(false)
            }
        }

        allPetsFn()
    }, [])

    const {
        data: session,
        isPending,
        error
    } = authClient.useSession()

    if (isPending || loading) {
        return <p>Loading...</p>
    }

    const myListings = allPets.filter(
        (p) => p.buyeremail === session?.user?.email
    )

    console.log(data)

    return (
        <div className="mx-auto w-full p-10">
            {
                session?.user ? (<div>
                    {/* Welcome banner area */}
                    <header className="mb-8">
                        <h1 className="font-serif text-3xl font-bold tracking-tight text-zinc-900">
                            Welcome back, {'firstName'} 👋
                        </h1>
                        <p className="mt-1 text-sm secondary-text">{'currentUser?.email'}</p>
                    </header>


                    <div className="mb-10 grid grid-cols-2 gap-4 sm:grid-cols-5">
                        {
                            ['My Listings', 'Availabe', 'Adopted', 'My Requests', 'Pending Review'].map(p => {
                                return (
                                    <div key={p[0]}

                                        className="flex items-center gap-4 rounded-xl border border-zinc-200  p-5 shadow-sm"
                                    >
                                        <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-lg text-2xl">
                                            {'icon'}
                                        </div>
                                        <div>
                                            <div className="text-[2.25rem] font-bold tracking-tight">{0}</div>
                                            <div className="text-xs font-medium secondary-text tracking-wider">{p}</div>
                                        </div>
                                    </div>

                                )

                            })
                        }

                    </div>


                    <section>
                        <h3 className="font-serif text-xl font-semibold tracking-tight  mb-4">
                            Recent Activity
                        </h3>


                        <div className="rounded-xl border border-dashed border-zinc-200 p-10 text-center text-sm text-zinc-500">
                            No recent activity yet. Add a pet or explore adoptions!
                        </div>

                        <div className="flex flex-col gap-3">

                            <div

                                className="flex items-center gap-4 border border-zinc-200  p-4 shadow-sm rounded-xl transition-all hover:border-zinc-300"
                            >
                                <img
                                    src={'r.petImage'}
                                    alt=""
                                    className="h-12 w-12 rounded-lg object-cover bg-zinc-100 shrink-0"
                                />

                                <div className="flex-1 min-w-0">
                                    <div className="font-semibold text-sm sm:text-base truncate">
                                        Request for {'r.petName'}
                                    </div>
                                    <div className="text-xs text-zinc-400 mt-0.5">
                                        Submitted {'r.requestDate'}
                                    </div>
                                </div>

                                <span className={`inline-flex items-center rounded-md px-2.5 py-1 text-xs font-semibold uppercase tracking-wider shadow-sm border
                `}>
                                    {'r.status'}
                                </span>
                            </div>

                        </div>

                    </section>

                </div>) : (
                    <div className='flex flex-col w-fit mx-auto py-10 items-center justify-center gap-4'>
                        <h1 className='text-[2rem] primary-text'>Please login to continue</h1>
                        <Link
                            href='/public/login'
                            className='primary-btn mx-auto'>
                            Login
                        </Link>

                    </div>
                )
            }


        </div>
    );
};

export default Dashboad;