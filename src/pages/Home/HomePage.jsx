import About from "../../components/Layouts/Home/About/About";
import Banner from "../../components/Layouts/Home/HomeBanner/HomeBanner";
import BestSeller from "../../components/Layouts/Home/BestSeller/BestSeller";
import Collection from "../../components/Layouts/Home/Collection/Collection";
import Connect from "../../components/Layouts/Home/Connect/Connect";
import Feedback from "../../components/Layouts/Home/Feedback/Feedback";
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
