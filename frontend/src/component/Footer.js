import React from 'react'
import "./Footer.css";

const FooterCard = ({ head, one, two, three, four }) => {
    return (
        <div className="footer-card-container">
            <h1>{head}</h1>
            <p>{one}</p>
            <p>{two}</p>
            <p>{three}</p>
            <p>{four}</p>
        </div>
    )
}

const Footer = () => {
    return (
        <div className="footer-container">
            <div className="footer-main-container">
                <div className="footer-head-container">
                    <img src="https://medingen.in/finalmiglogo-2-2.svg" alt="medingen-logo" />
                    <h1>Medingen</h1>
                    <h2>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</h2>
                    <h2>Cras of urna et leo rhoncus mattis. Maecenas vel</h2>
                    <h2>scalerisque nunc.</h2>
                </div>
                <div className="footer-content-container">
                    <FooterCard head="Website" one="Home" two="Features" three="How it works" four="Whats our customers say?" />
                    <FooterCard head="Follow Us" one="Instagram" two="Facebook" three="Twitter" four="Youtube" />
                    <FooterCard head="More" one="Help Center" two="Become Member" three="Events" four="Terms & Conditions" />
                </div>
            </div>
            <div className="footer-footer-container">
                <p>@2024 Medingen. All Rights Reserved.</p>
            </div>
        </div>
    )
}

export default Footer