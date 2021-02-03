// Array of products, each product is an object with different fieldset
// A set of ingredients should be added to products		 

var products = [
	{
		name: "brocoli",
		vegetarian: true,
		glutenFree: true,
		organic: true,
		price: 1.99
	},
	{
		name: "bread",
		vegetarian: true,
		glutenFree: false,
		organic: true,
		price: 2.35
	},
	{
		name: "salmon",
		vegetarian: false,
		glutenFree: true,
		organic: true,
		price: 12.99
	}, 
	{
		name: "apples",
		vegetarian: true,
		glutenFree: true,
		organic: true,
		price: 4.00
	}, 
	{
		name: "bananas",
		vegetarian: true,
		glutenFree: true,
		price: 6.00
	}, 
	{
		name: "carrots",
		vegetarian: true,
		glutenFree: true,
		organic: true,
		price: 2.50
	}, 
	{
		name: "chicken",
		vegetarian: false,
		glutenFree: true,
		organic: true,
		price: 13.00
	}, 
	{
		name: "croissant",
		vegetarian: false,
		glutenFree: false,
		organic: true,
		price: 12.00
	}, 
	{
		name: "lettuce",
		vegetarian: true,
		glutenFree: true,
		organic: true,
		price: 7.50
	}, 
	{
		name: "napkins",
		vegetarian: true,
		glutenFree: true,
		organic: false,
		price: 3.00
	}, 
	{
		name: "paper plates",
		vegetarian: true,
		glutenFree: true,
		organic: false,
		price: 4.00
	}, 
	{
		name: "steak",
		vegetarian: false,
		glutenFree: true,
		organic: true,
		price: 20.00
	}
];
	


// given restrictions provided, make a reduced list of products
// prices should be included in this list, as well as a sort based on price

function restrictListProducts(prods, restriction) {
	let product_names = [];
	for (let i=0; i<prods.length; i+=1) {
		if ((restriction == "Vegetarian") && (prods[i].vegetarian == true)){
			product_names.push(prods[i].name);
		}
		else if ((restriction == "GlutenFree") && (prods[i].glutenFree == true)){
			product_names.push(prods[i].name);
		}
		else if (restriction == "None"){
			product_names.push(prods[i].name);
		}
	}
	return product_names;
}

// Calculate the total price of items, with received parameter being a list of products
function getTotalPrice(chosenProducts) {
	totalPrice = 0;
	for (let i=0; i<products.length; i+=1) {
		if (chosenProducts.indexOf(products[i].name) > -1){
			totalPrice += products[i].price;
		}
	}
	return totalPrice;
}