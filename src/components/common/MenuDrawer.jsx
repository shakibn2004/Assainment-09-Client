'use client'
import { Button, Drawer } from "@heroui/react";
import { MdOutlineMenu } from "react-icons/md";
import { GrOverview } from "react-icons/gr";
import { FaThList } from "react-icons/fa";
import { IoIosAddCircle } from "react-icons/io";
import { FaCodePullRequest } from "react-icons/fa6";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { IoWalletOutline } from "react-icons/io5";
import { GoHomeFill } from "react-icons/go";
import { useState } from "react";

const MenuDrawer = ({ handleDrawer }) => {
    const [slot, setSlot] = useState(false)
    const links = [
        ["/dashboard", <GrOverview />, "Overview"],
        ["/dashboard/my-listings", <FaThList />, "My Listings"],
        ["/dashboard/add-pet", <IoIosAddCircle />, "Add Pet"],
        ["/dashboard/my-requests", <FaCodePullRequest />, "My Requests"],
    ];
    const pathName = usePathname();

    return (
        <div className="md:hidden">
            <Drawer>
                <Button variant="tertiary" onClick={handleDrawer}><MdOutlineMenu className='md:hidden' size={30} /></Button>
                <Drawer.Backdrop>
                    <Drawer.Content placement="left" className="max-w-60 bg-amber-600">
                        <Drawer.Dialog>
                            <div className='max-w-60 w-fullsecondary-bg h-screen'>
                                <aside className={`sidebar ml-7 space-y-3 py-7`}>
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
                            <Drawer.Footer>
                                <Button slot="close" variant="secondary" className='primary-btn'>
                                    Close
                                </Button>
                            </Drawer.Footer>
                        </Drawer.Dialog>
                    </Drawer.Content>
                </Drawer.Backdrop>
            </Drawer>
        </div>
    );
};

export default MenuDrawer;