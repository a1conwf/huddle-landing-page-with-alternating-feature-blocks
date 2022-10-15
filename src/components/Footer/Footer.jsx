import React from "react";
import "./Footer.scss";
import logoLight from "../../assets/brand/logo-light.svg";
import locationIcon from "../../assets/svg/icon-location.svg";
import phoneIcon from "../../assets/svg/icon-phone.svg";
import emailIcon from "../../assets/svg/icon-email.svg";
import facebookIcon from "../../assets/svg/icon-facebook.svg";
import twitterIcon from "../../assets/svg/icon-twitter.svg";
import instagramIcon from "../../assets/svg/icon-instagram.svg";

const Footer = () => {
	return (
		<footer className="footer">
			<div className="container">
				<div className="cta">
					<h3 className="cta__title">Ready To Build Your Community?</h3>
					<a href="#!" className="cta__link btn get-started">
						Get Started For Free
					</a>
				</div>
				<img className="footer__img" src={logoLight} alt="logo-img" />
				<div className="footer__inner">
					<ul className="footer__contact">
						<li>
							<img src={locationIcon} alt="icon-location" />
							<a href="#!">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua</a>
						</li>
						<li>
							<img src={phoneIcon} alt="icon-phone" />
							<a href="tel:+1543123456">+1-543-123-4567</a>
						</li>
						<li>
							<img src={emailIcon} alt="icon-email" />
							<a href="mailto:example@huddle.com">example@huddle.com</a>
						</li>
					</ul>

					<div className="footer__links">
						<ul className="footer__links-list">
							<li>
								<a href="#!">About Us</a>
							</li>
							<li>
								<a href="#!">What We Do</a>
							</li>
							<li>
								<a href="#!">FAQ</a>
							</li>
						</ul>

						<ul className="footer__links-list">
							<li>
								<a href="#!">Career</a>
							</li>
							<li>
								<a href="#!">Blog</a>
							</li>
							<li>
								<a href="#!">Contact Us</a>
							</li>
						</ul>
					</div>

					<div className="footer__socials">
						<ul className="footer__socials-list">
							<li>
								<img src={facebookIcon} alt="icon-facebook" />
							</li>
							<li>
								<img src={twitterIcon} alt="icon-twitter" />
							</li>
							<li>
								<img src={instagramIcon} alt="icon-instagram" />
							</li>
						</ul>
					</div>
				</div>
				<p className="copyright-text">&#169; Copyright 2018 Huddle. All rights reserved.</p>
			</div>
		</footer>
	);
};

export default Footer;
