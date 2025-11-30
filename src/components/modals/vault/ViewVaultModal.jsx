import { IoMdCloseCircleOutline } from "react-icons/io";
import { MdOutlineContentCopy } from "react-icons/md";
import { actionNotifier } from "../../Toast";

const ViewVaultModal = ({ onClose, vault }) => {
  return (
    <div
      className="absolute inset-0 w-full max-h-[100vh] flex items-center justify-center"
      style={{ backgroundColor: "rgba(0, 0, 0, 0.5)" }}
    >
      <div className="w-[60%] max-h-[60vh] bg-white rounded-lg shadow-lg flex flex-col">
        {/* Header */}
        <div className="w-full h-14 py-2 bg-primaryColor flex items-center justify-between px-4">
          <div className="text-xl font-Poppins font-bold text-sky-500">
            Vault Details
          </div>
          <div className="text-red-500 cursor-pointer" onClick={onClose}>
            <IoMdCloseCircleOutline size={30} />
          </div>
        </div>

        {/* Content */}
        <div className="flex-grow overflow-y-auto p-6">
          <div className="grid grid-cols-3 gap-x-10 gap-y-6">
            {/* Name */}
            <div>
              <h1 className="text-base font-poppins font-bold">Name</h1>
              <p className="text-sm font-poppins">{vault?.name}</p>
            </div>

            {/* Service */}
            <div>
              <h1 className="text-base font-poppins font-bold">Service</h1>
              <p className="text-sm font-poppins">{vault?.service}</p>
            </div>

            {/* Members */}
            <div>
              <h1 className="text-base font-poppins font-bold">Members</h1>
              <p className="text-sm font-poppins">{vault?.members}</p>
            </div>

            {/* Files */}
            <div>
              <h1 className="text-base font-poppins font-bold">Files</h1>
              <p className="text-sm font-poppins">{vault?.files}</p>
            </div>

            {/* Storage */}
            <div>
              <h1 className="text-base font-poppins font-bold">Storage</h1>
              <p className="text-sm font-poppins">{vault?.storage}</p>
            </div>

            {/* Project ID */}
            <div>
              <h1 className="text-base font-poppins font-bold">Project ID</h1>
              <div className="flex items-center gap-2">
                {" "}
                <p className="text-sm font-poppins">{vault?.projectId}</p>
                <button
                  className="cursor-pointer"
                  onClick={() => {
                    navigator.clipboard.writeText(vault?.projectId || "");
                    actionNotifier.success("Project ID copied successfully");
                  }}
                >
                  <MdOutlineContentCopy />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ViewVaultModal;
