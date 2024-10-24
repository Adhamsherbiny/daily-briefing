import Explore from "./Explore";
import Footer from "./Footer";
import Nav from "./Nav";
import News from "./News";
import WelcomeSection from "./WelcomeSection";

export default function Home() {
  return (
    <div>
      <Nav />
      <WelcomeSection />
      <Explore />
      <News />
      <Footer />
    </div>
  );
}
