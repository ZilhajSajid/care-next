"use client";
import { signOut, useSession } from "next-auth/react";
import Link from "next/link";
import React from "react";
import { toast } from "react-toastify";

const NextAuthButtons = () => {
  const session = useSession();
  const handleLogOut = async () => {
    await signOut({ callbackUrl: "/" });
    toast.success("Log Out");
  };

  return (
    <div>
      {session.status === "authenticated" ? (
        <>
          <button onClick={handleLogOut} className="btn btn-primary">
            Logout
          </button>
        </>
      ) : (
        <>
          <Link href={"/login"} className="btn btn-primary btn-outline">
            Log In
          </Link>
        </>
      )}
    </div>
  );
};

export default NextAuthButtons;
