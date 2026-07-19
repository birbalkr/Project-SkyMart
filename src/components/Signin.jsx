import React from 'react'
import { Zap, Mail, Lock, User, Eye, EyeOff, ArrowRight } from "lucide-react";
import { Navigate, NavLink } from "react-router";
import { useForm } from 'react-hook-form';

const Logo = ({ size = "text-2xl" }) => (
    <div className="flex items-center gap-2">
        <div className="w-9 h-9 rounded-xl bg-lime-400 flex items-center justify-center shrink-0">
            <Zap className="w-5 h-5 text-black fill-black" />
        </div>
        <span className={`font-extrabold ${size} text-white`}>
            Sky<span className="text-lime-400">Mart</span>
        </span>
    </div>
);


function Signin() {

    const { register, reset, handleSubmit, formState: { errors } } = useForm();

    const onLoginData = (data) => {
        let userlogin = JSON.parse(localStorage.getItem('user'));
        console.log(userlogin);

        if (data.email === userlogin.email && data.password === userlogin.password) {
            let user = JSON.parse(localStorage.getItem('user'))
            let updatedUser = { ...user, isLogin: true };
            localStorage.setItem('user', JSON.stringify(updatedUser));
            console.log("login");
            window.location.pathname = "/";
        }
        else {
            alert("Invalid email or password");
        }
        reset();
    }

    return (
        <div className="relative min-h-screen w-full bg-black">
            <div className="absolute inset-0 grid md:grid-cols-2">
                <div className="hidden md:block absolute top-0 bottom-0 left-1/2 w-px bg-zinc-800" />
                <div className="relative flex flex-col justify-center px-10 md:px-20 py-16">
                    <div className="absolute top-10 left-10 md:left-20">
                        <Logo size="text-2xl" />
                    </div>
                    <p className="text-lime-400 text-xs font-bold tracking-widest mb-3">
                        WELCOME BACK
                    </p>
                    <h1 className="text-5xl font-extrabold leading-tight text-white">
                        Shop the future.
                    </h1>
                    <h1 className="text-5xl font-extrabold leading-tight text-lime-400 mb-5">
                        Today.
                    </h1>
                    <p className="text-zinc-400 text-sm leading-relaxed max-w-sm mb-10">
                        Thousands of products, lightning-fast delivery, and prices that
                        make your wallet happy.
                    </p>

                    <div className="grid grid-cols-3 gap-3 max-w-lg">
                        {[
                            ["20K+", "Products"],
                            ["50K+", "Users"],
                            ["4.9★", "Rating"],
                        ].map(([stat, label]) => (
                            <div
                                key={label}
                                className="border border-zinc-700 rounded-xl py-4 text-center"
                            >
                                <div className="text-lime-400 font-bold text-lg">{stat}</div>
                                <div className="text-zinc-400 text-xs mt-1">{label}</div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Right panel - form */}
                <div className="flex items-center justify-center px-6 py-16">
                    <div className="w-full max-w-sm bg-zinc-950 border border-zinc-800 rounded-2xl p-8">
                        <h2 className="text-2xl font-extrabold text-white mb-1">
                            Sign in
                        </h2>
                        <p className="text-zinc-500 text-sm mb-6">
                            Enter your credentials to continue
                        </p>

                        <form className="space-y-4" onSubmit={handleSubmit(onLoginData)}>
                            {/* Email */}
                            <div className="relative">
                                <Mail className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-zinc-500" />
                                <input
                                    {...register("email", { required: "Email is required" })}
                                    type="email"
                                    placeholder="Email address"
                                    className="w-full bg-zinc-900 border border-zinc-800 rounded-xl py-3.5 pl-12 pr-4 text-white placeholder:text-zinc-500 focus:outline-none focus:ring-2 focus:ring-lime-400"
                                />
                                {errors.email && (
                                    <p className="text-red-500 text-sm">
                                        {errors.email.message}</p>)}
                            </div>

                            {/* Password */}
                            <div className="relative">
                                <Lock className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-zinc-500" />
                                <input
                                    {...register("password", { required: "Password is required" })}
                                    type="password"
                                    placeholder="Password"
                                    className="w-full bg-zinc-900 border border-zinc-800 rounded-xl py-3.5 pl-12 pr-12 text-white placeholder:text-zinc-500 focus:outline-none focus:ring-2 focus:ring-lime-400"
                                />
                                {errors.password && (
                                    <p className="text-red-500 text-sm">
                                        {errors.password.message}</p>)}

                                <button
                                    type="button"
                                    className="absolute right-4 top-1/2 -translate-y-1/2 text-zinc-500 hover:text-zinc-300"
                                >
                                    {/* Eye icon */}
                                </button>
                            </div>

                            {/* Submit */}
                            <button
                                type="submit"
                                className="w-full bg-lime-400 hover:bg-lime-300 transition-colors rounded-xl py-3.5 font-bold text-black flex items-center justify-center gap-2"
                            >
                                Sign in
                                <ArrowRight className="w-4 h-4" />
                            </button>
                        </form>

                        <p className="text-center text-zinc-500 text-sm mt-6">
                            Don&apos;t have an account?{" "}
                            <NavLink
                                to="/create"
                                className="text-lime-400 font-semibold hover:underline"
                            >
                                Create one
                            </NavLink>

                        </p>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default Signin
