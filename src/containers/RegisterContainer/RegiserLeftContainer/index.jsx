import { FiCamera, FiUpload } from "react-icons/fi";

const RegiserLeftContainer = ({ fileData, setFileData }) => {
  const handleFileChange = (e) => {
    const file = e.target.files?.[0];
    if (!file) return;

    const isImage = file.type.startsWith("image/");
    const sizeMB = file.size / 1024 / 1024;

    if (!isImage) {
      setFileData((prev) => ({
        ...prev,
        imageError: true,
        imageMsg: "Only image files allowed",
      }));
      return;
    }

    if (sizeMB > 5) {
      setFileData((prev) => ({
        ...prev,
        imageError: true,
        imageMsg: "Max 5 mb size allowed",
      }));
      return;
    }

    setFileData((prev) => ({
      ...prev,
      imageError: false,
      imageMsg: "",
      selectedFile: file,
      filePreview: URL.createObjectURL(file),
    }));
  };

  return (
    <div className="flex flex-col justify-center items-center p-4 w-2/5 border-r border-gray-200 ">
      <div className="flex flex-col items-center justify-center  w-full">
        <div className="relative mb-4">
          <div
            className={`h-64 w-64 rounded-full border-4 flex items-center justify-center overflow-hidden shadow-lg transition-all duration-300 ${
              fileData.imageError
                ? "border-red-400 bg-red-50"
                : fileData.filePreview
                ? "border-blue-100"
                : "border-gray-200 bg-gray-50"
            }`}
          >
            {fileData.filePreview ? (
              <>
                <img
                  src={fileData.filePreview}
                  alt="Preview"
                  className="h-full w-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent rounded-full"></div>
              </>
            ) : (
              <div className="text-center p-4">
                <FiCamera
                  className={`w-16 h-16 mx-auto mb-4 ${
                    fileData.imageError ? "text-red-300" : "text-gray-300"
                  }`}
                />
                <span
                  className={`text-base font-medium ${
                    fileData.imageError ? "text-red-500" : "text-gray-400"
                  }`}
                >
                  {fileData.imageError
                    ? fileData.imageMsg
                    : "Add Profile Photo"}
                </span>
              </div>
            )}

            <button
              className="absolute inset-0 bg-black/40 rounded-full opacity-0 hover:opacity-100 transition-opacity duration-300 flex items-center justify-center cursor-pointer"
              onClick={() => document.getElementById("fileInput").click()}
            >
              <FiUpload className="w-10 h-10 text-white" />
            </button>
          </div>
        </div>

        <div className="space-y-4 w-full max-w-xs">
          <button
            className="group flex items-center justify-center gap-3 w-full px-6 py-3 rounded-full border-2 border-blue-500 text-blue-600 hover:bg-blue-500 hover:text-white ease-in-out transition-all duration-500 font-medium shadow-sm hover:shadow-md cursor-pointer"
            onClick={() => document.getElementById("fileInput").click()}
          >
            <FiUpload className="w-5 h-5 group-hover:translate-y-[-1px] transition-transform" />
            {fileData.filePreview ? "Change Picture" : "Choose Picture"}
          </button>

          <input
            id="fileInput"
            type="file"
            className="hidden"
            accept="image/*"
            onChange={handleFileChange}
          />

          <div className="bg-gray-50 rounded-xl p-4 mt-4">
            <h4 className="font-medium text-gray-700 mb-2">
              Photo Requirements
            </h4>
            <ul className="text-sm text-gray-600 space-y-1">
              <li className="flex items-center gap-2">
                <div className="w-1.5 h-1.5 bg-blue-500 rounded-full"></div>
                <span>JPG, PNG or GIF format</span>
              </li>
              <li className="flex items-center gap-2">
                <div className="w-1.5 h-1.5 bg-blue-500 rounded-full"></div>
                <span>Maximum 5MB file size</span>
              </li>
              <li className="flex items-center gap-2">
                <div className="w-1.5 h-1.5 bg-blue-500 rounded-full"></div>
                <span>Square photos work best</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RegiserLeftContainer;
