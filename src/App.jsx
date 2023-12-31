import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomeScreen from "./pages/HomeScreen";
import SignInScreen from "./pages/SIgnInScreen";
import { QueryClient, QueryClientProvider } from "react-query";
import { ReactQueryDevtools } from "react-query/devtools";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useRef } from "react";
import SignUpScreen from "./pages/SignUpScreen";
import Layout from "./container/Layout";
import TempScreen from "./pages/TempScreen";

function App() {
  const queryClient = new QueryClient();
  const toastId = useRef(null);

  const notify = () => {
    if (!toast.isActive(toastId.current)) {
      toastId.current = toast.success("User Succesfully Created!", {
        position: "top-right",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      });
    }
  };

  return (
    <QueryClientProvider client={queryClient}>
      <Router>
        <Layout>
          <Routes>
            <Route path={"/"} element={<SignInScreen />} />
            <Route path={"/home"} element={<HomeScreen />} />
            <Route path={"/temp"} element={<TempScreen />} />
            <Route path={"/signin"} element={<SignInScreen />} />
            <Route path={"/signup"} element={<SignUpScreen />} />
          </Routes>
        </Layout>
      </Router>
      <ReactQueryDevtools />
    </QueryClientProvider>
  );
}

export default App;
