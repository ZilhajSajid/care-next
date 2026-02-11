"use client";
import { postUser } from "@/actions/server/auth";
import { useRouter, useSearchParams } from "next/navigation";
import React from "react";
import { FcGoogle } from "react-icons/fc";
import { toast } from "react-toastify";
import SocialButton from "../buttons/SocialButton";
import { signIn } from "next-auth/react";

const RegisterForm = () => {
  const params = useSearchParams();
  const callBack = params.get("callbackUrl") || "";

  const router = useRouter();
  const handleSubmit = async (e) => {
    e.preventDefault();
    const name = e.target.name.value;
    const image = e.target.image.value;
    const email = e.target.email.value;
    const password = e.target.password.value;
    console.log({ name, image, email, password });
    const result = await postUser({ name, image, email, password });
    if (result.acknowledged) {
      const res = await signIn("credentials", {
        email,
        password,
        callbackUrl: callBack,
      });
      toast.success("Register Successful");
    }
  };
  return (
    <div>
      <form onSubmit={handleSubmit} className="space-y-4">
        {/* Name */}
        <div>
          <label className="label">Full Name</label>
          <input
            name="name"
            type="text"
            placeholder="Enter your name"
            className="input input-bordered w-full"
          />
        </div>

        {/* Photo URL */}
        <div>
          <label className="label">Photo URL</label>
          <input
            name="image"
            type="text"
            placeholder="Enter photo URL"
            className="input input-bordered w-full"
          />
        </div>

        {/* Email */}
        <div>
          <label className="label">Email</label>
          <input
            name="email"
            type="email"
            placeholder="Enter your email"
            className="input input-bordered w-full"
          />
        </div>

        {/* Password */}
        <div>
          <label className="label">Password</label>
          <input
            name="password"
            type="password"
            placeholder="Enter your password"
            className="input input-bordered w-full"
          />
        </div>

        {/* Register Button */}
        <button className="btn btn-primary w-full">Create Account</button>

        {/* Divider */}
        <div className="divider">OR</div>

        {/* Google Register */}
        <SocialButton />
      </form>
    </div>
  );
};

export default RegisterForm;
