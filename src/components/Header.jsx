import { useEffect, useState } from "react";
import useUserOauth from "../hooks/useUserOauth";
import { Link, useNavigate } from "react-router-dom";
import Spinner from "./Spinner";
import { AnimatePresence, motion } from "framer-motion";
import ProfileCard from "./ProfileCard";
import { ToastContainer } from "react-toastify";
import { CiLogin } from "react-icons/ci";

const Header = () => {
  const { data, isLoading, error } = useUserOauth();
  const [isMenu, setMenu] = useState(false);
  const navigate = useNavigate();

  return (
    <nav className="w-full h-16 flex justify-center items-center gap-2 sticky top-0 bg-white py-3 shadow-lg">
      <img className="w-12 h-auto mx-4" src="src\assets\logo.svg" />
      <span className="text-xl flex-1 justify-center items-center font-bold">
        Build Resume
      </span>
      <AnimatePresence>
        {isLoading ? (
          <div className="mx-4">
            <Spinner size={50} />
          </div>
        ) : (
          <>
            {data ? (
              <motion.div
                className="relative cursor-pointer"
                onClick={() => {
                  setMenu(!isMenu);
                }}
              >
                {data.photoURL ? (
                  <img
                    src={data.photoURL}
                    className="w-10 rounded-full shadow-lg mx-4"
                    alt="Avatar"
                  />
                ) : (
                  <div
                    className="inline-flex justify-center items-center mx-4
                  w-10 h-10 text-xl text-white bg-indigo-500 rounded-full"
                  >
                    {data.email[0]}
                  </div>
                )}
                {isMenu && (
                  <AnimatePresence>
                    <motion.div
                      animate={{ opacity: 1, y: 10 }}
                      className="absolute right-4"
                    >
                      <ProfileCard
                        name={data.displayName}
                        email={data.email}
                        imageUrl={data.photoURL}
                      />
                    </motion.div>
                  </AnimatePresence>
                )}
              </motion.div>
            ) : (
              <Link to={"/signin"}>
                <button
                  className="h-full font-bold shadow-sm rounded-lg py-2 px-4 bg-indigo-200 text-gray-800 flex items-center transition-all duration-150 ease-in-out
                justify-center focus:outline-none hover:shadow focus:shadow-sm focus:shadow-outline mx-4"
                >
                  Login
                  <CiLogin />
                </button>
              </Link>
            )}
          </>
        )}
      </AnimatePresence>
      <ToastContainer />
    </nav>
  );
};

export default Header;
