// Toggle Class Active

const navbarNav = document.querySelector(".navbar-nav");
document.querySelector("#hamburger-menu").onclick = () => {
	navbarNav.classList.toggle("active");
};

const hamburger = document.querySelector("#hamburger-menu");

document.addEventListener("click", function (e) {
	if (!hamburger.contains(e.target) && !navbarNav.contains(e.target)) {
		navbarNav.classList.remove("active");
	}

	if (!search.contains(e.target) && !searchButton.contains(e.target)) {
		search.classList.remove("active");
	}

	if (
		!shoppingCart.contains(e.target) &&
		!shoppingCartButton.contains(e.target)
	) {
		shoppingCart.classList.remove("active");
	}
});

const searchButton = document.querySelector("#search");
const search = document.querySelector(".search-form");
const searchBox = document.querySelector("#search-box");
searchButton.addEventListener("click", function (e) {
	search.classList.toggle("active");
	searchBox.focus();
	e.preventDefault();
});

const shoppingCart = document.querySelector(".shopping-cart");
const shoppingCartButton = document.querySelector("#shopping-cart");
shoppingCartButton.addEventListener("click", function (e) {
	shoppingCart.classList.toggle("active");
	e.preventDefault();
});

const products = document.querySelector("#products");
const modal = document.querySelector(".modal");
products.addEventListener("click", function (e) {
	e.preventDefault();
	if (e.target.classList.contains("detail-item-button")) {
		modal.style.display = "flex";
	}
});

document.querySelector(".modal .close-icon").onclick = (e) => {
	modal.style.display = "none";
	e.preventDefault();
};

window.onclick = (e) => {
	if (e.terget === modal) {
		modal.style.display = "none";
	}
};
