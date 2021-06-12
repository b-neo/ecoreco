import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import YouTube from "./Youtube";
import { Link } from "react-router-dom";

class Media extends React.Component {
	state = {
		title: "양천 TV",
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
							<li className="mediaItem">📺 양천구 퀴즈 이벤트</li>
						</Link>
						<Link
							className="mediaPlay"
							to={{
								pathname: "/media/2",
								state: { num: "tgdz-lZC1Hc" },
							}}
						>
							<li className="mediaItem">📺 양천구 생태공원 조성 계획</li>
						</Link>
						<Link
							className="mediaPlay"
							to={{
								pathname: "/media/3",
								state: { num: "jVZB7jSqdOo" },
							}}
						>
							<li className="mediaItem">📺 양천구 코로나 19 예방접종 안내</li>
						</Link>
						<Link
							className="mediaPlay"
							to={{
								pathname: "/media/4",
								state: { num: "U_nSgo7cl_M" },
							}}
						>
							<li className="mediaItem">📺 양천구민의 날 행사</li>
						</Link>
					</ul>
				</div>
				<Footer title="양천 TV" />
			</section>
		);
	}
}

export default Media;
