import React from "react";
import "./footer.css"
import appstore from "../assets/appstore.jpg";
import playstore from "../assets/playstore.jpg";
const Footer = () => {
    return (
      <footer id="footer">
        <div className="leftFooter">
            <h4>DOWNLOAD OUR APP</h4>
            <p>Dowload App for Android and IOS mobile phone</p>
            <img src={playstore} alt="Playstore" />
            <img src={appstore} alt="Appstore" />
        </div>

        <div className="midFooter">
            <h1>Voting</h1>
            <p>Talk is cheap, voting is free; take it to the polls</p>

            <p>Copyright 2023 &copy; PollMasters</p>
        </div>

        <div className="rightFooter">
            <h4>Follow Us</h4>
            <a href="#">Instagram</a>
            <a href="#">Youtube</a>
            <a href="#">Facebook</a>
        </div>
      </footer>
  
    );
  }
  

export default Footer;