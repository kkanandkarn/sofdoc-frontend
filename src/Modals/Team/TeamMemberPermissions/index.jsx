import React, { useEffect, useState } from "react";
import { globalPermissions, teamsTableData } from "../../../utils/constant";
import MakeModal from "../../../components/MakeModal";
import { FiEdit2 } from "react-icons/fi";
import { IoIosCloseCircleOutline } from "react-icons/io";
import Button from "../../../components/Button";
import { FaSave } from "react-icons/fa";
import { notifier } from "../../../components/Notifier";

const TeamMemberPermissions = ({
  userId,
  mode,
  setModal,
  setMode,
  setRowData,
}) => {
  const [permissions, setPermissions] = useState(globalPermissions);
  const [selectedPermissions, setSelectedPermissions] = useState([]);
  console.log("SELECTED PERMISSINS: ", selectedPermissions);
  const [parents, setParents] = useState([]);

  useEffect(() => {
    if (permissions?.length) {
      let parent = permissions.map((permission) => permission.parent);
      parent = [...new Set(parent)];
      setParents(parent);
    }
    const teamsData = teamsTableData.find((d) => d.id === userId);
    setSelectedPermissions(teamsData.permissions);
  }, [permissions]);
  const handleSubmit = () => {
    notifier.success("Permissions Updated Successfully!");
    setModal("");
  };
  const checkPermission = (permissionsName, parent) => {
    let isPermission = selectedPermissions.find(
      (p) => p.permissionName === permissionsName && p.parent === parent
    );
    isPermission = isPermission ? true : false;

    return !!isPermission;
  };
  const getPermissions = (parent) => {
    const perm = permissions?.filter((p) => p.parent === parent);
    return perm;
  };

  return (
    <MakeModal>
      {" "}
      <div className="min-w-[50%]  min-h-[50%] rounded-lg shadow-lg flex flex-col bg-white overflow-y-auto relative">
        <div className="absolute top-3 right-8 flex items-center justify-end gap-2">
          {/* <button
            className="p-2 text-xs bg-sky-500 text-white rounded-full cursor-pointer"
            onClick={() => {
              setRowData(state);
              setModal("PERMISSIONS");
            }}
          >
            {" "}
            <FiEdit2 />
          </button> */}
          <button
            onClick={() => {
              setModal("");
            }}
            className="text-3xl cursor-pointer text-red-500"
          >
            <IoIosCloseCircleOutline />
          </button>
        </div>
        <div className="flex items-center justify-center bg-gradient-to-r from-blue-50 to-indigo-50 py-4">
          <h1 className="text-gray-600 font-semibold ">Permissions</h1>
        </div>
        <div className="px-8 py-4 w-full">
          <div>
            {parents?.map((parent, index) => (
              <div key={index} className="mb-4">
                {/* Parent */}
                <div className="font-semibold text-gray-700 mb-2">{parent}</div>

                {/* Children */}
                <div className="grid grid-cols-2 gap-2 pl-4">
                  {getPermissions(parent)?.map((perm) => (
                    <label
                      key={perm.permissionName}
                      className="flex items-center gap-2 text-sm cursor-pointer"
                    >
                      <input
                        type="checkbox"
                        checked={checkPermission(
                          perm.permissionName,
                          perm.parent
                        )}
                        onChange={() => {
                          setSelectedPermissions((prev) => {
                            const exists = prev.find(
                              (p) =>
                                p.permissionName === perm.permissionName &&
                                p.parent === parent
                            );

                            if (exists) {
                              // remove
                              return prev.filter(
                                (p) =>
                                  !(
                                    p.permissionName === perm.permissionName &&
                                    p.parent === parent
                                  )
                              );
                            }

                            // add
                            return [
                              ...prev,
                              {
                                permissionName: perm.permissionName,
                                parent,
                              },
                            ];
                          });
                        }}
                      />
                      {perm.permissionName}
                    </label>
                  ))}
                </div>
              </div>
            ))}
          </div>
          <div className="flex items-center justify-end gap-2 py-4">
            <Button
              label={"Cancel"}
              onClick={() => setModal("")}
              variant="secondry"
            />
            <Button
              label={"Save"}
              iconPrfix={<FaSave size={18} />}
              onClick={handleSubmit}
            />
          </div>
        </div>
      </div>
    </MakeModal>
  );
};

export default TeamMemberPermissions;
