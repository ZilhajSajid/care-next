import RegisterForm from "@/components/auth/RegisterForm";
import Image from "next/image";
import Link from "next/link";

const RegisterPage = () => {
  return (
    <div className="md:min-h-screen grid grid-cols-1 md:grid-cols-2">
      {/* LEFT SIDE - FORM */}
      <div className="flex items-start md:items-center justify-center px-4 sm:px-8 pt-10 md:pt-0">
        <div className="w-full max-w-md space-y-6">
          <h2 className="text-3xl font-bold text-center">
            Register on <span className="text-primary">CareConnect</span>
          </h2>
          <RegisterForm />
          {/* Login Redirect */}
          <p className="text-center">
            Already have an account?{" "}
            <Link href="/login" className="text-primary font-semibold">
              Login
            </Link>
          </p>
        </div>
      </div>

      {/* RIGHT SIDE - LOGO */}
      <div className="hidden md:flex items-center justify-center bg-primary/10 rounded-2xl">
        <div className="text-center space-y-4">
          <Image
            src="/assets/logo.png"
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

export default RegisterPage;
