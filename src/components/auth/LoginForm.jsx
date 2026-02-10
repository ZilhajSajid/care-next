"use client";
import React from "react";
import { FcGoogle } from "react-icons/fc";
import { signIn } from "next-auth/react";
import Swal from "sweetalert2";
import { useRouter } from "next/navigation";

const LoginForm = () => {
  const router = useRouter();
  const handleSubmit = async (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;
    const result = await signIn("credentials", {
      email,
      password,
      redirect: false,
    });
    console.log(result);
    if (!result.ok) {
      Swal.fire("Error", "Email Password Not Matched", "error");
    } else {
      Swal.fire("Success", "Welcome to CareConnect", "success");
      router.push('/')
    }
  };
  return (
    <div>
      <form onSubmit={handleSubmit} className="space-y-4">
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

        {/* Login Button */}
        <button className="btn btn-primary w-full">Login</button>
        <button
          type="button"
          className="btn btn-outline w-full flex items-center justify-center gap-2"
        >
          <FcGoogle size={22} />
          Login with Google
        </button>
      </form>
    </div>
  );
};

export default LoginForm;
