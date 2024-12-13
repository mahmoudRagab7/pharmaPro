import Header from "../../components/header/Header";
import HomeDashboard from "../../components/homeDashboard/HomeDashboard";
import HomeLanding from "../../components/homeLanding/HomeLanding";
import OurResources from "../../components/ourResources/OurResources";
import "./hoemPage.css";

export default function HomePage() {
  return (
    <div className="homePage">
      <Header />
      <HomeLanding />
      <HomeDashboard />
      <OurResources />
    </div>
  );
}
