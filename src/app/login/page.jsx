"use client";
import LoginForm from "@/components/auth/LoginForm";
import Image from "next/image";
import Link from "next/link";
import { useSearchParams } from "next/navigation";

const LoginPage = () => {
  const params = useSearchParams();

  const callBack = params.get("callbackUrl") || "";
  return (
    <div className="md:min-h-screen grid grid-cols-1 md:grid-cols-2">
      {/* LEFT SIDE - FORM */}
      <div className="flex items-start md:items-center justify-center px-4 sm:px-8 pt-10 md:pt-0">
        <div className="w-full max-w-md space-y-6">
          <h2 className="text-3xl font-bold text-center">
            Login to <span className="text-primary">CareConnect</span>
          </h2>

          <LoginForm />

          {/* Register Section */}
          <p className="text-center">
            Don’t have an account?{" "}
            <Link
              href={`/register?callbackUrl=${callBack}`}
              className="text-primary font-semibold"
            >
              Register
            </Link>
          </p>
        </div>
      </div>

      {/* RIGHT SIDE - LOGO */}
      <div className="hidden md:flex items-center justify-center bg-primary/10 rounded-2xl">
        <div className="text-center space-y-4">
          <Image
            src="/assets/logo.png" // change path if needed
            width={220}
            height={220}
            alt="CareConnect Logo"
          />
          <h2 className="text-2xl font-bold">CareConnect</h2>
          <p className="text-gray-600">Trusted Care at Your Doorstep</p>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
