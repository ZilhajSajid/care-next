import React from "react";

const ServiceDetailsSkeleton = () => {
  return (
    <div className="max-w-6xl mx-auto px-6 py-12">
      <div className="grid md:grid-cols-2 gap-10 items-center">
        {/* Image Skeleton */}
        <div className="skeleton h-[350px] w-full rounded-xl"></div>

        {/* Content Skeleton */}
        <div>
          <div className="skeleton h-8 w-2/3 mb-3"></div>
          <div className="skeleton h-6 w-1/2 mb-4"></div>

          <div className="skeleton h-4 w-full mb-2"></div>
          <div className="skeleton h-4 w-full mb-2"></div>
          <div className="skeleton h-4 w-5/6 mb-4"></div>

          <div className="skeleton h-4 w-full mb-2"></div>
          <div className="skeleton h-4 w-full mb-2"></div>
          <div className="skeleton h-4 w-4/6 mb-6"></div>

          <div className="skeleton h-8 w-32 mb-6"></div>

          <div className="skeleton h-12 w-40"></div>
        </div>
      </div>
    </div>
  );
};

export default ServiceDetailsSkeleton;
