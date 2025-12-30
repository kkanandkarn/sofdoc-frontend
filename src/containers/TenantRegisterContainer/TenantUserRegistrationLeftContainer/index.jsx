import React from "react";
import { FiCamera, FiUpload, FiUser } from "react-icons/fi";

const TenantUserRegistrationLeftContainer = ({
  userFileData,
  setUserFileData,
}) => {
  const handleFileChange = (e) => {
    const file = e.target.files?.[0];
    if (!file) return;

    const isImage = file.type.startsWith("image/");
    const sizeMB = file.size / 1024 / 1024;

    if (!isImage) {
      setUserFileData({
        ...userFileData,
        imageError: true,
        imageMsg: "Only image files allowed",
      });
      return;
    }

    if (sizeMB > 5) {
      setUserFileData({
        ...userFileData,
        imageError: true,
        imageMsg: "Max 5 mb size allowed",
      });
      return;
    }

    const newFileData = {
      imageError: false,
      imageMsg: "",
      selectedFile: file,
      filePreview: URL.createObjectURL(file),
    };

    setUserFileData(newFileData);
  };

  return (
    <div className="w-full p-4 border-r border-gray-200">
      <div className="flex flex-col items-center">
        <div className="relative mb-4">
          <div
            className={`h-64 w-64 rounded-2xl border-4 flex items-center justify-center overflow-hidden shadow-lg transition-all duration-300 ${
              userFileData.imageError
                ? "border-red-400 bg-red-50"
                : userFileData.filePreview
                ? "border-blue-100"
                : "border-gray-200 bg-gray-50"
            }`}
          >
            {userFileData.filePreview ? (
              <>
                <img
                  src={userFileData.filePreview}
                  alt="Profile Preview"
                  className="h-full w-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent rounded-2xl"></div>
              </>
            ) : (
              <div className="text-center p-4">
                <FiUser
                  className={`w-20 h-20 mx-auto mb-4 ${
                    userFileData.imageError ? "text-red-300" : "text-gray-300"
                  }`}
                />
                <span
                  className={`text-base font-medium ${
                    userFileData.imageError ? "text-red-500" : "text-gray-400"
                  }`}
                >
                  {userFileData.imageError
                    ? userFileData.imageMsg
                    : "Add Profile Picture"}
                </span>
              </div>
            )}

            <button
              className="absolute inset-0 bg-black/40 rounded-2xl opacity-0 hover:opacity-100 transition-opacity duration-300 flex items-center justify-center cursor-pointer"
              onClick={() => document.getElementById("userFileInput").click()}
            >
              <FiCamera className="w-10 h-10 text-white" />
            </button>
          </div>
        </div>

        <button
          className="group flex items-center justify-center gap-3 w-64 px-6 py-3 rounded-full border-2 border-blue-500 text-blue-600 hover:bg-blue-500 hover:text-white ease-in-out transition-all duration-500 font-medium shadow-sm hover:shadow-md cursor-pointer"
          onClick={() => document.getElementById("userFileInput").click()}
        >
          <FiUpload className="w-5 h-5 group-hover:translate-y-[-1px] transition-transform" />
          {userFileData.filePreview ? "Change Picture" : "Upload Picture"}
        </button>

        <input
          id="userFileInput"
          type="file"
          className="hidden"
          accept="image/*"
          onChange={handleFileChange}
        />

        <div className="bg-gray-50 rounded-xl p-5 mt-4">
          <h4 className="font-medium text-gray-700 mb-3 flex items-center gap-2">
            <FiUser className="w-4 h-4" />
            Account Information
          </h4>
          <ul className="text-sm text-gray-600 space-y-2">
            <li className="flex items-start gap-2">
              <div className="w-1.5 h-1.5 bg-blue-500 rounded-full mt-1.5"></div>
              <span>This account will be the primary administrator</span>
            </li>
            <li className="flex items-start gap-2">
              <div className="w-1.5 h-1.5 bg-blue-500 rounded-full mt-1.5"></div>
              <span>
                You will have full administrative privileges for the
                organization.
              </span>
            </li>
            <li className="flex items-start gap-2">
              <div className="w-1.5 h-1.5 bg-blue-500 rounded-full mt-1.5"></div>
              <span>You can add more users after registration</span>
            </li>
          </ul>
        </div>

        {/* <div className="mt-6 text-sm text-gray-600">
          <p className="font-medium mb-1">Administrator Account</p>
          <p>
            This user will have full administrative privileges for the
            organization.
          </p>
        </div> */}
      </div>
    </div>
  );
};

export default TenantUserRegistrationLeftContainer;
