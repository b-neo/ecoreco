import React from "react";

class TransactionItem extends React.Component {
	state = {
		title: "나의 탄소 포인트",
	};

	render() {
		const { name, image, point, time } = this.props;
		return (
			<>
				<div className="tr_container">
					<div className="tr_item tr_name">
						<img className="tr_logo" src={image} alt="logo"></img>
						<span>{name}</span>
					</div>
					<div className="tr_item tr_point">+ {point} P</div>
					<div className="tr_item tr_time">{time}</div>
				</div>
				<div className="divider"></div>
			</>
		);
	}
}

export default TransactionItem;
