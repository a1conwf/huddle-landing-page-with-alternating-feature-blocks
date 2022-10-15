import React from "react";
import "./Header.scss";
import logo from "../../assets/brand/logo.svg";
import mockupsImg from "../../assets/svg/illustration-mockups.svg";

const Header = () => {
	return (
		<header className="header">
			<div className="container">
				<div className="header__nav">
					<img src={logo} alt="logo-img" className="header__nav-logo" />
					<a href="#!" className="btn try-free">
						Try It Free
					</a>
				</div>
				<div className="header__content">
					<div className="header__content-info">
						<h1>Build The Community Your Fans Will Love</h1>
						<p>Huddle re-imagines the way we build communities. You have a voice, but so does your audience. Create connections with your users as you engage in genuine discussion. </p>
						<a href="#!" className="btn get-started">
							Get Started For free
						</a>
					</div>
					<img src={mockupsImg} alt="illustration-mockups" className="header__content-img" />
				</div>
			</div>
		</header>
	);
};

export default Header;
