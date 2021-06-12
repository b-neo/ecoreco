import React from "react";

class ProductItem extends React.Component {
	render() {
		const { name, image, point, reduce } = this.props;
		return (
			<div className="pr_row">
				<div className="pr_container">
					<div className="pr_item pr_name">
						<img className="pr_img" src={image} alt="logo"></img>
					</div>
					<div className="pr_item pr_content">
						<span className="pr_content__item">{name}</span>
						<span className="pr_content__item">{point} P</span>
						<span className="pr_content__item">{reduce}</span>
					</div>
				</div>
			</div>
		);
	}
}

export default ProductItem;
