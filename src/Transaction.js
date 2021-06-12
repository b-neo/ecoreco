import React from "react";
import Header from "./Header";
import TransactionItem from "./TransactionItem";
import Footer from "./Footer";

import starbucks_logo from "./image/starbucks.png";
import bback_logo from "./image/bback.jpg";
import tomntoms_logo from "./image/tamntoms.jpg";

import CountUp from "react-countup";

class Transaction extends React.Component {
	state = {
		title: "나의 탄소 포인트",
	};
	render() {
		return (
			<section className="transactionScreen">
				<div>
					<Header title={this.state.title} />
					<div className="transactionScreen__myPoints">
						<span className="pointUp">
							<CountUp end={8900} separator="," /> P
						</span>
					</div>
					<div className="transaction__table">
						<div className="transactionScren__tableHeader">
							<div className="tableHeader">적립처</div>
							<div className="tableHeader">적립 내용</div>
							<div className="tableHeader">날짜</div>
						</div>
						<TransactionItem
							name="스타벅스 목동점"
							image={starbucks_logo}
							point="300"
							time="2021.06.12"
						/>
						<TransactionItem
							name="빽다방 오목교점"
							image={bback_logo}
							point="100"
							time="2021.06.11"
						/>
						<TransactionItem
							name="탐앤탐스 목동점"
							image={tomntoms_logo}
							point="200"
							time="2021.06.10"
						/>
					</div>
				</div>
				<Footer />
			</section>
		);
	}
}

export default Transaction;
