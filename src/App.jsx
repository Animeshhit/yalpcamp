import { Routes, Route } from "react-router-dom";
import Landing from "./pages/Landing";
import SignIn from "./pages/SignIn";
import SignUp from "./pages/SignUp";
import Search from "./pages/Search";
import { getUser } from "./state/action-creator";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import LoadingBar from "react-top-loading-bar";
import Error from "./pages/Error";
import "react-toastify/dist/ReactToastify.min.css";
import { ToastContainer, toast } from "react-toastify";
import View from "./pages/View";
import AddPlace from "./pages/AddPlace";
import AddComment from "./pages/AddComment";
import { Token } from "./config";
import { isLoading } from "./state/action-creator/loading";

const App = () => {
  const dispatch = useDispatch();
  const [progress, setProgress] = useState(0);
  const token = localStorage.getItem(Token);

  const getData = async () => {
    if (token) {
      setProgress(30);
      try {
        await dispatch(getUser());
      } catch (err) {
        if (!(err.message === "You Are Not Authenticated")) {
          toast.error("Something went wrong Please try again later");
        }
      }
      setProgress(100);
    } else {
      dispatch(isLoading(false));
    }
  };

  useEffect(() => {
    getData();
  }, []);
  return (
    <>
      <LoadingBar
        color="#f11946"
        progress={progress}
        shadow={true}
        onLoaderFinished={() => setProgress(0)}
      />
      <ToastContainer
        position="top-right"
        autoClose={700}
        hideProgressBar={false}
        newestOnTop={true}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />
      <Routes>
        <Route path="/" element={<Landing setProgress={setProgress} />} />
        <Route
          path="/create-account"
          element={<SignUp setProgress={setProgress} toast={toast} />}
        />
        <Route
          path="/login"
          element={<SignIn setProgress={setProgress} toast={toast} />}
        />
        <Route
          path="/explore"
          element={<Search setProgress={setProgress} toast={toast} />}
        />
        <Route
          path="/view/:id"
          element={<View setProgress={setProgress} toast={toast} />}
        />
        <Route
          path="/new-place"
          element={<AddPlace setProgress={setProgress} toast={toast} />}
        />
        <Route
          path="/new-comment/:id"
          element={<AddComment setProgress={setProgress} toast={toast} />}
        />
        <Route path="*" element={<Error />} />
      </Routes>
    </>
  );
};

export default App;
