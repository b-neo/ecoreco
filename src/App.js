import React from "react";
import { HashRouter, Route } from "react-router-dom";

import Home from "./Home";
import Transaction from "./Transaction";
import BuyProducts from "./BuyProducts";
import Media from "./Media";

import "./style.css";

function App() {
	return (
		<HashRouter>
			<Route path="/" exact={true} component={Home} />
			<Route path="/transaction" exact={true} component={Transaction} />
			<Route path="/buy-products" exact={true} component={BuyProducts} />
			<Route path="/media" component={Media} />
		</HashRouter>
	);
}

export default App;
