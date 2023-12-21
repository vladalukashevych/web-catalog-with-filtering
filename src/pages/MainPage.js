import { useEffect } from "react";
import { Fancybox } from "@fancyapps/ui";
import "@fancyapps/ui/dist/fancybox/fancybox.css";
import "./style.css"
import Logo from "../components/SmallComponents/Logo/Logo";
import Button from "../components/SmallComponents/Button";
import Footer from "../components/Footer/Footer";

function MainPage() {
  useEffect(() => {
    Fancybox.bind("[data-fancybox]", {});
  }, []);

  return (
    <>
      <div className="wrapper">
          <div className="header">
            <Logo withName={true}/>
            <div className="header-btns">
              <a className="btn-main" href="\products">Show Sneakers</a>
              <a className="btn-main" href="\contact">Contact me</a>
            </div>
          </div>
          <a data-fancybox className="main-photo" href="https://arktura.com/wp-content/uploads/2020/05/Arktura-Vapor-Trail-Feature-Shoe-Store-Las-VegasNV_Web_1-1-scaled.jpg">
            <img src="https://arktura.com/wp-content/uploads/2020/05/Arktura-Vapor-Trail-Feature-Shoe-Store-Las-VegasNV_Web_1-1-scaled.jpg" className="main-photo" />
          </a>
          <div className="main-content">
            <span className="main-title">Hello there! Welcome to our online catalog.</span>
            <span className="main-title-desc">
              Check out what you like and come to
                <a data-fancybox="map" href="http://maps.google.com/?ll=48.857995,2.294297&spn=0.007666,0.021136&t=m&z=16"> our store </a> 
                =)
            </span>
          </div>
          <Footer />
      </div>
    </>
  );
}

export default MainPage;
