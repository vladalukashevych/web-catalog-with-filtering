import { useEffect } from "react";
import { Fancybox } from "@fancyapps/ui";
import "@fancyapps/ui/dist/fancybox/fancybox.css";
import "./style.css"
import Logo from "../components/Logo/Logo";
import Button from "../components/Button";
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
            <a className="btn-show" href="\products">Show Sneakers</a>
          </div>
          <a data-fancybox className="main-photo" href="https://arktura.com/wp-content/uploads/2020/05/Arktura-Vapor-Trail-Feature-Shoe-Store-Las-VegasNV_Web_1-1-scaled.jpg">
            <img src="https://arktura.com/wp-content/uploads/2020/05/Arktura-Vapor-Trail-Feature-Shoe-Store-Las-VegasNV_Web_1-1-scaled.jpg" className="main-photo" />
          </a>
          <div className="main-content">
            <span className="main-title">Hello there! Welcome to our online store.</span>
            <span className="main-title-desc">
                But do not forget that we are always waiting for you to visit our
                <a data-fancybox="map" href="http://maps.google.com/?ll=48.857995,2.294297&spn=0.007666,0.021136&t=m&z=16"> local store </a> 
                =)
            </span>
          </div>
          <Footer />
      </div>
    </>
  );
}

export default MainPage;
