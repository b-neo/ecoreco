import React from "react";
import Header from "./Header";
import ProductItem from "./ProductItem";

import coffeeBean from "./image/coffeebean.jpg";
import straw from "./image/straw.jpg";
import strawRice from "./image/strawrice.jpg";
import cup from "./image/cup.jpg";

import CountUp from "react-countup";

class BuyProducts extends React.Component {
	state = {
		title: "친환경 상품 구매",
	};
	render() {
		return (
			<section className="productScreen">
				<Header title={this.state.title} />
				<div className="product__table">
					<ProductItem
						name="친환경 원두 1kg"
						image={coffeeBean}
						point="9000"
						reduce="탄소 12.25kg 절감"
					/>
					<ProductItem
						name="재사용 빨대(스텐레스)"
						image={straw}
						point="2800"
						reduce="연 탄소 1kg 절감"
					/>
					<ProductItem
						name="쌀로 만든 빨대 100개"
						image={strawRice}
						point="7500"
						reduce="탄소 300g 절감"
					/>
					<ProductItem
						name="생분해 컵 100개"
						image={cup}
						point="6900"
						reduce="탄소 970g 절감"
					/>
				</div>
			</section>
		);
	}
}

export default BuyProducts;
