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

// generate a checkbox list from a list of products
// it makes each product name as the label for the checkbos

function populateListProductChoices(slct2) {
    var diet;
    for (var d of document.getElementsByName("dietSelect")) {
        diet = d.checked ? d : diet;
    }
    var s2 = document.getElementById(slct2);
    var organicPreference;
    for (var q of document.getElementsByName("organicPreference")) {
        organicPreference = q.checked ? q.value : organicPreference;
    }

    var categoryFilters = getCategoryFilters();
    // s2 represents the <div> in the Products tab, which shows the product list, so we first set it empty
    s2.innerHTML = "";

    // obtain a reduced list of products based on restrictions

    var optionArray = restrictListProducts(products, diet.value, organicPreference, categoryFilters);
    // console.log(op)



    // for each item in the array, create a checkbox element, each containing information such as:
    // <input type="checkbox" name="product" value="Bread">
    // <label for="Bread">Bread/label><br>

    var rowDiv = document.createElement("div");
    rowDiv.classList.add("div-centered")
    for (i = 0; i < optionArray.length; i++) {

        var div = document.createElement('div')

        var productName = optionArray[i];
        var photoDiv = document.createElement("div");

        //add image to listing
        var img = document.createElement('img');
        var temp = productName.split('\t$');
        img.src = 'Photos/' + temp[0] + '.jpg';
        img.classList.add("img-size");
        photoDiv.appendChild(img);

        var checkBoxDiv = document.createElement("div");
        // create the checkbox and add in HTML DOM
        var checkbox = document.createElement("input");
        checkbox.type = "checkbox";
        checkbox.name = "product";
        checkbox.value = productName;
        checkBoxDiv.appendChild(checkbox);

        // create a label for the checkbox, and also add in HTML DOM
        var label = document.createElement('label')
        label.htmlFor = productName;
        label.appendChild(document.createTextNode(productName));
        checkBoxDiv.appendChild(label);
        div.appendChild(photoDiv);
        div.appendChild(checkBoxDiv);

        rowDiv.appendChild(div);
        // s2.appendChild(document.createElement("br"));



        if ((i + 1) % 4 == 0) {
            s2.appendChild(document.createElement("br"))
            var rowDiv = document.createElement("div");
            rowDiv.classList.add("div-centered")
        }
        s2.appendChild(rowDiv)

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
        var item = (chosenProducts.length == 1) ? " item)" : " items)"
        cartTab.innerText = "Step 3: Cart (" + chosenProducts.length + item
    } else {
        cartTab.innerText = "Step 3: Cart"
    }


    // add paragraph and total price
    c.appendChild(para);
    c.appendChild(document.createTextNode("Total price is $" + getTotalPrice(chosenProducts)));

}


function setFontSize() {
    var fontSizeNode = document.getElementById("fontSize");
    var body = document.getElementById('body');
    var fontSizeNumberNode = document.getElementById("fontSizeNumber");
    var accordions = document.getElementsByClassName('accordion');

    body.style.fontSize = fontSizeNode.value + "px";
    fontSizeNumberNode.innerHTML = fontSizeNode.value;
    var i;

    for (i = 0; i < accordions.length; i++) {

        accordions[i].style.fontSize = fontSizeNode.value + "px"
    }
}

function stickyTab() { //function to make tab sticky
    if (window.pageYOffset >= sticky) {
        webTab.classList.add("sticky");
    } else {
        webTab.classList.remove("sticky");
    }
}
/*
Accordion style taking from : 
https://www.w3schools.com/howto/howto_js_accordion.asp
*/

var acc = document.getElementsByClassName("accordion");
var i;

for (i = 0; i < acc.length; i++) {
    acc[i].addEventListener("click", function() {
        /* Toggle between adding and removing the "active" class,
        to highlight the button that controls the panel */
        this.classList.toggle("active");

        /* Toggle between hiding and showing the active panel */
        var panel = this.nextElementSibling;
        if (panel.style.display === "block") {
            panel.style.display = "none";
        } else {
            panel.style.display = "block";
        }
    });
}


function getCategoryFilters() {
    var filters = document.getElementsByClassName("filter");
    var activeFilters = []
    for (var filter of filters) {
        if (filter.checked) {
            activeFilters.push(filter.value)
        }
    }
    return activeFilters
}

//code for Slideshow provided by:https://www.w3schools.com/howto/howto_js_slideshow.asp
var slideIndex = 1;
showSlides(slideIndex);

// Next/previous controls
function plusSlides(n) {
    showSlides(slideIndex += n);
}

// Thumbnail image controls
function currentSlide(n) {
    showSlides(slideIndex = n);
}

function showSlides(n) {
    var i;
    var slides = document.getElementsByClassName("mySlides");
    var dots = document.getElementsByClassName("dot");
    if (n > slides.length) { slideIndex = 1 }
    if (n < 1) { slideIndex = slides.length }
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }
    slides[slideIndex - 1].style.display = "block";
    dots[slideIndex - 1].className += " active";
}