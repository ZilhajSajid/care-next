"use client";

import Image from "next/image";
import Link from "next/link";
import { FaCalendarCheck } from "react-icons/fa";

const ServicesCard = ({ service }) => {
  const { name, slug, shortDescription, pricePerHour, image, _id } = service;

  return (
    <div className="card bg-base-100 shadow-md hover:shadow-lg transition">
      {/* Image */}
      <figure className="relative h-52">
        <Image
          width={200}
          height={170}
          src={image}
          alt={name}
          className="object-cover"
        />
      </figure>

      {/* Body */}
      <div className="card-body">
        <h2 className="card-title text-lg">{name}</h2>

        <p className="text-sm text-gray-600">{shortDescription}</p>

        <p className="font-semibold mt-2">৳ {pricePerHour} / hour</p>

        <div className="card-actions justify-between items-center mt-4">
          <span className="badge badge-outline">{slug}</span>

          <Link
            href={`/services/${_id}`}
            className="btn btn-primary btn-sm flex items-center gap-2"
          >
            <FaCalendarCheck />
            See Details
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ServicesCard;
