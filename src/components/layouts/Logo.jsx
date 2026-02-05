import Image from "next/image";
import Link from "next/link";
import React from "react";

const Logo = () => {
  return (
    <Link href={"/"} className="flex items-center">
      <Image
        alt="logo-care-next"
        src={"/assets/logo.png"}
        width={100}
        height={80}
      />

      <h2 className="font-bold text-xl">
        Care <span className="text-primary">Connect</span>
      </h2>
    </Link>
  );
};

export default Logo;
