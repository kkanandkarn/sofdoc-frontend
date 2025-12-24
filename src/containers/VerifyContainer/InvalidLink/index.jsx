import React from "react";
import { MdLinkOff } from "react-icons/md";

const InvalidLink = () => {
  return (
    <div className="bg-white rounded-xl shadow-lg p-8 max-w-md w-full text-center">
      <div className="flex items-center justify-center w-14 h-14 mx-auto rounded-full bg-red-100 text-red-500 mb-4">
        <MdLinkOff size={28} />
      </div>

      <h2 className="text-xl font-semibold text-gray-800 mb-2">
        Invalid Verification Link
      </h2>

      <p className="text-gray-600 text-sm leading-relaxed">
        The verification link you’re trying to access is not valid or may have
        been entered incorrectly.
      </p>

      <p className="text-gray-600 text-sm mt-2">
        Please request a new verification link to continue.
      </p>
    </div>
  );
};

export default InvalidLink;
