import About from "./About/About";
import Banner from "./HomeBanner/HomeBanner";
import BestSeller from "./BestSeller/BestSeller";
import Collection from "./Collection/Collection";
import Connect from "./Connect/Connect";
import Feedback from "./Feedback/Feedback";
import ScrollToTop from "components/Common/ScrollToTop/ScrollToTop";
import UsersLayout from "../../components/Layouts/Users/UsersLayout";

function Home(props) {
  return (
    <UsersLayout>
      <ScrollToTop />

      <Banner />
      <About />
      <Collection />
      <BestSeller />
      <Connect />
      <Feedback />
    </UsersLayout>
  );
}

export default Home;
