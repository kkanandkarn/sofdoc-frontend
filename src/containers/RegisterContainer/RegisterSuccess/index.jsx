import { useNavigate } from "react-router-dom";
import Button from "../../../components/Button";
import TopHeader from "../../TopHeader";
import { FiMail, FiCheckCircle, FiHome, FiClock } from "react-icons/fi";

const RegisterSuccess = () => {
  const navigate = useNavigate();

  const handleSubmit = async () => {
    navigate("/");
  };

  const handleResendEmail = () => {
    console.log("Resending verification email...");
  };

  return (
    <div className="flex items-center justify-center bg-gradient-to-br from-blue-50 to-indigo-50 px-4 py-8">
      <div className="w-1/2 bg-white rounded-3xl shadow-2xl overflow-hidden border border-gray-100">
        <div className="h-2 bg-gradient-to-r from-blue-500 to-purple-500"></div>
        <div className="p-8">
          <TopHeader />

          <div className="flex flex-col items-center justify-center text-center py-6">
            <div className="relative mb-4">
              <div className="w-24 h-24 bg-gradient-to-br from-emerald-100 to-blue-100 rounded-full flex items-center justify-center">
                <div className="w-24 h-24 bg-gradient-to-br from-emerald-500 to-blue-500 rounded-full flex items-center justify-center shadow-lg">
                  <FiMail className="w-12 h-12 text-white" />
                </div>
              </div>

              {/* Animated checkmark */}
              <div className="absolute -top-4 -right-6">
                <div className="bg-emerald-500 text-white rounded-full p-3 shadow-xl animate-pulse">
                  <FiCheckCircle className="w-8 h-8" />
                </div>
              </div>
            </div>

            {/* Success message */}
            <div className="space-y-6 max-w-lg">
              <div>
                <h1 className="text-lg font-bold text-gray-800 mb-3">
                  You're Almost There! 🎉
                </h1>
                <p className="text-sm text-gray-600 leading-relaxed">
                  Welcome to{" "}
                  <span className="text-blue-600 font-semibold">SofDoc</span>!
                  We've sent a verification email to
                  <span className="font-semibold text-blue-600">
                    {" "}
                    your registered email address
                  </span>
                  .
                </p>
              </div>

              {/* Email details card */}
              <div className="bg-gradient-to-r from-blue-50 to-emerald-50 border border-blue-100 rounded-2xl p-6 text-left">
                <h3 className="font-semibold text-gray-700 mb-4 flex items-center gap-2">
                  <FiMail className="text-blue-500" />
                  What's Next?
                </h3>
                <ul className="space-y-3">
                  <li className="flex items-start gap-3">
                    <div className="bg-blue-100 p-1 rounded-full mt-1">
                      <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                    </div>
                    <span className="text-gray-700 text-sm">
                      Check your inbox for an email from us
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="bg-blue-100 p-1 rounded-full mt-1">
                      <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                    </div>
                    <span className="text-gray-700 text-sm">
                      Click the verification link in the email
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="bg-blue-100 p-1 rounded-full mt-1">
                      <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                    </div>
                    <span className="text-gray-700 text-sm">
                      Complete your account setup and start exploring
                    </span>
                  </li>
                </ul>
              </div>

              {/* Timeframe note */}
              <div className="flex items-center justify-start gap-3 text-sm text-gray-600 bg-gray-200 rounded-xl p-4">
                <FiClock className="text-gray-500 text-4xl" />
                <span className="text-start">
                  The email usually arrives within 1-2 minutes. Check your spam
                  folder if you don't see it.
                </span>
              </div>

              {/* Action buttons */}
              <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
                <Button
                  label={"Back to Home"}
                  onClick={handleSubmit}
                  iconPrfix={<FiHome className="w-5 h-5" />}
                />
                <Button
                  label={"Resend Verification Email"}
                  onClick={handleResendEmail}
                  variant="secondry"
                />
              </div>

              <div className="pt-2 border-t border-gray-100">
                <p className="text-gray-500 text-sm">
                  Need help?{" "}
                  <button
                    onClick={() => console.log("Contact support")}
                    className="text-blue-600 cursor-pointer hover:text-blue-700 font-medium underline"
                  >
                    Contact our support team
                  </button>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RegisterSuccess;
