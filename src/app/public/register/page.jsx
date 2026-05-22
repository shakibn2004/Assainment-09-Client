'use client';
import { authClient } from "@/app/lib/auth-client";
import { Description, FieldError, Form, Input, Label, TextField } from "@heroui/react";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { Slide, toast } from "react-toastify";

const Register = () => {
    const [password, setPassword] = useState('');

    // butter auth resister
    const handleSubmit = async (e) => {
        e.preventDefault();
        const formData = new FormData(e.currentTarget);
        const userData = Object.fromEntries(formData.entries());

        const { name, email, password } = userData;

        const { data, error } = await authClient.signUp.email({
            email,
            password,
            name,
            callbackURL: "/dashboard"
        }, {
            onRequest: () => {
                console.log('Loading...');
            },

            onSuccess: () => {
                toast.success('Signup success', {
                    position: "top-center",
                    autoClose: 5000,
                    hideProgressBar: false,
                    closeOnClick: false,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                    theme: "dark",
                    transition: Slide,
                });
            },

            onError: (ctx) => {
                toast.success(ctx.error.message, {
                    position: "top-center",
                    autoClose: 5000,
                    hideProgressBar: false,
                    closeOnClick: false,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                    theme: "dark",
                    transition: Slide,
                });
            },
        });
    };
    return (
        <div className='m-auto shadow-[0_0_10px_#000]/30 bg-white dark:bg-black border border-white rounded-2xl p-10'>
            <div className="auth flex flex-col gap-2 mb-6">
                <div >
                    <span><Image src="/icon.png" alt="Paw Home Icon" width={32} height={32} /></span>
                </div>
                <h1 className="auth-title text-[2rem] font-bold">Create Account</h1>
                <p className="auth-sub secondary-text -mt-2">Join PawHome and find your perfect companion

                </p>
            </div>

            <Form onSubmit={handleSubmit} className="flex w-96 flex-col gap-4">
                <TextField
                    isRequired
                    name="name"
                    type="name"
                    validate={(value) => {
                        if (value.length < 2) {
                            return "Name must be at least 2 characters";
                        }
                        return null;
                    }}
                >
                    <Label>Name</Label>
                    <Input placeholder="Your Name" />
                    <FieldError />
                </TextField>
                <TextField
                    isRequired
                    name="email"
                    type="email"
                    validate={(value) => {
                        if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(value)) {
                            return "Please enter a valid email address";
                        }
                        return null;
                    }}
                >
                    <Label>Email</Label>
                    <Input placeholder="Your Email Address" />
                    <FieldError />
                </TextField>
                <TextField
                    isRequired
                    minLength={8}
                    name="password"
                    type="password"
                    onChange={(value) => setPassword(value)}

                    validate={(value) => {
                        if (value.length < 8) {
                            return "Password must be at least 8 characters";
                        }
                        if (!/[A-Z]/.test(value)) {
                            return "Password must contain at least one uppercase letter";
                        }
                        if (!/[0-9]/.test(value)) {
                            return "Password must contain at least one number";
                        }
                        return null;
                    }}
                >
                    <Label>Password</Label>
                    <Input placeholder="Enter your password" />
                    <Description>Must be at least 8 characters with 1 uppercase and 1 number</Description>
                    <FieldError />
                </TextField>
                <TextField
                    isRequired
                    minLength={8}
                    name="confirmPassword"
                    type="password"
                    validate={(value) => {
                        if (value !== password) {
                            return "Passwords do not match";
                        }
                        return null;
                    }}
                >
                    <Label>Confirm Password</Label>
                    <Input placeholder="Confirm your password" />
                    <Description>Must be at least 8 characters with 1 uppercase and 1 number</Description>
                    <FieldError />
                </TextField>
                <div className="flex flex-col gap-4">
                    <button type="submit" className="primary-btn w-full">Create Account</button>
                    <p className="text-center">Already have an account? <Link href="/public/login" className="primary-text">Login</Link></p>
                </div>
            </Form>
        </div>
    );
};

export default Register;