// Array of products, each product is an object with different fieldset
// A set of ingredients should be added to products		 

var products = [{
        name: "Broccoli",
        vegetarian: true,
        glutenFree: true,
        organic: true,
        price: 1.99,
        category: [],
    },
    {
        name: "Bread",
        vegetarian: true,
        glutenFree: false,
        organic: true,
        price: 2.35,
        category: [],
    },
    {
        name: "Salmon",
        vegetarian: false,
        glutenFree: true,
        organic: true,
        price: 12.99,
        category: [],
    },
    {
        name: "Apples",
        vegetarian: true,
        glutenFree: true,
        organic: true,
        price: 4.00,
        category: [],
    },
    {
        name: "Bananas",
        vegetarian: true,
        glutenFree: true,
        organic: true,
        price: 6.00,
        category: [],
    },
    {
        name: "Carrots",
        vegetarian: true,
        glutenFree: true,
        organic: true,
        price: 2.50,
        category: [],
    },
    {
        name: "Chicken",
        vegetarian: false,
        glutenFree: true,
        organic: true,
        price: 13.00,
        category: [],
    },
    {
        name: "Croissant",
        vegetarian: false,
        glutenFree: false,
        organic: true,
        price: 12.00,
        category: [],
    },
    {
        name: "Lettuce",
        vegetarian: true,
        glutenFree: true,
        organic: true,
        price: 7.50,
        category: [],
    },
    {
        name: "Napkins",
        vegetarian: true,
        glutenFree: true,
        organic: false,
        price: 3.00,
        category: [],
    },
    {
        name: "Paper plates",
        vegetarian: true,
        glutenFree: true,
        organic: false,
        price: 4.00,
        category: [],
    },
    {
        name: "Steak",
        vegetarian: false,
        glutenFree: true,
        organic: true,
        price: 20.00,
        category: [],
    }
];



// given restrictions provided, make a reduced list of products
// prices should be included in this list, as well as a sort based on price

function restrictListProducts(prods, restriction, organicPreference) {

    //sort list 
    prods.sort(function(a, b) {
        return parseFloat(a.price) - parseFloat(b.price);
    });

    //Organic preference
    //Still shows item even if they do not correspond to the preference since it's not a restriction
    if (organicPreference == 'Organic') {
        prods.sort((a, b) => b.organic - a.organic);
    } else if (organicPreference == 'NonOrganic') {
        prods.sort((a, b) => a.organic - b.organic);
    } // If no preference, nothing to do
    let product_names = [];

    count = 0;
    for (let i = 0; i < prods.length; i += 1) {
        if ((restriction == "Vegetarian") && (prods[i].vegetarian == true)) {
            product_names.push(prods[i].name + "\t$" + prods[i].price);
        } else if ((restriction == "GlutenFree") && (prods[i].glutenFree == true)) {
            product_names.push(prods[i].name + "\t$" + prods[i].price);
        } else if ((restriction == "VegetarianAndGlutenFree") && (prods[i].glutenFree == true) && (prods[i].vegetarian == true)) {
            product_names.push(prods[i].name + "\t$" + prods[i].price);
        } else if (restriction == "None") {
            product_names.push(prods[i].name + "\t$" + prods[i].price);
        }
    }
    return product_names;
}

// Calculate the total price of items, with received parameter being a list of products
function getTotalPrice(chosenProducts) {
    totalPrice = 0;
    for (let i = 0; i < products.length; i += 1) {
        if (chosenProducts.indexOf(products[i].name + "\t$" + products[i].price) > -1) {
            totalPrice += products[i].price;
        }
    }
    return totalPrice;
}