var products = [
{product : "Beefaroni", price: 2.99},
{product : "Swaghetti and Memeballs", price: 12.99},
{product : "Beef Ravioli", price: 1.99},
{product : "Rigatoni", price: 0.99}
];
var cart = [];

function addToCart(i) {
	cart.push(products[i]);
}

function getTotal() {
    var total = 0;
    for (var i=0; i < cart.length ; i++) {
        total += cart[i].price;
    }
    console.log("Your total is: " + total);
}

function displayCart() {
	for (var i = 0; i < cart.length; i++) {
		console.log(cart[i]);
	}
	getTotal();
}