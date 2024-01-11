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
import CreateTemplate from "./pages/CreateTemplate";

function App() {
  const queryClient = new QueryClient();

  return (
    <QueryClientProvider client={queryClient}>
      <Router>
        <Layout>
          <Routes>
            <Route path={"/*"} element={<HomeScreen />} />
            <Route path={"/template/create"} element={<CreateTemplate />} />
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
