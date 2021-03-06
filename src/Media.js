import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import YouTube from "./Youtube";
import { Link } from "react-router-dom";

class Media extends React.Component {
	state = {
		title: "μμ² TV",
	};

	render() {
		const { location } = this.props;
		return (
			<section className="mediaScreen">
				<div>
					<Header title={this.state.title} />
					<YouTube num={location.state.num} />
					<ul className="mediaList">
						<Link
							className="mediaPlay"
							to={{
								pathname: `/media/kCxR4R6Lug4`,
								state: { num: "kCxR4R6Lug4" },
							}}
						>
							<li className="mediaItem">πΊ μμ²κ΅¬ ν΄μ¦ μ΄λ²€νΈ</li>
						</Link>
						<Link
							className="mediaPlay"
							to={{
								pathname: "/media/2",
								state: { num: "tgdz-lZC1Hc" },
							}}
						>
							<li className="mediaItem">πΊ μμ²κ΅¬ μνκ³΅μ μ‘°μ± κ³ν</li>
						</Link>
						<Link
							className="mediaPlay"
							to={{
								pathname: "/media/3",
								state: { num: "jVZB7jSqdOo" },
							}}
						>
							<li className="mediaItem">πΊ μμ²κ΅¬ μ½λ‘λ 19 μλ°©μ μ’ μλ΄</li>
						</Link>
						<Link
							className="mediaPlay"
							to={{
								pathname: "/media/4",
								state: { num: "U_nSgo7cl_M" },
							}}
						>
							<li className="mediaItem">πΊ μμ²κ΅¬λ―Όμ λ  νμ¬</li>
						</Link>
					</ul>
				</div>
				<Footer title="μμ² TV" />
			</section>
		);
	}
}

export default Media;
