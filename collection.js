// Search Functionality

var productContainer = document.getElementById("product");
var search = document.getElementById("search");
var productList = productContainer.querySelectorAll(".product-box");

search.addEventListener("keyup", function () {

    var enteredValue = search.value.toUpperCase();

    productList.forEach(function (product) {

        var productName = product.querySelector("p").textContent.toUpperCase();

        if (productName.indexOf(enteredValue) < 0) {
            product.style.display = "none";
        } else {
            product.style.display = "block";
        }

    });

});