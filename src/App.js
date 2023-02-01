import "firebase/compat/auth";
import "firebase/compat/firestore";
import "./assets/styles/GlobalStyles.css";

import Cookies from "universal-cookie";
import Footer from "./components/Common/Footer/Footer";
import Header from "./components/Common/Header/Header";
import PublicRoutes from "routes/publicRoutes";
import { fetchAccount } from "features/account/accountThunk";
import { unregisterAuthObserver } from "features/auth/authThunk";
import { useDispatch } from "react-redux";
import { useEffect } from "react";

function App() {
  const dispatch = useDispatch();
  const cookies = new Cookies();
  const account = cookies.get(`information`);

  useEffect(() => {
    if (!account) return;
    dispatch(fetchAccount(account.email));
  }, [dispatch]);

  useEffect(() => {
    unregisterAuthObserver();

    return () => unregisterAuthObserver();
  }, []);

  return (
    <>
      <Header />

      <PublicRoutes isAdmin={true} />

      <Footer />
    </>
  );
}

export default App;
