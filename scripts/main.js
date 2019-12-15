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

// when our page is fully loaded
$( document ).ready(function() {
    // first check if we already have localStorage
    var productCart = localStorage.getItem('productCart');
    
    // if there is no product cart, set an empty product cart
    if (productCart === null) {
        localStorage.setItem('productCart', '[]');
    } else {
        // otherwise, do nothing
    }
});


var productListPage = new Vue({
    el: '#product-list-page',
    data: {
        productList: productArray,
        cartCount: 0,
    },
    methods: {
        addToCart(product) {
            // increase the product count
            this.cartCount = this.cartCount + 1;
            
            // fist, get the data from our localstorage
            var productCart = localStorage.getItem('productCart');
            productCart = JSON.parse(productCart);
            
            // add the product to the variable
            productCart.push(product);

            // save the new prodcut list variable to localstorage
            localStorage.setItem('productCart', JSON.stringify(productCart));
        }
    }
});