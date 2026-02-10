import { signIn } from "next-auth/react";
import { useSearchParams } from "next/navigation";
import React from "react";
import { FcGoogle } from "react-icons/fc";
import Swal from "sweetalert2";

const SocialButton = () => {
  const params = useSearchParams();
  //    console.log(params.get("callbackUrl") || "");

  const handleSignIn = async () => {
    const result = await signIn("google", {
      redirect: false,
      callbackUrl: params.get("callbackUrl") || "",
    });
    console.log(result);
    if (result.ok) {
      Swal.fire("success", "welcome to Care Connect", "Success");
    } else {
      Swal.fire("error", "something went wrong", "Error");
    }
  };
  return (
    <div>
      <button
        onClick={handleSignIn}
        type="button"
        className="btn btn-outline w-full flex items-center justify-center gap-2"
      >
        <FcGoogle size={22} />
        Login with Google
      </button>
    </div>
  );
};

export default SocialButton;
