import ServicesSkeleton from "@/components/skeleton/ServicesSkeleton";
import React from "react";

const loading = () => {
  return (
    <div className="grid md:grid-cols-3 gap-4">
      {[...Array(9)].map((_, index) => (
        <ServicesSkeleton key={index} />
      ))}
    </div>
  );
};

export default loading;
