import React, { useEffect, useState } from "react";
import Layout from "../Layout/Layout";
import Button from "../components/UI/Button/Button";
import { IoIosAddCircleOutline } from "react-icons/io";
import VaultTable from "../container/Vault/VaultTable";
import { useDispatch } from "react-redux";
import { setActivePath } from "../store/authSlice";
import AddVaultModal from "../components/modals/vault/AddVaultModal";

const VaultPage = () => {
  const [search, setSearch] = useState("");
  const [data, setData] = useState([]);
  const dispatch = useDispatch();
  const [modal, setModal] = useState(false);
  const openModal = () => {
    setModal(true);
  };
  const closeModal = () => {
    setModal(false);
  };

  useEffect(() => {
    dispatch(setActivePath({ activePath: "/vault" }));
    setData([
      {
        id: 1,
        name: "Eduzenix",
        service: "Cloudinary",
        members: 4,
        files: 10,
        storage: "0.05/0.2 GB",
        projectId: "Eduzenix_c4phi9",
      },
      {
        id: 2,
        name: "RestroEase",
        service: "Cloudinary",
        members: 2,
        files: 10,
        storage: "0.05/0.2 GB",
        projectId: "Eduzenix_q8vfe4",
      },
    ]);
  }, []);

  return (
    <Layout title={"Vault"}>
      {modal && <AddVaultModal onClose={closeModal} />}
      <div className="flex items-center justify-end gap-4">
        <div>
          {" "}
          <input
            type="text"
            placeholder={"Search Vault"}
            className={`w-48 font-poppins px-3 py-2 border-2  text-black border-[#1976d2] rounded-md text-sm placeholder-gray-500 focus:outline-none bg-transparent`}
            name="search"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
        </div>
        <Button
          label={"Create Vault"}
          additionalClass={"h-10"}
          iconPrfix={<IoIosAddCircleOutline size={20} />}
          onClick={openModal}
        />
      </div>
      <div className="">
        {" "}
        <VaultTable rowdata={data} />
      </div>
    </Layout>
  );
};

export default VaultPage;
