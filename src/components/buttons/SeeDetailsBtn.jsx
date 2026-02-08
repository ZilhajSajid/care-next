"use client";

import { usePathname, useRouter } from "next/navigation";
import { FaCalendarCheck } from "react-icons/fa";

const SeeDetailsBtn = ({ service }) => {
  const isLogin = false;
  const router = useRouter();
  const path = usePathname();
  const seeDetailsBtn = () => {
    if (isLogin) {
      alert(service._id);
    } else {
      router.push(`login?callbackUrl=/services/${service._id}`);
    }
  };
  return (
    <div>
      <button
        onClick={seeDetailsBtn}
        className="btn btn-primary btn-sm flex items-center gap-2"
      >
        <FaCalendarCheck />
        See Details
      </button>
    </div>
  );
};

export default SeeDetailsBtn;
