import React from 'react'
import { Zap, Mail, Lock, User, Eye, EyeOff, ArrowRight } from "lucide-react";
import { NavLink } from "react-router";
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



function Create() {

    const { register, reset, handleSubmit, watch, formState: { errors } } = useForm();

    const onSubmit = (data) => {
        const user = {
            ...data,
            isLogin: true,
        };
        localStorage.setItem('user', JSON.stringify(user));
        reset();
        window.location.pathname = '/';
    }

    return (
        <div className="flex items-center justify-center min-h-screen p-6 bg-black">
            <div className="w-full max-w-md flex flex-col items-center">
                <div className="mb-8">
                    <Logo size="text-3xl" />
                </div>

                <form
                    onSubmit={handleSubmit(onSubmit)}
                    className="w-full bg-zinc-950 border border-zinc-800 rounded-2xl p-8"
                >
                    <h2 className="text-2xl font-extrabold text-white mb-1">
                        Create account
                    </h2>

                    <p className="text-zinc-500 text-sm mb-6">
                        Join SkyMart and start shopping
                    </p>

                    <div className="space-y-4">

                        <input
                            placeholder="Full name"
                            type="text"
                            className="w-full bg-zinc-900 border border-zinc-800 rounded-xl py-3 px-4 text-white outline-none focus:border-lime-400"
                            {...register("name", {
                                required: "Full name is required",
                            })}
                        />

                        {errors.name && (
                            <p className="text-red-500 text-sm">
                                {errors.name.message}
                            </p>
                        )}

                        <input
                            placeholder="Email address"
                            type="email"
                            className="w-full bg-zinc-900 border border-zinc-800 rounded-xl py-3 px-4 text-white outline-none focus:border-lime-400"
                            {...register("email", {
                                required: "Email is required",
                            })}
                        />
                        {errors.email && (
                            <p className="text-red-500 text-sm">
                                {errors.email.message}
                            </p>
                        )}
                        <input
                            placeholder="Password (min 6 chars)"
                            type="password"
                            className="w-full bg-zinc-900 border border-zinc-800 rounded-xl py-3 px-4 text-white outline-none focus:border-lime-400"
                            {...register("password", {
                                required: "Password is required",
                                minLength: {
                                    value: 6,
                                    message: "Password must be at least 6 characters",
                                },
                            })}
                        />

                        {errors.password && (
                            <p className="text-red-500 text-sm">
                                {errors.password.message}
                            </p>
                        )}

                        <input
                            placeholder="Confirm password"
                            type="password"
                            className="w-full bg-zinc-900 border border-zinc-800 rounded-xl py-3 px-4 text-white outline-none focus:border-lime-400"
                            {...register("confirmPassword", {
                                required: "Confirm password is required",
                                validate: (value) =>
                                    value === watch("password") ||
                                    "Passwords do not match",
                            })}
                        />

                        {errors.confirmPassword && (
                            <p className="text-red-500 text-sm">
                                {errors.confirmPassword.message}
                            </p>
                        )}

                    </div>

                    <button
                        type="submit"
                        className="w-full mt-6 bg-lime-400 hover:bg-lime-300 transition-colors rounded-xl py-3.5 font-bold text-black flex items-center justify-center gap-2"
                    >
                        Create Account
                        <ArrowRight className="w-4 h-4" />
                    </button>
                </form>

                <p className="text-center text-zinc-500 text-sm mt-6">
                    Already have an account?{" "}
                    <NavLink
                        to="/login"
                        className="text-lime-400 font-semibold hover:underline"
                    >
                        Sign in
                    </NavLink>
                </p>
            </div>
        </div>
    )
}

export default Create
