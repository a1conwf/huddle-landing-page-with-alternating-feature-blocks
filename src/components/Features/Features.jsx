import React from "react";
import {featuresData} from "../../data/data";
import "./Features.scss";

const Features = () => {
	return (
		<section className="features">
			<div className="container">
				{featuresData.map((feature) => (
					<div className={`feature feature-${feature.id}`} key={feature.id}>
						<div className="feature__content">
							<h2 className="feature__content-title">{feature.title}</h2>
							<p className="feature__content-description">{feature.description}</p>
						</div>
						<img src={feature.picture} alt="feature-img" className="feature__img" />
					</div>
				))}
			</div>
		</section>
	);
};

export default Features;
