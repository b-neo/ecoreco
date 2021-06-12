import React from "react";
import { Link } from "react-router-dom";

class Footer extends React.Component {
	state = {
		title: "",
	};

	render() {
		return (
			<section className="footer">
				<Link
					className={this.props.title === "홈" ? "active menu" : "menu"}
					to={{
						pathname: "/",
						state: { title: "홈" },
					}}
				>
					<div>홈</div>
				</Link>
				<Link
					className={this.props.title === "적립 내역" ? "active menu" : "menu"}
					to={{
						pathname: "/transaction",
						state: { title: "적립 내역" },
					}}
				>
					<div>적립 내역</div>
				</Link>
				<Link
					className={this.props.title === "상품 구매" ? "active menu" : "menu"}
					to={{
						pathname: "/buy-products",
						state: { title: "탄소절감 상품 구매" },
					}}
				>
					<div>상품 구매</div>
				</Link>
				<Link
					className={this.props.title === "양천 TV" ? "active menu" : "menu"}
					to={{
						pathname: "/media",
						state: { title: "양천 TV" },
					}}
				>
					<div>양천 TV</div>
				</Link>
			</section>
		);
	}
}

export default Footer;
