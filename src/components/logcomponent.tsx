import Link from "next/link";
import { useEffect, useState } from "react";
import { FaGithub, FaFacebook, FaTwitter, FaGoogle } from "react-icons/fa";
import { colorThemeAtom } from "../jotai/atoms";
import { useAtomValue } from "jotai";

const LogComponent = () => {
  const [isLogin, setIsLogin] = useState(false);
  const [wait, setWait] = useState(false);
  const theme = useAtomValue(colorThemeAtom);

  useEffect(() => {
    // ignore the first render
    if (isLogin === false) {
      setTimeout(() => {
        setWait(false);
      }, 200);
    } else {
      setTimeout(() => {
        setWait(true);
      }, 200);
    }
  }, [isLogin]);

  return (
    <div
      className={`relative flex h-screen w-full flex-col ${
        theme === "dark"
          ? "bg-[#150050] lg:flex-row"
          : "bg-[#e63946] lg:flex-row"
      }`}
    >
      <div
        id="left absolute-div"
        className={`absolute z-0 flex h-1/2 w-full flex-col items-center justify-center gap-y-4 bg-white p-2 py-4 text-black lg:h-full lg:w-1/2 ${
          isLogin
            ? "translate-y-full transition-all duration-500 ease-in-out lg:translate-x-0 lg:translate-y-0 "
            : "translate-y-0 transition-all duration-500 ease-in-out lg:translate-x-full lg:translate-y-0 "
        }  transition-transform duration-500 ease-in-out 
        `}
      >
        <div
          className={`text-center font-mono text-xl font-semibold md:text-[2rem] lg:text-[3rem] ${
            theme === "dark" ? "text-[#150050]" : "text-[#e63946]"
          }`}
        >
          {!wait ? "Sign In" : "Create an account"}
        </div>
        {/* logo container */}
        <div
          className={`flex-container space-x-4 ${
            theme === "dark" ? "text-[#150050]" : "text-[#e63946]"
          }`}
        >
          <Link
            className={`flex-item rounded-full border p-2 ${
              theme === "dark" ? "border-[#150050]" : "border-[#e63946]"
            }`}
            href="https://github.com/KhalilSelyan"
            target="_blank"
            rel="noreferrer"
          >
            <FaGoogle className="text-2xl" />
          </Link>
          <Link
            className={`flex-item rounded-full border p-2 ${
              theme === "dark" ? "border-[#150050]" : "border-[#e63946]"
            }`}
            href="https://www.linkedin.com/in/khalilselyan/"
            target="_blank"
            rel="noreferrer"
          >
            <FaFacebook className="text-2xl" />
          </Link>
          <Link
            className={`flex-item rounded-full border p-2 ${
              theme === "dark" ? "border-[#150050]" : "border-[#e63946]"
            }`}
            href="https://www.instagram.com/khalilselyan/"
            target="_blank"
            rel="noreferrer"
          >
            <FaTwitter className="text-2xl" />
          </Link>
          <Link
            className={`flex-item rounded-full border p-2 ${
              theme === "dark" ? "border-[#150050]" : "border-[#e63946]"
            }`}
            href="https://www.instagram.com/khalilselyan/"
            target="_blank"
            rel="noreferrer"
          >
            <FaGithub className="text-2xl" />
          </Link>
        </div>
        {/* logo container end */}
        <div className="text-sm font-semibold text-gray-300">
          Or use your email:{" "}
        </div>
        {/* form */}
        <form className="flex flex-col gap-y-2">
          {!wait ? null : (
            <input
              className="rounded-md border-2 border-gray-300 p-2"
              type="text"
              placeholder="Name"
            />
          )}
          <input
            className="rounded-md border-2 border-gray-300 p-2"
            type="email"
            placeholder="Email"
          />
          <input
            className="rounded-md border-2 border-gray-300 p-2"
            type="password"
            placeholder="Password"
          />
          <button
            className={`rounded-md border
            ${
              theme === "dark"
                ? "border-[#150050] bg-[#150050] hover:bg-white hover:text-[#150050]"
                : "border-[#e63946] bg-[#e63946] hover:bg-white hover:text-[#e63946]"
            }
             p-2 text-white transition-all duration-300`}
            type="submit"
            onClick={(e) => {
              e.preventDefault();
              setIsLogin(!isLogin);
            }}
          >
            {!wait ? "Sign in" : "Sign Up"}
          </button>
        </form>
        {/* form end */}
        {!wait ? null : (
          <div className="text-sm font-semibold text-gray-300">
            Already have an account?{" "}
            <span
              onClick={() => setIsLogin(!isLogin)}
              className={`cursor-pointer ${
                theme === "dark" ? "text-[#150050]" : "text-[#e63946]"
              }`}
            >
              Log in
            </span>
          </div>
        )}
      </div>
      {/* Right Side */}
      <div
        id="right"
        className={`${
          theme === "dark" ? "bg-[#150050]" : "bg-[#e63946]"
        } absolute
          z-10 flex h-1/2 w-full flex-col items-center justify-center
        gap-y-8 p-2 py-4 text-white lg:h-full lg:w-1/2 lg:gap-y-12 ${
          isLogin
            ? "translate-y-0 transition-all duration-500 ease-in-out lg:translate-x-full lg:translate-y-0"
            : "translate-y-full transition-all duration-500 ease-in-out lg:translate-x-0 lg:translate-y-0"
        }
        animation transition-transform duration-500 ease-in-out
        `}
      >
        {/* welcome back text */}
        <div className="font-mono text-2xl font-semibold md:text-[2rem] lg:text-[3rem]">
          {!wait ? "Welcome Back!" : "Hello, Friend!"}
        </div>
        <div className="w-3/4 text-center text-sm font-semibold text-white">
          {!wait // if login is true then show this text
            ? "Enter your personal details and start your journey with us"
            : // else show this text
              "To keep connected with us please login with your personal info"}
        </div>
        {/* welcome back text end */}
        {/* Login switch button */}
        <button
          onClick={() => setIsLogin(!isLogin)}
          className={`w-40 cursor-pointer rounded-full border border-white bg-transparent p-2 text-white transition-all duration-300 hover:bg-white ${
            theme === "dark" ? "hover:text-[#150050]" : "hover:text-[#e63946]"
          } `}
        >
          {!wait ? "Sign Up" : "Sign In"}
        </button>
      </div>
    </div>
  );
};

export default LogComponent;
