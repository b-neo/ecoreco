import React from "react";
import logo from "./image/logo.png";
import HomeScreen from "./HomeScreen";
class Home extends React.Component {
	state = {
		loading: true,
	};
	loadHome = () => {
		setTimeout(() => {
			this.setState({ loading: false });
		}, 3000);
	};
	componentDidMount() {
		this.loadHome();
	}
	render() {
		const { loading } = this.state;
		return (
			<section className="container">
				{loading ? (
					<div className="loader">
						<span className="loader__amount">3.8 kg</span>
						<span className="loader__text">이번 주에 내가 줄인 탄소</span>
						<img className="loader__logo" src={logo} alt="logo"></img>
					</div>
				) : (
					<HomeScreen />
				)}
			</section>
		);
	}
}

export default Home;
