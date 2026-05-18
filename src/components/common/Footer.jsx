'use client';
import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { FaFacebookF, FaInstagram, FaLocationDot, FaTwitter, FaYoutube } from 'react-icons/fa6';
import { IoCallOutline } from 'react-icons/io5';
import { MdOutlineMail } from 'react-icons/md';

const Footer = () => {
    const pathName = usePathname();
    return (
        <div className={`${pathName === "/public/login" || pathName === "/public/register" ? "hidden" : "block"} py-20 secondary-bg`}>
            <footer className="footer max-w-300 w-[75%] mx-auto">
                <div className="footer grid sm:grid-cols-[2fr_1fr] md:grid-cols-[2fr_1fr_1fr_1fr] gap-6">
                    <div className='grid gap-4'>
                        <div className='flex items-center'>
                            <span><Image src="/icon.png" alt="Paw Home Icon" width={32} height={32} /></span>
                            <span className='font-bold text-xl ml-1'>Paw</span>
                            <span className='font-bold text-xl primary-text ml-2'>Home</span>
                        </div>
                        <p className="footer-desc secondary-text text-sm">Bangladesh's trusted platform for pet adoption. Connecting loving families with pets who need a forever home since 2024.</p>
                        <div className="social-links flex gap-4">
                            {[{ id: 1, name: <FaFacebookF />, url: "https://www.facebook.com" }, { id: 2, name: <FaTwitter />, url: "https://www.twitter.com" }, { id: 3, name: <FaInstagram />, url: "https://www.instagram.com" }, { id: 4, name: <FaYoutube />, url: "https://www.youtube.com" }].map((icon, index) => (
                                <Link key={index} className="social-btn border p-3 rounded" href={icon.url} target="_blank" rel="noopener noreferrer">
                                    {icon.name}
                                </Link>
                            ))}
                        </div>
                    </div>
                    <div>
                        <div className="footer-heading secondary-text font-bold mb-2">Explore</div>
                        <div className="footer-links flex flex-col gap-2 text-sm">
                            <Link className="footer-link" href="/">Home</Link>
                            <Link className="footer-link" href="/public/all-pets">All Pets</Link>
                            <Link className="footer-link" href="/dashboard/add-pet">Add a Pet</Link>
                        </div>
                    </div>
                    <div>
                        <div className="footer-heading secondary-text font-bold mb-2">Account</div>
                        <div className="footer-links flex flex-col gap-2 text-sm">
                            <Link className="footer-link" href="/public/login">Login</Link>
                            <Link className="footer-link" href="/public/register">Register</Link>
                            <Link className="footer-link" href="/dashboard">Dashboard</Link>
                        </div>
                    </div>
                    <div>
                        <div className="footer-heading secondary-text font-bold mb-2">Contact</div>
                        <div className="footer-links flex flex-col gap-2 text-sm">
                            <Link className="footer-link flex items-center gap-2" href="mailto:shakib@example.com">
                                <MdOutlineMail /> shakib@example.com
                            </Link>
                            <Link className="footer-link flex items-center gap-2" href="tel:+8801700000000">
                                <IoCallOutline /> +880 1700-000000
                            </Link>
                            <Link className="footer-link flex items-center gap-2" href="https://maps.google.com/?q=Dhaka,+Bangladesh" target="_blank" rel="noopener noreferrer">
                                <FaLocationDot /> Dhaka, Bangladesh
                            </Link>
                        </div>
                    </div>
                </div>
                <div className="footer-bottom border-t mt-10 pt-4 flex flex-col sm:flex-row justify-between text-sm">
                    <span className='secondary-text'>© 2026 PawHome. All rights reserved.</span>
                    <span className='secondary-text'>Made with love for animals in Bangladesh</span>
                </div>
            </footer>
        </div>
    );
};

export default Footer;