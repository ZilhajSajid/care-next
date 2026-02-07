import React from "react";

const ServicesSkeleton = () => {
  return (
    <div className="card bg-base-100 shadow-md">
      {/* Image Skeleton */}
      <div className="h-52 w-full skeleton"></div>

      <div className="card-body space-y-3">
        <div className="h-5 w-2/3 skeleton"></div>
        <div className="h-4 w-full skeleton"></div>
        <div className="h-4 w-1/2 skeleton"></div>

        <div className="flex justify-between items-center mt-4">
          <div className="h-6 w-20 skeleton"></div>
          <div className="h-8 w-24 skeleton"></div>
        </div>
      </div>
    </div>
  );
};

export default ServicesSkeleton;
