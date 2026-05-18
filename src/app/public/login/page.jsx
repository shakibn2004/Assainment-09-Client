'use client';
import { Description, FieldError, Form, Input, Label, TextField } from "@heroui/react";
import Image from "next/image";
import Link from "next/link";

const Login = () => {
    return (
        <div className='m-auto shadow-[0_0_10px_#000]/30 bg-white dark:bg-black border border-white rounded-2xl p-10'>
            <div className="auth flex flex-col gap-2 mb-6">
                <div >
                    <span><Image src="/icon.png" alt="Paw Home Icon" width={32} height={32} /></span>
                </div>
                <h1 className="auth-title text-[2rem] font-bold">Welcome back</h1>
                <p className="auth-sub secondary-text -mt-2">Log in to your PawHome account</p>

                <button className="google-btn secondary-bg my-5 secondary-border py-2 font-semibold rounded-lg flex items-center justify-center gap-2">
                    <span className="text-[1.2rem]">G</span> Continue with Google
                </button>
                <div className="divider border-t border-[#f5f0e8]">
                    <span className="block bg-white dark:bg-black secondary-text w-fit mx-auto px-4 -mt-[0.9rem]">or continue with email</span>
                </div>
            </div>

            <Form className="flex w-96 flex-col gap-4">
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
                    <Input placeholder="john@example.com" />
                    <FieldError />
                </TextField>
                <TextField
                    isRequired
                    minLength={8}
                    name="password"
                    type="password"
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
                <div className="flex flex-col gap-4">
                    <button className="primary-btn w-full">Login</button>
                    <p className="text-center">Don't have an account? <Link href="/public/register" className="primary-text">Register</Link></p>
                </div>
            </Form>
        </div>
    );
};

export default Login;