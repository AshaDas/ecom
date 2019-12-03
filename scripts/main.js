var productArray = [
    {
        name: 'iPhone X',
        price: 120000,
        photo: 'iphonex.jpg'
    },
    {
        name: 'Pixel 4',
        price: 80000,
        photo: 'pixel4.jpg'
    },
    {
        name: 'Samsung Galxy S10',
        price: 110000,
        photo: 'galaxys10.jpg'
    },
];

$(document).ready(function(){
    showProductList();
});

function showProductList() {
    var productHTML = '';

    for (var i = 0; i < 3; i++) {
        productHTML = productHTML + '<div class="four columns">';
        productHTML = productHTML + '<h5>' + productArray[i].name + '</h5>';
        productHTML = productHTML + '<img src="images/' + productArray[i].photo + '" class="product-image" />';
        productHTML = productHTML + '<h6>' + productArray[i].price + ' tk</h6>';
        productHTML = productHTML + '<button>Add To Cart</button>'
        productHTML = productHTML + '</div>';
    }

    $('#product-list').html(productHTML);
}