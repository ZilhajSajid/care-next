import { getSingleService } from "@/actions/server/services";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { FaCalendarCheck } from "react-icons/fa";
import { resolve } from "styled-jsx/css";

const ServiceDetailsPage = async ({ params }) => {
  const { id } = await params;
  await new Promise((resolve) =>
    setTimeout(() => {
      resolve();
    }, 2000),
  );
  const service = await getSingleService(id);
  console.log(service);

  if (!service) {
    return (
      <div className="min-h-[60vh] flex items-center justify-center">
        <h2 className="text-2xl font-semibold">Service Not Found</h2>
      </div>
    );
  }

  return (
    <div className="max-w-6xl mx-auto px-6 py-12">
      <div className="grid md:grid-cols-2 gap-10 items-center">
        {/* Image */}
        <div className="relative h-[350px] w-full rounded-xl overflow-hidden shadow">
          <Image
            src={service.image}
            alt={service.name}
            fill
            className="object-cover"
          />
        </div>

        {/* Content */}
        <div>
          <h1 className="text-3xl font-bold mb-2">{service.name}</h1>

          <h2 className="text-xl font-semibold text-primary mb-4">
            {service.name_bn}
          </h2>

          {/* English Description */}
          <p className="text-gray-600 mb-4">{service.description}</p>

          {/* Bangla Description */}
          <p className="text-gray-700 mb-6">{service.description_bn}</p>

          <p className="text-2xl font-semibold mb-6">
            ৳ {service.pricePerHour} / hour
          </p>

          <Link
            href={`/booking/${service.slug}`}
            className="btn btn-primary flex items-center gap-2 w-fit"
          >
            <FaCalendarCheck />
            Book Service
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ServiceDetailsPage;
