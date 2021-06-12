import React from "react";
import brand from "./image/brand.jpg";
import bacode from "./image/bacode.png";
import Header from "./Header";
import Footer from "./Footer";
class HomeScreen extends React.Component {
	state = {
		title: "탄소 포인트 적립",
	};
	render() {
		return (
			<section className="homeScreen">
				<div>
					<Header title={this.state.title} />
					<img className="home__brand" src={brand} alt="brands"></img>
					<div className="divider"></div>
					<div className="home__userName">김남빈님</div>
					<div className="divider"></div>
					<div className="home__bacode">
						<img className="bacode__img" src={bacode} alt="bacode"></img>
					</div>
				</div>
				<Footer />
			</section>
		);
	}
}

export default HomeScreen;
