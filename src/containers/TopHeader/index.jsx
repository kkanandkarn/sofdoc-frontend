import React from "react";
import { IoCloudUploadOutline } from "react-icons/io5";

const TopHeader = () => {
  return (
    <div className="flex flex-col items-center mb-8">
      <div className="flex items-center gap-3">
        <div className="flex items-center justify-center w-9 h-9 rounded-md bg-blue-600 text-white">
          <IoCloudUploadOutline size={18} />
        </div>

        <h1 className="text-3xl font-semibold text-gray-500 tracking-tight">
          <span className="text-blue-600">S</span>of
          <span className="text-blue-600">D</span>oc
        </h1>
      </div>

      <p className="mt-2 text-xs text-gray-600 text-center max-w-sm">
        Secure cloud file management and migration
      </p>
    </div>
  );
};

export default TopHeader;
