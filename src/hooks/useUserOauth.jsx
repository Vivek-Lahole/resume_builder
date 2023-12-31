import { useQuery } from "react-query";
import { toast } from "react-toastify";
import { getUserDetail } from "../api";

const useUserOauth = () => {
  const options = {
    position: "top-right",
    autoClose: 3000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
    theme: "colored",
  };

  const { data, error, isLoading, refetch } = useQuery(
    "user",
    async () => {
      try {
        const userDetails = await getUserDetail();
        return userDetails;
      } catch (err) {
        console.log(err);
        // if (!err.message.includes("not athenticated")) {
        //   toast.error("User Not always Authenticated", options);
        // }
      }
    },
    { refetchOnWindowFocus: false }
  );
  return { data, error, isLoading, refetch };
};

export default useUserOauth;
