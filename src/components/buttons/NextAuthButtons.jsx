"use client";
import { signOut, useSession } from "next-auth/react";
import Link from "next/link";
import React from "react";

const NextAuthButtons = () => {
  const session = useSession();

  return (
    <div>
      {session.status === "authenticated" ? (
        <>
          <button onClick={() => signOut()} className="btn btn-primary">
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
