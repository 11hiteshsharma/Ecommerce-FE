import React from "react";
import StickyTop from "./StickyTop";
import Nav from "./Nav";

const Navbar = () => {
	return (
		<header className="z-10">
			<StickyTop />
			<Nav />
		</header>
	);
};

export default Navbar;
