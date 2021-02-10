// This function is called when any of the tab is clicked
// It is adapted from https://www.w3schools.com/howto/howto_js_tabs.asp

function openInfo(evt, tabName) {

    // Get all elements with class="tabcontent" and hide them
    tabcontent = document.getElementsByClassName("tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
        tabcontent[i].style.display = "none";
    }

    // Get all elements with class="tablinks" and remove the class "active"
    tablinks = document.getElementsByClassName("tablinks");
    for (i = 0; i < tablinks.length; i++) {
        tablinks[i].className = tablinks[i].className.replace(" active", "");
    }

    // Show the current tab, and add an "active" class to the button that opened the tab
    document.getElementById(tabName).style.display = "block";
    evt.currentTarget.className += " active";

}

//setup for stickytab function
window.onscroll = function () { stickyTab() };
var webTab = document.getElementById("ourTabs");
var sticky = webTab.offsetTop;

// generate a checkbox list from a list of products
// it makes each product name as the label for the checkbos

function populateListProductChoices(slct1, slct2) {
    var s1 = document.getElementById(slct1);
    var s2 = document.getElementById(slct2);
    var a = null;
    var organicPreference = document.getElementsByName("organicPreference")
    for (var q of organicPreference) {
        a = q.checked ? q.value : a;
    }


    // s2 represents the <div> in the Products tab, which shows the product list, so we first set it empty
    s2.innerHTML = "";

    // obtain a reduced list of products based on restrictions
    var optionArray = restrictListProducts(products, s1.value, a);
    console.log(optionArray)
        //adding a button "add to cart" button on top if there is at least 
        //one product so the user doesn't have to always scroll all the way down to add to cart
    var addToCartTop = document.getElementById('addCartTop');
    if (optionArray.length > 0) {
        addToCartTop.classList.remove("display-none");
        addToCartTop.classList.add("display-block");
    } else {
        addToCartTop.classList.remove("display-block");
        addToCartTop.classList.add("display-none");
    }
    // for each item in the array, create a checkbox element, each containing information such as:
    // <input type="checkbox" name="product" value="Bread">
    // <label for="Bread">Bread/label><br>

    for (i = 0; i < optionArray.length; i++) {
        var div = document.createElement("div");
        div.classList.add("div-centered")

        var productName = optionArray[i];
        // create the checkbox and add in HTML DOM
        var checkbox = document.createElement("input");
        checkbox.type = "checkbox";
        checkbox.name = "product";
        checkbox.value = productName;
        div.appendChild(checkbox);

        // create a label for the checkbox, and also add in HTML DOM
        var label = document.createElement('label')
        label.htmlFor = productName;
        label.appendChild(document.createTextNode(productName));
        div.appendChild(label);
        //add image to listing
        var img = document.createElement('img');
        var temp = productName.split('\t$');
        img.src = 'Images/' + temp[0] + '.jpg';
        img.classList.add("img-size")
        div.appendChild(img)
        s2.appendChild(div);

        // create a breakline node and add in HTML DOM
        s2.appendChild(document.createElement("br"));

    }
}

// This function is called when the "Add selected items to cart" button in clicked
// The purpose is to build the HTML to be displayed (a Paragraph) 
// We build a paragraph to contain the list of selected items, and the total price

function selectedItems() {

    var ele = document.getElementsByName("product");
    var chosenProducts = [];

    var c = document.getElementById('displayCart');
    c.innerHTML = "";

    // build list of selected item
    var para = document.createElement("P");
    para.innerHTML = "You selected: ";
    para.appendChild(document.createElement("br"));
    for (i = 0; i < ele.length; i++) {
        if (ele[i].checked) {
            para.appendChild(document.createTextNode(ele[i].value));
            para.appendChild(document.createElement("br"));
            chosenProducts.push(ele[i].value);
        }
    }

    var cartTab = document.getElementById("cartTab");
    if (chosenProducts.length > 0) {
        cartTab.innerText = "Cart (" + chosenProducts.length + " items)"
    } else {
        cartTab.innerText = "Cart"
    }


    // add paragraph and total price
    c.appendChild(para);
    c.appendChild(document.createTextNode("Total price is $" + getTotalPrice(chosenProducts)));

}


function setFontSize() {
    var fontSizeNode = document.getElementById("fontSize");
    var body = document.getElementById('body');
    var fontSizeNumberNode = document.getElementById("fontSizeNumber");

    body.style.fontSize = fontSizeNode.value + "px";
    fontSizeNumberNode.innerHTML = fontSizeNode.value
}

function stickyTab() {                      //function to make tab sticky
    if (window.pageYOffset >= sticky) {
        webTab.classList.add("sticky");
    }
    else {
        webTab.classList.remove("sticky");
    }
}
