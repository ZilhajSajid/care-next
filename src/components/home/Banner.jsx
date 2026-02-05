import { hindSiliguri } from "@/app/layout";
import Image from "next/image";
import React from "react";

const Banner = () => {
  return (
    <div className="flex items-center justify-center">
      <div className="flex-1 space-y-2">
        <h2
          className={`text-4xl font-bold leading-15 ${hindSiliguri.className}`}
        >
          প্রিয়জনের জন্য সেরা সেবা, এখন আপনার{" "}
          <span className="text-primary">হাতের মুঠোয়</span>
        </h2>
        <p className={`${hindSiliguri.className} text-2xl`}>
          <span className="font-extrabold text-primary">CareConnect</span>-এ
          আমরা বিশ্বাস করি প্রতিটি পরিবার সদস্য সর্বোচ্চ মানের যত্ন পাওয়ার
          যোগ্য। আমাদের প্রশিক্ষিত এবং অভিজ্ঞ কেয়ারগিভাররা আপনার শিশু, বয়স্ক
          অভিভাবক বা অসুস্থ পরিবার সদস্যদের জন্য নিরাপদ এবং স্নেহপূর্ণ সেবা
          প্রদান করে।
        </p>
        <button className="btn btn-primary btn-outline">সেবা দেখুন</button>
      </div>
      <div className="flex-1">
        <Image
          width={800}
          height={600}
          src={"/assets/hero2.png"}
          alt="banner-care-next"
        />
      </div>
    </div>
  );
};

export default Banner;
