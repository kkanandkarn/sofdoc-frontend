import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import InvalidLink from "./InvalidLink";
import LinkExpired from "./LinkExpired";
import ContactUs from "./Contactus";
import HomeButton from "./HomeButton";
import { IoCloudUploadOutline } from "react-icons/io5";
import RegistrationRequest from "./RegistrationRequest";

const VerifyContainer = () => {
  const apiData = [
    {
      id: "1",
      programCode: "REGISTRATION_REQUEST",
      data: {
        name: "Aryan Kumar",
        email: "aryan@gmail.com",
        username: "aryan_kumar",
        userType: "INDIVIDUAL",
      },
      status: "ACTIVE",
    },
    {
      id: "2",
      programCode: "REGISTRATION_REQUEST",
      data: {
        user: {
          name: "Ashi Jain",
          email: "aryan@gmail.com",
          username: "aryan_kumar",
          userType: "INDIVIDUAL",
        },
        tenant: {
          name: "Ashi Organisation",
        },
      },
      status: "ACTIVE",
    },
  ];
  const { linkId } = useParams();
  console.log("LINK ID: ", linkId);
  const [linkData, setLinkData] = useState(null);
  const [error, setError] = useState(null);
  useEffect(() => {
    const data = apiData.find((d) => d.id === linkId);
    if (data) {
      if (data.status === "EXPIRED") {
        setError("LINK_EXPIRED");
      } else {
        setLinkData(data);
        setError("");
      }
    } else {
      setError("INVALID_LINK");
    }
  }, []);

  const errorMap = {
    LINK_EXPIRED: <LinkExpired />,
    INVALID_LINK: <InvalidLink />,
  };
  const linkDataMap = {
    REGISTRATION_REQUEST: <RegistrationRequest linkData={linkData} />,
  };

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col items-center justify-center relative px-4">
      {/* Header */}

      {/* Error Content */}
      {error && (
        <div className="flex flex-col items-center gap-6">
          <div className="absolute top-8 left-1/2 -translate-x-1/2">
            <div className="flex flex-col items-center">
              <div className="flex items-center gap-3">
                <div className="flex items-center justify-center w-9 h-9 rounded-md bg-blue-600 text-white">
                  <IoCloudUploadOutline size={18} />
                </div>

                <h1 className="text-lg font-semibold text-gray-900 tracking-tight">
                  Sof<span className="text-blue-600">Doc</span>
                </h1>
              </div>

              <p className="mt-1 text-xs text-gray-600 text-center max-w-sm">
                Secure cloud file management and migration
              </p>
            </div>
          </div>
          {errorMap[error]}

          <div className="flex gap-4">
            <ContactUs />
            <HomeButton />
          </div>
        </div>
      )}
      {linkData && linkDataMap[linkData.programCode]}
    </div>
  );
};

export default VerifyContainer;
