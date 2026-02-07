import Logo from "@/components/layouts/Logo";
import React from "react";

const loading = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-base-200 px-4">
      <h2 className="font-bold  text-5xl animate-ping">Loading</h2>
      <div className="animate-bounce">
        <Logo />
      </div>
    </div>
  );
};

export default loading;
