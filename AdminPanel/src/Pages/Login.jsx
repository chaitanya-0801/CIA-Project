import { useState } from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { FaEnvelope, FaLock, FaEye, FaEyeSlash } from "react-icons/fa";
import toast from "react-hot-toast";

import Logo from "../assets/Logo.png";
import CTAButton from "../Component/Common/CTAButton";
import { loginAdmin } from "../Services/adminService";

const Login = () => {
  const navigate = useNavigate();

  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const submitHandler = async (data) => {
    const toastId=toast.loading("Logining...")
    try {
      setLoading(true);
      const response = await loginAdmin(data);

      if (response.data.success) {
        localStorage.setItem(
          "token",
          response.data.token
        );

        localStorage.setItem(
          "admin",
          JSON.stringify(response.data.admin)
        );

        toast.success("Login Successful", {
          id:toastId,
        });

        navigate("/dashboard");
      }
    } catch (error) {
      toast.error(
        error?.response?.data?.message ||
        "Invalid Credentials", {
            id:toastId,
          }
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <div
      className="
      min-h-screen
      flex
      justify-center
      items-center
      px-4
      bg-linear-to-br
      from-[#142D7A]
      via-[#1F3FAF]
      to-[#2948B8]
    "
    >
      <div
        className="
        bg-white
        w-full
        max-w-md
        rounded-2xl
        shadow-2xl
        p-8
      "
      >
        {/* Logo */}
        <div className="flex justify-center">
          <img
            src={Logo}
            alt="CIA Logo"
            className="w-24 h-24 rounded-full"
          />
        </div>

        {/* Heading */}
        <h1
          className="
          text-3xl
          font-bold
          text-center
          mt-6
          text-(--primaryColor)
        "
        >
          Admin Login
        </h1>

        <p
          className="
          text-center
          text-gray-500
          mt-2
        "
        >
          Welcome Back To CIA Dashboard
        </p>

        {/* Form */}
        <form
          onSubmit={handleSubmit(submitHandler)}
          className="mt-8 flex flex-col gap-5"
        >
          {/* Email */}
          <div>
            <div className="relative">
              <FaEnvelope
                className="
                absolute
                left-4
                top-1/2
                -translate-y-1/2
                text-gray-400
              "
              />

              <input
                type="email"
                placeholder="Enter Email Address"
                className="
                  w-full
                  pl-12
                  pr-4
                  py-3
                  border
                  border-gray-300
                  rounded-lg
                  outline-none
                  focus:border-(--primaryColor)
                "
                {...register("email", {
                  required: "Email is required",
                })}
              />
            </div>

            {errors.email && (
              <p className="text-red-500 text-sm mt-1">
                {errors.email.message}
              </p>
            )}
          </div>

          {/* Password */}
          <div>
            <div className="relative">
              <FaLock
                className="
                absolute
                left-4
                top-1/2
                -translate-y-1/2
                text-gray-400
              "
              />

              <input
                type={
                  showPassword ? "text" : "password"
                }
                placeholder="Enter Password"
                className="
                  w-full
                  pl-12
                  pr-12
                  py-3
                  border
                  border-gray-300
                  rounded-lg
                  outline-none
                  focus:border-(--primaryColor)
                "
                {...register("password", {
                  required: "Password is required",
                })}
              />

              <button
                type="button"
                onClick={() =>
                  setShowPassword(!showPassword)
                }
                className="
                  absolute
                  right-4
                  top-1/2
                  -translate-y-1/2
                  text-gray-500
                "
              >
                {showPassword ? (
                  <FaEyeSlash />
                ) : (
                  <FaEye />
                )}
              </button>
            </div>

            {errors.password && (
              <p className="text-red-500 text-sm mt-1">
                {errors.password.message}
              </p>
            )}
          </div>

          {/* Button */}
          <CTAButton
            text={
              loading
                ? "Logging In..."
                : "Login"
            }
            className="
              w-full
              bg-(--primaryColor)
              text-(--whiteText)
              py-3
              font-semibold
              hover:opacity-90
              transition-all
            "
          />
        </form>

        <p
          className="
          text-center
          text-gray-500
          text-sm
          mt-6
        "
        >
          Chaudhary Immigration Academy
        </p>
      </div>
    </div>
  );
};

export default Login;

