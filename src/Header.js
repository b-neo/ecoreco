import React from "react";

class Header extends React.Component {
	render() {
		const title = this.props.title;

		return (
			<section className="header">
				<div className="header__text">{title}</div>
			</section>
		);
	}
}

export default Header;
