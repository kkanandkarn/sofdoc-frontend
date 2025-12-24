import React from "react";
import { MdOutlineAccessTime } from "react-icons/md";

const LinkExpired = () => {
  return (
    <div className="bg-white rounded-xl shadow-lg p-8 max-w-md w-full text-center">
      <div className="flex items-center justify-center w-14 h-14 mx-auto rounded-full bg-yellow-100 text-yellow-500 mb-4">
        <MdOutlineAccessTime size={28} />
      </div>

      <h2 className="text-xl font-semibold text-gray-800 mb-2">
        Verification Link Expired
      </h2>

      <p className="text-gray-600 text-sm leading-relaxed">
        This verification link has expired for security reasons.
      </p>

      <p className="text-gray-600 text-sm mt-2">
        Please request a new link to complete your verification.
      </p>
    </div>
  );
};

export default LinkExpired;
