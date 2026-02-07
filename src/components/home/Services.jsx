import React from "react";
import ServicesCard from "../cards/ServicesCard";
import { getServices } from "@/actions/server/services";
const Services = async () => {
  await new Promise((resolve) =>
    setTimeout(() => {
      resolve();
    }, 3000),
  );

  const services = (await getServices()) || [];

  return (
    <div>
      <h2 className="text-4xl text-center font-bold mb-10">Our Services</h2>
      <div className="grid md:grid-cols-3 gap-4">
        {services.map((service) => (
          <ServicesCard key={service._id} service={service} />
        ))}
      </div>
    </div>
  );
};

export default Services;
